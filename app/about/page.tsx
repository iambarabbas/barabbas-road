import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { AboutSubNav } from "@/components/about/AboutSubNav";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Barabbas Road Church in San Diego is unashamedly committed to the supremacy and sufficiency of the Bible. Our mission: making disciple-making disciples.",
};

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", color: "var(--white)", padding: "64px 0 0" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>About Us</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 16px", lineHeight: 0.98 }}>
            About Barabbas Road Church
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch", lineHeight: 1.6, marginBottom: "32px" }}>
            Making &ldquo;disciple-making&rdquo; disciples through the personal investment of our lives.
          </p>
        </div>
        <AboutSubNav />
      </section>

      {/* ── Vimeo video ── */}
      <section style={{ background: "var(--ink-950)", padding: "48px 0" }}>
        <div className="brc-container" style={{ maxWidth: "900px" }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,.5)" }}>
            <iframe
              src="https://player.vimeo.com/video/133682953"
              title="About Barabbas Road Church"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Who We Are ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "0", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            {[
              {
                label: "Mission",
                text: 'Our mission is to make "disciple-making" disciples through the personal investment of our lives.',
              },
              {
                label: "Vision",
                text: "Boldly challenging the false faith of the unbelieving world with the truth that Jesus is the only Way, Truth, and Life.",
              },
              {
                label: "Who We Are",
                text: "Barabbas Road Church in San Diego is located in the neighborhood of Clairemont. We are a church that is unashamedly committed to the supremacy and sufficiency of the Bible.",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                style={{
                  padding: "36px",
                  borderLeft: i > 0 ? "1px solid var(--border-subtle)" : "none",
                  borderTop: "4px solid var(--gold-400)",
                  background: "var(--white)",
                }}
              >
                <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", fontSize: "12px", color: "var(--gold-700)", marginBottom: "12px" }}>
                  {item.label}
                </div>
                <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--text-body)", margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Are extended ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div className="brc-container" style={{ maxWidth: "760px" }}>
          <Eyebrow color="var(--gold-700)" withRule>Our Church</Eyebrow>
          <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 24px", lineHeight: 1 }}>
            Committed to God&apos;s Word
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "18px" }}>
            We believe the Bible is the very word of God and we are committed to proclaiming its unchanging message to an ever-changing world. Each week folks from all across San Diego County gather to hear from God&apos;s Word the Bible and to share in worshiping God together through songs.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "36px" }}>
            At Barabbas Road our aim is not to reinvent church — rather we strive to honor the One to whom the church belongs: Jesus Christ our Lord. He is the head of the church and He is the One we proclaim.
          </p>

          <blockquote style={{ margin: 0, padding: "28px 32px", borderLeft: "4px solid var(--gold-400)", background: "var(--surface-page)", borderRadius: "0 var(--radius-md) var(--radius-md) 0" }}>
            <p style={{ fontFamily: "var(--font-semicond)", fontStyle: "italic", fontSize: "17px", lineHeight: 1.7, color: "var(--text-body)", margin: "0 0 12px" }}>
              &ldquo;All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be competent, equipped for every good work.&rdquo;
            </p>
            <cite style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "12px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gold-700)", fontStyle: "normal" }}>
              2 Timothy 3:16–17
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Eyebrow color="var(--gold-400)" align="center" withRule>Come Join Us</Eyebrow>
          <h2 style={{ color: "var(--white)", fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)", margin: "18px 0 16px", lineHeight: 1 }}>
            Sundays at 10am
          </h2>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "44ch", marginBottom: "28px" }}>
            7340 Miramar Rd, San Diego, CA 92126
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/new-here"><Button variant="primary" size="lg">Plan Your Visit</Button></Link>
            <Link href="/contact"><Button variant="outline-light" size="lg">Contact Us</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
