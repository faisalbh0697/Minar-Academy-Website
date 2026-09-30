import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Account and Data Deletion Request | Minar Academy",
  description:
    "How to request deletion of your Minar Academy account and the personal data linked to it.",
  alternates: {
    canonical: "https://minaracademy.com/account-deletion",
  },
  openGraph: {
    title: "Account and Data Deletion Request | Minar Academy",
    description:
      "Request deletion of your Minar Academy account and linked data.",
    url: "https://minaracademy.com/account-deletion",
    siteName: "Minar Academy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Account and Data Deletion Request | Minar Academy",
    description:
      "Request deletion of your Minar Academy account and linked data.",
  },
};

export default function AccountDeletionPage() {
  return (
    <main className="wrapper py-10 md:py-14">
      <header className="mb-8 max-w-3xl">
        <p className="text-sm text-primary font-medium mb-2">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          Account Deletion
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Account and Data Deletion Request
        </h1>
        <p className="mt-3 text-gray-600">
          App name: Minar Academy
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
        <p className="mt-1 text-gray-600">
          Support email:{" "}
          <a
            href="mailto:contactminaracademy@gmail.com"
            className="text-primary hover:underline"
          >
            contactminaracademy@gmail.com
          </a>
        </p>
      </header>

      <article className="max-w-3xl space-y-8 text-gray-700 leading-relaxed">
        <p>
          Minar Academy respects your privacy and your right to control your
          data. This page explains how to request deletion of your Minar Academy
          account and the data linked to it.
        </p>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            How to request account deletion
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Send an email to{" "}
              <a
                href="mailto:contactminaracademy@gmail.com?subject=Delete%20my%20account"
                className="text-primary hover:underline"
              >
                contactminaracademy@gmail.com
              </a>{" "}
              from the email address registered with your Minar Academy account.
            </li>
            <li>
              Use the subject line:{" "}
              <span className="font-medium text-gray-900">Delete my account</span>
              .
            </li>
            <li>
              Include your full name and the registered email address or phone
              number in the message.
            </li>
            <li>
              We will reply to confirm your identity and then process the
              request.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            What data is deleted
          </h2>
          <p className="mb-3">
            When your request is processed, we permanently delete the following
            data:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Profile information (name, email address, phone number, profile
              photo)
            </li>
            <li>Login credentials and authentication data</li>
            <li>
              Course enrollments, learning progress, quiz results and
              certificates
            </li>
            <li>App activity and usage data linked to your account</li>
            <li>Device identifiers linked to your account</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            What data may be kept
          </h2>
          <p className="mb-3">
            Some data may be kept for a limited time where required by law or
            for legitimate purposes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Payment and transaction records, kept for up to 7 years for
              accounting and tax compliance
            </li>
            <li>
              Records needed to prevent fraud or resolve disputes, kept for up
              to 90 days
            </li>
            <li>
              Backup copies, which are removed automatically within 30 days
            </li>
          </ul>
          <p className="mt-3">
            Retained data is kept securely and is not used for any other
            purpose.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            How long deletion takes
          </h2>
          <p>
            We process deletion requests within 7 days of confirming your
            identity. All data is fully removed from our systems, including
            backups, within 30 days. You will receive an email once your account
            has been deleted.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            Important notes
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Deletion is permanent and cannot be undone.</li>
            <li>
              You will lose access to all purchased courses and subscriptions
              linked to the account. Refunds are handled according to our refund
              policy.
            </li>
            <li>
              If you only want specific data removed without deleting your
              account, email us at{" "}
              <a
                href="mailto:contactminaracademy@gmail.com"
                className="text-primary hover:underline"
              >
                contactminaracademy@gmail.com
              </a>{" "}
              and tell us which data to remove.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            Contact us
          </h2>
          <p>
            For any questions about your data or this process, contact us at{" "}
            <a
              href="mailto:contactminaracademy@gmail.com"
              className="text-primary hover:underline"
            >
              contactminaracademy@gmail.com
            </a>{" "}
            or visit{" "}
            <a
              href="https://minaracademy.com"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              minaracademy.com
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
