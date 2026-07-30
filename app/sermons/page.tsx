"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { Card } from "@/components/core/Card";
import { Icon } from "@/components/Icon";

// export const metadata: Metadata = { title: "Sermons" }; // can't use with "use client" — set in layout

const SERIES = ["All Messages", "Romans", "The Sermon on the Mount", "Psalms", "Advent"];

const SERMONS = [
  { t: "The Power of the Gospel",       ref: "Romans 1:16–17",      date: "June 8, 2026",  series: "Romans",                  img: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=900&q=80",  len: "44 min", featured: true },
  { t: "No Condemnation",               ref: "Romans 8:1–11",        date: "June 1, 2026",  series: "Romans",                  img: "https://images.unsplash.com/photo-1490127252417-7c393f993ee4?w=900&q=80",  len: "41 min" },
  { t: "Salt and Light",                ref: "Matthew 5:13–16",      date: "May 25, 2026",  series: "The Sermon on the Mount", img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=900&q=80",  len: "38 min" },
  { t: "The Lord Is My Shepherd",       ref: "Psalm 23",             date: "May 18, 2026",  series: "Psalms",                  img: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=900&q=80",  len: "46 min" },
  { t: "Blessed Are the Poor in Spirit",ref: "Matthew 5:1–6",        date: "May 11, 2026",  series: "The Sermon on the Mount", img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=900&q=80",  len: "40 min" },
  { t: "Justified by Faith",            ref: "Romans 5:1–11",        date: "May 4, 2026",   series: "Romans",                  img: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=900&q=80",  len: "43 min" },
  { t: "A Light Has Dawned",            ref: "Isaiah 9:1–7",         date: "Dec 22, 2025",  series: "Advent",                  img: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=900&q=80",  len: "35 min" },
];

function PageHeader() {
  return (
    <section style={{ background: "var(--ink-900)", color: "var(--white)", padding: "64px 0 56px" }}>
      <div className="brc-container">
        <Eyebrow color="var(--gold-400)" withRule>Hear the Truth</Eyebrow>
        <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 12px", lineHeight: 0.98 }}>
          Sermons
        </h1>
        <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch" }}>
          Verse-by-verse teaching through the whole counsel of God. Catch up on the latest message or explore a series.
        </p>
      </div>
    </section>
  );
}

function FeaturedPlayer({ s }: { s: typeof SERMONS[0] }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div
      className="brc-featured"
      style={{
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        background: "var(--surface-card)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: "var(--shadow-card)",
        border: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--ink-800)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={s.img} alt={s.t} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: playing ? 0.4 : 1 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,19,17,0) 50%, rgba(20,19,17,.5) 100%)" }} />
        <button
          onClick={() => setPlaying((v) => !v)}
          aria-label="Play"
          style={{
            position: "absolute", inset: 0, margin: "auto",
            width: "84px", height: "84px", borderRadius: "50%",
            border: "none", background: "var(--gold-400)", color: "var(--ink-900)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: "var(--shadow-md)",
          }}
        >
          <Icon name="play" size={32} fill="currentColor" />
        </button>
        {playing && (
          <div style={{ position: "absolute", bottom: "16px", left: "16px", color: "var(--white)", fontSize: "13px", fontFamily: "var(--font-semicond)", letterSpacing: ".05em" }}>
            ▶ NOW PLAYING · 00:00 / {s.len}
          </div>
        )}
      </div>
      <div style={{ padding: "36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Badge tone="gold">{s.series} · Latest</Badge>
        <h2 style={{ fontSize: "34px", margin: "14px 0 8px", lineHeight: 1.05 }}>{s.t}</h2>
        <div style={{ color: "var(--text-accent)", fontWeight: 600, fontSize: "16px", marginBottom: "4px" }}>{s.ref}</div>
        <div style={{ color: "var(--text-muted)", fontSize: "15px", marginBottom: "24px" }}>Pastor Matt Smith · {s.date} · {s.len}</div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="primary" iconLeft={<Icon name="play" size={14} fill="currentColor" />}>Watch</Button>
          <Button variant="outline" iconLeft={<Icon name="headphones" size={15} />}>Listen</Button>
        </div>
      </div>
    </div>
  );
}

export default function SermonsPage() {
  const [active, setActive] = useState("All Messages");
  const featured = SERMONS.find((s) => s.featured)!;
  const rest = SERMONS.filter((s) => !s.featured && (active === "All Messages" || s.series === active));

  return (
    <div>
      <PageHeader />
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <FeaturedPlayer s={featured} />

          {/* Series filter */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", margin: "56px 0 28px" }}>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {SERIES.map((sr) => (
                <button
                  key={sr}
                  onClick={() => setActive(sr)}
                  style={{
                    fontFamily: "var(--font-semicond)", fontWeight: 600, fontSize: "13.5px",
                    letterSpacing: ".05em", textTransform: "uppercase",
                    padding: "9px 16px", borderRadius: "var(--radius-pill)", cursor: "pointer",
                    border: "1px solid " + (active === sr ? "var(--gold-600)" : "var(--border-default)"),
                    background: active === sr ? "var(--gold-400)" : "transparent",
                    color: active === sr ? "var(--ink-900)" : "var(--text-body)",
                    transition: "all var(--dur-fast) var(--ease-out)",
                  }}
                >
                  {sr}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="brc-sermon-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {rest.map((s) => (
              <Card key={s.t} media={s.img} mediaHeight={170} interactive>
                <Badge tone="outline">{s.series}</Badge>
                <h3 style={{ fontSize: "22px", margin: "2px 0 2px", lineHeight: 1.1 }}>{s.t}</h3>
                <div style={{ color: "var(--text-accent)", fontWeight: 600, fontSize: "14px" }}>{s.ref}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "13.5px", marginTop: "auto", paddingTop: "10px", display: "flex", justifyContent: "space-between" }}>
                  <span>{s.date}</span><span>{s.len}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
