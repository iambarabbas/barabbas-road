import type { Metadata } from "next";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = { title: "Church Government" };

export default function ChurchGovernmentPage() {
  return (
    <div>
      <section style={{ background: "var(--ink-900)", color: "var(--white)", padding: "64px 0 0" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Polity</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 32px", lineHeight: 0.98 }}>
            Church Government
          </h1>
        </div>
        <AboutSubNav />
      </section>

      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "760px" }}>

            <h2 style={{ fontSize: "clamp(1.8rem,1.2rem+2vw,2.4rem)", margin: "0 0 24px", lineHeight: 1.1 }}>
              Answering the Key Questions About Elders
            </h2>

            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "20px" }}>
              The church, like every other dimension of God's kingdom manifested upon earth, depends upon its leadership. The strength, health, productivity, and fruitfulness of a church directly reflect the quality of its leadership.
            </p>

            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "20px" }}>
              Under the plan God has ordained for the church, leadership is a position of humble, loving service. Those who would lead God's people must exemplify purity, sacrifice, diligence, and devotion. And with the tremendous responsibility inherent in leading the flock of God comes potential for either great blessing or great judgment. Good leaders are doubly blessed; poor leaders are doubly chastened, for &ldquo;from everyone who has been given much, much will be required&rdquo; (Luke 12:48). James 3:1 says, &ldquo;Let not many of you become teachers, my brethren, knowing that as such we will incur a stricter judgment.&rdquo;
            </p>

            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "40px" }}>
              Biblically, the focal point of all church leadership is the elder. It is the elders who are charged with teaching, feeding, and protecting the church, and it is the elders who are accountable to God on behalf of the church.
            </p>

            {[
              {
                q: "What is the proper understanding of the term elder?",
                a: "The word elder is of Old Testament Jewish origin. The primary Hebrew word for elder, zaqen, was used of the seventy tribal leaders who assisted Moses — a special category of men set apart for leadership in Israel, charged with judging the people. The Greek word presbuteros is used about seventy times in the New Testament and has reference to mature age and proven character.",
              },
              {
                q: "How is the term elder used in reference to the church?",
                a: "The New Testament church was initially Jewish, so the concept of elder rule was naturally adopted. Elder was the only commonly used Jewish term for leadership free from any connotation of either the monarchy or the priesthood — fitting because in the church each believer is a co-regent with Christ, and all believers are priests. Presbuteros is used nearly twenty times in Acts and the epistles in reference to a unique group of leaders in the church.",
              },
              {
                q: "How is the elder related to the bishop and the pastor?",
                a: "Bishops and pastors are not distinct from elders; the terms are simply different ways of identifying the same people. The qualifications for a bishop in 1 Timothy 3:1–7 and those for an elder in Titus 1:6–9 are unmistakably parallel. First Peter 5:1–2 brings all three terms together: Peter instructs the elders (presbuteros) to be good bishops (episkopos) as they pastor (poimainō). The term elder emphasizes who the man is. Bishop speaks of what he does. And pastor deals with how he feels.",
              },
              {
                q: "What is the role of an elder?",
                a: "Elders are charged with teaching, feeding, and protecting the flock of God. They are accountable to God on behalf of the church. They are to shepherd the flock willingly, not by compulsion, not for dishonest gain, but eagerly, not lording it over those entrusted to them, but being examples to the flock (1 Peter 5:2–3).",
              },
              {
                q: "What are the qualifications for an elder?",
                a: "The qualifications are set forth primarily in 1 Timothy 3:1–7 and Titus 1:6–9. They emphasize character above all: an elder must be above reproach, the husband of one wife, sober-minded, self-controlled, respectable, hospitable, able to teach, not a drunkard, not violent but gentle, not quarrelsome, not a lover of money, managing his own household well, not a recent convert, and well thought of by outsiders.",
              },
              {
                q: "Should there be a plurality of elders?",
                a: "Yes. The New Testament consistently portrays a plurality of elders governing each local church. Paul and Barnabas appointed elders in every church (Acts 14:23). Every church we know of in the New Testament is specifically said to have had elders (plural). A plurality of godly men governing the church provides a system of checks and balances that protects the flock.",
              },
            ].map((item, i) => (
              <div
                key={item.q}
                style={{
                  padding: "28px 0",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <h3 style={{ fontSize: "19px", fontWeight: 700, margin: "0 0 12px", lineHeight: 1.2, color: "var(--text-heading)" }}>
                  {i + 1}. {item.q}
                </h3>
                <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-body)", margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
