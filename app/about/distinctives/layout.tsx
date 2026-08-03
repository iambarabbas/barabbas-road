import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Distinctives",
  description:
    "What makes Barabbas Road Church distinctive — our commitment to expository preaching, biblical eldership, and making disciple-making disciples in San Diego and beyond.",
  alternates: { canonical: "https://barabbas.com/about/distinctives/" },
  openGraph: {
    title: "Our Distinctives | Barabbas Road Church — San Diego",
    description:
      "Expository preaching, biblical eldership, and disciple-making disciples. What sets Barabbas Road Church apart.",
    url: "https://barabbas.com/about/distinctives/",
  },
};

export default function DistinctivesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
