import type { Metadata } from "next";
import Link from "next/link";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Minar Academy",
  description:
    "Minar Academy privacy policy — how we collect, use, protect and delete student data in our learning app and website.",
  alternates: {
    canonical: "https://minaracademy.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Minar Academy",
    description:
      "How Minar Academy collects, uses and protects personal information for Madrasah students.",
    url: "https://minaracademy.com/privacy-policy",
    siteName: "Minar Academy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Minar Academy",
    description:
      "How Minar Academy collects, uses and protects personal information for Madrasah students.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="wrapper py-10 md:py-14">
      <header className="mb-8 max-w-3xl">
        <p className="text-sm text-primary font-medium mb-2">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          Privacy Policy
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-gray-600">
          কার্যকর তারিখ / Effective date: ৩০ সেপ্টেম্বর ২০২৬ / 30 September 2026
        </p>
        <p className="mt-1 text-gray-600">
          Website:{" "}
          <a
            href="https://minaracademy.com"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            minaracademy.com
          </a>
        </p>
      </header>

      <PrivacyPolicyContent />
    </main>
  );
}
