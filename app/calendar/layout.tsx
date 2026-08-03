import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events Calendar",
  description:
    "Church events and upcoming services at Barabbas Road Church in Miramar, San Diego. Sunday service 10am, Tuesday classes 6:30pm. Stay connected with our community.",
  alternates: { canonical: "https://iambarabbas.github.io/barabbas-road/calendar/" },
  openGraph: {
    title: "Events Calendar | Barabbas Road Church — San Diego",
    description:
      "Upcoming services and events at Barabbas Road Church. Sunday 10am, Tuesday 6:30pm — Miramar, San Diego.",
    url: "https://iambarabbas.github.io/barabbas-road/calendar/",
  },
};

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
