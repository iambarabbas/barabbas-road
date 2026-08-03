import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Kids Church",
  description:
    "Children's Church at Barabbas Road is available for ages 1–11 every Sunday. Safe, Bible-based teaching using the Generations of Grace curriculum.",
  alternates: { canonical: "https://iambarabbas.github.io/barabbas-road/kids/" },
};

const SAFETY_ITEMS = [
  "Adults 18 years old and up are authorized to check-in and check-out a child",
  "At check-in, the authorized adult receives a pager number that will act as their ticket to check-out their child as well as emergency page if they are needed during service",
  "Each class contains at least one volunteer trained in First Aid and CPR",
  "All volunteers are screened, trained and background checked through Ministry Safe before serving in our classrooms",
  "We maintain a safe ratio of child to adult in each classroom",
];

const ILLNESS_ITEMS = [
  "Fever",
  "Rash or skin infection",
  "Persistent Cough",
  "Non-clear runny nose",
];

const CHECK_IN_CARDS = [
  {
    icon: "bookOpen",
    title: "Registration",
    body: "If you are a new visitor, we will need you to fill out a registration form with emergency information and contacts for your child. We suggest arriving around 9:45am to allow for a smooth drop-off.",
  },
  {
    icon: "clock",
    title: "Pager Number",
    body: "At check-in, the authorized adult receives a pager number that will act as their ticket to check-out their child as well as emergency page if they are needed during service.",
  },
  {
    icon: "phone",
    title: "Text Alerts",
    body: "Should any issues arise with your child during service you will be texted by one of the teachers to come to the classroom.",
  },
];

