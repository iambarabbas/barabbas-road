import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { Card } from "@/components/core/Card";
import { Icon } from "@/components/Icon";
import Link from "next/link";

const POSTS = [
  {
    t: "Why We Preach Verse by Verse",
    cat: "Teaching",
    date: "June 10, 2026",
    img: "https://images.unsplash.com/photo-1490127252417-7c393f993ee4?w=900&q=80",
    excerpt: "Expository preaching isn't a style — it's a conviction about who gets to set the agenda on Sunday morning.",
  },
  {
    t: "Finding Your People in a Life Group",
    cat: "Community",
    date: "June 3, 2026",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
    excerpt: "The church was never meant to be a crowd you watch. Here's how to take the first step into real fellowship.",
  },
  {
    t: "Reading the Bible With Your Kids",
    cat: "Family",
    date: "May 28, 2026",
    img: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=900&q=80",
    excerpt: "Five simple, unintimidating rhythms for opening God's Word together around the dinner table.",
  },
];

export function BlogSection() {
  return (
    <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
      <div className="brc-container">
        <div
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "36px" }}
        >
          <div>
            <Eyebrow color="var(--gold-700)" withRule>From the Blog</Eyebrow>
            <h2 style={{ fontSize: "44px", margin: "14px 0 0", lineHeight: 1 }}>Articles &amp; Updates</h2>
          </div>
          <Link href="/blog">
            <Button variant="outline" iconRight={<Icon name="arrowRight" size={15} />}>
              Read the Blog
            </Button>
          </Link>
        </div>

        <div className="brc-blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {POSTS.map((p) => (
            <Card key={p.t} media={p.img} mediaHeight={190} interactive>
              <Badge tone="gold">{p.cat}</Badge>
              <h3 style={{ fontSize: "23px", margin: "2px 0 0", lineHeight: 1.12 }}>{p.t}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", margin: 0 }}>{p.excerpt}</p>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "var(--text-subtle)",
                  fontSize: "13px",
                }}
              >
                <span>{p.date}</span>
                <span style={{ color: "var(--text-accent)", fontWeight: 600, display: "flex", alignItems: "center", gap: "5px" }}>
                  Read <Icon name="arrowRight" size={14} />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
