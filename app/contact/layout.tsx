import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Barabbas Road Church in Miramar, San Diego. Call 619.289.8987, email info@barabbas.com, or visit us at 7340 Miramar Rd, San Diego, CA 92126 every Sunday at 10am.",
  alternates: { canonical: "https://iambarabbas.github.io/barabbas-road/contact/" },
  openGraph: {
    title: "Contact | Barabbas Road Church — San Diego",
    description:
      "Get in touch with Barabbas Road Church. 7340 Miramar Rd, San Diego, CA 92126. Call 619.289.8987.",
    url: "https://iambarabbas.github.io/barabbas-road/contact/",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
