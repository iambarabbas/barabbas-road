"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// This page is deprecated — redirects to the Elders page
export default function TeamPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/about/elders");
  }, [router]);
  return null;
}
