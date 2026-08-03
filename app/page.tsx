import type { Metadata } from "next";
import { HeroBold }       from "@/components/home/HeroBold";
import { Pillars }        from "@/components/home/Pillars";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { EventsSection }  from "@/components/home/EventsSection";
import { BlogSection }    from "@/components/home/BlogSection";
import { VisitBand }      from "@/components/home/VisitBand";
import { TimesLocation }  from "@/components/home/TimesLocation";

export const metadata: Metadata = {
  title: "Barabbas Road Church — San Diego",
  description:
    "Barabbas Road Church is a Bible-teaching church in Miramar, San Diego. Join us Sundays at 10am at 7340 Miramar Rd for verse-by-verse expository preaching, Life Groups, and gospel community.",
  alternates: { canonical: "https://barabbas.com/" },
  openGraph: {
    title: "Barabbas Road Church — Bible-Teaching Church in San Diego",
    description:
      "A Bible-teaching church in Miramar, San Diego. Verse-by-verse preaching every Sunday at 10am. 7340 Miramar Rd, San Diego, CA 92126.",
    url: "https://barabbas.com/",
  },
};

export default function Home() {
  return (
    <>
      <HeroBold />
      <Pillars />
      <WelcomeSection />
      <EventsSection />
      <BlogSection />
      <VisitBand />
      <TimesLocation />
    </>
  );
}
