import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nuvyababy.com";

export const metadata: Metadata = {
  title: "Privacy Policy | NuvyaBaby",
  description:
    "Read the NuvyaBaby privacy policy to understand how we collect, use, and protect website visitor information.",
  alternates: {
    canonical: `${siteUrl}/privacy-policy`
  }
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16">
      <div className="container-page max-w-3xl">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <h1 className="text-4xl font-black text-cocoa">Privacy Policy</h1>
        <p className="mt-5 text-cocoa/70">Last updated: June 5, 2026</p>

        <div className="mt-10 space-y-8 leading-8 text-cocoa/75">
          <section>
            <h2 className="text-2xl font-black text-cocoa">Introduction</h2>
            <p className="mt-3">
              NuvyaBaby values your privacy. This privacy policy explains how
              we may collect, use, and protect information when you visit our
              website, read our baby gifting and parenting blog, or contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Data Collection</h2>
            <p className="mt-3">
              We may collect basic information such as your name, email address,
              phone number, query type, and message when you submit a contact or
              support form.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Contact Form Data</h2>
            <p className="mt-3">
              Contact form data is used to respond to baby gift suggestions,
              parenting questions, product inquiries, collaboration requests,
              and general support messages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Cookies and Analytics</h2>
            <p className="mt-3">
              We may use cookies and analytics tools to understand website
              traffic, improve content, and make the website more useful for
              parents and gift buyers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Blog Interactions</h2>
            <p className="mt-3">
              If blog comments, sharing tools, or newsletter features are added
              in the future, related interaction data may be collected to
              provide those features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Child Privacy</h2>
            <p className="mt-3">
              NuvyaBaby content is intended for adults, parents, expecting
              parents, and gift buyers. We do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Data Security</h2>
            <p className="mt-3">
              We take reasonable steps to protect submitted information, but no
              online method of transmission or storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">User Rights</h2>
            <p className="mt-3">
              You may contact us to request access, correction, or deletion of
              personal information you have submitted through the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Contact Information</h2>
            <p className="mt-3">
              For privacy questions, contact us at support@nuvyababy.com.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}