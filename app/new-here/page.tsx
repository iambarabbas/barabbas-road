import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "New Here?",
  description:
    "New to Barabbas Road Church? Join us Sundays at 10am at 7340 Miramar Rd, San Diego, CA 92126.",
};

const SERVICE_FAQS = [
  {
    q: "What do I wear to church?",
    a: "You can dress as you like at Barabbas Road Church. We have no formal dress code. On any given Sunday you will see dresses and suits to board shorts and flip flops.",
  },
  {
    q: "What happens in church?",
    a: "Church starts at 10am with a 15-minute musical praise time. This is followed by a one-hour sermon. The service concludes with a time for offering and the taking of communion. A typical service lasts 1.5 hours.",
  },
  {
    q: "Will I be called out as a visitor?",
    a: "No. There are no formal introductions of visitors during the service. We have friendly greeters at the doors and a loving community ready to welcome you.",
  },
];

const KIDS_FAQS = [
  {
    q: "Can I bring my kids?",
    a: "Yes. We love children and have an amazing children's church that is fully staffed for ages 1–11. To read all about our Children's Church, visit the Kids page.",
  },
  {
    q: "Are children allowed in the main service?",
    a: "This is up to you. If you would like your child to stay with you during the service that is perfectly fine — we only request that they remain quiet.",
  },
  {
    q: "Is Children's Church free?",
    a: "Yes. There is no financial cost to anything at Barabbas Road Church.",
  },
  {
    q: "Are the Children's teachers given background checks?",
    a: "Yes. All of our teachers are given a full background check and are trained through Ministry Safe before serving in any classroom.",
  },
];

export default function NewHerePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div
          className="brc-container brc-welcome"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem,5vw,4rem)",
            alignItems: "center",
          }}
        >
          <div>
            <Eyebrow color="var(--gold-400)" withRule>Welcome</Eyebrow>
            <h1
              style={{
                color: "var(--white)",
                fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
                margin: "16px 0 12px",
                lineHeight: 0.98,
              }}
            >
              New to Barabbas?
            </h1>
            <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "40ch", lineHeight: 1.6, marginBottom: "28px" }}>
              We invite you to come out and meet men, women, and children who
              have been set free from sin because of Jesus. We are the body of
              Christ — we are Barabbas, and we invite you to join us.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <a href="https://maps.app.goo.gl/dHWZsniVGf9q2o5R9" target="_blank" rel="noopener noreferrer">
                <Button variant="primary">Get Directions</Button>
              </a>
              <Link href="/contact">
                <Button variant="outline-light">Contact Us</Button>
              </Link>
            </div>
          </div>

          {/* Welcome video */}
          <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,.5)" }}>
            <iframe
              src="https://player.vimeo.com/video/487426166"
              title="Welcome to Barabbas Road Church"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      </section>

      {/* ── Service info ── */}
      <section style={{ background: "var(--gold-400)", padding: "24px 0" }}>
        <div className="brc-container">
          <div style={{ display: "flex", gap: "clamp(2rem,5vw,5rem)", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
            {[
              { icon: "clock",  label: "Sunday | 10am" },
              { icon: "mapPin", label: "7340 Miramar Rd, San Diego, CA 92126" },
              { icon: "phone",  label: "619.289.8987" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: "10px", alignItems: "center", color: "var(--ink-900)" }}>
                <Icon name={item.icon} size={18} strokeWidth={2} />
                <span style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "15px", textTransform: "uppercase", letterSpacing: ".05em" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Welcome copy ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container" style={{ maxWidth: "720px" }}>
          <Eyebrow color="var(--gold-700)" withRule>About Us</Eyebrow>
          <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 20px", lineHeight: 1 }}>
            Welcome to Barabbas Road Church
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)" }}>
            If you are new to church or have been searching through San Diego churches, we invite you to come on out and meet men, women, and children that have been set free from sin because of Jesus. We are the body of Christ. We are Barabbas, and we invite you to join us.
          </p>
        </div>
      </section>

      {/* ── Service FAQs ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "44px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Church Service FAQ&apos;s</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 0", lineHeight: 1 }}>
              Common Questions
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
            {SERVICE_FAQS.map((faq) => (
              <div key={faq.q} style={{ background: "var(--white)", borderRadius: "var(--radius-lg)", padding: "24px 28px", border: "1px solid var(--border-subtle)", borderLeft: "4px solid var(--gold-400)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.15rem", margin: "0 0 10px", color: "var(--ink-900)" }}>{faq.q}</h3>
                <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "16px", lineHeight: 1.65 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kids FAQs ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "44px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Kid&apos;s FAQ&apos;s</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 0", lineHeight: 1 }}>
              Bringing the Family?
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
            {KIDS_FAQS.map((faq) => (
              <div key={faq.q} style={{ background: "var(--white)", borderRadius: "var(--radius-lg)", padding: "24px 28px", border: "1px solid var(--border-subtle)", borderLeft: "4px solid var(--gold-400)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.15rem", margin: "0 0 10px", color: "var(--ink-900)" }}>{faq.q}</h3>
                <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "16px", lineHeight: 1.65 }}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "32px" }}>
            <Link href="/kids">
              <Button variant="primary">Learn About Kids Church</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Eyebrow color="var(--gold-400)" align="center" withRule>Ready to Visit?</Eyebrow>
          <h2 style={{ color: "var(--white)", fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)", margin: "18px 0 16px", lineHeight: 1 }}>
            We&apos;d Love to See You Sunday
          </h2>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "44ch", marginBottom: "28px", lineHeight: 1.6 }}>
            Join us at 7340 Miramar Rd, San Diego — every Sunday at 10am. No dress code, no pressure. Just come as you are.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://maps.app.goo.gl/dHWZsniVGf9q2o5R9" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">Get Directions</Button>
            </a>
            <Link href="/contact">
              <Button variant="outline-light" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
