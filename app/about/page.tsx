import type { Metadata } from "next";
import Link from "next/link";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Barabbas Road Church in San Diego is unashamedly committed to the supremacy and sufficiency of the Bible. Learn about our mission, vision, and who we are.",
};

const ABOUT_LINKS = [
  { label: "Church History",     href: "/about/church-history" },
  { label: "What We Believe",    href: "/about/what-we-believe" },
  { label: "Distinctives",       href: "/about/distinctives" },
  { label: "Church Government",  href: "/about/church-government" },
  { label: "The Name Barabbas",  href: "/about/the-name-barabbas" },
  { label: "Elders",             href: "/about/elders" },
  { label: "Member Testimonies", href: "/about/member-testimonies" },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 0" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>About Us</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 12px",
              lineHeight: 0.98,
            }}
          >
            About Barabbas Road Church
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch", lineHeight: 1.6, marginBottom: "32px" }}>
            Making &ldquo;disciple-making&rdquo; disciples through the personal investment of our lives.
          </p>
        </div>
        <AboutSubNav />
      </section>

      {/* ── Scripture ── */}
      <section style={{ background: "var(--gold-400)", padding: "24px 0" }}>
        <div className="brc-container" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1rem,.9rem+.8vw,1.3rem)", textTransform: "uppercase", letterSpacing: ".04em", color: "var(--ink-900)", margin: 0 }}>
            &ldquo;All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.&rdquo; — 2 Timothy 3:16–17
          </p>
        </div>
      </section>

      {/* ── Mission / Vision / Who We Are ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div
          className="brc-container brc-welcome"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "start" }}
        >
          {/* Video */}
          <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
            <iframe
              src="https://player.vimeo.com/video/1011540228"
              title="About Barabbas Road Church"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>

          {/* Copy */}
          <div>
            {[
              {
                label: "Mission",
                body: 'Our mission is to make "disciple-making" disciples through the personal investment of our lives.',
              },
              {
                label: "Vision",
                body: "Boldly challenging the false faith of the unbelieving world with the truth that Jesus is the only Way, Truth, and Life!",
              },
              {
                label: "Who We Are",
                body: "Barabbas Road Church in San Diego is located in the neighborhood of Clairemont. We are a church that is unashamedly committed to the supremacy and sufficiency of the Bible. We believe the Bible is the very word of God and we are committed to proclaiming its unchanging message to an ever-changing world. Each week folks from all across San Diego County gather to hear from God's Word and to share in worshiping God together through songs. At Barabbas Road our aim is not to reinvent church — rather we strive to honor the one to whom the church belongs, and that is Jesus Christ our Lord. He is the head of the church and He is the one we proclaim.",
              },
            ].map((item, i) => (
              <div key={item.label} style={{ paddingBottom: "28px", marginBottom: "28px", borderBottom: i < 2 ? "1px solid var(--border-subtle)" : "none" }}>
                <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", fontSize: "12px", color: "var(--gold-700)", marginBottom: "8px" }}>
                  {item.label}
                </div>
                <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--text-body)", margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About nav cards ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "40px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Learn More</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 0", lineHeight: 1 }}>Explore Our Beliefs &amp; History</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "14px" }}>
            {ABOUT_LINKS.map((link) => (
              <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    background: "var(--white)",
                    borderRadius: "var(--radius-lg)",
                    padding: "24px 28px",
                    border: "1px solid var(--border-subtle)",
                    borderLeft: "4px solid var(--gold-400)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "box-shadow .15s ease",
                  }}

                >
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.15rem", color: "var(--ink-900)" }}>{link.label}</span>
                  <span style={{ color: "var(--gold-600)", fontSize: "1.2rem" }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
