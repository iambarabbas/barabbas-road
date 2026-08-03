import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";
import { FaqAccordion } from "@/components/new-here/FaqAccordion";
import type { FaqItem } from "@/components/new-here/FaqAccordion";

export const metadata: Metadata = {
  title: "New Here?",
  description:
    "New to Barabbas Road Church? Join us Sundays at 10am at 7340 Miramar Rd, San Diego, CA 92126. No dress code, no pressure — just come as you are.",
  alternates: { canonical: "https://iambarabbas.github.io/barabbas-road/new-here/" },
};

const EXPECT = [
  { icon: "heart",      title: "Come as you are",           body: "No dress code. No performance. Just show up." },
  { icon: "clock",      title: "About 1.5 hours",           body: "We start at 10am and finish around 11:30am." },
  { icon: "bookOpen",   title: "Verse-by-verse teaching",   body: "Every week we preach through a book of the Bible." },
  { icon: "users",      title: "Kids ministry available",   body: "Children's Church for ages 1–11, every Sunday." },
];

const SERVICE_FAQS: FaqItem[] = [
  {
    q: "What do I wear to church?",
    a: "You can dress as you like. There is no dress code at Barabbas Road. On any given Sunday you will see everything from suits and dresses to board shorts and flip flops.",
  },
  {
    q: "What happens during the service?",
    a: "We start at 10am with 15 minutes of congregational worship. Then comes a one-hour verse-by-verse sermon through a book of the Bible. The service closes with offering and communion. From start to finish, expect about 1.5 hours.",
  },
  {
    q: "Will I be singled out as a visitor?",
    a: "No. We don't do public visitor introductions. You won't be asked to stand, raise your hand, or wear a name tag. Friendly greeters will be at the doors, but the service itself will not put you on the spot.",
  },
  {
    q: "How long is the service?",
    a: "A typical Sunday service runs about 1.5 hours — 10am to 11:30am. There's no rush to leave afterward. A lot of people stick around in the foyer to talk.",
  },
  {
    q: "What kind of music do you play?",
    a: "We sing hymns and contemporary worship songs, led by a small team with acoustic instruments. The focus is on congregational participation and truth-filled lyrics — not performance.",
  },
  {
    q: "What Bible translation do you use?",
    a: "We preach from the English Standard Version (ESV). Feel free to bring whatever Bible you own, or download a free Bible app on your phone before you come.",
  },
  {
    q: "Is the service livestreamed or recorded?",
    a: "Yes. Every Sunday service is broadcast live on YouTube and stays available to watch at any time. You can also tune in from the Livestream page on this site.",
  },
  {
    q: "Is there parking?",
    a: "Yes — free on-site parking is available at 7340 Miramar Rd, San Diego, CA 92126. The lot entrance is clearly marked.",
  },
];

const KIDS_FAQS: FaqItem[] = [
  {
    q: "Can I bring my kids?",
    a: "Absolutely. We love children. Our Children's Church is fully staffed and designed for ages 1–11 — you can drop them off before the service and pick them up right after.",
  },
  {
    q: "Are children allowed in the main service?",
    a: "Yes. If you prefer to keep your kids with you, that's perfectly fine. We just ask that they stay quiet so others can hear. We also have a glassed-in area in the back for parents with little ones.",
  },
  {
    q: "What ages is Children's Church for?",
    a: "Our Children's Church is for kids ages 1 through 11 (up through 5th grade). Students in middle and high school attend the main service with everyone else.",
  },
  {
    q: "Is Children's Church free?",
    a: "Yes. There is no cost to attend anything at Barabbas Road Church — including Children's Church.",
  },
  {
    q: "Are the teachers background-checked?",
    a: "Yes. Every teacher and volunteer in our children's ministry completes a full background check and is trained through Ministry Safe before serving in any classroom.",
  },
  {
    q: "What curriculum do you use?",
    a: "We use the Generations of Grace curriculum, which walks kids through the entire Bible chronologically with age-appropriate content. Our goal in the kids' room is the same as the main service — to help them understand and love God's Word.",
  },
];

const ALL_FAQS = [...SERVICE_FAQS, ...KIDS_FAQS];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function NewHerePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

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
              src="https://player.vimeo.com/video/1011540228"
              title="Welcome to Barabbas Road Church"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      </section>

      {/* ── Service info bar ── */}
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

      {/* ── What to Expect ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "44px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Your First Sunday</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 12px", lineHeight: 1 }}>
              What to Expect
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", margin: 0 }}>
              Whether you&apos;ve been going to church your whole life or you&apos;ve never
              stepped inside one — here&apos;s what a Sunday at Barabbas Road looks like.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {EXPECT.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px 24px",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--gold-100)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-700)",
                  }}
                >
                  <Icon name={item.icon} size={22} strokeWidth={1.8} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    color: "var(--ink-900)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "14.5px", margin: 0, lineHeight: 1.6 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service FAQs ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "760px" }}>
            <div style={{ marginBottom: "36px" }}>
              <Eyebrow color="var(--gold-700)" withRule>Church Service</Eyebrow>
              <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "12px 0 0", lineHeight: 1 }}>
                Common Questions
              </h2>
            </div>
            <FaqAccordion items={SERVICE_FAQS} />
          </div>
        </div>
      </section>

      {/* ── Kids FAQs ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "760px" }}>
            <div style={{ marginBottom: "36px" }}>
              <Eyebrow color="var(--gold-700)" withRule>Bringing the Family?</Eyebrow>
              <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "12px 0 0", lineHeight: 1 }}>
                Kids &amp; Children&apos;s Church
              </h2>
            </div>
            <FaqAccordion items={KIDS_FAQS} />
            <div style={{ marginTop: "32px" }}>
              <Link href="/kids">
                <Button variant="primary">Learn About Kids Church</Button>
              </Link>
            </div>
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
