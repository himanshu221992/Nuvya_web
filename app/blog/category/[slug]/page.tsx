import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import SectionTitle from "@/components/SectionTitle";
import { samplePosts } from "@/lib/samplePosts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nuvyababy.com";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function titleFromSlug(slug: string) {
  return slug
    .replaceAll("-", " ")
    .replace("and", "&")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = titleFromSlug(slug);

  return {
    title: `${title} Articles | NuvyaBaby`,
    description: `Read helpful ${title.toLowerCase()} articles from NuvyaBaby for baby gifting, newborn care, parenting, and baby essentials.`,
    alternates: {
      canonical: `${siteUrl}/blog/category/${slug}`
    }
  };
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const title = titleFromSlug(slug);

  const filteredPosts = samplePosts.filter(
    (post) =>
      post.category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and") ===
      slug
  );

  return (
    <>
      <section className="soft-gradient py-16">
        <div className="container-page">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: title }
            ]}
          />
          <SectionTitle
            eyebrow="Blog category"
            title={title}
            description={`Explore ${title.toLowerCase()} articles, guides, and helpful tips from NuvyaBaby.`}
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {(filteredPosts.length ? filteredPosts : samplePosts).map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </>
  );
}