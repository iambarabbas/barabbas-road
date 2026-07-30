import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";
import Link from "next/link";

const RHYTHMS = [
  { icon: "play",   t: "Sunday Gatherings", when: "Every Sunday · 10:00am",        where: "Main Auditorium" },
  { icon: "users",  t: "Life Groups",        when: "Throughout the week",            where: "Homes across San Diego" },
  { icon: "heart",  t: "Prayer & Worship",   when: "First Friday monthly · 7:00pm", where: "Main Auditorium" },
];

export function EventsSection() {
  return (
    <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
      <div
        className="brc-container brc-events-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "center" }}
      >
        <div>
          <Eyebrow color="var(--gold-700)" withRule>Life Together</Eyebrow>
          <h2 style={{ fontSize: "48px", margin: "14px 0 0", lineHeight: 1 }}>
            There&apos;s always something happening
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "18px", lineHeight: 1.6, marginTop: "20px", maxWidth: "44ch" }}>
            From Sunday worship to midweek Life Groups and seasonal gatherings, our life together runs on a steady rhythm. The full, always-current schedule lives on our calendar.
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "30px", flexWrap: "wrap" }}>
            <Link href="/calendar">
              <Button variant="primary" size="lg" iconLeft={<Icon name="calendar" size={16} />}>
                View the Calendar
              </Button>
            </Link>
            <Button variant="outline" size="lg">Subscribe to Updates</Button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            background: "var(--surface-page)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {RHYTHMS.map((r, i) => (
            <div
              key={r.t}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                padding: "22px 24px",
                borderTop: i === 0 ? "none" : "1px solid var(--border-subtle)",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--gold-100)",
                  color: "var(--gold-700)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name={r.icon} size={22} strokeWidth={1.8} />
              </span>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "22px", margin: 0, lineHeight: 1.1 }}>{r.t}</h3>
                <div style={{ color: "var(--text-muted)", fontSize: "15px", marginTop: "6px", display: "flex", flexWrap: "wrap", gap: "6px 16px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}>
                    <Icon name="clock" size={14} /> {r.when}
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}>
                    <Icon name="mapPin" size={14} /> {r.where}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
