import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support the ministry of Barabbas Road Church in Miramar, San Diego. Give online to advance the gospel in San Diego and around the world.",
  alternates: { canonical: "https://iambarabbas.github.io/barabbas-road/give/" },
  openGraph: {
    title: "Give | Barabbas Road Church — San Diego",
    description:
      "Support the ministry of Barabbas Road Church. Give online to advance the gospel in San Diego and around the world.",
    url: "https://iambarabbas.github.io/barabbas-road/give/",
  },
};

export default function GiveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
