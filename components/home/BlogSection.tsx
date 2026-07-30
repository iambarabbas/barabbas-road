import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { Card } from "@/components/core/Card";
import { Icon } from "@/components/Icon";
import Link from "next/link";

// Real posts from the blog — expository preaching pinned first
const POSTS = [
  {
    slug: "expository-preaching-at-barabbas-road-church-in-san-diego",
    t: "Expository Preaching at Barabbas Road Church",
    cat: "Teaching",
    date: "July 7, 2016",
    img: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=900&q=80",
    excerpt:
      "At Barabbas Road, you'll hear verse-by-verse preaching every Sunday — because the text, not the preacher, sets the agenda.",
  },
  {
    slug: "chatgpt-ai-and-the-christian",
    t: "ChatGPT, AI, and the Christian: A Biblical Take on Technology",
    cat: "Culture",
    date: "March 26, 2025",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
    excerpt:
      "How should followers of Christ think about artificial intelligence? Pastor Brett offers a biblical framework for engaging the most disruptive technology of our time.",
  },
  {
    slug: "preaching-punctures-church-in-san-diego",
    t: "Preaching that Punctures",
    cat: "Teaching",
    date: "January 27, 2017",
    img: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=900&q=80",
    excerpt:
      "Not all preaching is created equal. Why expository preaching cuts to the heart in ways topical sermons rarely do.",
  },
];

export function BlogSection() {
  return (
    <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
      <div className="brc-container">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "36px",
          }}
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
            <Link key={p.slug} href={`/${p.slug}`} style={{ textDecoration: "none", display: "flex" }}>
              <Card media={p.img} mediaHeight={190} interactive style={{ height: "100%", width: "100%" }}>
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
                  <span
                    style={{
                      color: "var(--text-accent)",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    Read <Icon name="arrowRight" size={14} />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
