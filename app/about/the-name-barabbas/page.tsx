import type { Metadata } from "next";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = { title: "The Name Barabbas" };

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
                &ldquo;But the crowd cried out together, 'Away with this man (Jesus), and release to us Barabbas,' a man who had been thrown into prison for an insurrection started in the city and for murder. Pilate addressed the crowd once more, desiring to release Jesus, but they kept shouting, 'Crucify, crucify him!' A third time he said to them, 'Why, what evil has he done? I have found in him no guilt deserving death. I will therefore punish and release him.' But they were urgent, demanding with loud cries that he should be crucified. And their voices prevailed. So Pilate decided that their demand should be granted. He released the man who had been thrown into prison for insurrection and murder (Barabbas), for whom they asked, but he delivered Jesus over to their will.&rdquo;
              </p>
              <cite style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "13px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gold-700)", fontStyle: "normal" }}>
                Luke 23:18–25
              </cite>
            </blockquote>

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
                &ldquo;All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be competent, equipped for every good work.&rdquo;
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
