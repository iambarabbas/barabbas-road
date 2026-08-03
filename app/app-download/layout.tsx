import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Our App",
  description:
    "Download the Barabbas Road Church app. Access sermons, the event calendar, giving, Life Groups, and more — available on iOS and Android.",
  alternates: { canonical: "https://iambarabbas.github.io/barabbas-road/app-download/" },
  openGraph: {
    title: "Download Our App | Barabbas Road Church — San Diego",
    description:
      "The official Barabbas Road Church app — sermons, events, giving, and more. iOS and Android.",
    url: "https://iambarabbas.github.io/barabbas-road/app-download/",
  },
};

export default function AppDownloadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
