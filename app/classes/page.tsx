import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Bible-teaching classes at Barabbas Road Church — Inductive Bible Study on Sundays and Theologetics on Tuesdays.",
};

const CLASSES = [
  {
    name: "Inductive Class",
    schedule: "Sundays · 8:30am – 9:30am",
    icon: "bookOpen",
    description:
      "This class teaches you how to study the bible for yourself. Each week the class studies the passage of scripture that will be preached that Sunday. There is no prerequisite for attending. Simply show up and enjoy observing God's Word with fellow believers.",
    note: "No prerequisite — open to all.",
  },
  {
    name: "Theologetics Class",
    schedule: "Tuesdays · 6:30pm – 7:30pm",
    icon: "users",
    description:
      "This class is a combination of Theology and Apologetics — thus \"Theologetics.\" This class will equip you to know and defend the truth, giving you confidence when engaging with the false theological ideas and philosophies of our time. This class has no prerequisite and is open to all members of Barabbas Road Church.",
    note: "No prerequisite — open to all members.",
  },
];

const RESOURCES = [
  {
    label: "Whiteboard Wednesdays",
    desc: "Short video lessons on theology and apologetics topics.",
    href: "https://www.youtube.com/playlist?list=PL9SY01HEO5BfdvkvjvrmLk5J5QgrMPi2W",
    external: true,
  },
  {
    label: "Recommended Books",
    desc: "A curated reading list from the pastors at Barabbas Road.",
    href: "https://www.goodreads.com/review/list/57616399-barabbas?shelf=recommended",
    external: true,
  },
];

export default function ClassesPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Equip Yourself</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 12px", lineHeight: 0.98 }}>
            Classes
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch", lineHeight: 1.6 }}>
            Bible-teaching for the church. Know what you believe and why you believe it.
          </p>
        </div>
      </section>

      {/* ── Classes ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: "24px" }}>
            {CLASSES.map((cls) => (
              <div
                key={cls.name}
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-lg)",
                  padding: "36px",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div style={{ width: "52px", height: "52px", borderRadius: "var(--radius-md)", background: "var(--gold-100)", color: "var(--gold-700)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={cls.icon} size={24} strokeWidth={1.8} />
                </div>
                <div>
                  <h2 style={{ fontSize: "clamp(1.6rem,1.2rem+1vw,2rem)", margin: "0 0 8px", color: "var(--ink-900)" }}>{cls.name}</h2>
                  <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--gold-700)", marginBottom: "16px" }}>
                    {cls.schedule}
                  </div>
                  <p style={{ color: "var(--text-body)", fontSize: "16px", lineHeight: 1.7, margin: "0 0 16px" }}>{cls.description}</p>
                  <div style={{ padding: "10px 14px", background: "var(--surface-page)", borderRadius: "var(--radius-sm)", fontSize: "14px", color: "var(--text-muted)", fontStyle: "italic" }}>
                    {cls.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Biblical Resources ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "40px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Biblical Resources</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 0", lineHeight: 1 }}>Keep Learning</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "16px" }}>
            {RESOURCES.map((r) => (
              <a key={r.label} href={r.href} target={r.external ? "_blank" : undefined} rel={r.external ? "noopener noreferrer" : undefined} style={{ textDecoration: "none" }}>
                <div style={{ background: "var(--white)", borderRadius: "var(--radius-lg)", padding: "28px", border: "1px solid var(--border-subtle)", borderTop: "4px solid var(--gold-400)", height: "100%", display: "flex", flexDirection: "column", gap: "10px", transition: "box-shadow .15s ease" }}

                >
                  <h3 style={{ fontSize: "1.1rem", margin: 0, color: "var(--ink-900)" }}>{r.label}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.6, margin: 0, flex: 1 }}>{r.desc}</p>
                  <span style={{ color: "var(--gold-700)", fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: ".06em" }}>View →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Eyebrow color="var(--gold-400)" align="center" withRule>Questions?</Eyebrow>
          <h2 style={{ color: "var(--white)", fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)", margin: "18px 0 16px", lineHeight: 1 }}>
            Come Join a Class
          </h2>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "44ch", marginBottom: "28px", lineHeight: 1.6 }}>
            No sign-up required. Just show up — Sundays at 8:30am or Tuesdays at 6:30pm.
          </p>
          <Link href="/contact"><Button variant="primary" size="lg">Get in Touch</Button></Link>
        </div>
      </section>
    </div>
  );
}
