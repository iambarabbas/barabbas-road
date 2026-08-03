import type { Metadata } from "next";
import Link from "next/link";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Barabbas Road Church — our mission, vision, beliefs, history, and leadership.",
};

const NAV_CARDS = [
  {
    label: "What We Believe",
    desc: "Our full doctrinal statement and position papers on Scripture, salvation, marriage, and more.",
    href: "/about/what-we-believe",
    icon: "bookOpen",
  },
  {
    label: "The Name Barabbas",
    desc: "The biblical story behind our church's name — and what it means for every one of us.",
    href: "/about/the-name-barabbas",
    icon: "heart",
  },
  {
    label: "Church Government",
    desc: "How Barabbas Road is led — elder-led, accountable, and grounded in Scripture.",
    href: "/about/church-government",
    icon: "users",
  },
  {
    label: "Elders",
    desc: "Meet the men who shepherd and teach the congregation at Barabbas Road Church.",
    href: "/about/elders",
    icon: "users",
  },
  {
    label: "Church History",
    desc: "Our story from a storage room with 10 people in 2006 to where we are today.",
    href: "/about/church-history",
    icon: "clock",
  },
  {
    label: "Member Testimonies",
    desc: "Stories of what God has done and is doing in the lives of our members.",
    href: "/about/member-testimonies",
    icon: "heart",
  },
  {
    label: "Distinctives",
    desc: "Teaching God's design for the local church.",
    href: "/about/distinctives",
    icon: "bookOpen",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "56px 0 0" }}>
        <div className="brc-container" style={{ paddingBottom: "40px" }}>
          <Eyebrow color="var(--gold-400)" withRule>About Us</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.4rem,1.4rem+4vw,4.2rem)",
              margin: "14px 0 14px",
              lineHeight: 0.98,
            }}
          >
            Barabbas Road Church
          </h1>
          <p style={{ color: "rgba(255,255,255,.6)", fontSize: "clamp(16px,1rem+.5vw,18px)", maxWidth: "50ch", lineHeight: 1.6, margin: 0 }}>
            Making &ldquo;disciple-making&rdquo; disciples through the personal investment of our lives.
          </p>
        </div>
        <AboutSubNav />
      </section>

      {/* ── Video + Mission/Vision ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">

          {/* Video — full width on mobile, contained on desktop */}
          <div style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,.18)",
            marginBottom: "clamp(2rem,5vw,4rem)",
          }}>
            <iframe
              src="https://player.vimeo.com/video/1011540228"
              title="About Barabbas Road Church"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>

          {/* Mission / Vision / Who We Are — stacked cards on mobile */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}>
            {[
              {
                label: "Mission",
                body: "Our mission is to make \"disciple making\" disciples through the personal investment of our lives.",
              },
              {
                label: "Vision",
                body: "Boldly challenging the false faith of the unbelieving world with the truth that Jesus is the only Way Truth and Life!",
              },
              {
                label: "Who We Are",
                body: "Barabbas Road Church in San Diego is located in the neighborhood of Clairemont. We are a church that is unashamedly committed to the supremacy and sufficiency of the Bible. We believe the Bible is the very word of God and we are committed to proclaiming its unchanging message to an ever changing world. Each week folks from all across San Diego County gather to hear from God's Word the Bible and to share in worshiping God together through songs. At Barabbas Road our aim is not to reinvent church rather we strive to honor the one to whom the church belongs and that is Jesus Christ our Lord, He is the head of the church and He is the one we proclaim.",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px",
                  border: "1px solid var(--border-subtle)",
                  borderTop: "4px solid var(--gold-400)",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-semicond)",
                  fontWeight: 800,
                  fontSize: "11px",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--gold-700)",
                  marginBottom: "10px",
                }}>
                  {item.label}
                </div>
                <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--text-body)", margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scripture ── */}
      <section style={{ background: "var(--ink-900)", padding: "28px 0" }}>
        <div className="brc-container" style={{ textAlign: "center" }}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(1rem,.9rem+.8vw,1.25rem)",
            textTransform: "uppercase",
            letterSpacing: ".04em",
            color: "var(--gold-400)",
            margin: 0,
            lineHeight: 1.4,
          }}>
            &ldquo;All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.&rdquo;
            <span style={{ color: "rgba(255,255,255,.45)", display: "block", marginTop: "6px", fontSize: ".8em" }}>
              2 Timothy 3:16–17
            </span>
          </p>
        </div>
      </section>

      {/* ── Explore section cards ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div className="brc-container">
          <div style={{ marginBottom: "clamp(1.5rem,4vw,3rem)" }}>
            <Eyebrow color="var(--gold-700)" withRule>Explore</Eyebrow>
            <h2 style={{
              fontSize: "clamp(1.8rem,1.2rem+2vw,2.6rem)",
              margin: "14px 0 0",
              lineHeight: 1,
            }}>
              Learn More About Us
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "14px",
          }}>
            {NAV_CARDS.map((card) => (
              <Link key={card.href} href={card.href} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px",
                  border: "1px solid var(--border-subtle)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  transition: "box-shadow .15s ease, border-color .15s ease",
                }}>
                  <div style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--gold-100)",
                    color: "var(--gold-700)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon name={card.icon} size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "1.15rem",
                      margin: "0 0 6px",
                      color: "var(--ink-900)",
                    }}>
                      {card.label}
                    </h3>
                    <p style={{
                      fontSize: "14px",
                      color: "var(--text-muted)",
                      margin: 0,
                      lineHeight: 1.55,
                    }}>
                      {card.desc}
                    </p>
                  </div>
                  <div style={{
                    marginTop: "auto",
                    fontFamily: "var(--font-semicond)",
                    fontWeight: 700,
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                    color: "var(--gold-700)",
                  }}>
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
