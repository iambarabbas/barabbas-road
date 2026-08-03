import type { Metadata } from "next";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = {
  title: "Church History",
  description:
    "The story of Barabbas Road Church — from a 10-person evening service in a San Diego storage room in 2006 to a thriving Bible-teaching congregation in Miramar today.",
  alternates: { canonical: "https://barabbas.com/about/church-history/" },
};

const TIMELINE = [
  { year: "2002", event: "Pastor Matt Smith gets saved in New York City. After reading through scripture he feels called to return to his hometown and start seminary." },
  { year: "2006", event: "An evening service is started with only 10 people in a storage room at First Baptist Church of Clairemont." },
  { year: "2007", event: "Barabbas Road Church moves the evening service to the main sanctuary of FBCC." },
  { year: "2008", event: "Barabbas Road moves to the Soledad Club on the border of Pacific Beach and La Jolla." },
  { year: "2010", event: "Barabbas Road moves into Pacific Beach Middle School." },
  { year: "2011", event: "Barabbas Road Uganda is launched." },
  { year: "2014", event: "Barabbas Road opens the Ministry Center in BayHo for all of its mid-week events and classes." },
  { year: "2017", event: "Barabbas Road moves into James Madison High School." },
  { year: "2020", event: "Barabbas Road opens a 9,000 sq. ft. Ministry Center in Kearny Mesa." },
  { year: "2024", event: "Barabbas Road opens a 20,000 sq. ft. church building in Mira Mar." },
];

export default function ChurchHistoryPage() {
  return (
    <div>
      <section style={{ background: "var(--ink-900)", color: "var(--white)", padding: "64px 0 0" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Our Story</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 32px", lineHeight: 0.98 }}>
            Church History
          </h1>
        </div>
        <AboutSubNav />
      </section>

      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "680px" }}>
            <div style={{ position: "relative", paddingLeft: "32px", borderLeft: "2px solid var(--border-subtle)" }}>
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  style={{
                    position: "relative",
                    paddingBottom: i === TIMELINE.length - 1 ? "0" : "40px",
                  }}
                >
                  {/* Dot */}
                  <div style={{
                    position: "absolute",
                    left: "-41px",
                    top: "4px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "var(--gold-400)",
                    border: "3px solid var(--surface-page)",
                    boxSizing: "border-box",
                  }} />
                  <div style={{
                    fontFamily: "var(--font-cond)",
                    fontWeight: 800,
                    fontSize: "28px",
                    color: "var(--gold-700)",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}>
                    {item.year}
                  </div>
                  <p style={{
                    fontSize: "16px",
                    lineHeight: 1.65,
                    color: "var(--text-body)",
                    margin: 0,
                  }}>
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
