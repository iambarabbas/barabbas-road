import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";

export const metadata: Metadata = {
  title: "Missions",
  description:
    "Barabbas Road Church is committed to making disciple-making disciples to the remotest parts of the world. Learn about our mission work in Uganda, India, and beyond.",
};

const FIELDS = [
  {
    name: "Uganda",
    flag: "🇺🇬",
    description:
      "Through God's grace and mercy Barabbas Road was able to plant a church in Arua, Uganda in 2011. The church there continues to grow in both maturity and in number through your prayers and through the preaching of the Word.",
    href: null,
  },
  {
    name: "India",
    flag: "🇮🇳",
    description:
      "India is one of the darkest nations in the world with over a billion lost souls. Over the past few years we have been able to partner with indigenous church planters to reach those who have never heard the life-saving message of the gospel. We are working with and supporting our indigenous partners in many ways throughout the year.",
    href: null,
  },
  {
    name: "Papua New Guinea",
    flag: "🇵🇬",
    description:
      "Barabbas Road supports church planting and gospel work in Papua New Guinea. Follow the link below to learn more about our missionaries serving there.",
    href: "https://www.finisterremission.org/missionary/ensley-derek-and-kaylee",
  },
  {
    name: "Philippines",
    flag: "🇵🇭",
    description:
      "Barabbas Road partners with missionaries working to make disciple-making disciples in the Philippines through church planting and theological training.",
    href: "https://disciplethenations.org/about/staff/david-adriana-petro/",
  },
];

export default function MissionsPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Global Outreach</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 12px",
              lineHeight: 0.98,
            }}
          >
            Missions
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.65)",
              fontSize: "18px",
              maxWidth: "54ch",
              lineHeight: 1.6,
            }}
          >
            In Acts, Christ tells us to be His witness in the remotest parts of
            the world. At Barabbas Road Church we try and live that out as best
            we can.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "720px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Abroad &amp; at Home</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 20px", lineHeight: 1 }}>
              Making Disciples to the Ends of the Earth
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)" }}>
              Our goal is to come alongside a church — or start one — on every
              continent that is committed to making disciple-making disciples.
              Our task is not done, but God has opened some wonderful doors.
              Below you can learn more about each location where God is using
              Barabbas Road to further His work.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission Fields ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div className="brc-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "24px" }}>
            {FIELDS.map((f) => {
              const inner = (
                <div
                  key={f.name}
                  style={{
                    background: "var(--white)",
                    borderRadius: "var(--radius-lg)",
                    padding: "36px",
                    border: "1px solid var(--border-subtle)",
                    borderTop: "4px solid var(--gold-400)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div style={{ fontSize: "2.8rem" }}>{f.flag}</div>
                  <h3 style={{ fontSize: "clamp(1.4rem,1.1rem+.8vw,1.8rem)", margin: 0, color: "var(--ink-900)" }}>
                    {f.name}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.7, margin: 0, flex: 1 }}>
                    {f.description}
                  </p>
                  {f.href && (
                    <span style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: ".06em", color: "var(--gold-700)" }}>
                      Learn More &rarr;
                    </span>
                  )}
                </div>
              );
              return f.href ? (
                <a key={f.name} href={f.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
                  {inner}
                </a>
              ) : (
                <div key={f.name}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cooperative Program ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div
          className="brc-container brc-welcome"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem,5vw,5rem)",
            alignItems: "center",
          }}
        >
          <div>
            <Eyebrow color="var(--gold-700)" withRule>Cooperative Program</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 20px", lineHeight: 1 }}>
              Southern Baptist Cooperative Program
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "18px" }}>
              Barabbas Road Church is part of the Southern Baptist Cooperative
              Program — a collection of Southern Baptist churches in San Diego
              and across the nation that give money to international missions
              happening all over the world.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "28px" }}>
              Barabbas Road Church considers it a privilege to give to the SBC
              Cooperative Program. The program allows your giving to reach many
              resources throughout the world working to fulfill the Great
              Commission.
            </p>
            <a
              href="https://www.sbc.net/cp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Learn About the Cooperative Program</Button>
            </a>
          </div>

          <div
            style={{
              background: "var(--ink-900)",
              borderRadius: "var(--radius-lg)",
              padding: "40px",
              color: "var(--white)",
            }}
          >
            <Eyebrow color="var(--gold-400)" withRule>Get Involved</Eyebrow>
            <h3
              style={{
                color: "var(--white)",
                fontSize: "clamp(1.6rem,1.2rem+1vw,2rem)",
                margin: "16px 0 16px",
                lineHeight: 1.1,
              }}
            >
              Other Supported Missions
            </h3>
            <p style={{ color: "rgba(255,255,255,.7)", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              If you are interested in helping out with International Missions
              at Barabbas Road Church, please see the connect desk on Sunday
              morning or reach out to us directly.
            </p>
            <Link href="/contact">
              <Button variant="outline-light">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--gold-400)", padding: "48px 0" }}>
        <div className="brc-container" style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1rem,.9rem+.8vw,1.35rem)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "var(--ink-900)",
              margin: "0 0 20px",
            }}
          >
            &ldquo;Go therefore and make disciples of all nations.&rdquo; — Matthew 28:19
          </p>
          <Link href="/give">
            <Button variant="secondary">Give to Missions</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
