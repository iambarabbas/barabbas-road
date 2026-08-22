"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";

function PageHeader() {
  return (
    <section style={{ background: "var(--ink-900)", color: "var(--white)", padding: "64px 0 56px" }}>
      <div className="brc-container">
        <Eyebrow color="var(--gold-400)" withRule>Hear the Truth</Eyebrow>
        <h1
          style={{
            color: "var(--white)",
            fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
            margin: "16px 0 12px",
            lineHeight: 0.98,
          }}
        >
          Sermons
        </h1>
        <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch" }}>
          Verse-by-verse teaching through the whole counsel of God.
        </p>
      </div>
    </section>
  );
}

function SermonTabs({ active }: { active: "recent" | "by-book" }) {
  const tabStyle = (id: string) => ({
    fontFamily: "var(--font-semicond)",
    fontWeight: 700 as const,
    fontSize: "15px",
    letterSpacing: ".04em",
    textTransform: "uppercase" as const,
    padding: "12px 24px",
    display: "inline-block",
    borderBottom: active === id ? "2px solid var(--gold-400)" : "2px solid transparent",
    marginBottom: "-2px",
    color: active === id ? "var(--gold-700)" : "var(--text-muted)",
    textDecoration: "none",
    transition: "color 0.15s ease, border-color 0.15s ease",
  });

  return (
    <div style={{ display: "flex", gap: "4px", borderBottom: "2px solid var(--border-subtle)", marginBottom: "40px" }}>
      <Link href="/sermons" style={tabStyle("recent")}>Most Recent</Link>
      <Link href="/sermons/by-book" style={tabStyle("by-book")}>By Book</Link>
    </div>
  );
}

export default function SermonsByBookPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const target = document.getElementById("subsplash-embed-5nwrbjy");
      if (!target) return;
      const script = document.createElement("script");
      script.src = "https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js";
      script.onload = () => {
        (window as any).subsplashEmbed(
          "+495b/lb/li/+ydr7897?embed&branding&1785454398796",
          "https://subsplash.com/",
          "subsplash-embed-5nwrbjy"
        );
      };
      target.parentElement!.insertBefore(script, target);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <PageHeader />
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <SermonTabs active="by-book" />
          <div id="subsplash-embed-5nwrbjy" />
        </div>
      </section>
    </div>
  );
}
