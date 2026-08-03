import type { Metadata } from "next";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = { title: "Member Testimonies" };

const TESTIMONIES = [
  { name: "Alison",   img: "http://www.barabbas.com/wp-content/uploads/2015/04/allison1-300x156.jpg",  href: "https://www.barabbas.com/member-testimonies/allison/" },
  { name: "Angelina", img: "http://www.barabbas.com/wp-content/uploads/2015/04/angelina2-300x156.jpg", href: "https://www.barabbas.com/member-testimonies/angelina-3/" },
  { name: "Josh",     img: "http://www.barabbas.com/wp-content/uploads/2015/04/josh2-300x156.jpg",     href: "https://www.barabbas.com/member-testimonies/josh-3/" },
  { name: "Kassie",   img: "http://www.barabbas.com/wp-content/uploads/2015/04/kassie2-300x156.jpg",   href: "https://www.barabbas.com/member-testimonies/kassie-3/" },
  { name: "Krystal",  img: "http://www.barabbas.com/wp-content/uploads/2015/04/krystal2-300x156.jpg",  href: "https://www.barabbas.com/member-testimonies/krystal-3/" },
  { name: "Melissa",  img: "http://www.barabbas.com/wp-content/uploads/2015/04/melissa1-300x156.jpg",  href: "https://www.barabbas.com/member-testimonies/melissa/" },
  { name: "Michelle", img: "http://www.barabbas.com/wp-content/uploads/2015/04/michelle2-300x156.jpg", href: "https://www.barabbas.com/member-testimonies/michelle-3/" },
  { name: "Luke",     img: "http://www.barabbas.com/wp-content/uploads/2015/04/luke2-300x156.jpg",     href: "https://www.barabbas.com/member-testimonies/luke-3/" },
  { name: "Sarah",    img: "http://www.barabbas.com/wp-content/uploads/2015/04/sarah1-300x156.jpg",    href: "https://www.barabbas.com/member-testimonies/sarah-3/" },
];

export default function MemberTestimoniesPage() {
  return (
    <div>
      <section style={{ background: "var(--ink-900)", padding: "64px 0 0" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Testimonies</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 32px", lineHeight: 0.98 }}>
            Member Testimonies
          </h1>
        </div>
        <AboutSubNav />
      </section>

      {/* Scripture */}
      <section style={{ background: "var(--gold-400)", padding: "28px 0" }}>
        <div className="brc-container" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1rem,.9rem+.8vw,1.3rem)", textTransform: "uppercase", letterSpacing: ".04em", color: "var(--ink-900)", margin: 0 }}>
            &ldquo;I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.&rdquo; — Galatians 2:20
          </p>
        </div>
      </section>

      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--text-muted)", maxWidth: "60ch", marginBottom: "48px" }}>
            Please click on a person below to read the testimony of what God has done and is doing in their life.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: "24px" }}>
            {TESTIMONIES.map((t) => (
              <a
                key={t.name}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block" }}
              >
                <div style={{
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  border: "1px solid var(--border-subtle)",
                  transition: "box-shadow .15s ease",
                  background: "var(--white)",
                }}

                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    style={{ width: "100%", display: "block", aspectRatio: "300/156", objectFit: "cover" }}
                  />
                  <div style={{ padding: "16px 20px", borderTop: "3px solid var(--gold-400)" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem", color: "var(--ink-900)" }}>{t.name}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
