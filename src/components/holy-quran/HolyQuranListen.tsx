"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { recitationUrl, type QuranAyah } from "@/data/holy-quran";

export default function HolyQuranListen({ ayahs }: { ayahs: QuranAyah[] }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const indexRef = useRef(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  function stop() {
    audioRef.current?.pause();
    audioRef.current = null;
    setPlaying(false);
  }

  function playFrom(index: number) {
    const ayah = ayahs[index];
    if (!ayah) {
      stop();
      return;
    }
    indexRef.current = index;
    const audio = new Audio(recitationUrl(ayah.global));
    audioRef.current = audio;
    audio.onended = () => playFrom(index + 1);
    audio.onerror = () => playFrom(index + 1);
    void audio.play().then(() => setPlaying(true)).catch(stop);
  }

  return (
    <button
      type="button"
      className="btn-primary-np"
      onClick={() => (playing ? stop() : playFrom(0))}
      aria-pressed={playing}
    >
      {playing ? <><Pause size={16} aria-hidden="true" /> Stop</> : <><Play size={16} aria-hidden="true" /> Listen</>}
    </button>
  );
}
