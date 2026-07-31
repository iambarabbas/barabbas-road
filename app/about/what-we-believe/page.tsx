import type { Metadata } from "next";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = { title: "What We Believe" };

const ARTICLES = [
  {
    heading: "The Holy Scriptures",
    body: "We believe the Holy Scriptures of the Old and New Testaments to be the verbally inspired Word of God, the final authority for faith and life, inerrant in every matter in the original writing, infallible and God-breathed (2 Timothy 3:16–17).",
  },
  {
    heading: "The Godhead",
    body: "We believe in one Triune God, eternally existing in three persons—Father, Son, and Holy Spirit—co-eternal in being, co-identical in nature, co-equal in power and glory, and having the same attributes and perfections (Deuteronomy 6:4; 2 Corinthians 13:14).",
  },
  {
    heading: "The Person and Work of the Father",
    body: "We believe that the Father is the first person of the one, Triune God, a self-existent spirit, unseen by men, who shares one essence with Jesus Christ and the Holy Spirit, and possesses the same attributes of omniscience, omnipotence, love, truth, holiness, righteousness, and goodness. He receives worship and is the One to whom human beings relate through Christ, having sent Jesus Christ and the Holy Spirit to the earth. We believe the Father resurrects the dead, and that heaven belongs to Him. He draws the elect to Christ, having chosen them before the foundation of the world, and predestines believers to adoption as sons and preserves them in their relationship to God (1 Corinthians 8:6; John 5:46; Ephesians 1:3–5; John 6:44).",
  },
  {
    heading: "The Person and Work of Christ",
    body: "We believe that the Lord Jesus Christ, eternally God, became man, without ceasing to be God, having been conceived by the Holy Spirit and born of the Virgin Mary, in order that He might reveal God and redeem sinful men (Luke 1:35; John 1:1, 2, 14). We believe that the Lord Jesus Christ accomplished our redemption through His death on the cross as a representative, vicarious, substitutionary sacrifice; and that our justification is made sure by His literal, physical resurrection from the dead (Romans 3:24–25; Ephesians 1:7). We believe that the Lord Jesus Christ ascended to heaven, and is now exalted at the right hand of God, where, as our High Priest, He fulfills the ministry of Representative, Intercessor, and Advocate (Acts 1:9–11; Romans 8:34; Hebrews 7:25; 1 John 2:1–2).",
  },
  {
    heading: "The Person and Work of the Holy Spirit",
    body: "We believe that the Holy Spirit is a person who convicts the world of sin, of righteousness, and of judgment; revealing Christ to men and enabling them to believe; and, that He is the supernatural agent in regeneration, baptizing all believers into the body of Christ, indwelling and sealing them unto the day of redemption (John 16:8–11; Romans 8:9; 1 Corinthians 12:12–14; Ephesians 1:13–14). We believe that He guides believers into all truth, anoints and teaches them, and that it is the privilege and duty of all the saved to be filled with the Spirit (John 16:13; Ephesians 5:18; 1 John 2:20, 27).",
  },
  {
    heading: "The Creation and Man",
    body: "We believe that the book of Genesis presents a historically accurate account of the origin of man, the fall of Adam and Eve, and consequently the entire human race, the worldwide flood, the call of Abraham, and the origin of God's chosen people, Israel. Included in this is our belief that special creation of the existing universe was accomplished in six literal, twenty-four hour days. We believe that man was created in the image and likeness of God, but that when man sinned the human race fell and became alienated from God. Man, thus, is totally depraved and of himself utterly unable to remedy his lost condition (Genesis 1:26–27; Romans 3:22–23; 5:12; Ephesians 2:1–3).",
  },
  {
    heading: "Salvation",
    body: "We believe that salvation is the gift of God brought to man by grace and received by personal and purposeful faith in the death and resurrection of the Lord Jesus Christ, whose precious blood was shed on Calvary for the forgiveness of sins (1 Corinthians 15:1–5; Ephesians 1:7; 2:8–10; 1 Peter 1:18–19).",
  },
  {
    heading: "The Eternal Security and Assurance of Believers",
    body: "We believe that it is the privilege of believers to rejoice in the assurance of their salvation through the testimony of God's Word; which, however, clearly forbids the use of Christian liberty as an occasion to the flesh (Romans 13:13–14; Galatians 5:13; Titus 2:11–15; 1 John 5:10–13).",
  },
  {
    heading: "The Two Natures of the Believer",
    body: "We believe that the regenerated person retains his corrupt, sinful, depraved nature, but at the moment of salvation also becomes a partaker of the divine nature, capable of pleasing God through the ministries of the indwelling Holy Spirit (Romans 6:13; 8:12–13; Galatians 5:16–25; Ephesians 4:22–24; Colossians 3:9–10; 1 Peter 1:14–16; 1 John 3:5–9).",
  },
  {
    heading: "Separation",
    body: "We believe that all the saved should live in such a manner as not to bring reproach upon their Savior and Lord; and, that separation from all religious apostasy, all worldly and sinful pleasures, practices and associations is commanded by God (Romans 12:1–2; 2 Corinthians 6:14–7:1; 2 Timothy 3:1–5; 1 John 2:15–17; 2 John 9–11).",
  },
  {
    heading: "Missions",
    body: "We believe that it is the obligation of the saved to witness by life and by word to the truths of Holy Scripture and to seek to proclaim the Gospel to all mankind (Matthew 28:19–20; Mark 16:15; Acts 1:8; 2 Corinthians 5:19–20).",
  },
  {
    heading: "Ministry and Spiritual Gifts",
    body: "We believe that God is sovereign in the bestowing of all His gifts; that the gifts of evangelist and pastor-teacher are given to the church for the equipping of the saints today; that each believer has a spiritual gift for the purpose of ministry to others, such as the gifts of ministry, helps, leadership, administration, exhortation, giving, mercy, and teaching; that the gifts of prophecy, speaking in tongues, and the working of sign miracles ceased as the New Testament Scriptures were completed and their authority became established (Romans 12:6–8; 1 Corinthians 12:4–11; Ephesians 4:7–12). We believe in the autonomy of the local church. We recognize the ordinances of water baptism and the Lord's Supper as a scriptural means of testimony for the church today (Matthew 28:19–20; Acts 2:41–42; 1 Corinthians 11:23–26).",
  },
  {
    heading: "Dispensationalism",
    body: "We believe that the Scriptures interpreted in their natural, literal sense reveal divinely determined dispensations or rules of life which define man's responsibilities in successive administrations of God. These dispensations are not ways of salvation, but rather are divinely ordered stewardships by which God directs man according to His purpose.",
  },
  {
    heading: "The Church",
    body: "We believe that the church is the Body and espoused Bride of Christ, consisting of all born-again persons of this present age (Ephesians 1:22–23; 5:25–27; Revelation 19:7–8). We believe that the establishment and continuance of local churches is clearly taught and defined in the New Testament scriptures (Acts 14:27; 20:17, 28–32; 1 Timothy 3:1–13; Titus 1:5–11).",
  },
  {
    heading: "The Second Advent of Christ",
    body: "We believe in the personal, bodily return of the Lord Jesus Christ before the Tribulation to rapture the church (John 14:1–3; 1 Corinthians 15:51–53; 1 Thessalonians 4:15–5:11; Titus 2:13); and after the Tribulation, to judge and rule over the earth as King of kings and Lord of lords (Matthew 24:27–30; Revelation 19:11–16; 20:1–6).",
  },
  {
    heading: "Eternal State",
    body: "We believe in the bodily resurrection of all men, the saved to eternal life, and the unsaved to judgment and everlasting punishment (Matthew 25:46; John 5:28–29; 11:25–26; Revelation 20:5–6, 12–13). We believe that the souls of the redeemed are, at death, absent from the body and present with the Lord, where in conscious bliss they await the first resurrection (Luke 23:43; 2 Corinthians 5:8; Philippians 1:23; 3:21; 1 Thessalonians 4:16; Revelation 20:4–6).",
  },
];

export default function WhatWeBelievePage() {
  return (
    <div>
      <section style={{ background: "var(--ink-900)", color: "var(--white)", padding: "64px 0 0" }}>
        <div className="brc-container" style={{ paddingBottom: "0" }}>
          <Eyebrow color="var(--gold-400)" withRule>Doctrine</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 32px", lineHeight: 0.98 }}>
            What We Believe
          </h1>
        </div>
        <AboutSubNav />
      </section>

      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "760px" }}>
            {ARTICLES.map((a, i) => (
              <div
                key={a.heading}
                style={{
                  padding: "28px 0",
                  borderTop: i === 0 ? "none" : "1px solid var(--border-subtle)",
                }}
              >
                <h2 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 10px", color: "var(--text-heading)", textTransform: "uppercase", letterSpacing: ".04em", fontFamily: "var(--font-semicond)" }}>
                  {a.heading}
                </h2>
                <p style={{ color: "var(--text-body)", lineHeight: 1.7, margin: 0, fontSize: "16px" }}>
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
