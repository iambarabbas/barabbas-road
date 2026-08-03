import type { Metadata } from "next";
import { Eyebrow } from "@/components/core/Eyebrow";
import { PaperCard } from "@/components/resources/PaperCard";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Pastoral papers, theological studies, and position papers from Barabbas Road Church — exploring doctrine, Scripture, and everyday Christian living.",
  alternates: { canonical: "https://iambarabbas.github.io/barabbas-road/resources/" },
};

type Paper = { title: string; description: string; file: string; type: "pdf" | "doc" };
type Section = { id: string; title: string; description: string; papers: Paper[] };

const SECTIONS: Section[] = [
  {
    id: "theology",
    title: "Theology",
    description: "Systematic theological papers exploring the core doctrines of salvation.",
    papers: [
      {
        title: "Justification: Declared Righteous or Not at All",
        description:
          "The doctrine of justification is the foundational article upon which the church stands or falls. An exposition of imputed righteousness, faith alone, and the finished verdict of the cross.",
        file: "justification.pdf",
        type: "pdf",
      },
      {
        title: "Sanctification: The Present Work of Salvation",
        description:
          "A study distinguishing justification, sanctification, and glorification — and correcting the false views of Rome, the Holiness movements, and antinomianism that collapse or deny them.",
        file: "sanctification.pdf",
        type: "pdf",
      },
      {
        title: "Regeneration and the Will",
        description:
          "Man's problem is not freedom of will — it's nature of will. An examination of why regeneration must precede faith, and why God's sovereign grace is the only hope for the dead sinner.",
        file: "regeneration-and-the-will.pdf",
        type: "pdf",
      },
      {
        title: "Union with Christ",
        description:
          "The doctrine of union with Christ is the center of salvation — not one doctrine among many. Every grace, every blessing, every hope exists only in Him. What union means for identity, suffering, and the Christian life.",
        file: "union-with-christ.pdf",
        type: "pdf",
      },
    ],
  },
  {
    id: "biblical-studies",
    title: "Biblical Studies",
    description: "Exegetical papers and academic studies on specific biblical texts and themes.",
    papers: [
      {
        title: "Isaiah 6-7 in Context",
        description:
          "An exegetical seminary paper examining Isaiah chapters 6 and 7 in their literary and theological context — exploring the sovereignty of God, Isaiah's commissioning, and the Immanuel prophecy as a hinge point in redemptive history.",
        file: "isaiah-6-7-in-context.pdf",
        type: "pdf",
      },
      {
        title: "The Transfiguration of the Perfect Man",
        description:
          "A seminary thesis arguing that the Transfiguration was recorded not primarily to emphasize Christ's Divinity but His perfect humanity — the second Adam bearing God's image in perfect obedient submission to the Father.",
        file: "transfiguration-of-the-perfect-man.pdf",
        type: "pdf",
      },
      {
        title: "The Pre-Tribulation Army of Heaven",
        description:
          "A Master of Theology thesis examining the identity of the armies of Heaven in Revelation 19:14, arguing that this army includes the glorified Church and lending credibility to the pre-tribulational rapture position.",
        file: "pre-trib-army-of-heaven.pdf",
        type: "pdf",
      },
      {
        title: "Two Paradigms: Israel and the Church",
        description:
          "A case for maintaining the distinction between Israel and the Church — examining Isaiah 49, Jeremiah 31, Zechariah 12-14, Acts 1, Romans 9-11, and Revelation to show why God's faithfulness to Israel demands their distinction.",
        file: "two-paradigms-israel-and-church.pdf",
        type: "pdf",
      },
    ],
  },
  {
    id: "church-and-scripture",
    title: "The Church & Scripture",
    description: "Papers on the authority and sufficiency of Scripture and the nature of the Church.",
    papers: [
      {
        title: "The Battle for Inerrancy",
        description:
          "An examination of the doctrine of biblical inerrancy — its theological foundations, the forces arrayed against it, and why the Church's faithfulness to Scripture is the defining battle of every generation.",
        file: "the-battle-for-inerrancy.doc",
        type: "doc",
      },
      {
        title: "All Scripture Is Given by Inspiration of God",
        description:
          "An exposition of 2 Timothy 3:16 and the doctrine of biblical inspiration — what it means that Scripture is 'God-breathed' and why this foundation is essential to everything the Church believes and does.",
        file: "all-scripture-is-inspired.doc",
        type: "doc",
      },
      {
        title: "The Seeker-Friendly Church of Me",
        description:
          "A pastoral critique of seeker-sensitive church models and consumer Christianity — what happens when the church shapes itself around the preferences of the culture rather than the Word of God.",
        file: "seeker-friendly-church.doc",
        type: "doc",
      },
      {
        title: "A Philosophy of Christian Education",
        description:
          "A working philosophy of Christian education rooted in the Great Commission — making disciple-making disciples through evangelism, Scripture, community, worship, and investment in others.",
        file: "philosophy-of-christian-education.pdf",
        type: "pdf",
      },
      {
        title: "Romans 1 and the Age of Secularism",
        description:
          "An analysis of Romans 1:18-32 through the cultural lens of Charles Taylor and Francis Schaeffer — tracing the arc from the Reformation through the Enlightenment to postmodern secularism, and what the Church must do in response.",
        file: "romans-1-age-of-secularism.pdf",
        type: "pdf",
      },
    ],
  },
  {
    id: "pastoral",
    title: "Pastoral & Practical",
    description: "Papers on everyday Christian living, pastoral care, and spiritual growth.",
    papers: [
      {
        title: "Remarriage After Divorce",
        description:
          "What does Scripture actually teach about remarriage after divorce? A careful look at Jesus' words in Matthew 19, Paul's teaching in 1 Corinthians 7, and the relationship between genuine repentance and freedom from the marriage bond.",
        file: "remarriage-after-divorce.pdf",
        type: "pdf",
      },
      {
        title: "Theology of Suffering",
        description:
          "A biblical exploration of why God allows suffering, what Scripture teaches about pain and hardship, and how the gospel shapes a Christian's response to the darkest seasons of life.",
        file: "theology-of-suffering.doc",
        type: "doc",
      },
      {
        title: "Biblical Self-Image vs. Self",
        description:
          "What does the Bible say about self-image and identity? A pastoral examination of how union with Christ obliterates every competing identity the world assigns — and what it means to find yourself only in Him.",
        file: "biblical-self-image.doc",
        type: "doc",
      },
      {
        title: "How to Handle a Crisis with a Non-Believer",
        description:
          "Practical biblical guidance for walking alongside unbelieving friends or family members through a crisis — how to communicate truth with grace, avoid common pitfalls, and point people toward Christ.",
        file: "crisis-with-non-believer.doc",
        type: "doc",
      },
      {
        title: "The Four Stages of Biblical Sight",
        description:
          "A simple framework for how God trains us to see and understand Scripture — from unconscious incompetence to the unconscious competence where the Word begins to open itself and connections speak without effort.",
        file: "four-stages-of-biblical-sight.pdf",
        type: "pdf",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container" style={{ maxWidth: "720px" }}>
          <Eyebrow color="var(--gold-400)" withRule>Pastoral Papers</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 18px",
              lineHeight: 0.98,
            }}
          >
            Resources
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "52ch", lineHeight: 1.65, margin: 0 }}>
            Pastoral papers, theological studies, and position papers from the
            teaching ministry of Barabbas Road Church — for anyone who wants to
            go deeper in doctrine, Scripture, and everyday Christian living.
          </p>
        </div>
      </section>

      {/* ── Sections ── */}
      {SECTIONS.map((section, si) => (
        <section
          key={section.id}
          style={{
            background: "var(--surface-card)",
            padding: "var(--section-y) 0",
          }}
        >
          <div className="brc-container">
            {/* Section header */}
            <div style={{ maxWidth: "600px", marginBottom: "36px" }}>
              <Eyebrow color="var(--gold-700)" withRule>{section.title}</Eyebrow>
              <h2
                style={{
                  fontSize: "clamp(1.8rem,1.2rem+2vw,2.4rem)",
                  margin: "12px 0 10px",
                  lineHeight: 1.05,
                }}
              >
                {section.title}
              </h2>
              <p style={{ fontSize: "16px", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                {section.description}
              </p>
            </div>

            {/* Cards grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {section.papers.map((paper, i) => (
                <PaperCard
                  key={paper.file}
                  number={String(i + 1).padStart(2, "0")}
                  title={paper.title}
                  description={paper.description}
                  file={paper.file}
                  type={paper.type}
                  base={BASE}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Podcast CTA ── */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
          <Eyebrow color="var(--gold-400)" withRule align="center">Also Worth Your Time</Eyebrow>
          <h2 style={{ color: "var(--white)", fontSize: "clamp(2rem,1.2rem+3vw,3rem)", margin: "16px 0 14px", lineHeight: 1 }}>
            A Lot of Words Podcast
          </h2>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "17px", marginBottom: "28px", lineHeight: 1.65 }}>
            Pastor Matt Smith and Brett Schoeneck answer real questions about faith, Scripture, theology, and everyday Christian living. New episodes every week.
          </p>
          <a
            href="/podcast"
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
            Listen to the Podcast
          </a>
        </div>
      </section>
    </div>
  );
}
