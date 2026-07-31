"use client";

import { useEffect, useState } from "react";
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

type TabId = "recent" | "by-book";

const TABS: { id: TabId; label: string }[] = [
  { id: "recent",  label: "Most Recent"  },
  { id: "by-book", label: "By Book"      },
];

function useSubsplash(embedId: string, embedArgs: string, active: boolean) {
  useEffect(() => {
    if (!active) return;
    // small delay so the container is visible before Subsplash measures it
    const timer = setTimeout(() => {
      const target = document.getElementById(embedId);
      if (!target) return;
      // don't double-load
      if (target.dataset.loaded) return;
      target.dataset.loaded = "1";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.onload = function () {
        (window as any).subsplashEmbed(embedArgs, "https://subsplash.com/", embedId);
      };
      script.src =
        "https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js";
      target.parentElement!.insertBefore(script, target);
    }, 50);
    return () => clearTimeout(timer);
  }, [active, embedId, embedArgs]);
}

export default function SermonsPage() {
  const [active, setActive] = useState<TabId>("recent");

  useSubsplash(
    "subsplash-embed-5nwrbjy",
    "+495b/lb/li/+vx6yh4b?embed&branding&1785455918290",
    active === "recent"
  );
  useSubsplash(
    "subsplash-embed-2wgzx8q",
    "+495b/lb/li/+ydr7897?embed&branding&1785454398796",
    active === "by-book"
  );

  return (
    <div>
      <PageHeader />

      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">

          {/* Tab bar */}
          <div
            style={{
              display: "flex",
              gap: "4px",
              borderBottom: "2px solid var(--border-subtle)",
              marginBottom: "40px",
            }}
          >
            {TABS.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  style={{
                    fontFamily: "var(--font-semicond)",
                    fontWeight: 700,
                    fontSize: "15px",
                    letterSpacing: ".04em",
                    textTransform: "uppercase",
                    padding: "12px 24px",
                    border: "none",
                    borderBottom: isActive
                      ? "2px solid var(--gold-400)"
                      : "2px solid transparent",
                    marginBottom: "-2px",
                    background: "transparent",
                    color: isActive ? "var(--gold-700)" : "var(--text-muted)",
                    cursor: "pointer",
                    transition: "color 0.15s ease, border-color 0.15s ease",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Embeds — both in DOM, only active one visible */}
          <div style={{ display: active === "recent" ? "block" : "none" }}>
            <div id="subsplash-embed-5nwrbjy" />
          </div>
          <div style={{ display: active === "by-book" ? "block" : "none" }}>
            <div id="subsplash-embed-2wgzx8q" />
          </div>

        </div>
      </section>
    </div>
  );
}
