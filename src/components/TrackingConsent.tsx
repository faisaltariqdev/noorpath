"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";
import FacebookPixel from "@/components/FacebookPixel";

type ConsentChoice = "analytics" | "essential";

const STORAGE_KEY = "noorpath-consent-v1";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-CTEG1YPKCT";
const GOOGLE_ADS_ID = "AW-18212142815";
const CONSENT_EVENT = "noorpath-consent-change";

function getConsentSnapshot(): ConsentChoice | null {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "analytics" || saved === "essential" ? saved : null;
}

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CONSENT_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CONSENT_EVENT, onStoreChange);
  };
}

export function hasAnalyticsConsent() {
  return (
    typeof window !== "undefined" &&
    window.localStorage.getItem(STORAGE_KEY) === "analytics"
  );
}

export default function TrackingConsent() {
  const choice = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    () => null,
  );
  const [settingsOpen, setSettingsOpen] = useState(false);

  function saveChoice(nextChoice: ConsentChoice) {
    window.localStorage.setItem(STORAGE_KEY, nextChoice);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setSettingsOpen(false);
  }

  return (
    <>
      {choice === "analytics" && (
        <>
          <FacebookPixel />
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID || GOOGLE_ADS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="noorpath-google-tags" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname});gtag('config','${GOOGLE_ADS_ID}');`}
          </Script>
        </>
      )}

      {choice === null || settingsOpen ? (
        <div
          role="dialog"
          aria-label="Cookie preferences"
          aria-live="polite"
          style={{
            position: "fixed",
            left: 16,
            right: 16,
            bottom: 16,
            zIndex: 11000,
            maxWidth: 680,
            margin: "0 auto",
            background: "#fff",
            color: "var(--charcoal)",
            border: "1px solid var(--border)",
            borderRadius: 14,
            padding: "18px 20px",
            boxShadow: "0 10px 35px rgba(0,0,0,.18)",
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 6 }}>
            Your privacy choices
          </div>
          <p
            style={{
              color: "var(--muted)",
              fontSize: ".84rem",
              lineHeight: 1.6,
              margin: "0 0 14px",
            }}
          >
            NoorPath uses essential storage for your preferences. With your
            permission, we also use Google and Meta tools to understand visits
            and measure enquiries. Read our{" "}
            <Link href="/privacy-policy" style={{ color: "var(--emerald)" }}>
              Privacy Policy
            </Link>
            .
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => saveChoice("analytics")}
              style={{
                background: "var(--emerald)",
                color: "#fff",
                border: 0,
                borderRadius: 9,
                padding: "10px 16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Accept analytics
            </button>
            <button
              type="button"
              onClick={() => saveChoice("essential")}
              style={{
                background: "#fff",
                color: "var(--charcoal)",
                border: "1px solid var(--border)",
                borderRadius: 9,
                padding: "10px 16px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Essential only
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          style={{
            position: "fixed",
            left: 12,
            bottom: 12,
            zIndex: 1000,
            background: "#fff",
            color: "var(--muted)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "6px 9px",
            fontSize: ".7rem",
            cursor: "pointer",
          }}
        >
          Cookie settings
        </button>
      )}
    </>
  );
}
