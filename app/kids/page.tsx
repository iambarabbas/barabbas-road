import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Kids Church",
  description:
    "Children's Church at Barabbas Road is available for ages 1–11 every Sunday. Safe, Bible-based teaching using the Generations of Grace curriculum.",
};

const AGES = [
  {
    label: "Nursery",
    ages: "Ages 1 – 2",
    desc: "A safe, loving environment for your littlest ones while you worship.",
  },
  {
    label: "Preschool",
    ages: "Ages 3 – 5",
    desc: "Bible stories, worship, and hands-on learning through play and crafts.",
  },
  {
    label: "Elementary",
    ages: "Ages 6 – 11",
    desc: "The same Bible lesson as every class — taught at an age-appropriate level with games, role play, and real application.",
  },
];

const SAFETY = [
  {
    icon: "users",
    text: "All volunteers are screened, trained, and background-checked through Ministry Safe before serving in any classroom.",
  },
  {
    icon: "heart",
    text: "We maintain a safe child-to-adult ratio in every classroom at all times.",
  },
  {
    icon: "heart",
    text: "Every class has at least one volunteer trained in First Aid and CPR.",
  },
  {
    icon: "phone",
    text: "You will be texted immediately if anything comes up with your child during service.",
  },
  {
    icon: "clock",
    text: "At check-in you receive a pager number — your ticket to check your child out and your emergency contact number during service.",
  },
  {
    icon: "bookOpen",
    text: "Only adults 18 and older are authorized to check in or check out a child.",
  },
];

const ILLNESS = [
  "Fever",
  "Rash or skin infection",
  "Persistent cough",
  "Non-clear runny nose",
];

