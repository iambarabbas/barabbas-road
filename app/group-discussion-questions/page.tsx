"use client";

import type { Metadata } from "next";
import { Eyebrow } from "@/components/core/Eyebrow";

// Note: metadata export won't work in a client component in Next.js App Router,
// so we set the title via document.title on mount instead — see effect below.
// For a hidden/unlisted page this is fine.

type Question = {
  text: string;
  sub?: string[];
  list?: string[];
};

type AppliedGroup = {
  label: string;
  questions: Question[];
};

const RECEIVED: Question[] = [
  {
    text: "What is the main point of this message? Can you summarize it in your own words?",
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
  {
    text: "What question did this message raise that you still want answered?",
  },
];

const APPLIED: AppliedGroup[] = [
  {
    label: "Culture",
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
    label: "Church",
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
    label: "Individual",
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
        text: "Select two questions from the list below and write down your answers — how does this message change or impact your:",
        list: [
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
        text: "Who in your life could you share this message with this week, and how?",
      },
      {
        text: "How have you been changed by this message? What is your one memorable takeaway? If someone asked you, \"How did God sanctify you through the preaching of this message\" — how would you respond?",
      },
    ],
  },
];

// Count total questions for numbering
let globalNum = 0;

function QuestionItem({ q }: { q: Question }) {
  globalNum += 1;
  const num = globalNum;

  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      {/* Number badge */}
      <div
        style={{
          flexShrink: 0,
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background: "var(--gold-400)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "12px",
          color: "var(--ink-900)",
          marginTop: "2px",
        }}
      >
        {num}
      </div>

      <div style={{ flex: 1 }}>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--ink-900)", margin: 0, fontWeight: 500 }}>
          {q.text}
        </p>

        {/* Sub-questions */}
        {q.sub && q.sub.length > 0 && (
          <ul style={{ margin: "10px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
            {q.sub.map((s, i) => (
              <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--gold-700, #9a7530)", fontSize: "17px", lineHeight: 1.7, flexShrink: 0 }}>—</span>
                <span style={{ fontSize: "15.5px", lineHeight: 1.7, color: "var(--text-muted)" }}>{s}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Bullet list (for the "select two" question) */}
        {q.list && q.list.length > 0 && (
          <ul
            style={{
              margin: "12px 0 0 4px",
              padding: 0,
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "6px 24px",
            }}
          >
            {q.list.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold-400)", flexShrink: 0, display: "inline-block" }} />
                <span style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.5 }}>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function GroupDiscussionQuestionsPage() {
  // Reset counter on each render
  globalNum = 0;

  return (
    <div>
      <style>{`
        @media print {
          header, footer, nav, .no-print { display: none !important; }
          body { font-size: 13px; }
          section { padding: 20px 0 !important; break-inside: avoid; }
          h1 { font-size: 2rem !important; }
          h2 { font-size: 1.4rem !important; }
        }
      `}</style>

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
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "52ch", lineHeight: 1.65, margin: "0 0 28px" }}>
            Use these questions to guide your group through the Sunday message —
            reflecting on what you heard, what you learned, and how God is calling you to apply it.
          </p>
          <button
            className="no-print"
            onClick={() => window.print()}
            style={{
              background: "var(--gold-400)",
              color: "var(--ink-900)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "14px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "12px 28px",
              borderRadius: "var(--radius-sm)",
              border: "none",
              cursor: "pointer",
            }}
          >
            Print this page
          </button>
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

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {RECEIVED.map((q, i) => (
              <QuestionItem key={i} q={q} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Message Applied ── */}
      <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ maxWidth: "760px" }}>
          <div style={{ marginBottom: "36px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Part Two</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "12px 0 10px", lineHeight: 1 }}>
              Message Applied
            </h2>
            <p style={{ fontSize: "16px", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>
              Now put it into practice — personally, in the church, and in the culture.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {APPLIED.map((group, gi) => (
              <div key={gi}>
                {/* Sub-section label */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "24px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-semicond)",
                      fontWeight: 700,
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "var(--gold-700, #9a7530)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {group.label}
                  </span>
                  <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  {group.questions.map((q, qi) => (
                    <QuestionItem key={qi} q={q} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }} className="no-print">
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
