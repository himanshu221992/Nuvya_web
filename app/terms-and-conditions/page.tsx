import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nuvyababy.com";

export const metadata: Metadata = {
  title: "Terms and Conditions | NuvyaBaby",
  description:
    "Read the NuvyaBaby terms and conditions for website usage, content disclaimers, intellectual property, external links, and limitations.",
  alternates: {
    canonical: `${siteUrl}/terms-and-conditions`
  }
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16">
      <div className="container-page max-w-3xl">
        <Breadcrumbs items={[{ label: "Terms and Conditions" }]} />

        <h1 className="text-4xl font-black text-cocoa">
          Terms and Conditions
        </h1>
        <p className="mt-5 text-cocoa/70">Last updated: June 5, 2026</p>

        <div className="mt-10 space-y-8 leading-8 text-cocoa/75">
          <section>
            <h2 className="text-2xl font-black text-cocoa">Website Usage</h2>
            <p className="mt-3">
              By using NuvyaBaby, you agree to use the website responsibly and
              only for lawful purposes. You should not misuse the website,
              attempt unauthorized access, or interfere with its functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Content Disclaimer</h2>
            <p className="mt-3">
              NuvyaBaby provides general information about baby gifting, baby
              essentials, newborn care, and parenting topics. Content is for
              informational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">
              Product and Gifting Disclaimer
            </h2>
            <p className="mt-3">
              Product and gifting information should be reviewed carefully by
              users before purchase. Always consider age suitability, safety,
              quality, and parent preferences before choosing baby products or
              gifts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Blog Advice Disclaimer</h2>
            <p className="mt-3">
              Parenting and baby care blog content is not medical advice. For
              health, safety, or urgent concerns, consult a qualified doctor,
              pediatrician, or professional advisor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Intellectual Property</h2>
            <p className="mt-3">
              Website text, design, branding, graphics, and content belong to
              NuvyaBaby unless otherwise stated. You may not copy or republish
              content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Limitation of Liability</h2>
            <p className="mt-3">
              NuvyaBaby is not responsible for losses, damages, or decisions
              made based on website content, product information, external
              links, or general parenting guidance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">External Links</h2>
            <p className="mt-3">
              The website may include links to external websites. NuvyaBaby is
              not responsible for the content, privacy policies, or practices of
              external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Changes to Terms</h2>
            <p className="mt-3">
              We may update these terms from time to time. Continued use of the
              website means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Contact Information</h2>
            <p className="mt-3">
              For questions about these terms, contact us at
              support@nuvyababy.com.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}