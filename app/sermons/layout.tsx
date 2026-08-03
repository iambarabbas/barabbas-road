import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Listen to verse-by-verse expository sermons from Barabbas Road Church in Miramar, San Diego. Pastor Matt Smith preaches through entire books of the Bible every Sunday at 10am.",
  alternates: { canonical: "https://barabbas.com/sermons/" },
  openGraph: {
    title: "Sermons | Barabbas Road Church — San Diego",
    description:
      "Verse-by-verse expository preaching through entire books of the Bible. Every Sunday at 10am, Miramar, San Diego.",
    url: "https://barabbas.com/sermons/",
    images: [{ url: "/assets/expository-preaching.jpg", width: 1200, height: 630, alt: "Sermons — Barabbas Road Church, San Diego" }],
  },
};

export default function SermonsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
