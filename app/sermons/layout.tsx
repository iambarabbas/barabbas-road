import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Listen to verse-by-verse expository sermons from Barabbas Road Church in Miramar, San Diego. Pastor Matt Smith preaches through entire books of the Bible every Sunday at 10am.",
  alternates: { canonical: "https://iambarabbas.github.io/barabbas-road/sermons/" },
  openGraph: {
    title: "Sermons | Barabbas Road Church — San Diego",
    description:
      "Verse-by-verse expository preaching through entire books of the Bible. Every Sunday at 10am, Miramar, San Diego.",
    url: "https://iambarabbas.github.io/barabbas-road/sermons/",
  },
};

export default function SermonsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
