"use client";

import { Eyebrow } from "@/components/core/Eyebrow";
import BrcCalendar from "@/components/BrcCalendar";

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
          <BrcCalendar />
        </div>
      </section>
    </div>
  );
}
