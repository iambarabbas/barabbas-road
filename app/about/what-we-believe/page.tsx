import type { Metadata } from "next";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = { title: "What We Believe" };

const DOCTRINE = [
  {
    id: "holy-scriptures",
    title: "THE HOLY SCRIPTURES",
    body: "We believe the Holy Scriptures of the Old and New Testaments to be the verbally inspired Word of God, the final authority for faith and life, inerrant in every matter in the original writing, infallible and God-breathed (2 Timothy 3:16–17).",
  },
  {
    id: "godhead",
    title: "THE GODHEAD",
    body: "We believe in one Triune God, eternally existing in three persons—Father, Son, and Holy Spirit—co-eternal in being, co-identical in nature, co-equal in power and glory, and having the same attributes and perfections (Deuteronomy 6:4; 2 Corinthians 13:14).",
  },
  {
    id: "father",
    title: "THE PERSON AND WORK OF THE FATHER",
    body: "We believe that the Father is the first person of the one, Triune God, a self-existent spirit, unseen by men, who shares one essence with Jesus Christ and the Holy Spirit, and possesses the same attributes of omniscience, omnipotence, love, truth, holiness, righteousness, and goodness (1 Corinthians 8:6; John 5:46; 6:26; 7:28; 14:9–10; 15:9; 17:11, 25; Matthew 6:8, 32; Ephesians 3:20; James 1:17). He receives worship and is the One to whom human beings relate through Christ, having sent Jesus Christ and the Holy Spirit to the earth (John 4:23; 8:42; 14:6, 26). We believe the Father resurrects the dead, and that heaven belongs to Him (John 5:21; 14:2; Romans 6:4). He controls the timeline for eschatological events (Acts 1:6–7). He draws the elect to Christ, having chosen them before the foundation of the world (John 6:44; Ephesians 1:3). He predestines believers to adoption as sons and preserves them in their relationship to God (John 17:11; Ephesians 1:5). We believe the Father is to be the focal point for believers in their Christian lives and in their fellowship (Romans 6:11; 1 John 1:3). He cares for them, comforts them, hears and answers their prayers, honors believers that serve Jesus Christ, leads them, and gives them gifts (John 12:26; 15:1; 16:23; Romans 6:11; 2 Corinthians 1:3–4; 1 Thessalonians 3:11; James 1:17; 1 John 1:3).",
  },
  {
    id: "christ",
    title: "THE PERSON AND WORK OF CHRIST",
    body: "We believe that the Lord Jesus Christ, eternally God, became man, without ceasing to be God, having been conceived by the Holy Spirit and born of the Virgin Mary, inorder that He might reveal God and redeem sinful men (Luke 1:35; John 1:1, 2, 14). We believe that the Lord Jesus Christ accomplished our redemption through His death on the cross as a representative, vicarious, substitutionary sacrifice; and that our justification is made sure by His literal, physical resurrection from the dead (Romans 3:24–25; Ephesians 1:7; 1 Peter 1:3–5; 2:24). We believe that the Lord Jesus Christ ascended to heaven, and is now exalted at the right hand of God, where, as our High Priest, He fulfills the ministry of Representative, Intercessor, and Advocate (Acts 1:9–11; Romans 8:34; Hebrews 7:25; 9:24; 1 John 2:1–2).",
  },
  {
    id: "holy-spirit",
    title: "THE PERSON AND WORK OF THE HOLY SPIRIT",
    body: "We believe that the Holy Spirit is a person who convicts the world of sin, of righteousness, and of judgment; revealing Christ to men and enabling them to believe; and, that He is the supernatural agent in regeneration, baptizing all believers into the body of Christ, indwelling and sealing them unto the day of redemption (John 16:8–11; Romans 8:9; 1 Corinthians 12:12–14; 2 Corinthians 3:6; Ephesians 1:13–14). We believe that He guides believers into all truth, anoints and teaches them, and that it is the privilege and duty of all the saved to be filled with the Spirit (John 16:13; Ephesians 5:18; 1 John 2:20, 27).",
  },
  {
    id: "creation",
    title: "THE CREATION AND MAN",
    body: "We believe that the book of Genesis presents a historically accurate account of the origin of man, the fall of Adam and Eve, and consequently the entire human race, the worldwide flood, the call of Abraham, and the origin of God's chosen people, Israel. Included in this is our belief that special creation of the existing universe, consisting of time, space, and matter, was accomplished in six literal, twenty-four hour days, as detailed in Genesis chapter one. We believe that man was created in the image and likeness of God, but that when man sinned the human race fell and became alienated from God. Man, thus, is totally depraved and of himself, utterly unable to remedy his lost condition (Genesis 1:26–27; 5:2; Psalm 51; Romans 3:22–23; 5:12; Ephesians 2:1–3, 12).",
  },
  {
    id: "salvation",
    title: "SALVATION",
    body: "We believe that salvation is the gift of God brought to man by grace and received by personal and purposeful faith in the death and resurrection of the Lord Jesus Christ, whose precious blood was shed on Calvary for the forgiveness of sins (1 Corinthians 15:1–5; Ephesians 1:7; 2:8–10; 1 Peter 1:18–19).",
  },
  {
    id: "eternal-security",
    title: "THE ETERNAL SECURITY AND ASSURANCE OF BELIEVERS",
    body: "We believe that it is the privilege of believers to rejoice in the assurance of their salvation through the testimony of God's Word; which, however, clearly forbids the use of Christian liberty as an occasion to the flesh (Romans 13:13–14; Galatians 5:13; Titus 2:11–15: 1 John 5:10–13).",
  },
  {
    id: "two-natures",
    title: "THE TWO NATURES OF THE BELIEVER",
    body: "We believe that the regenerated person retains his corrupt, sinful, depraved nature, but at the moment of salvation also becomes a partaker of the divine nature, capable of pleasing God through the ministries of the indwelling Holy Spirit (Romans 6:13; 8:12–13; Galatians 5:16–25; Ephesians 4:22–24; Colossians 3:9–10; 1 Peter 1:14–16; 1 John 3:5–9).",
  },
  {
    id: "separation",
    title: "SEPARATION",
    body: "We believe that all the saved should live in such a manner as not to bring reproach upon their Savior and Lord; and, that separation from all religious apostasy, all worldly and sinful pleasures, practices and associations is commanded by God (Romans 12:1–2, 14:13; 2 Corinthians 6:14–7:1; 2 Timothy 3:1–5; 1 John 2:15–17; 2 John 9–11).",
  },
  {
    id: "missions",
    title: "MISSIONS",
    body: "We believe that it is the obligation of the saved to witness by life and by word to the truths of Holy Scripture and to seek to proclaim the Gospel to all mankind (Matthew 28:19–20; Mark 16:15; Acts 1:8; 2 Corinthians 5:19–20).",
  },
  {
    id: "spiritual-gifts",
    title: "MINISTRY AND SPIRITUAL GIFTS",
    body: "We believe that God is sovereign in the bestowing of all His gifts; that the gifts of evangelist and pastor-teacher are given to the church for the equipping of the saints today; that each believer has a spiritual gift for the purpose of ministry to others, such as the gifts of ministry, helps, leadership, administration, exhortation, giving, mercy, and teaching; that the gifts of prophecy, speaking in tongues, and the working of sign miracles ceased as the New Testament Scriptures were completed and their authority became established (Romans 12:6–8; 1 Corinthians 12:4–11; 2 Corinthians 12:12; Ephesians 4:7–12; 1 Peter 4:10). We believe that God does hear and answer the prayer of faith, in accord with His own will, for the sick and afflicted (John 15:7; James 5:14–15; 1 John 5:14–15). We believe in the autonomy of the local church (Acts 13:1–4; 20:28; Romans 16:1; 1 Corinthians 3:9, 16; 5:4–7; 1 Peter 5:1–4). We recognize the ordinances of water baptism and the Lord's Supper as a scriptural means of testimony for the church today (Matthew 28:19–20; Acts 2:41–42; 18:8; 1 Corinthians 11:23–26).",
  },
  {
    id: "dispensationalism",
    title: "DISPENSATIONALISM",
    body: "We believe that the Scriptures interpreted in their natural, literal sense reveal divinely determined dispensations or rules of life which define man's responsibilities in successive administrations of God. These dispensations are divinely ordered stewardships by which God directs man according to His purpose. Three of these—the dispensation of law, the dispensation of the grace of God, and the dispensation of the kingdom—are the subjects of detailed revelation in Scripture (John 1:17; 2 Corinthians 3:6–18; Galatians 3:13–25; Ephesians 1:10; 3:2–10; Colossians 1:24–25; Hebrews 7:19; Revelation 20:2–6).",
  },
  {
    id: "satan",
    title: "THE PERSONALITY OF SATAN",
    body: "We believe that Satan is a person, the author of sin and cause of the fall; that he is the open and declared enemy of God and man; and, that he shall be eternally punished in the lake of fire (Job 1:6–7; Isaiah 14:12–17; Matthew 4:2–11; Revelation 20:11).",
  },
  {
    id: "second-advent",
    title: "THE SECOND ADVENT OF CHRIST",
    body: 'We believe in that "blessed hope," the personal, imminent, pre-tribulational and premillennial coming of the Lord Jesus Christ for the church; and in His subsequent return to earth, with His saints, to establish His Millennial Kingdom, which will begin only after the second advent (Zechariah 14:4–11; 1 Thessalonians 1:10; 4:13–18; 5:9; Revelation 3:10; 19:11–16; 20:1–6).',
  },
  {
    id: "eternal-state",
    title: "THE ETERNAL STATE",
    body: "We believe in the bodily resurrection of all men, the saved to eternal life, and the unsaved to judgment and everlasting punishment (Matthew 25:46; John 5:28–29; 11:25–26; Revelation 20:5–6; 22:12). We believe that the souls of the justified are, at death, absent from the body and present with the Lord, where in conscious bliss they await the first resurrection, when soul and body are reunited to be glorified forever with the Lord (Luke 23:43; 2 Corinthians 5:8; Philippians 1:23; 3:32; 1 Thessalonians 4:16–17; Revelation 20:4–6).",
  },
];

