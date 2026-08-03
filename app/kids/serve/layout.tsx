import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Children's Ministry Service Form",
  description:
    "Apply to serve in the Children's Ministry at Barabbas Road Church. Fill out the online service form to get started.",
  alternates: { canonical: "https://iambarabbas.github.io/barabbas-road/kids/serve/" },
  robots: { index: false, follow: false },
};

export default function ServeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
