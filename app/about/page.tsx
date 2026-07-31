import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { AboutSubNav } from "@/components/about/AboutSubNav";

export const metadata: Metadata = { title: "About" };

const PHOTO_WORSHIP = "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1600&q=80";
const PHOTO_COMMUNITY = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80";

const BELIEFS = [
  { h: "Scripture",    b: "We believe the Bible is the very Word of God — inerrant, infallible, and sufficient. Everything we do flows from its unchanging message." },
  { h: "The Gospel",  b: "We proclaim that Jesus Christ is the only Way, Truth, and Life. Salvation is by grace alone, through faith alone, in Christ alone." },
  { h: "The Church",  b: "Christ is the head of the church. We exist to make disciple-making disciples through the personal investment of our lives." },
  { h: "Eldership",   b: "We are an elder-led church. Our elders are charged with teaching, feeding, and protecting the congregation according to Scripture." },
];

const DISTINCTIVES = [
  "Expository, verse-by-verse preaching",
  "Acts 2:42 discipleship in small groups",
  "Unashamed commitment to biblical truth",
  "Equipping believers through Barabbas University",
  "Gospel-driven evangelism in San Diego",
  "Elder-led, congregation-accountable governance",
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: "var(--ink-900)", position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PHOTO_WORSHIP} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.28 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(20,19,17,.88) 0%, rgba(20,19,17,.5) 100%)" }} />
        <div className="brc-container" style={{ position: "relative", padding: "80px 0 72px" }}>
          <Eyebrow color="var(--gold-400)" withRule>Who We Are</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.8rem,1.6rem+5vw,5rem)", margin: "16px 0 20px", lineHeight: 0.96 }}>
            A Church Committed<br />to God&apos;s Word.
          </h1>
          <p style={{ color: "rgba(255,255,255,.72)", fontSize: "19px", maxWidth: "56ch", lineHeight: 1.6 }}>
            Barabbas Road Church is located in Clairemont, San Diego. We are unashamedly committed to the supremacy and sufficiency of the Bible — proclaiming its unchanging message to an ever-changing world.
          </p>
        </div>
        <AboutSubNav />
      </section>

      {/* Scripture banner */}
      <section style={{ background: "var(--gold-400)", padding: "28px 0" }}>
        <div className="brc-container" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem,1rem+1vw,1.5rem)", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--ink-900)", margin: 0, lineHeight: 1.3 }}>
            &ldquo;All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.&rdquo; — 2 Timothy 3:16–17
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container brc-welcome" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "center" }}>
          <div>
            <Eyebrow color="var(--gold-700)" withRule>Our Purpose</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2.4vw,3rem)", margin: "16px 0 28px", lineHeight: 1 }}>
              Mission &amp; Vision
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", fontSize: "13px", color: "var(--gold-700)", marginBottom: "8px" }}>Mission</div>
                <p style={{ fontSize: "18px", lineHeight: 1.65, color: "var(--text-body)", margin: 0 }}>
                  To make &ldquo;disciple-making&rdquo; disciples through the personal investment of our lives.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", fontSize: "13px", color: "var(--gold-700)", marginBottom: "8px" }}>Vision</div>
                <p style={{ fontSize: "18px", lineHeight: 1.65, color: "var(--text-body)", margin: 0 }}>
                  Boldly challenging the false faith of the unbelieving world with the truth that Jesus is the only Way, Truth, and Life.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", fontSize: "13px", color: "var(--gold-700)", marginBottom: "8px" }}>Who We Are</div>
                <p style={{ fontSize: "17px", lineHeight: 1.65, color: "var(--text-muted)", margin: 0 }}>
                  Each week, people from all across San Diego County gather at 7340 Miramar Rd to hear from God&apos;s Word and worship together. Our aim is not to reinvent the church — we strive to honor Jesus Christ, the head of the church, who is the one we proclaim.
                </p>
              </div>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PHOTO_COMMUNITY} alt="Barabbas Road Church community" style={{ width: "100%", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", aspectRatio: "4/3", objectFit: "cover" }} />
        </div>
      </section>

      {/* What We Believe */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "52px" }}>
            <Eyebrow color="var(--gold-700)" withRule>What We Believe</Eyebrow>
            <h2 style={{ fontSize: "clamp(2.2rem,1.4rem+2.4vw,3rem)", margin: "16px 0 0", lineHeight: 1 }}>
              Core Convictions
            </h2>
          </div>
          <div className="brc-pillars" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "40px" }}>
            {BELIEFS.map((b, i) => (
              <div key={b.h} style={{ paddingTop: "24px", borderTop: "3px solid var(--gold-400)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "13px", letterSpacing: ".06em", color: "var(--ink-300)", marginBottom: "10px" }}>0{i + 1}</div>
                <h3 style={{ fontSize: "clamp(1.5rem,1.2rem+1vw,1.9rem)", margin: "0 0 12px" }}>{b.h}</h3>
                <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>{b.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinctives */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container brc-welcome" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "start" }}>
          <div>
            <Eyebrow color="var(--gold-700)" withRule>How We Do Church</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2.4vw,3rem)", margin: "16px 0 24px", lineHeight: 1 }}>
              Our Distinctives
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {DISTINCTIVES.map((d) => (
                <li key={d} style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "17px", color: "var(--text-body)", lineHeight: 1.5 }}>
                  <span style={{ flexShrink: 0, marginTop: "6px", width: "8px", height: "8px", borderRadius: "50%", background: "var(--gold-400)", display: "block" }} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: "var(--ink-900)", borderRadius: "var(--radius-lg)", padding: "40px", color: "var(--white)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "72px", lineHeight: 1, color: "var(--gold-400)", marginBottom: "8px" }}>2007</div>
            <div style={{ fontSize: "16px", color: "rgba(255,255,255,.6)", marginBottom: "28px" }}>Planted in San Diego to make disciples of Jesus.</div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontSize: "14px", color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: ".1em", fontFamily: "var(--font-semicond)", fontWeight: 700 }}>Find Us</div>
              <div style={{ color: "rgba(255,255,255,.8)", fontSize: "16px", lineHeight: 1.6 }}>7340 Miramar Rd<br />San Diego, CA 92126<br />Sundays at 10:00am</div>
            </div>
            <div style={{ marginTop: "28px" }}>
              <Link href="/team">
                <Button variant="outline-light" size="sm">Meet the Team</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Eyebrow color="var(--gold-400)" align="center" withRule>Come See For Yourself</Eyebrow>
          <h2 style={{ color: "var(--white)", fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)", margin: "18px 0 16px", lineHeight: 1 }}>
            We&apos;d Love to Have You Join Us
          </h2>
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: "18px", maxWidth: "44ch", marginBottom: "28px" }}>
            Sundays at 10am. 7340 Miramar Rd, San Diego. Come as you are.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/new-here"><Button variant="primary" size="lg">Plan Your Visit</Button></Link>
            <Link href="/contact"><Button variant="outline-light" size="lg">Get Directions</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
