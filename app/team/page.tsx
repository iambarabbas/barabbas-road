import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";

export const metadata: Metadata = { title: "Our Team" };

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const PHOTO_WORSHIP = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80";

const STAFF: Array<{
  name: string;
  title: string;
  email: string;
  photo: string;
  familyPhoto?: string;
  bio: string;
  credentials: string[];
}> = [
  {
    name: "Matt Smith",
    title: "Senior Pastor",
    email: "matt@barabbas.com",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Matt Smith was born in San Diego, CA. He is married to his wife Rebecca and they have five children together. Matt has a passion for preaching the Word of God as well as for apologetics. He is the author of two books and a commentary on the book of Colossians. He holds a Black Belt in Brazilian Jiu-Jitsu.",
    credentials: [
      "B.A. in Psychology, UC Santa Barbara",
      "M.R.S., Southern California Seminary",
      "M.A. in Biblical Studies, SCS",
      "Master of Divinity, SCS",
      "Master of Theology, SCS",
    ],
  },
  {
    name: "Paul Rochford",
    title: "Pastor — Missions & Administration",
    email: "paul@barabbas.com",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Paul grew up in California. He is married to his wife Julia and is father to their daughter Andrea and son Isaiah. Paul oversees the missions and administration of the church. He is also pursuing his Ph.D. from Midwest Baptist Theological Seminary in Kansas City.",
    credentials: [
      "B.A. in Biblical Studies, Southern California Seminary",
      "M.A. in Biblical Studies, SCS",
      "Master of Divinity, SCS",
      "Master of Theology, SCS",
      "Ph.D. (in progress), MBTS",
    ],
  },
  {
    name: "Brett Schoeneck",
    title: "Pastor — Care & Discipleship",
    email: "brett@barabbas.com",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "Brett is a native of Wisconsin and has served in many capacities at Barabbas Road since the church's inception in 2007. He has a passion for one-another care and disciple-making. He is married to his wife Kari and is a loving father to their three children, River, Layla, and Silas. Brett loves reading, surfing, motorcycles, and shepherding the body of BRC.",
    credentials: [],
  },
  {
    name: "Trace Trebilco",
    title: "Pastor — Children & Youth",
    email: "trace@barabbas.com",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80",
    familyPhoto: "/assets/trebilco-family.jpg",
    bio: "Trace is originally from Chicago. Him and his wife, Jordan, moved to San Diego for a relocation for work, but ended up staying in SD for the church. He has served in the Children's Ministry since 2016. Trace has a heart for evangelism and discipleship within the church and specifically with families. Trace has four young children, Wyatt, Charlotte, Wesley and Elliot. He enjoys cars, reading, hiking, and surfing.",
    credentials: [],
  },
];

export default function TeamPage() {
  return (
    <div>
      {/* Header */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>The Shepherds</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 12px", lineHeight: 0.98 }}>
            Our Team
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch", lineHeight: 1.6 }}>
            Barabbas Road is elder-led. Our pastors are shepherds charged with teaching, feeding, and protecting the church — and accountable to God on its behalf.
          </p>
        </div>
      </section>

      {/* Staff grid */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
            {STAFF.map((s, i) => (
              <div
                key={s.name}
                className="brc-welcome"
                style={{
                  display: "grid",
                  gridTemplateColumns: "280px 1fr",
                  gap: "clamp(2rem,4vw,4rem)",
                  alignItems: "start",
                }}
              >
                {/* Photo + contact */}
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.photo}
                    alt={s.name}
                    style={{
                      width: "100%",
                      aspectRatio: "3/4",
                      objectFit: "cover",
                      borderRadius: "var(--radius-lg)",
                      boxShadow: "var(--shadow-md)",
                      marginBottom: "16px",
                    }}
                  />
                  <a
                    href={`mailto:${s.email}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontFamily: "var(--font-semicond)",
                      fontWeight: 600,
                      fontSize: "14px",
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      color: "var(--gold-700)",
                    }}
                  >
                    {s.email}
                  </a>
                </div>

                {/* Bio */}
                <div style={{ paddingTop: "8px" }}>
                  <div
                    style={{
                      paddingBottom: "20px",
                      borderBottom: "3px solid var(--gold-400)",
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "16px",
                      flexWrap: "wrap",
                    }}
                  >
                    <h2 style={{ fontSize: "clamp(1.8rem,1.4rem+1.5vw,2.6rem)", margin: 0, lineHeight: 1 }}>{s.name}</h2>
                    <div
                      style={{
                        fontFamily: "var(--font-semicond)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: ".1em",
                        fontSize: "13px",
                        color: "var(--gold-700)",
                      }}
                    >
                      {s.title}
                    </div>
                  </div>
                  <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--text-body)", marginBottom: (s.credentials.length || s.familyPhoto) ? "24px" : 0 }}>
                    {s.bio}
                  </p>
                  {s.familyPhoto && (
                    <div style={{ marginBottom: s.credentials.length ? "32px" : 0 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${BASE_PATH}${s.familyPhoto}`}
                        alt={`${s.name} and family`}
                        style={{
                          width: "100%",
                          borderRadius: "var(--radius-lg)",
                          boxShadow: "var(--shadow-md)",
                          aspectRatio: "16/9",
                          objectFit: "cover",
                          objectPosition: "center top",
                        }}
                      />
                      <p style={{ fontSize: "13px", color: "var(--text-subtle)", marginTop: "8px", fontStyle: "italic" }}>
                        Trace with his wife Jordan and their four children.
                      </p>
                    </div>
                  )}
                  {s.credentials.length > 0 && (
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-semicond)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: ".1em",
                          fontSize: "12px",
                          color: "var(--text-muted)",
                          marginBottom: "12px",
                        }}
                      >
                        Education
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                        {s.credentials.map((c) => (
                          <li key={c} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "15px", color: "var(--text-muted)" }}>
                            <span style={{ flexShrink: 0, marginTop: "7px", width: "5px", height: "5px", borderRadius: "50%", background: "var(--gold-400)", display: "block" }} />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Eyebrow color="var(--gold-400)" align="center" withRule>Get In Touch</Eyebrow>
          <h2 style={{ color: "var(--white)", fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)", margin: "18px 0 16px", lineHeight: 1 }}>
            We&apos;d Love to Hear From You
          </h2>
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: "18px", maxWidth: "44ch", marginBottom: "28px" }}>
            Have a question for one of our pastors? Reach out directly or use the contact form.
          </p>
          <Link href="/contact"><Button variant="primary" size="lg">Contact Us</Button></Link>
        </div>
      </section>
    </div>
  );
}
