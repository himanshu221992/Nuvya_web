import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CategoryCard from "@/components/CategoryCard";
import SectionTitle from "@/components/SectionTitle";
import JsonLd from "@/components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nuvyababy.com";

export const metadata: Metadata = {
  title: "Baby Gifts & Newborn Gift Ideas | NuvyaBaby",
  description:
    "Explore thoughtful baby gifts, newborn gift ideas, baby shower gifts, personalized baby gifts, and useful baby essentials for parents and little ones with NuvyaBaby.",
  alternates: {
    canonical: `${siteUrl}/baby-gifts`
  },
  openGraph: {
    title: "Baby Gifts & Newborn Gift Ideas | NuvyaBaby",
    description:
      "Explore thoughtful baby gifts, newborn gift ideas, baby shower gifts, personalized baby gifts, and useful baby essentials.",
    url: `${siteUrl}/baby-gifts`
  }
};

const categories = [
  {
    title: "Newborn Baby Gifts",
    description:
      "Choose gentle, thoughtful newborn baby gifts that celebrate arrival while supporting parents during the early days.",
    icon: "👶"
  },
  {
    title: "Baby Shower Gifts",
    description:
      "Find baby shower gifts that new parents will actually use, from soft essentials to memorable keepsakes.",
    icon: "🎀"
  },
  {
    title: "First Birthday Gifts",
    description:
      "Explore cute and useful first birthday gifts that support play, growth, comfort, and joyful memories.",
    icon: "🎂"
  },
  {
    title: "Personalized Baby Gifts",
    description:
      "Discover personalized baby gifts that add emotional value with names, initials, birth dates, and special details.",
    icon: "✨"
  },
  {
    title: "Baby Gift Hampers",
    description:
      "Create beautiful baby gift hampers with newborn essentials, soft toys, baby care items, and parent-friendly surprises.",
    icon: "🎁"
  },
  {
    title: "Gifts for New Moms",
    description:
      "Thoughtful gifts for new moms that offer comfort, care, encouragement, and practical support.",
    icon: "🌸"
  },
  {
    title: "Gifts for New Dads",
    description:
      "Meaningful gifts for new dads that celebrate fatherhood and help them feel included in baby care.",
    icon: "🧢"
  },
  {
    title: "Baby Essentials Gift Sets",
    description:
      "Useful baby essentials gift sets with practical items parents need for newborn care and daily routines.",
    icon: "🍼"
  },
  {
    title: "Educational Baby Gifts",
    description:
      "Early learning baby gifts that encourage sensory play, discovery, bonding, and developmental growth.",
    icon: "📚"
  },
  {
    title: "Soft Toys and Comfort Gifts",
    description:
      "Soft toys, blankets, comforters, and cuddly gifts that bring warmth and emotional comfort.",
    icon: "🧸"
  }
];

export default function BabyGiftsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Baby Gifts",
        item: `${siteUrl}/baby-gifts`
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="soft-gradient py-16">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Baby Gifts" }]} />
          <SectionTitle
            eyebrow="Baby gifting guide"
            title="Baby Gifts, Newborn Gift Ideas, and Baby Shower Gifts"
            description="Explore thoughtful baby gifts, newborn baby gifts, baby shower gifts, personalized baby gifts, and useful baby essentials for parents and little ones."
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-black text-cocoa">
            How to Choose a Useful Baby Gift
          </h2>
          <p className="mt-5 leading-8 text-cocoa/75">
            A meaningful baby gift should feel thoughtful, safe, comfortable,
            and practical. When choosing gifts for new parents, consider daily
            usefulness, baby comfort, easy care, emotional value, and the stage
            of the baby’s growth. NuvyaBaby helps you explore baby gifting ideas
            that feel warm, useful, and parent-approved.
          </p>
        </div>
      </section>
    </>
  );
}