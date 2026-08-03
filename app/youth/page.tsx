import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";

export const metadata: Metadata = {
  title: "Youth",
  description:
    "Youth ministry at Barabbas Road Church. Monthly events equipping students ages 12–17 to think biblically, build community, and develop lasting faith.",
  alternates: { canonical: "https://barabbas.com/youth/" },
};

const EVENTS = [
  {
    name: "Youth Connect",
    freq: "4th Friday of the Month",
    time: "5:30pm – 7:30pm",
    location: "Changes monthly — contact Pastor Trace",
    ages: "Ages 12–16",
    description:
      "Youth Connect is a monthly meetup focused on fun, friendship, and fellowship. Meeting on the fourth Friday of each month, this event gives students a chance to hang out, laugh, and build community together outside of regular church gatherings. Each month features a different activity — from movie nights and beach hangouts to roller skating, game nights, or other local adventures. It's a chance for students across San Diego County to reconnect with friends they may not see often and to meet new ones in a relaxed, welcoming environment.",
  },
  {
    name: "Youth Discuss",
    freq: "2nd Friday of the Month",
    time: "6:00pm – 7:30pm",
    location: "Church Campus",
    ages: "Ages 12–17",
    description:
      "Youth Discuss is a monthly gathering where students talk openly about the world they live in and learn to see it through the lens of Scripture. Each month, kids are invited to bring dinner to the church building and take part in honest, guided discussions about current events, global and local issues, and cultural changes shaping our generation. From topics like gender and identity to justice, war, economics, or social movements, Youth Discuss gives students the space to ask real questions and engage real issues — rather than simply being taught about culture, students participate in shaping a biblical response to it.",
  },
];

export default function YouthPage() {
  return (
    <div>
      {/* ── Hero — full-bleed photo ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "clamp(480px, 55vw, 680px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/youth-bible-study.jpg`}
          alt="Youth Bible study at Barabbas Road Church"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
        />
        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.70) 50%, rgba(13,27,42,0.30) 100%)",
          }}
        />
        {/* Content */}
        <div
          className="brc-container"
          style={{ position: "relative", zIndex: 1, padding: "80px 0" }}
        >
          <Eyebrow color="var(--gold-400)" withRule>Youth Ministry</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 14px",
              lineHeight: 0.98,
            }}
          >
            Youth
          </h1>
          <p style={{ color: "rgba(255,255,255,.72)", fontSize: "18px", maxWidth: "52ch", lineHeight: 1.65 }}>
            Our goal is to equip students to think biblically about the world
            around them, build lasting friendships rooted in Christ, and develop
            a faith that stands firm in every season of life.
          </p>
        </div>
      </section>

      {/* ── Events ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
            {EVENTS.map((event, i) => (
              <div
                key={event.name}
                className="brc-welcome"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "clamp(2rem,5vw,5rem)",
                  alignItems: "start",
                  direction: i % 2 === 1 ? "rtl" : "ltr",
                }}
              >
                {/* Info card */}
                <div
                  style={{
                    background: "var(--ink-900)",
                    borderRadius: "var(--radius-lg)",
                    padding: "40px",
                    color: "var(--white)",
                    direction: "ltr",
                  }}
                >
                  <Eyebrow color="var(--gold-400)" withRule>{event.ages}</Eyebrow>
                  <h2 style={{ color: "var(--white)", fontSize: "clamp(1.8rem,1.2rem+2vw,2.6rem)", margin: "16px 0 20px", lineHeight: 1 }}>{event.name}</h2>
                  {[
                    { label: "When", value: `${event.freq} · ${event.time}` },
                    { label: "Where", value: event.location },
                  ].map((row) => (
                    <div key={row.label} style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
                      <span style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--gold-400)", flexShrink: 0, paddingTop: "2px", minWidth: "52px" }}>{row.label}</span>
                      <span style={{ color: "rgba(255,255,255,.75)", fontSize: "15px", lineHeight: 1.5 }}>{row.value}</span>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div style={{ direction: "ltr", paddingTop: "8px" }}>
                  <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", margin: 0 }}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pastor Trace ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div
          className="brc-container brc-welcome"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "start" }}
        >
          <div>
            <Eyebrow color="var(--gold-700)" withRule>Family Pastor</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 20px", lineHeight: 1 }}>Trace Trebilco</h2>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "20px" }}>
              Trace is originally from Chicago. Him and his wife, Jordan, moved to San Diego for a relocation for work, but ended up staying in SD for the church. He has served in the Children&apos;s Ministry since 2016. Trace has a heart for evangelism and discipleship within the church and specifically with families. Trace has four young children, Wyatt, Charlotte, Wesley and Elliot. He enjoys cars, reading, hiking, and surfing.
            </p>
            <a href="mailto:trace@barabbas.com" style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: ".06em", color: "var(--gold-700)", textDecoration: "none" }}>
              trace@barabbas.com
            </a>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/trebilco-family.jpg`}
            alt="Trace Trebilco and family"
            style={{ width: "100%", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", aspectRatio: "4/3", objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Eyebrow color="var(--gold-400)" align="center" withRule>Get Involved</Eyebrow>
          <h2 style={{ color: "var(--white)", fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)", margin: "18px 0 16px", lineHeight: 1 }}>
            Questions About Youth?
          </h2>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "44ch", marginBottom: "28px", lineHeight: 1.6 }}>
            Reach out to Pastor Trace directly or contact the church and we&apos;ll connect you.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="mailto:trace@barabbas.com"><Button variant="primary" size="lg">Email Pastor Trace</Button></a>
            <Link href="/contact"><Button variant="outline-light" size="lg">Contact the Church</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
