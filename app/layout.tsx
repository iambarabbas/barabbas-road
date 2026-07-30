import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: {
    template: "%s | Barabbas Road Church",
    default: "Barabbas Road Church — San Diego",
  },
  description:
    "A Bible-teaching church in Mission Valley, San Diego. Sundays at 10am. Hear the Truth. Live the Truth. Defend the Truth.",
  openGraph: {
    siteName: "Barabbas Road Church",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
