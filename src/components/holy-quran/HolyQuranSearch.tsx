"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { searchHitHref, searchQuranIndex } from "@/data/holy-quran";

export default function HolyQuranSearch() {
  const [query, setQuery] = useState("");
  const hits = useMemo(() => searchQuranIndex(query), [query]);

  return (
    <div className="hq-search">
      <label htmlFor="hq-search-input" className="sr-only">
        Search Surah, Para, or ayah
      </label>
      <input
        id="hq-search-input"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Yaseen, Para 30, 2:255…"
        autoComplete="off"
      />
      {query.trim().length >= 2 && (
        <div className="hq-search-hits" role="listbox" aria-label="Search results">
          {hits.length === 0 ? (
            <p style={{ padding: "12px 14px", margin: 0 }}>No matching Surah or Para.</p>
          ) : (
            hits.map((hit) => (
              <Link key={`${hit.kind}-${hit.title}`} href={searchHitHref(hit)}>
                <strong>{hit.title}</strong>
                <span>{hit.subtitle}</span>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
