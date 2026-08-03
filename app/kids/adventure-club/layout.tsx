import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adventure Club",
  description:
    "Adventure Club at Barabbas Road Church — a monthly outdoor program for kids combining adventure, team challenges, and Bible-centered discipleship.",
  alternates: { canonical: "https://barabbas.com/kids/adventure-club/" },
};

export default function AdventureClubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
