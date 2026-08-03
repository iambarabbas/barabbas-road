import type { Metadata } from "next";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = {
  title: "Elders",
  description:
    "Meet the elders of Barabbas Road Church in Miramar, San Diego. Our plurality of elders provides biblical oversight and spiritual care for our congregation.",
  alternates: { canonical: "https://iambarabbas.github.io/barabbas-road/about/elders/" },
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const ELDERS = [
  {
    name: "Matt Smith",
    title: "Senior Pastor",
    email: "matt@barabbas.com",
    familyPhoto: `${BASE}/assets/matt-smith-family.jpg`,
    familyCaption: "Matt with his wife Rebecca and their five children.",
    bio: "Matt Smith was born in San Diego, CA. He is married to his wife Rebecca and they have five beautiful children together. Matt has a passion for preaching the Word of God as well as for apologetics. He is the author of two books and a commentary on the book of Colossians. He is a black belt in Brazilian Jiu-Jitsu and holds the following degrees: B.A. in Psychology with a minor in Athletic Coaching from UC Santa Barbara; M.R.S., M.A. in Biblical Studies, Master of Divinity, and Masters of Theology from Southern California Seminary.",
  },
  {
    name: "Paul Rochford",
    title: "Pastor — Missions & Administration",
    email: "paul@barabbas.com",
    familyPhoto: `${BASE}/assets/paul-rochford-family.jpg`,
    familyCaption: "Paul with his wife Julia and their children Andrea and Isaiah.",
    bio: "Paul grew up in California where he also received most of his education. He received his Bachelors in Biblical Studies along with his Masters in Religion, Biblical Studies, Masters of Divinity and Masters of Theology from Southern California Seminary. He is also pursuing his PhD from Midwest Baptist Theological Seminary in Kansas City. He is married to his wife Julia and is father to their daughter Andrea and their son Isaiah. Paul oversees the missions and administration of the church.",
  },
  {
    name: "Brett Schoeneck",
    title: "Pastor — Care & Discipleship",
    email: "brett@barabbas.com",
    familyPhoto: `${BASE}/assets/brett-schoeneck-family.jpg`,
    familyCaption: "Brett with his wife Kari and their three children River, Layla, and Silas.",
    bio: "Brett is a native of Wisconsin where he received his education. He has served in many capacities at Barabbas Road since the church's inception in 2007. Brett has a passion for one-another care and disciple-making. He is married to his wife Kari and is a loving father to their three children, River, Layla and Silas. Brett loves reading, surfing, motorcycles, graphic design, web design, and has a heart for shepherding the body of BRC.",
  },
  {
    name: "Trace Trebilco",
    title: "Pastor — Children & Youth",
    email: "trace@barabbas.com",
    familyPhoto: `${BASE}/assets/trebilco-family.jpg`,
    familyCaption: "Trace with his wife Jordan and their four children Wyatt, Charlotte, Wesley, and Elliot.",
    bio: "Trace is originally from Chicago. Him and his wife, Jordan, moved to San Diego for a relocation for work, but ended up staying in SD for the church. He has served in the Children's Ministry since 2016. Trace has a heart for evangelism and discipleship within the church and specifically with families. Trace has four young children, Wyatt, Charlotte, Wesley and Elliot. He enjoys cars, reading, hiking, and surfing.",
  },
];

export default function EldersPage() {
  return (
    <div>
      <section style={{ background: "var(--ink-900)", padding: "64px 0 0" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Leadership</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 32px", lineHeight: 0.98 }}>
            Elders
          </h1>
        </div>
        <AboutSubNav />
      </section>

      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">

          {/* Scripture */}
          <blockquote style={{ margin: "0 0 64px", padding: "0 0 0 24px", borderLeft: "3px solid var(--gold-400)" }}>
            <p style={{ fontFamily: "var(--font-serif, Georgia, serif)", fontStyle: "italic", fontSize: "17px", lineHeight: 1.7, color: "var(--text-body)", margin: "0 0 10px" }}>
              &ldquo;All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be competent, equipped for every good work.&rdquo;
            </p>
            <cite style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "12px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gold-700)", fontStyle: "normal" }}>
              2 Timothy 3:16–17
            </cite>
          </blockquote>

          {/* Elder entries */}
          <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
            {ELDERS.map((elder, i) => (
              <div key={elder.name}>
                {/* Name + title header */}
                <div style={{
                  paddingBottom: "20px",
                  marginBottom: "28px",
                  borderBottom: "3px solid var(--gold-400)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "14px",
                  flexWrap: "wrap",
                }}>
                  <h2 style={{ fontSize: "clamp(1.8rem,1.4rem+1.5vw,2.4rem)", margin: 0, lineHeight: 1 }}>
                    {elder.name}
                  </h2>
                  <span style={{
                    fontFamily: "var(--font-semicond)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    fontSize: "12px",
                    color: "var(--gold-700)",
                  }}>
                    {elder.title}
                  </span>
                </div>

                {/* Bio + photo — alternating layout on desktop, stacked on mobile */}
                <div
                  className="brc-welcome"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "clamp(2rem,5vw,4rem)",
                    alignItems: "start",
                    direction: i % 2 === 1 ? "rtl" : "ltr",
                  }}
                >
                  {/* Bio */}
                  <div style={{ direction: "ltr" }}>
                    <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", margin: "0 0 20px" }}>
                      {elder.bio}
                    </p>

                  </div>

                  {/* Family photo */}
                  <div style={{ direction: "ltr" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={elder.familyPhoto}
                      alt={`${elder.name} and family`}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: "var(--radius-lg)",
                        boxShadow: "var(--shadow-md)",
                      }}
                    />
                    <p style={{ fontSize: "13px", color: "var(--text-subtle, var(--text-muted))", marginTop: "8px", fontStyle: "italic", margin: "8px 0 0" }}>
                      {elder.familyCaption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