export default function KidsPage() {
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
            <Eyebrow color="var(--gold-400)" withRule>Kids Church</Eyebrow>
            <h1
              style={{
                color: "var(--white)",
                fontSize: "clamp(2.4rem,1.4rem+4vw,4rem)",
                margin: "16px 0 12px",
                lineHeight: 1,
              }}
            >
              Evangelize,<br />Encourage,<br />Equip
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,.65)",
                fontSize: "18px",
                maxWidth: "40ch",
                lineHeight: 1.6,
                marginTop: "16px",
              }}
            >
              Children&apos;s Church is available from ages 1–11 every Sunday
              during the 10am service.
            </p>
          </div>

          {/* Subsplash video embed */}
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(0,0,0,.5)",
            }}
          >
            <iframe
              src="https://subsplash.com/+495b/embed/mi/+mtxp8fm?audio&video&info&logoWatermark&shareable&embeddable"
              title="Discipleship Not Daycare — Barabbas Road Kids"
              allowFullScreen
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Want to Serve? ── */}
      <section style={{ background: "var(--white)", padding: "56px 0", borderBottom: "1px solid var(--border-subtle)" }}>
        <div
          className="brc-container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "clamp(2rem,5vw,5rem)",
            alignItems: "center",
          }}
        >
          <div>
            <Eyebrow color="var(--gold-700)" withRule>Get Involved</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(1.8rem,1.2rem+2vw,2.6rem)",
                margin: "12px 0 16px",
                lineHeight: 1.05,
                color: "var(--ink-900)",
              }}
            >
              Want to Serve?
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.75,
                color: "var(--text-body)",
                maxWidth: "56ch",
                margin: 0,
              }}
            >
              Our children&apos;s church is constantly growing. If you have a passion for
              serving children and nurturing them into adult followers of Christ, please
              contact Trace Trebilco, Director of Children&apos;s Church. To get a head start
              in the process please fill out the online service form.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <Link href="/kids/serve">
              <Button variant="primary" size="lg">Fill Out the Service Form</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Framework ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "720px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Framework</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 20px", lineHeight: 1 }}>
              Children&apos;s Church
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "0" }}>
              Children&apos;s Church is available from ages 1–11. We believe the best way to teach children God&apos;s word is by actually using it. This is why our teachers read straight from the bible during the lessons and why we chose a curriculum that represents our commitment to God&apos;s word. With our curriculum,{" "}
              <a
                href="https://gracecurriculum.org/collections/generations-of-grace"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--gold-700)", textDecoration: "underline" }}
              >
                Generations of Grace
              </a>
              , we take the children through the bible in three years.
            </p>
          </div>
        </div>
      </section>

      {/* ── Active Learning ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
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
            <Eyebrow color="var(--gold-700)" withRule>Active Learning Classes</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 20px", lineHeight: 1 }}>
              The Bible Brought to Life
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)" }}>
              Although we read from the bible, we know that the most effective way children learn is through experience. Our teachers bring the bible to life through role play, crafts, music, and games while helping children apply these truths to everyday situations. Each class learns the same bible lesson, but through an age-appropriate format and application.
            </p>
          </div>

          {/* Age groups */}
          <div style={{ display: "flex", flexDirection: "column", background: "var(--white)", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-md)" }}>
            {[
              { label: "Nursery",    ages: "Ages 1–2",  desc: "A safe, loving environment for your littlest ones while you worship." },
              { label: "Preschool",  ages: "Ages 3–5",  desc: "Bible stories, worship, and hands-on learning through play and crafts." },
              { label: "Elementary", ages: "Ages 6–11", desc: "The same Bible lesson as every class — taught at an age-appropriate level with games, role play, and real application." },
            ].map((a, i) => (
              <div
                key={a.label}
                style={{
                  padding: "24px 28px",
                  borderTop: i > 0 ? "1px solid var(--border-subtle)" : "none",
                  borderLeft: "4px solid var(--gold-400)",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "6px" }}>
                  <h3 style={{ fontSize: "1.3rem", margin: 0, color: "var(--ink-900)" }}>{a.label}</h3>
                  <span style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", fontSize: "12px", color: "var(--gold-700)" }}>{a.ages}</span>
                </div>
                <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "15px", lineHeight: 1.55 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Check-In Procedure ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "44px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Check-In Procedure</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 0", lineHeight: 1 }}>
              What to Expect
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "20px" }}>
            {CHECK_IN_CARDS.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-md)", background: "var(--gold-100)", color: "var(--gold-700)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <Icon name={item.icon} size={22} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: "1.1rem", margin: "0 0 10px", color: "var(--ink-900)" }}>{item.title}</h3>
                <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "15px", lineHeight: 1.65 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "44px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Safety</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 16px", lineHeight: 1 }}>
              Policies We Have in Place
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.65, margin: 0 }}>
              Safety is important to us, therefore we have put several policies in place:
            </p>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: "14px", maxWidth: "760px" }}>
            {SAFETY_ITEMS.map((s) => (
              <li key={s} style={{ display: "flex", gap: "14px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-body)", lineHeight: 1.6 }}>
                <span style={{ flexShrink: 0, marginTop: "9px", width: "7px", height: "7px", borderRadius: "50%", background: "var(--gold-400)", display: "block" }} />
                {s}
              </li>
            ))}
          </ul>
          <p style={{ color: "var(--text-subtle)", fontSize: "14px", margin: 0 }}>
            Background checks are conducted through{" "}
            <a href="https://ministrysafe.com/california/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold-700)" }}>
              Ministry Safe
            </a>.
          </p>
        </div>
      </section>

      {/* ── Wellness + Potty Training ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div
          className="brc-container"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "start" }}
        >
          {/* Wellness */}
          <div>
            <Eyebrow color="var(--gold-700)" withRule>Wellness Policy</Eyebrow>
            <h2 style={{ fontSize: "clamp(1.8rem,1.4rem+1.5vw,2.4rem)", margin: "16px 0 16px", lineHeight: 1.05 }}>
              Please Keep Your Child Home
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.65, marginBottom: "20px" }}>
              In order to keep our classrooms a safe and healthy place, we ask that you keep your child in your care if they have experienced the following symptoms within the past 24 hours:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {ILLNESS_ITEMS.map((s) => (
                <li key={s} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "16px", color: "var(--text-body)" }}>
                  <span style={{ flexShrink: 0, width: "7px", height: "7px", borderRadius: "50%", background: "var(--gold-400)", display: "block" }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Potty Training */}
          <div style={{ background: "var(--ink-900)", borderRadius: "var(--radius-lg)", padding: "36px", color: "var(--white)" }}>
            <Eyebrow color="var(--gold-400)" withRule>Potty Training</Eyebrow>
            <p style={{ color: "rgba(255,255,255,.75)", fontSize: "16px", lineHeight: 1.75, marginTop: "16px", marginBottom: "16px" }}>
              Parents, in order to better minister and care for your child, we ask that you please send your child in a pull-up if he/she is potty training but is not yet potty-trained. We describe a child as potty trained if the parent can drop off the child with no special instructions about taking the child to the bathroom. The potty trained child will tell a worker if they need to go.
            </p>
            <p style={{ color: "rgba(255,255,255,.75)", fontSize: "16px", lineHeight: 1.75, margin: 0 }}>
              You are also welcome to stay with your child in the classroom while they are potty training to maintain consistency in the potty training process. As you know, accidents do happen. However, our goal is to provide the best possible care for your child and that includes maintaining a clean and sanitary room.
            </p>
          </div>
        </div>
      </section>

      {/* ── Meet the Pastor ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div
          className="brc-container brc-welcome"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "start" }}
        >
          <div>
            <Eyebrow color="var(--gold-700)" withRule>Children &amp; Youth Pastor</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 20px", lineHeight: 1 }}>
              Trace Trebilco
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "20px" }}>
              Trace is originally from Chicago. Him and his wife, Jordan, moved to San Diego for a relocation for work, but ended up staying in SD for the church. He has served in the Children&apos;s Ministry since 2016. Trace has a heart for evangelism and discipleship within the church and specifically with families. Trace has four young children, Wyatt, Charlotte, Wesley and Elliot. He enjoys cars, reading, hiking, and surfing.
            </p>
            <a
              href="mailto:trace@barabbas.com"
              style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: ".06em", color: "var(--gold-700)", textDecoration: "none" }}
            >
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
          <Eyebrow color="var(--gold-400)" align="center" withRule>Questions?</Eyebrow>
          <h2 style={{ color: "var(--white)", fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)", margin: "18px 0 16px", lineHeight: 1 }}>
            We&apos;d Love to Help
          </h2>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "44ch", marginBottom: "28px", lineHeight: 1.6 }}>
            Reach out before your first visit and we&apos;ll walk you through everything — drop-off, pickup, and anything else on your mind.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact"><Button variant="primary" size="lg">Get in Touch</Button></Link>
            <Link href="/new-here"><Button variant="outline-light" size="lg">Plan Your Visit</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