export default function KidsPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>For Families</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 12px",
              lineHeight: 0.98,
            }}
          >
            Kids Church
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.65)",
              fontSize: "18px",
              maxWidth: "54ch",
              lineHeight: 1.6,
            }}
          >
            Children&apos;s Church runs every Sunday during the 10am service
            for ages 1–11. Your kids are safe, loved, and learning straight
            from God&apos;s Word.
          </p>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section
        style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}
      >
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
            <Eyebrow color="var(--gold-700)" withRule>How We Teach</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)",
                margin: "16px 0 20px",
                lineHeight: 1,
              }}
            >
              Straight From the Bible
            </h2>
            <p
              style={{
                color: "var(--text-body)",
                fontSize: "17px",
                lineHeight: 1.7,
                marginBottom: "18px",
              }}
            >
              We believe the best way to teach children God&apos;s Word is by
              actually using it. Our teachers read directly from the Bible
              during every lesson.
            </p>
            <p
              style={{
                color: "var(--text-body)",
                fontSize: "17px",
                lineHeight: 1.7,
                marginBottom: "18px",
              }}
            >
              We use the{" "}
              <a
                href="https://gracecurriculum.org/collections/generations-of-grace"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--gold-700)", textDecoration: "underline" }}
              >
                Generations of Grace
              </a>{" "}
              curriculum, which takes children through the entire Bible in
              three years.
            </p>
            <p
              style={{
                color: "var(--text-body)",
                fontSize: "17px",
                lineHeight: 1.7,
              }}
            >
              Every class learns the same Bible lesson — brought to life through
              role play, crafts, music, and games — in an age-appropriate format
              that helps kids apply truth to everyday life.
            </p>
          </div>

          {/* Age groups */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              background: "var(--white)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            {AGES.map((a, i) => (
              <div
                key={a.label}
                style={{
                  padding: "28px 32px",
                  borderTop: i > 0 ? "1px solid var(--border-subtle)" : "none",
                  borderLeft: "4px solid var(--gold-400)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "12px",
                    marginBottom: "8px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      margin: 0,
                      color: "var(--ink-900)",
                    }}
                  >
                    {a.label}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-semicond)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                      fontSize: "12px",
                      color: "var(--gold-700)",
                    }}
                  >
                    {a.ages}
                  </span>
                </div>
                <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "15px", lineHeight: 1.55 }}>
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── First Visit / Check-in ── */}
      <section
        style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}
      >
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "48px" }}>
            <Eyebrow color="var(--gold-700)" withRule>First Visit?</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)",
                margin: "16px 0 16px",
                lineHeight: 1,
              }}
            >
              Here&apos;s What to Expect
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "17px",
                lineHeight: 1.65,
              }}
            >
              New visitors will need to fill out a registration form with
              emergency information and contacts for your child. We suggest
              arriving around{" "}
              <strong style={{ color: "var(--ink-900)" }}>9:45am</strong> to
              allow time for a smooth drop-off before service begins.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                icon: "bookOpen",
                title: "Registration",
                body: "Fill out a quick form at drop-off with your child's emergency contacts. First timers: plan to arrive by 9:45am.",
              },
              {
                icon: "clock",
                title: "Check-In Pager",
                body: "You'll receive a pager number at check-in. This is your child's release ticket and how we'll reach you if needed during service.",
              },
              {
                icon: "phone",
                title: "Text Alerts",
                body: "If anything comes up with your child during service, a teacher will text you directly — no interrupting the service.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--surface-page)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--gold-100)",
                    color: "var(--gold-700)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Icon name={item.icon} size={22} strokeWidth={1.8} />
                </div>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    margin: "0 0 10px",
                    color: "var(--ink-900)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    margin: 0,
                    fontSize: "15px",
                    lineHeight: 1.6,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety ── */}
      <section
        style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}
      >
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "48px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Your Child&apos;s Safety</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)",
                margin: "16px 0 16px",
                lineHeight: 1,
              }}
            >
              We Take It Seriously
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.65 }}>
              Every policy we have exists for one reason: to make sure your
              child is protected while they&apos;re with us.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))",
              gap: "16px",
            }}
          >
            {SAFETY.map((s) => (
              <div
                key={s.text}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  padding: "20px",
                  background: "var(--white)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--gold-100)",
                    color: "var(--gold-700)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Icon name={s.icon} size={18} strokeWidth={1.8} />
                </div>
                <p style={{ color: "var(--text-body)", margin: 0, fontSize: "15px", lineHeight: 1.6 }}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          {/* Ministry Safe note */}
          <p style={{ marginTop: "28px", color: "var(--text-muted)", fontSize: "14px" }}>
            Background checks are conducted through{" "}
            <a
              href="https://ministrysafe.com/california/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--gold-700)" }}
            >
              Ministry Safe
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Illness Policy ── */}
      <section
        style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}
      >
        <div
          className="brc-container"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "start" }}
        >
          {/* Illness */}
          <div>
            <Eyebrow color="var(--gold-700)" withRule>Keeping Everyone Healthy</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(1.8rem,1.4rem+1.5vw,2.4rem)",
                margin: "16px 0 16px",
                lineHeight: 1.05,
              }}
            >
              Please Keep Your Child Home If They Have Had Any of the
              Following in the Past 24 Hours
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {ILLNESS.map((s) => (
                <li
                  key={s}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    fontSize: "16px",
                    color: "var(--text-body)",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "var(--gold-400)",
                      display: "block",
                    }}
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Potty training */}
          <div
            style={{
              background: "var(--ink-900)",
              borderRadius: "var(--radius-lg)",
              padding: "36px",
              color: "var(--white)",
            }}
          >
            <Eyebrow color="var(--gold-400)" withRule>Potty Training Note</Eyebrow>
            <p
              style={{
                color: "rgba(255,255,255,.75)",
                fontSize: "16px",
                lineHeight: 1.7,
                marginTop: "16px",
                marginBottom: 0,
              }}
            >
              If your child is potty training but is not yet potty-trained,
              please send them in a pull-up. A child is considered potty trained
              when they can be dropped off with no special bathroom instructions
              and will tell a worker themselves when they need to go.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,.75)",
                fontSize: "16px",
                lineHeight: 1.7,
                marginTop: "14px",
                marginBottom: 0,
              }}
            >
              You&apos;re also welcome to stay in the classroom with your child
              during the potty training process — we&apos;ll work with you to
              make it smooth. Accidents happen, and our goal is always to
              provide the best care possible.
            </p>
          </div>
        </div>
      </section>

      {/* ── Meet the Pastor ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div
          className="brc-container brc-welcome"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem,5vw,5rem)",
            alignItems: "start",
          }}
        >
          <div>
            <Eyebrow color="var(--gold-700)" withRule>Children &amp; Youth Pastor</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 20px", lineHeight: 1 }}>
              Trace Trebilco
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--text-body)", marginBottom: "20px" }}>
              Trace is originally from Chicago. Him and his wife, Jordan, moved to San Diego for a relocation for work, but ended up staying in SD for the church. He has served in the Children&apos;s Ministry since 2016. Trace has a heart for evangelism and discipleship within the church and specifically with families. Trace has four young children, Wyatt, Charlotte, Wesley and Elliot. He enjoys cars, reading, hiking, and surfing.
            </p>
            <a
              href="mailto:trace@barabbas.com"
              style={{
                fontFamily: "var(--font-semicond)",
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: ".06em",
                color: "var(--gold-700)",
                textDecoration: "none",
              }}
            >
              trace@barabbas.com
            </a>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/trebilco-family.jpg`}
            alt="Trace Trebilco and family"
            style={{
              width: "100%",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-md)",
              aspectRatio: "4/3",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div
          className="brc-container"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Eyebrow color="var(--gold-400)" align="center" withRule>
            Questions?
          </Eyebrow>
          <h2
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)",
              margin: "18px 0 16px",
              lineHeight: 1,
            }}
          >
            We&apos;d Love to Help
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,.65)",
              fontSize: "18px",
              maxWidth: "44ch",
              marginBottom: "28px",
              lineHeight: 1.6,
            }}
          >
            Reach out before your first visit and we&apos;ll walk you through
            everything — drop-off, pickup, and anything else on your mind.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact">
              <Button variant="primary" size="lg">Get in Touch</Button>
            </Link>
            <Link href="/new-here">
              <Button variant="outline-light" size="lg">Plan Your Visit</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
