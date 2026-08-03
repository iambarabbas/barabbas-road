import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on theology, the Bible, expository preaching, Christian living, and church life from Barabbas Road Church in San Diego.",
  alternates: { canonical: "https://barabbas.com/blog/" },
  openGraph: {
    title: "Blog | Barabbas Road Church — San Diego",
    description:
      "Theology, Bible teaching, and church life articles from Barabbas Road Church in Miramar, San Diego.",
    url: "https://barabbas.com/blog/",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
