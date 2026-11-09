import type { Metadata } from "next";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = {
  title: "Group Discussion Questions",
  description: "Group discussion questions for Barabbas Road Church messages.",
  robots: { index: false, follow: false },
};

type Question = {
  text: string;
  sub?: string[];
};

type Section = {
  id: string;
  label: string;
  title: string;
  questions: Question[];
};

const RECEIVED_QUESTIONS: Question[] = [
  {
    text: "What is the main point of this message? (Could you summarize it in your own words?)",
  },
  {
    text: "What is something new that you learned?",
    sub: [
      "What was your knowledge in this area before you heard this message?",
      "Any change you will make in your daily life based upon this new knowledge?",
    ],
  },
  {
    text: "What reference verse stands out to you and why?",
  },
  {
    text: "Did the message pair with your weekly Bible reading in any ways?",
  },
  {
    text: "What are some truths that stand out to you in this message?",
    sub: [
      "Any life testimonies that you can think of that are good examples of these truths?",
    ],
  },
  {
    text: "What character or attribute of God stands out to you the most in this message and why?",
    sub: [
      "Any specific verse that puts this attribute on display?",
    ],
  },
];

const APPLIED_SECTIONS: Section[] = [
  {
    id: "culture",
    label: "Message Applied",
    title: "Culture",
    questions: [
      {
        text: "What are the lies of the world or the devil that we need to be aware of that are antithetical to this message?",
      },
      {
        text: "What do you think the cultural animosity is towards this message if we apply it rightly?",
      },
    ],
  },
  {
    id: "church",
    label: "Message Applied",
    title: "Church",
    questions: [
      {
        text: "How do you see this message impacting the church corporately — locally and globally?",
        sub: [
          "What prayers would be good to pray for the church body based on this message?",
        ],
      },
    ],
  },
  {
    id: "individual",
    label: "Message Applied",
    title: "Individual",
    questions: [
      {
        text: "Is there a sin in your life that this message convicted you of?",
        sub: [
          "Why do you think this was a blind spot in your sanctification before this message?",
        ],
      },
      {
        text: "How did the message address any specific life circumstance you are going through right now?",
      },
      {
        text: "Select two questions from the list below and write down your answer to them — how does this message change or impact your:",
        sub: [
          "Prayer Life?",
          "Evangelism?",
          "Bible Reading?",
          "Christian Relationships?",
          "Non-Christian Relationships?",
          "Parenting?",
          "Role as a Husband or Wife?",
          "Workplace?",
        ],
      },
      {
        text: "How have you been changed by this message? What is your one memorable takeaway? If someone asked you, \"How did God sanctify you through the preaching of this message\" — how would you respond?",
      },
    ],
  },
];

function QuestionList({ questions }: { questions: Question[] }) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "20px" }}>
      {questions.map((q, i) => (
        <li key={i}>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--ink-900)", margin: "0 0 10px", fontWeight: 500 }}>
            {q.text}
          </p>
          {q.sub && q.sub.length > 0 && (
            <ul style={{ margin: "8px 0 0 24px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {q.sub.map((s, j) => (
                <li key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--gold-600, #b8860b)", fontSize: "17px", lineHeight: 1.7, flexShrink: 0, marginTop: "1px" }}>—</span>
                  <span style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--text-muted)" }}>{s}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function GroupDiscussionQuestionsPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Small Groups</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 18px",
              lineHeight: 0.98,
            }}
          >
            Group Discussion Questions
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "52ch", lineHeight: 1.65, margin: 0 }}>
            Use these questions to guide your group through the Sunday message —
            reflecting on what you heard, what you learned, and how God is calling you to apply it.
          </p>
        </div>
      </section>

      {/* ── Message Received ── */}
      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="brc-container" style={{ maxWidth: "760px" }}>
          <div style={{ marginBottom: "36px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Part One</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "12px 0 10px", lineHeight: 1 }}>
              Message Received
            </h2>
            <p style={{ fontSize: "16px", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>
              Did you understand what you learned? Start here.
            </p>
          </div>
          <QuestionList questions={RECEIVED_QUESTIONS} />
        </div>
      </section>

      {/* ── Message Applied sections ── */}
      {APPLIED_SECTIONS.map((section, i) => (
        <section
          key={section.id}
          style={{
            background: i % 2 === 0 ? "var(--surface-card)" : "var(--surface-page)",
            padding: "var(--section-y) 0",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <div className="brc-container" style={{ maxWidth: "760px" }}>
            <div style={{ marginBottom: "36px" }}>
              <Eyebrow color="var(--gold-700)" withRule>{section.label}</Eyebrow>
              <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "12px 0 10px", lineHeight: 1 }}>
                {section.title}
              </h2>
            </div>

            {/* Individual section gets a resource link */}
            {section.id === "individual" && (
              <div
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border-subtle)",
                  borderLeft: "4px solid var(--gold-400)",
                  borderRadius: "var(--radius-sm)",
                  padding: "16px 20px",
                  marginBottom: "28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "14px", color: "var(--text-muted)", fontFamily: "var(--font-semicond)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em" }}>
                  Resource
                </span>
                <a
                  href="http://www.bbschurch.org/podcast/apps/Tools_Week_2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "15px", color: "var(--gold-700, #9a7530)", textDecoration: "underline", wordBreak: "break-all" }}
                >
                  Tools Week 2 — Individual Application Guide (PDF)
                </a>
              </div>
            )}

            <QuestionList questions={section.questions} />
          </div>
        </section>
      ))}

      {/* ── Footer CTA ── */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto" }}>
          <Eyebrow color="var(--gold-400)" withRule align="center">Keep Going</Eyebrow>
          <h2 style={{ color: "var(--white)", fontSize: "clamp(2rem,1.2rem+3vw,3rem)", margin: "16px 0 14px", lineHeight: 1 }}>
            Listen to the Message
          </h2>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "17px", marginBottom: "28px", lineHeight: 1.65 }}>
            Catch up on any Sunday sermon in our full archive — available to stream anytime.
          </p>
          <a
            href="/sermons/"
            style={{
              display: "inline-block",
              background: "var(--gold-400)",
              color: "var(--ink-900)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "15px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "14px 32px",
              borderRadius: "var(--radius-sm)",
              textDecoration: "none",
            }}
          >
            Sermon Archive
          </a>
        </div>
      </section>
    </div>
  );
}
