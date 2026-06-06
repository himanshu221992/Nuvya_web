import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nuvyababy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NuvyaBaby | Thoughtful Baby Gifts, Newborn Essentials & Parenting Tips",
    template: "%s | NuvyaBaby"
  },
  description:
    "Discover thoughtful baby gifts, newborn essentials, baby shower ideas, and helpful parenting tips at NuvyaBaby.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "NuvyaBaby",
    title: "NuvyaBaby | Thoughtful Baby Gifts, Newborn Essentials & Parenting Tips",
    description:
      "Find meaningful baby gifts, newborn essentials, baby shower ideas, and parenting tips.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NuvyaBaby baby gifting and parenting brand"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "NuvyaBaby | Thoughtful Baby Gifts, Newborn Essentials & Parenting Tips",
    description:
      "Discover thoughtful baby gifts, newborn essentials, and parenting tips."
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NuvyaBaby",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: []
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NuvyaBaby",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}