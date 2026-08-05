"use client";

import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";

// ── Subsplash player ────────────────────────────────────────────────────────

function LivestreamEmbed() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingTop: "56.25%",
      }}
    >
      <iframe
        src="https://subsplash.com/u/barabbasroadchurch/media/embed/d/*next-live"
        frameBorder={0}
        allowFullScreen
        allow="clipboard-read; clipboard-write"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

// ── Schedule + info ─────────────────────────────────────────────────────────

const SCHEDULE = [
  {
    icon: "calendar" as const,
    label: "Sunday Service",
    time: "Sundays · 10:00 AM",
    note: "7340 Miramar Rd, San Diego, CA 92126",
  },
  {
    icon: "book" as const,
    label: "Theologetics Class",
    time: "Tuesdays · 6:30 PM",
    note: "Join us for in-depth study and equipping",
  },
];

function ScheduleCard({
  icon,
  label,
  time,
  note,
}: (typeof SCHEDULE)[0]) {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "flex-start",
        padding: "20px",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-subtle)",
        background: "var(--surface-card)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "var(--gold-400)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--ink-900)",
        }}
      >
        <Icon name={icon} size={18} />
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-semicond)",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "2px",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontWeight: 700,
            fontSize: "17px",
            color: "var(--text-heading)",
            lineHeight: 1.2,
          }}
        >
          {time}
        </div>
        <div style={{ fontSize: "14px", color: "var(--text-muted)", marginTop: "4px" }}>
          {note}
        </div>
      </div>
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function LivestreamPage() {
  return (
    <div>
      {/* Header */}
      <section
        style={{
          background: "var(--ink-900)",
          color: "var(--white)",
          padding: "64px 0 56px",
        }}
      >
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>
            Watch Live
          </Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 12px",
              lineHeight: 0.98,
            }}
          >
            Livestream
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch" }}>
            Join us live or watch the most recent service. We stream every Sunday at 10&nbsp;AM.
          </p>
        </div>
      </section>

      {/* Player + sidebar */}
      <section
        style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}
      >
        <div className="brc-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "40px",
              alignItems: "start",
            }}
            className="brc-livestream-grid"
          >
            {/* Player */}
            <div>
              <LivestreamEmbed />
            </div>

            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* Service times */}
              <h2
                style={{
                  fontFamily: "var(--font-cond)",
                  fontSize: "22px",
                  margin: "0 0 4px",
                  color: "var(--text-heading)",
                }}
              >
                Join Us In Person
              </h2>
              {SCHEDULE.map((s) => (
                <ScheduleCard key={s.label} {...s} />
              ))}

              {/* Giving CTA */}
              <div
                style={{
                  marginTop: "8px",
                  padding: "24px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--ink-900)",
                  color: "var(--white)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-semicond)",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--gold-400)",
                    marginBottom: "8px",
                  }}
                >
                  Support the Ministry
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,.7)",
                    margin: "0 0 16px",
                  }}
                >
                  Your generosity makes this ministry possible.
                </p>
                <Link href="/give">
                  <Button variant="primary" style={{ width: "100%" }}>
                    Give Online
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Responsive grid styles */}
      <style>{`
        @media (min-width: 900px) {
          .brc-livestream-grid {
            grid-template-columns: 1fr 320px !important;
          }
        }
      `}</style>
    </div>
  );
}
