"use client";

import { useState } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Icon } from "@/components/Icon";

const PILLARS = [
  {
    n: "01", icon: "headphones", t: "Sermons",    verb: "Hear",   rest: "the Truth.",
    d: "Verse-by-verse teaching through God's Word, every Sunday and on demand.",
    cta: "Watch Now", href: "/sermons",
  },
  {
    n: "02", icon: "users",      t: "Life Groups", verb: "Live",   rest: "the Truth.",
    d: "Do life together in homes across San Diego — study, pray, and grow.",
    cta: "Find a Group", href: "/life-groups",
  },
  {
    n: "03", icon: "bookOpen",   t: "Classes",     verb: "Defend", rest: "the Truth.",
    d: "Equipping classes to know what you believe and why it matters.",
    cta: "View Schedule", href: "/classes",
  },
];

function PillarCard({ p }: { p: typeof PILLARS[number] }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={p.href}
      style={{ textDecoration: "none" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          paddingTop: "26px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          borderTop: "3px solid " + (hover ? "var(--gold-400)" : "var(--ink-200)"),
          transition: "border-color var(--dur-base) var(--ease-out)",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "18px" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "22px",
              letterSpacing: ".05em",
              color: hover ? "var(--gold-600)" : "var(--ink-300)",
              transition: "color var(--dur-base) var(--ease-out)",
            }}
          >
            {p.n}
          </span>
          <span style={{ color: hover ? "var(--gold-600)" : "var(--ink-400)", transition: "color var(--dur-base) var(--ease-out)" }}>
            <Icon name={p.icon} size={26} strokeWidth={1.8} />
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(2rem, 1.4rem + 1.6vw, 2.85rem)",
            lineHeight: 0.98,
            margin: "0 0 6px",
          }}
        >
          <span style={{ color: "var(--gold-500)" }}>{p.verb}</span>{" "}
          <span style={{ color: "var(--text-strong)" }}>{p.rest}</span>
        </h2>
        <div
          style={{
            fontFamily: "var(--font-semicond)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: ".1em",
            fontSize: "13px",
            color: "var(--text-accent)",
            marginBottom: "14px",
          }}
        >
          {p.t}
        </div>
        <p style={{ color: "var(--text-muted)", margin: "0 0 22px", maxWidth: "32ch" }}>{p.d}</p>
        <span
          style={{
            marginTop: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: "9px",
            fontFamily: "var(--font-semicond)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: ".06em",
            fontSize: "14px",
            color: "var(--text-strong)",
          }}
        >
          {p.cta}
          <span
            style={{
              display: "inline-flex",
              transform: hover ? "translateX(4px)" : "none",
              color: "var(--gold-600)",
              transition: "transform var(--dur-base) var(--ease-out)",
            }}
          >
            <Icon name="arrowRight" size={17} />
          </span>
        </span>
      </div>
    </Link>
  );
}

export function Pillars() {
  return (
    <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
      <div className="brc-container">
        <div style={{ maxWidth: "640px", marginBottom: "52px" }}>
          <Eyebrow color="var(--gold-700)" withRule>Where To Begin</Eyebrow>
          <h2 style={{ fontSize: "clamp(2.2rem, 1.4rem + 2.4vw, 3.2rem)", margin: "16px 0 0", lineHeight: 1.0 }}>
            Three Truths. One Family.
          </h2>
        </div>
        <div className="brc-pillars" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
          {PILLARS.map((p) => (
            <PillarCard key={p.t} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
