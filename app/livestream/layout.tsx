import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livestream",
  description:
    "Watch Barabbas Road Church's Sunday service livestream. Join us online every Sunday at 10am from Miramar, San Diego — verse-by-verse Bible teaching and expository preaching.",
  alternates: { canonical: "https://barabbas.com/livestream/" },
  openGraph: {
    title: "Livestream | Barabbas Road Church — San Diego",
    description:
      "Watch our Sunday service live online. Every Sunday at 10am from Miramar, San Diego.",
    url: "https://barabbas.com/livestream/",
  },
};

export default function LivestreamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
