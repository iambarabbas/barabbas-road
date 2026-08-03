import type { Metadata } from "next";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = { title: "Church Government" };

export default function ChurchGovernmentPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", color: "var(--white)", padding: "64px 0 0" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Leadership</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 32px",
              lineHeight: 0.98,
            }}
          >
            Church Government
          </h1>

          {/* Vimeo embed */}
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              borderRadius: "var(--radius-lg)",
              marginBottom: "0",
              background: "#000",
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/160823910"
              title="Church Government"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: "48px" }}>
          <AboutSubNav />
        </div>
      </section>

      {/* ── Body ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "760px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Elder Leadership</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-cond)",
                fontWeight: 800,
                fontSize: "clamp(1.8rem,1rem+2.5vw,2.8rem)",
                color: "var(--ink-900)",
                margin: "16px 0 40px",
                lineHeight: 1.05,
              }}
            >
              Answering the Key Questions About Elders
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "var(--text-body)",
                marginBottom: "28px",
              }}
            >
              The church, like every other dimension of God's kingdom manifested upon earth, depends upon its leadership. The strength, health, productivity, and fruitfulness of a church directly reflect the quality of its leadership.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "var(--text-body)",
                marginBottom: "28px",
              }}
            >
              Under the plan God has ordained for the church, leadership is a position of humble, loving service. Those who would lead God's people must exemplify purity, sacrifice, diligence, and devotion. And with the tremendous responsibility inherent in leading the flock of God comes potential for either great blessing or great judgment. Good leaders are doubly blessed; poor leaders are doubly chastened, for "from everyone who has been given much, much will be required" (Luke 12:48). James 3:1 says, "Let not many of you become teachers, my brethren, knowing that as such we will incur a stricter judgment."
            </p>

            {/* Pull quotes */}
            <blockquote
              style={{
                margin: "40px 0",
                padding: "24px 32px",
                borderLeft: "4px solid var(--gold-400)",
                background: "var(--surface-card)",
                borderRadius: "0 var(--radius-md) var(--radius-md) 0",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cond)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.15rem,0.8rem+1.5vw,1.55rem)",
                  lineHeight: 1.5,
                  color: "var(--ink-900)",
                  margin: "0 0 12px",
                }}
              >
                "From everyone who has been given much, much will be required."
              </p>
              <cite
                style={{
                  fontFamily: "var(--font-semicond)",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  color: "var(--gold-700)",
                  fontStyle: "normal",
                }}
              >
                Luke 12:48
              </cite>
            </blockquote>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "var(--text-body)",
                marginBottom: "28px",
              }}
            >
              Biblically, the focal point of all church leadership is the elder. It is the elders who are charged with teaching, feeding, and protecting the church, and it is the elders who are accountable to God on behalf of the church.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "var(--text-body)",
                marginBottom: "28px",
              }}
            >
              The word <em>elder</em> is of Old Testament Jewish origin. The primary Hebrew word for elder, <em>zaqen</em>, was used in Numbers 11:16 and Deuteronomy 27:1, of the seventy tribal leaders who assisted Moses. There it refers to a special category of men who were set apart for leadership—much like a senate—in Israel.
            </p>

            <blockquote
              style={{
                margin: "40px 0",
                padding: "24px 32px",
                borderLeft: "4px solid var(--gold-400)",
                background: "var(--surface-card)",
                borderRadius: "0 var(--radius-md) var(--radius-md) 0",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cond)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.15rem,0.8rem+1.5vw,1.55rem)",
                  lineHeight: 1.5,
                  color: "var(--ink-900)",
                  margin: "0 0 12px",
                }}
              >
                "Let not many of you become teachers, my brethren, knowing that as such we will incur a stricter judgment."
              </p>
              <cite
                style={{
                  fontFamily: "var(--font-semicond)",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  color: "var(--gold-700)",
                  fontStyle: "normal",
                }}
              >
                James 3:1
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
