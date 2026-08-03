"use client";

import { useEffect } from "react";
import { Eyebrow } from "@/components/core/Eyebrow";

function CalendarEmbed() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const target = document.getElementById("subsplash-embed-qm42qwg");
      if (!target || target.dataset.loaded) return;
      target.dataset.loaded = "1";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.onload = function () {
        (window as any).subsplashEmbed(
          "+495b/lb/ca/+qm42qwg?embed",
          "https://subsplash.com/",
          "subsplash-embed-qm42qwg"
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
      <div id="subsplash-embed-qm42qwg" />
    </div>
  );
}

export default function CalendarPage() {
  return (
    <div>
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Events</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 12px",
              lineHeight: 0.98,
            }}
          >
            Calendar
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch", lineHeight: 1.6 }}>
            Upcoming events at Barabbas Road Church.
          </p>
        </div>
      </section>

      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <CalendarEmbed />
        </div>
      </section>
    </div>
  );
}
