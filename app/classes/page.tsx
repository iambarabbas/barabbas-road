import type { Metadata } from "next";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { Card } from "@/components/core/Card";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = { title: "Classes" };

const CLASSES = [
  {
    title: "Foundations",
    series: "New Believer",
    schedule: "Sundays · 11:30am",
    desc: "Everything you need to know to get started — who God is, what the Bible is, and what it means to follow Jesus.",
    icon: "bookOpen",
  },
  {
    title: "Knowing God",
    series: "Theology",
    schedule: "Wednesdays · 7pm",
    desc: "A survey of Christian doctrine: the Trinity, the nature of Christ, the Holy Spirit, salvation, and the church.",
    icon: "search",
  },
  {
    title: "Defending the Faith",
    series: "Apologetics",
    schedule: "Sundays · 11:30am",
    desc: "Why is Christianity true? How do we answer hard questions? A practical course in Christian apologetics.",
    icon: "heart",
  },
  {
    title: "Marriage God's Way",
    series: "Family",
    schedule: "Saturdays · 9am",
    desc: "A 6-week course for engaged or married couples walking through what Scripture says about covenant marriage.",
    icon: "users",
  },
];

export default function ClassesPage() {
  return (
    <div>
      {/* Header */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Defend the Truth</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 12px", lineHeight: 0.98 }}>
            Classes
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch" }}>
            Equipping the church to know what it believes and why. Sunday morning and midweek courses for every stage of faith.
          </p>
        </div>
      </section>

      {/* Classes grid */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "52px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Current Offerings</Eyebrow>
            <h2 style={{ fontSize: "clamp(2.2rem,1.4rem+2.4vw,3rem)", margin: "16px 0 0", lineHeight: 1 }}>
              Learn. Grow. Defend.
            </h2>
          </div>
          <div className="brc-blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "28px" }}>
            {CLASSES.map((c) => (
              <Card key={c.title} interactive style={{ cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "var(--radius-md)", background: "var(--gold-100)", color: "var(--gold-700)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={c.icon} size={24} strokeWidth={1.8} />
                  </div>
                  <Badge tone="outline">{c.series}</Badge>
                </div>
                <h3 style={{ fontSize: "26px", margin: "4px 0 4px" }}>{c.title}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-accent)", fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: ".06em" }}>
                  <Icon name="clock" size={14} /> {c.schedule}
                </div>
                <p style={{ color: "var(--text-muted)", margin: 0 }}>{c.desc}</p>
                <div style={{ marginTop: "auto", paddingTop: "8px" }}>
                  <Button variant="ghost" size="sm" iconRight={<Icon name="arrowRight" size={14} />}>Learn More</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Eyebrow color="var(--gold-400)" align="center" withRule>Questions?</Eyebrow>
          <h2 style={{ color: "var(--white)", fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)", margin: "18px 0 16px", lineHeight: 1 }}>
            Not Sure Where to Start?
          </h2>
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: "18px", maxWidth: "44ch", marginBottom: "28px" }}>
            Talk to one of our pastors. We can point you to the right class for your stage of faith.
          </p>
          <Button variant="primary" size="lg">Contact a Pastor</Button>
        </div>
      </section>
    </div>
  );
}
