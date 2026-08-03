"use client";

import { useEffect } from "react";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";

function DistinctivesEmbed() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const target = document.getElementById("subsplash-embed-tr8js6r");
      if (!target || target.dataset.loaded) return;
      target.dataset.loaded = "1";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.onload = function () {
        (window as any).subsplashEmbed(
          "+495b/lb/li/+ckg36mq?embed&1684354244291",
          "https://subsplash.com/",
          "subsplash-embed-tr8js6r"
        );
      };
      script.src =
        "https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js";
      target.parentElement!.insertBefore(script, target);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ minHeight: "600px", width: "100%" }}>
      <div id="subsplash-embed-tr8js6r" />
    </div>
  );
}

export default function DistinctivesPage() {
  return (
    <div>
      <section style={{ background: "var(--ink-900)", padding: "64px 0 0" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Teaching</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 12px",
              lineHeight: 0.98,
            }}
          >
            Distinctives
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "50ch", lineHeight: 1.6, marginBottom: "32px" }}>
            Teaching God&apos;s Design For The Local Church
          </p>
        </div>
        <AboutSubNav />
      </section>

      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <DistinctivesEmbed />
        </div>
      </section>
    </div>
  );
}
