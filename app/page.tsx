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
