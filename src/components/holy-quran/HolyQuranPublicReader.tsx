"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Eye, EyeOff, Pause, Play } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { PARAS, paraPath, recitationUrl, surahName, type QuranAyah } from "@/data/holy-quran";

type Layout = "line" | "page";

interface HolyQuranPublicReaderProps {
  ayahs: QuranAyah[];
  currentPara?: number;
}

const PREFS_KEY = "noorpath-public-hq-prefs-v1";

export default function HolyQuranPublicReader({ ayahs, currentPara }: HolyQuranPublicReaderProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const queueRef = useRef<QuranAyah[]>([]);
  const [layout, setLayout] = useState<Layout>("line");
  const [hidden, setHidden] = useState(false);
  const [playingGlobal, setPlayingGlobal] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(PREFS_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { layout?: string; hidden?: boolean };
      if (parsed.layout === "page" || parsed.layout === "line") setLayout(parsed.layout);
      if (parsed.hidden === true) setHidden(true);
    } catch {
      /* keep defaults */
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(PREFS_KEY, JSON.stringify({ layout, hidden }));
  }, [layout, hidden]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (playingGlobal == null) return;
    const ayah = ayahs.find((item) => item.global === playingGlobal);
    if (!ayah) return;
    document.getElementById(`ayah-${ayah.surah}-${ayah.ayah}`)?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }, [ayahs, playingGlobal, layout]);

  const groups = useMemo(() => {
    const map = new Map<number, QuranAyah[]>();
    for (const ayah of ayahs) {
      const list = map.get(ayah.surah) || [];
      list.push(ayah);
      map.set(ayah.surah, list);
    }
    return Array.from(map.entries());
  }, [ayahs]);

  function stop() {
    audioRef.current?.pause();
    queueRef.current = [];
    setPlayingGlobal(null);
  }

  function playFrom(start: QuranAyah) {
    if (playingGlobal === start.global && queueRef.current.length <= 1) {
      stop();
      return;
    }
    const from = ayahs.findIndex((row) => row.global === start.global);
    queueRef.current = from >= 0 ? ayahs.slice(from) : [start];
    playNext();
  }

  function playNext() {
    const next = queueRef.current[0];
    if (!next) {
      setPlayingGlobal(null);
      return;
    }
    if (!audioRef.current) audioRef.current = new Audio();
    audioRef.current.src = recitationUrl(next.global);
    setPlayingGlobal(next.global);
    void audioRef.current.play().catch(stop);
    audioRef.current.onended = () => {
      queueRef.current = queueRef.current.slice(1);
      playNext();
    };
    audioRef.current.onerror = () => {
      queueRef.current = queueRef.current.slice(1);
      playNext();
    };
  }

  const playing = playingGlobal !== null;

  const listenLabel = playing ? (
    <><Pause size={15} aria-hidden="true" /> Stop</>
  ) : (
    <><Play size={15} aria-hidden="true" /> Listen</>
  );

  return (
    <div className={`hq-live-reader${hidden ? " is-compact" : ""}`}>
      {hidden ? (
        <aside className="hq-side-dock" aria-label="Reader controls">
          <button type="button" className="hq-switch-btn" onClick={() => setHidden(false)}>
            <Eye size={15} aria-hidden="true" /> Show
          </button>
          <button
            type="button"
            className="btn-primary-np"
            onClick={() => (playing ? stop() : ayahs[0] && playFrom(ayahs[0]))}
          >
            {listenLabel}
          </button>
        </aside>
      ) : (
        <div className="hq-live-tools">
          <div className="hq-layout-switch" role="tablist" aria-label="Reading format">
            <button type="button" role="tab" aria-selected={layout === "line"} className={layout === "line" ? "is-on" : ""} onClick={() => setLayout("line")}>
              Line by line
            </button>
            <button type="button" role="tab" aria-selected={layout === "page"} className={layout === "page" ? "is-on" : ""} onClick={() => setLayout("page")}>
              Full page
            </button>
          </div>
          <button
            type="button"
            className="btn-primary-np"
            onClick={() => (playing ? stop() : ayahs[0] && playFrom(ayahs[0]))}
          >
            {listenLabel}
          </button>
          <button type="button" className="hq-switch-btn" onClick={() => setHidden(true)}>
            <EyeOff size={15} aria-hidden="true" /> Hide
          </button>
        </div>
      )}

      <div className="hq-live-body">
      {!hidden && (
        <>
          <nav className="hq-para-strip" aria-label="All 30 Paras">
            {PARAS.map((para) => (
              <Link
                key={para.number}
                href={paraPath(para.number)}
                className={para.number === currentPara ? "is-on" : ""}
              >
                {para.number}
              </Link>
            ))}
          </nav>
          <p className="hq-listen-hint">Tap an ayah to listen. The playing ayah stays highlighted.</p>
        </>
      )}

      {layout === "line" ? (
        <div className="hq-ayahs">
          {groups.map(([surah, rows]) => (
            <section key={surah}>
              {groups.length > 1 && (
                <p className="hq-surah-label" dir="ltr">{surah}. {surahName(surah)}</p>
              )}
              {rows.map((ayah) => (
                <article
                  key={`${ayah.surah}:${ayah.ayah}`}
                  id={`ayah-${ayah.surah}-${ayah.ayah}`}
                  className={`hq-ayah ${playingGlobal === ayah.global ? "is-current" : ""}`}
                  onClick={() => playFrom(ayah)}
                >
                  <span className="hq-ayah-num" aria-label={`Ayah ${ayah.ayah}`}>{ayah.ayah}</span>
                  <p className="hq-ayah-text" lang="ar" dir="rtl">{ayah.text}</p>
                </article>
              ))}
            </section>
          ))}
        </div>
      ) : (
        <div className="hq-ayahs hq-mushaf-wrap">
          {groups.map(([surah, rows]) => (
            <section key={surah}>
              {groups.length > 1 && (
                <p className="hq-surah-label" dir="ltr">{surah}. {surahName(surah)}</p>
              )}
              <p className="hq-mushaf" lang="ar" dir="rtl">
                {rows.map((ayah) => (
                  <span
                    key={`${ayah.surah}:${ayah.ayah}`}
                    id={`ayah-${ayah.surah}-${ayah.ayah}`}
                    className={`hq-mushaf-ayah ${playingGlobal === ayah.global ? "is-playing" : ""}`}
                    onClick={() => playFrom(ayah)}
                  >
                    {ayah.text}
                    <span className="hq-mushaf-num" dir="ltr">{ayah.ayah}</span>
                  </span>
                ))}
              </p>
            </section>
          ))}
        </div>
      )}

      {currentPara ? (
        <div className="hq-nav-row">
          {currentPara > 1 ? (
            <Link href={paraPath(currentPara - 1)} className="btn-outline-np">
              <ChevronLeft size={16} aria-hidden="true" /> Para {currentPara - 1}
            </Link>
          ) : <span />}
          {currentPara < 30 ? (
            <Link href={paraPath(currentPara + 1)} className="btn-outline-np">
              Para {currentPara + 1} <ChevronRight size={16} aria-hidden="true" />
            </Link>
          ) : <span />}
        </div>
      ) : null}
      </div>
    </div>
  );
}
