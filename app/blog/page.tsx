import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";
import { samplePosts } from "@/lib/samplePosts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nuvyababy.com";

export const metadata: Metadata = {
  title: "Baby Gifting & Parenting Blog | NuvyaBaby",
  description:
    "Read helpful baby gifting guides, newborn care tips, parenting advice, baby shower ideas, and baby essentials articles from NuvyaBaby.",
  alternates: {
    canonical: `${siteUrl}/blog`
  },
  openGraph: {
    title: "Baby Gifting & Parenting Blog | NuvyaBaby",
    description:
      "Read baby gifting guides, newborn care tips, parenting advice, baby shower ideas, and baby essentials articles.",
    url: `${siteUrl}/blog`
  }
};

const categories = [
  "Baby Gifting Ideas",
  "Newborn Care",
  "Parenting Tips",
  "Baby Shower Ideas",
  "Baby Essentials",
  "Mom & Baby Care",
  "Baby Safety",
  "Growth & Development"
];

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Baby Gifting & Parenting Blog",
    url: `${siteUrl}/blog`,
    description:
      "Baby gifting guides, newborn care tips, parenting advice, baby shower ideas, and baby essentials articles from NuvyaBaby."
  };

  return (
    <>
      <JsonLd data={blogSchema} />

      <section className="soft-gradient py-16">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <SectionTitle
            eyebrow="NuvyaBaby Blog"
            title="Baby Gifting, Newborn Care, and Parenting Tips"
            description="Read helpful guides for baby gifts, newborn essentials, baby shower ideas, parenting tips, mom and baby care, safety, and growth."
          />
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container-page flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <a
              key={category}
              href={`/blog/category/${category
                .toLowerCase()
                .replaceAll(" ", "-")
                .replaceAll("&", "and")}`}
              className="rounded-full bg-cream px-5 py-2 text-sm font-bold text-cocoa transition hover:bg-blush"
            >
              {category}
            </a>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {samplePosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </>
  );
}