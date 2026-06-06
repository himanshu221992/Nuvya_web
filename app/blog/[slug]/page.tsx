import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { samplePosts } from "@/lib/samplePosts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nuvyababy.com";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = samplePosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found"
    };
  }

  return {
    title: `${post.title} | NuvyaBaby`,
    description: post.excerpt,
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article"
    }
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = samplePosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "NuvyaBaby"
    },
    publisher: {
      "@type": "Organization",
      name: "NuvyaBaby"
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <article className="soft-gradient py-16">
        <div className="container-page max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title }
            ]}
          />

          <p className="mb-4 rounded-full bg-blush px-4 py-2 text-sm font-bold text-cocoa inline-flex">
            {post.category}
          </p>

          <h1 className="text-4xl font-black leading-tight text-cocoa md:text-6xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-cocoa/75">
            {post.excerpt}
          </p>
        </div>
      </article>

      <section className="bg-white py-20">
        <div className="container-page prose prose-lg max-w-3xl text-cocoa">
          <h2>Introduction</h2>
          <p>
            Choosing the right baby gift can feel emotional and confusing,
            especially when you want something useful, safe, beautiful, and
            meaningful. This guide from NuvyaBaby helps parents, relatives, and
            friends discover baby gifting ideas that support newborn comfort and
            parent confidence.
          </p>

          <h2>What Makes a Good Baby Gift?</h2>
          <p>
            A good baby gift should be practical, gentle, easy to use, and
            suitable for the baby’s age. New parents often appreciate gifts that
            help with daily care, sleep, feeding, hygiene, comfort, and bonding.
          </p>

          <h3>Useful Baby Gift Ideas</h3>
          <ul>
            <li>Soft blankets and swaddles</li>
            <li>Baby essentials gift sets</li>
            <li>Comfort toys and soft toys</li>
            <li>Baby care kits</li>
            <li>Personalized keepsakes</li>
            <li>Gift hampers for newborns</li>
          </ul>

          <h2>Final Thoughts</h2>
          <p>
            The best baby gifts are chosen with love, usefulness, and comfort in
            mind. Whether you are buying for a newborn, baby shower, first
            birthday, new mom, or new dad, NuvyaBaby helps you find thoughtful
            ideas for every precious little moment.
          </p>
        </div>
      </section>
    </>
  );
}