import type { Metadata } from "next";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = {
  title: "The Name Barabbas",
  description:
    "Why Barabbas? The biblical account of Barabbas and what it means for every person set free by Christ — the story behind the name of Barabbas Road Church in San Diego.",
  alternates: { canonical: "https://barabbas.com/about/the-name-barabbas/" },
};

export default function TheNameBarabbasPage() {
  return (
    <div>
      <section style={{ background: "var(--ink-900)", color: "var(--white)", padding: "64px 0 0" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Our Name</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 32px", lineHeight: 0.98 }}>
            The Name Barabbas
          </h1>
        </div>
        <AboutSubNav />
      </section>

      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "720px" }}>

            {/* Scripture */}
            <blockquote style={{
              margin: "0 0 48px",
              padding: "32px 36px",
              borderLeft: "4px solid var(--gold-400)",
              background: "var(--surface-card)",
              borderRadius: "0 var(--radius-md) var(--radius-md) 0",
            }}>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", margin: "0 0 16px" }}>
                &ldquo;But they cried out all together, saying, &lsquo;Away with this man, and release Barabbas for us!&rsquo; (He was one who had been thrown into prison for a certain insurrection made in the city, and for murder.) Pilate, wanting to release Jesus, addressed them again, but they kept on calling out, saying, &lsquo;Crucify, crucify Him!&rsquo; And he said to them a third time, &lsquo;Why, what evil has this man done? I have found in Him no guilt demanding death; therefore I will punish Him and release Him.&rsquo; But they were insistent, with loud voices asking that He be crucified. And their voices began to prevail. And Pilate pronounced sentence for their demand to be granted. And he released the man they were asking for who had been thrown into prison for insurrection and murder, but he handed over Jesus to their will.&rdquo;
              </p>
              <cite style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "13px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gold-700)", fontStyle: "normal" }}>
                Luke 23:18–25
              </cite>
            </blockquote>

            {/* Video */}
            <div style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-md)",
              marginBottom: "48px",
            }}>
              <iframe
                src="https://player.vimeo.com/video/1011540228"
                title="The Name Barabbas — Barabbas Road Church"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>

            {/* Explanation */}
            <p style={{ fontSize: "18px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "24px" }}>
              From the above scripture we can see that Barabbas, the guilty one, was set free because Jesus, the innocent one, took his place.
            </p>
            <p style={{ fontSize: "18px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "48px" }}>
              We today, like Barabbas, are able to look at Jesus on the cross and say, &ldquo;That should have been me.&rdquo; Jesus took our punishment and our death upon himself on the cross. We are free from sin and death because Jesus took our place, in the same way he literally took the place of Barabbas.
            </p>

            {/* Secondary scripture */}
            <blockquote style={{
              margin: "0",
              padding: "28px 32px",
              background: "var(--ink-900)",
              borderRadius: "var(--radius-md)",
              color: "var(--white)",
            }}>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,.85)", margin: "0 0 12px" }}>
                &ldquo;All Scripture is inspired by God and profitable for teaching, for reproof, for correction, for training in righteousness; so that the man of God may be adequate, equipped for every good work.&rdquo;
              </p>
              <cite style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "12px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gold-400)", fontStyle: "normal" }}>
                2 Timothy 3:16–17
              </cite>
            </blockquote>

          </div>
        </div>
      </section>
    </div>
  );
}