const sectionStyle: React.CSSProperties = {
  marginBottom: "40px",
  paddingBottom: "40px",
  borderBottom: "1px solid var(--border-subtle)",
};
const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-semicond)",
  fontWeight: 800,
  fontSize: "13px",
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "var(--gold-700)",
  margin: "0 0 10px",
};
const bodyStyle: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.8,
  color: "var(--text-body)",
  margin: 0,
};

export default function WhatWeBelievePage() {
  return (
    <div>
      <section style={{ background: "var(--ink-900)", padding: "64px 0 0" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Doctrine</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 32px", lineHeight: 0.98 }}>
            What We Believe
          </h1>
        </div>
        <AboutSubNav />
      </section>

      {/* ── Doctrinal Statement ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "760px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Doctrinal Statement</Eyebrow>
            <h2 style={{ fontSize: "clamp(1.8rem,1.2rem+1.5vw,2.4rem)", margin: "16px 0 40px", lineHeight: 1 }}>
              What Barabbas Road Believes
            </h2>

            {DOCTRINE.map((article, i) => (
              <div key={article.id} id={article.id} style={i < DOCTRINE.length - 1 ? sectionStyle : { marginBottom: 0 }}>
                <h3 style={headingStyle}>{article.title}</h3>
                <p style={bodyStyle}>{article.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chicago Statement ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "760px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Position Paper</Eyebrow>
            <h2 style={{ fontSize: "clamp(1.8rem,1.2rem+1.5vw,2.4rem)", margin: "16px 0 32px", lineHeight: 1 }}>
              Chicago Statement on Biblical Inerrancy
            </h2>

            <h3 style={{ ...headingStyle, marginBottom: "20px" }}>I. SUMMARY STATEMENT</h3>
            {[
              "God, who is Himself Truth and speaks truth only, has inspired Holy Scripture in order thereby to reveal Himself to lost mankind through Jesus Christ as Creator and Lord, Redeemer and Judge. Holy Scripture is God's witness to Himself.",
              "Holy Scripture, being God's own Word, written by men prepared and superintended by His Spirit, is of infallible divine authority in all matters upon which it touches: It is to be believed, as God's instruction, in all that it affirms; obeyed, as God's command, in all that it requires; embraced, as God's pledge, in all that it promises.",
              "The Holy Spirit, Scripture's divine Author, both authenticates it to us by His inward witness and opens our minds to understand its meaning.",
              "Being wholly and verbally God-given, Scripture is without error or fault in all its teaching, no less in what it states about God's acts in creation, about the events of world history, and about its own literary origins under God, than in its witness to God's saving grace in individual lives.",
              "The authority of Scripture is inescapably impaired if this total divine inerrancy is in any way limited or disregarded, or made relative to a view of truth contrary to the Bible's own; and such lapses bring serious loss to both the individual and the Church.",
            ].map((text, i) => (
              <p key={i} style={{ ...bodyStyle, marginBottom: "14px" }}><strong style={{ color: "var(--ink-900)" }}>{i + 1}.</strong> {text}</p>
            ))}

            <h3 style={{ ...headingStyle, marginTop: "40px", marginBottom: "20px" }}>II. ARTICLES OF AFFIRMATION AND DENIAL</h3>
            {[
              { num: "I", aff: "We affirm that the Holy Scriptures are to be received as the authoritative Word of God.", deny: "We deny that the Scriptures receive their authority from the Church, tradition, or any other human source." },
              { num: "II", aff: "We affirm that the Scriptures are the supreme written norm by which God binds the conscience, and that the authority of the Church is subordinate to that of Scripture.", deny: "We deny that church creeds, councils, or declarations have authority greater than or equal to the authority of the Bible." },
              { num: "III", aff: "We affirm that the written Word in its entirety is revelation given by God.", deny: "We deny that the Bible is merely a witness to revelation, or only becomes revelation in encounter, or depends on the responses of men for its validity." },
              { num: "IV", aff: "We affirm that God who made mankind in His image has used language as a means of revelation.", deny: "We deny that human language is so limited by our creatureliness that it is rendered inadequate as a vehicle for divine revelation. We further deny that the corruption of human culture and language through sin has thwarted God's work of inspiration." },
              { num: "V", aff: "We affirm that God's revelation in the Holy Scriptures was progressive.", deny: "We deny that later revelation, which may fulfill earlier revelation, ever corrects or contradicts it. We further deny that any normative revelation has been given since the completion of the New Testament writings." },
              { num: "VI", aff: "We affirm that the whole of Scripture and all its parts, down to the very words of the original, were given by divine inspiration.", deny: "We deny that the inspiration of Scripture can rightly be affirmed of the whole without the parts, or of some parts but not the whole." },
              { num: "VII", aff: "We affirm that inspiration was the work in which God by His Spirit, through human writers, gave us His Word. The origin of Scripture is divine. The mode of divine inspiration remains largely a mystery to us.", deny: "We deny that inspiration can be reduced to human insight, or to heightened states of consciousness of any kind." },
              { num: "VIII", aff: "We affirm that God in His work of inspiration utilized the distinctive personalities and literary styles of the writers whom He had chosen and prepared.", deny: "We deny that God, in causing these writers to use the very words that He chose, overrode their personalities." },
              { num: "IX", aff: "We affirm that inspiration, though not conferring omniscience, guaranteed true and trustworthy utterance on all matters of which the Biblical authors were moved to speak and write.", deny: "We deny that the finitude or falseness of these writers, by necessity or otherwise, introduced distortion or falsehood into God's Word." },
              { num: "X", aff: "We affirm that inspiration, strictly speaking, applies only to the autographic text of Scripture, which in the providence of God can be ascertained from available manuscripts with great accuracy. We further affirm that copies and translations of Scripture are the Word of God to the extent that they faithfully represent the original.", deny: "We deny that any essential element of the Christian faith is affected by the absence of the autographs. We further deny that this absence renders the assertion of Biblical inerrancy invalid or irrelevant." },
              { num: "XI", aff: "We affirm that Scripture, having been given by divine inspiration, is infallible, so that, far from misleading us, it is true and reliable in all the matters it addresses.", deny: "We deny that it is possible for the Bible to be at the same time infallible and errant in its assertions. Infallibility and inerrancy may be distinguished but not separated." },
              { num: "XII", aff: "We affirm that Scripture in its entirety is inerrant, being free from all falsehood, fraud, or deceit.", deny: "We deny that Biblical infallibility and inerrancy are limited to spiritual, religious, or redemptive themes, exclusive of assertions in the fields of history and science. We further deny that scientific hypotheses about earth history may properly be used to overturn the teaching of Scripture on creation and the flood." },
              { num: "XIII", aff: "We affirm the propriety of using inerrancy as a theological term with reference to the complete truthfulness of Scripture.", deny: "We deny that it is proper to evaluate Scripture according to standards of truth and error that are alien to its usage or purpose. We further deny that inerrancy is negated by Biblical phenomena such as a lack of modern technical precision, irregularities of grammar or spelling, observational descriptions of nature, the reporting of falsehoods, the use of hyperbole and round numbers, the topical arrangement of material, variant selections of material in parallel accounts, or the use of free citations." },
              { num: "XIV", aff: "We affirm the unity and internal consistency of Scripture.", deny: "We deny that alleged errors and discrepancies that have not yet been resolved violate the truth claims of the Bible." },
              { num: "XV", aff: "We affirm that the doctrine of inerrancy is grounded in the teaching of the Bible about inspiration.", deny: "We deny that Jesus' teaching about Scripture may be dismissed by appeals to accommodation or to any natural limitation of His humanity." },
              { num: "XVI", aff: "We affirm that the doctrine of inerrancy has been integral to the Church's faith throughout its history.", deny: "We deny that inerrancy is a doctrine invented by scholastic Protestantism, or is a reactionary position postulated in response to negative higher criticism." },
              { num: "XVII", aff: "We affirm that the Holy Spirit bears witness to the Scriptures, assuring believers of the truthfulness of God's written Word.", deny: "We deny that this witness of the Holy Spirit operates in isolation from or against Scripture." },
              { num: "XVIII", aff: "We affirm that the text of Scripture is to be interpreted by grammatico-historical exegesis, taking account of its literary forms and devices, and that Scripture is to interpret Scripture.", deny: "We deny the legitimacy of any treatment of the text or quest for sources lying behind it that leads to relativizing, dehistoricizing, or discounting its teaching, or rejecting its claims of authorship." },
              { num: "XIX", aff: "We affirm that a confession of the full authority, infallibility and inerrancy of Scripture is vital to a sound understanding of the whole of the Christian faith. We further affirm that such confession should lead to increasing conformity to the image of Christ.", deny: "We deny that such confession is necessary for salvation. However, we further deny that inerrancy can be rejected without grave consequences, both to the individual and to the Church." },
            ].map((a) => (
              <div key={a.num} style={{ marginBottom: "20px", paddingLeft: "16px", borderLeft: "3px solid var(--gold-400)" }}>
                <p style={{ ...bodyStyle, marginBottom: "6px" }}><strong style={{ color: "var(--ink-900)" }}>Article {a.num}.</strong></p>
                <p style={{ ...bodyStyle, marginBottom: "6px" }}>{a.aff}</p>
                <p style={{ ...bodyStyle, color: "var(--text-muted)", fontStyle: "italic" }}>{a.deny}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sexuality & Gender ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "760px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Position Paper</Eyebrow>
            <h2 style={{ fontSize: "clamp(1.8rem,1.2rem+1.5vw,2.4rem)", margin: "16px 0 24px", lineHeight: 1 }}>
              Biblical Statement on Sexuality &amp; Gender
            </h2>
            <p style={{ ...bodyStyle, marginBottom: "18px" }}>
              God created human beings distinctly as male and female (Gen 1:27). The distinctness, complementarity, and relational nature of the human race as &ldquo;male and female&rdquo; is based on the created order given by God when He created humanity &ldquo;in His image&rdquo; (Gen 1:26-27; 5:1-3; 9:6; 1 Cor 11:7; Jam 3:9; 2 Cor 3:18; Eph 4:23-24; Col 3:10), and these establish a normative connection between biological sex and gender. The created distinctness, complementarity, and relational nature also establish the basis for the marital relationship as being between one man and one woman (Gen 2:23-24; Eph 5:21-33).
            </p>
            <p style={{ ...bodyStyle, marginBottom: "18px" }}>
              The Bible affirms two options or giftings for sexual expression: monogamous marital relations between one man and one woman (Gen 1:27-28; 2:18, 21-24; Mt 19:4-6; Mk 10:5-8; 1 Cor 7:7; Heb 13:4; Eph 5:22), or sexual celibacy, if one is not in a monogamous marital relationship between one man and one woman (1 Cor 7:7; Mt 19:12). Within these two Biblical designs there can be found sexual fulfillment, whereas outside these two designs sexual expression is improper.
            </p>
            <p style={{ ...bodyStyle }}>
              The Bible affirms that human sexuality is a gift to be treasured and enjoyed (Gen 2:24; Prov 5:19, 31:10; 1 Cor 7:4), as is sexual celibacy (1 Cor 7:7). The fall of humanity (Gen 3) corrupted human sexuality in both spiritual and physical ways (Rom 1:18-32, Eph 2:1-10), and one result is confusion and pain in the lives of those who struggle with brokenness regarding gender, and who struggle with the guilt of desiring sinful expressions of sexuality (Gen 3:1-7; Rom 3:9-18; 5:12-17). The Bible prescribes faith in Jesus Christ (1 Cor 15:2-3) as the remedy for guilt and as the provision for life (Rom 3:23, 6:23; Jn 3:16), and the Bible prescribes an ongoing relationship with Him as the means for a whole and fulfilling life (Jn 15:1-11, 17:3; Col 3:16; Gal 5:16-25; Rom 8:28-38).
            </p>
          </div>
        </div>
      </section>

      {/* ── Marriage & Divorce ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "760px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Position Paper</Eyebrow>
            <h2 style={{ fontSize: "clamp(1.8rem,1.2rem+1.5vw,2.4rem)", margin: "16px 0 24px", lineHeight: 1 }}>
              Marriage &amp; Divorce
            </h2>
            {[
              { heading: null, text: "God hates divorce. He hates it because it always involves unfaithfulness to the solemn covenant of marriage that two partners have entered into before Him, and because it brings harmful consequences to those partners and their children (Mal. 2:14-16). Divorce in the Scripture is permitted only because of man's sin. Since divorce is only a concession to man's sin and is not part of God's original plan for marriage, all believers should hate divorce as God does and pursue it only when there is no other recourse. With God's help a marriage can survive the worst sins." },
              { heading: null, text: "In Matthew 19:3-9, Christ teaches clearly that divorce is an accommodation to man's sin that violates God's original purpose for the intimate unity and permanence of the marriage bond (Gen. 2:24). He taught that God's law allowed divorce only because of \"hardness of heart\" (Matt. 19:8). Legal divorce was a concession for the faithful partner due to the sexual sin or abandonment by the sinning partner, so that the faithful partner was no longer bound to the marriage (Matt. 5:32; 19:9; 1 Cor. 7:12-15). Although Jesus did say that divorce is permitted in some situations, we must remember that His primary point in this discourse is to correct the Jews' idea that they could divorce one another \"for any cause at all\" (Matt. 19:3), and to show them the gravity of pursuing a sinful divorce. Therefore, the believer should never consider divorce except in specific circumstances (see next section), and even in those circumstances it should only be pursued reluctantly because there is no other recourse." },
              { heading: "The Grounds for Divorce", text: "The only New Testament grounds for divorce are sexual sin or desertion by an unbeliever. The first is found in Jesus' use of the Greek word porneia (Matt. 5:32; 19:9). This is a general term that encompasses sexual sin such as adultery, homosexuality, bestiality, and incest. When one partner violates the unity and intimacy of a marriage by sexual sin—and forsakes his or her covenant obligation—the faithful partner is placed in an extremely difficult situation. After all means are exhausted to bring the sinning partner to repentance, the Bible permits release for the faithful partner through divorce (Matt. 5:32; 1 Cor. 7:15).\n\nThe second reason for permitting a divorce is in cases where an unbelieving mate does not desire to live with his or her believing spouse (1 Cor. 7:12-15). Because \"God has called us to peace\" (v. 15), divorce is allowed and may be preferable in such situations. When an unbeliever desires to leave, trying to keep him or her in the marriage may only create greater tension and conflict. Also, if the unbeliever leaves the marital relationship permanently but is not willing to file for divorce, perhaps because of lifestyle, irresponsibility, or to avoid monetary obligations, then the believer is in an impossible situation of having legal and moral obligations that he or she cannot fulfill. Because \"the brother or sister is not under bondage in such cases\" (1 Cor. 7:15) and is therefore no longer obligated to remain married, the believer may file for divorce without fearing the displeasure of God." },
              { heading: "The Possibility of Remarriage", text: "Remarriage is permitted for the faithful partner only when the divorce was on biblical grounds. In fact, the purpose for a biblical divorce is to make clear that the faithful partner is free to remarry, but only in the Lord (Rom. 7:1-3; 1 Cor. 7:39).\n\nThose who divorce on any other grounds have sinned against God and their partners, and for them to marry another is an act of \"adultery\" (Mark 10:11-12). This is why Paul says that a believing woman who sinfully divorces should \"remain unmarried, or else be reconciled to her husband\" (1 Cor. 7:10-11). If she repents from her sin of unbiblical divorce, the true fruits of that repentance would be to seek reconciliation with her former husband (Matt. 5:23-24). The same is true for a man who divorces unbiblically (1 Cor. 7:11). The only time such a person could remarry another is if the former spouse remarries, proves to be an unbeliever, or dies, in which cases reconciliation would no longer be possible.\n\nThe Bible also gives a word of caution to anyone who is considering marriage to a divorcee. If the divorce was not on biblical grounds and there is still a responsibility to reconcile, the person who marries the divorcee is considered an adulterer (Mark 10:12)." },
              { heading: "The Role of the Church", text: "Believers who pursue divorce on unbiblical grounds are subject to church discipline because they openly reject the Word of God. The one who obtains an unbiblical divorce and remarries is guilty of adultery since God did not permit the original divorce (Matt. 5:32; Mark 10:11-12). That person is subject to the steps of church discipline as outlined in Matthew 18:15-17. If a professing Christian violates the marriage covenant and refuses to repent during the process of church discipline, Scripture instructs that he or she should be put out of the church and treated as an unbeliever (v. 17). When the discipline results in such a reclassification of the disobedient spouse as an \"outcast\" or unbeliever, the faithful partner would be free to divorce according to the provision for divorce as in the case of an unbeliever departing, as stated in 1 Corinthians 7:15. Before such a divorce, however, reasonable time should be allowed for the possibility of the unfaithful spouse returning because of the discipline.\n\nThe leadership in the local church should also help single believers who have been divorced to understand their situation biblically, especially in cases where the appropriate application of biblical teaching does not seem clear." },
              { heading: "Pre-conversion Divorce", text: "According to 1 Corinthians 7:20-27, there is nothing in salvation that demands a particular social or marital status. The Apostle Paul, therefore, instructs believers to recognize that God providentially allows the circumstances they find themselves in when they come to Christ. If they were called while married, then they are not required to seek a divorce (even though divorce may be permitted on biblical grounds). If they were called while divorced, and cannot be reconciled to their former spouse because that spouse is an unbeliever or is remarried, then they are free to either remain single or be remarried to another believer (1 Cor. 7:39; 2 Cor. 6:14)." },
              { heading: "Repentance and Forgiveness", text: "In cases where divorce took place on unbiblical grounds and the guilty partner later repents, the grace of God is operative at the point of repentance. A sign of true repentance will be a desire to implement 1 Corinthians 7:10-11, which would involve a willingness to pursue reconciliation with his or her former spouse, if that is possible. If reconciliation is not possible, however, because the former spouse is an unbeliever or is remarried, then the forgiven believer could pursue another relationship under the careful guidance and counsel of church leadership.\n\nIn cases where a believer obtained a divorce on unbiblical grounds and remarried, he or she is guilty of the sin of adultery until that sin is confessed (Mark 10:11-12). God does forgive that sin immediately when repentance takes place, and there is nothing in Scripture to indicate anything other than that. From that point on the believer should continue in his or her current marriage.\n\nFor a fuller treatment of divorce and remarriage, see The Biblical Position on Divorce & Remarriage from Grace Community Church's Elders' Perspective Series, from which this paper was adapted." },
            ].map((section, i) => (
              <div key={i} style={{ marginBottom: "28px" }}>
                {section.heading && <h3 style={{ ...headingStyle, marginBottom: "12px" }}>{section.heading}</h3>}
                {section.text.split("\n\n").map((para, j) => (
                  <p key={j} style={{ ...bodyStyle, marginBottom: "14px" }}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Men & Women ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "760px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Position Paper</Eyebrow>
            <h2 style={{ fontSize: "clamp(1.8rem,1.2rem+1.5vw,2.4rem)", margin: "16px 0 24px", lineHeight: 1 }}>
              Men &amp; Women
            </h2>
            <p style={{ ...bodyStyle, marginBottom: "20px" }}>Based on our understanding of Biblical teachings, we affirm the following:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                "Both Adam and Eve were created in God's image, equal before God as persons and distinct in their manhood and womanhood (Gen 1:26-27, 2:18).",
                "Distinctions in masculine and feminine roles are ordained by God as part of the created order, and should find an echo in every human heart (Gen 2:18, 21-24; 1 Cor 11:7-9; 1 Tim 2:12-14).",
                "Adam's headship in marriage was established by God before the Fall, and was not a result of sin (Gen 2:16-18, 21-24, 3:1-13; 1 Cor 11:7-9).",
                "The Fall introduced distortions into the relationships between men and women (Gen 3:1-7, 12, 16). In the home, the husband's loving, humble headship tends to be replaced by domination or passivity; the wife's intelligent, willing submission tends to be replaced by usurpation or servility. In the church, sin inclines men toward a worldly love of power or an abdication of spiritual responsibility, and inclines women to resist limitations on their roles or to neglect the use of their gifts in appropriate ministries.",
                "The Old Testament, as well as the New Testament, manifests the equally high value and dignity which God attached to the roles of both men and women (Gen 1:26-27, 2:18; Gal 3:28). Both Old and New Testaments also affirm the principle of male headship in the family and in the covenant community (Gen 2:18; Eph 5:21-33; Col 3:18-19; 1 Tim 2:11-15).",
                "Redemption in Christ aims at removing the distortions introduced by the curse. In the family, husbands should forsake harsh or selfish leadership and grow in love and care for their wives; wives should forsake resistance to their husbands' authority and grow in willing, joyful submission to their husbands' leadership (Eph 5:21-33; Col 3:18-19; Tit 2:3-5; 1 Pet 3:1-7). In the church, redemption in Christ gives men and women an equal share in the blessings of salvation; nevertheless, some governing and teaching roles within the church are restricted to men (Gal 3:28; 1 Cor 11:2-16; 1 Tim 2:11-15).",
                "In all of life Christ is the supreme authority and guide for men and women, so that no earthly submission—domestic, religious, or civil—ever implies a mandate to follow a human authority into sin (Dan 3:10-18; Acts 4:19-20, 5:27-29; 1 Pet 3:1-2).",
                "In both men and women a heartfelt sense of call to ministry should never be used to set aside Biblical criteria for particular ministries (1 Tim 2:11-15, 3:1-13; Tit 1:5-9). Rather, Biblical teaching should remain the authority for testing our subjective discernment of God's will.",
                "With half the world's population outside the reach of indigenous evangelism; with countless other lost people in those societies that have heard the gospel; with the stresses and miseries of sickness, malnutrition, homelessness, illiteracy, ignorance, aging, addiction, crime, incarceration, neuroses, and loneliness, no man or woman who feels a passion from God to make His grace known in word and deed need ever live without a fulfilling ministry for the glory of Christ and the good of this fallen world (1 Cor 12:7-21).",
                "We are convinced that a denial or neglect of these principles will lead to increasingly destructive consequences in our families, our churches, and the culture at large.",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-body)", lineHeight: 1.7 }}>
                  <span style={{ flexShrink: 0, marginTop: "9px", width: "7px", height: "7px", borderRadius: "50%", background: "var(--gold-400)", display: "block" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
