"use client";

import { useEffect } from "react";
import { Eyebrow } from "@/components/core/Eyebrow";

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

function SubsplashEmbed() {
  useEffect(() => {
    const target = document.getElementById("subsplash-embed-2wgzx8q");
    if (!target) return;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = function () {
      (window as any).subsplashEmbed(
        "+495b/lb/li/+ydr7897?embed&branding&1785454398796",
        "https://subsplash.com/",
        "subsplash-embed-2wgzx8q"
      );
    };
    script.src =
      "https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js";
    target.parentElement!.insertBefore(script, target);
  }, []);

  return (
    <div style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
      <div className="brc-container">
        <div id="subsplash-embed-2wgzx8q" />
      </div>
    </div>
  );
}

export default function SermonsPage() {
  return (
    <div>
      <PageHeader />
      <SubsplashEmbed />
    </div>
  );
}
