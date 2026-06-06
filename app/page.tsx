import type { Metadata } from "next";
import { Heart, Gift, ShieldCheck, Sparkles } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import SectionTitle from "@/components/SectionTitle";
import CategoryCard from "@/components/CategoryCard";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nuvyababy.com";

export const metadata: Metadata = {
  title: "NuvyaBaby | Thoughtful Baby Gifts, Newborn Essentials & Parenting Tips",
  description:
    "Discover thoughtful baby gifts, newborn essentials, baby shower ideas, and helpful parenting tips at NuvyaBaby. Find meaningful ideas for babies, parents, and every special little moment.",
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "NuvyaBaby | Thoughtful Baby Gifts, Newborn Essentials & Parenting Tips",
    description:
      "Discover thoughtful baby gifts, newborn essentials, baby shower ideas, and helpful parenting tips.",
    url: siteUrl
  }
};

const featuredCategories = [
  {
    title: "Newborn Baby Gifts",
    description:
      "Soft, useful, and thoughtful newborn baby gift ideas for welcoming precious little ones.",
    icon: "👶"
  },
  {
    title: "Baby Shower Gifts",
    description:
      "Beautiful baby shower gifts that feel meaningful, practical, and parent-approved.",
    icon: "🎀"
  },
  {
    title: "Baby Gift Hampers",
    description:
      "Curated baby gift hampers filled with essentials, comfort items, and memorable surprises.",
    icon: "🎁"
  },
  {
    title: "Parenting Tips",
    description:
      "Helpful parenting guidance for newborn care, baby essentials, safety, and early routines.",
    icon: "💛",
    href: "/blog"
  }
];

const featuredBlogs = [
  {
    title: "Best Baby Gifts for Newborns: A Complete Guide for Parents and Families",
    slug: "best-baby-gifts-for-newborns",
    excerpt:
      "Explore thoughtful newborn gift ideas that are useful, safe, comforting, and memorable.",
    category: "Baby Gifting Ideas"
  },
  {
    title: "Newborn Baby Essentials Every Parent Should Know",
    slug: "newborn-baby-essentials-every-parent-should-know",
    excerpt:
      "A simple guide to baby essentials that help parents feel prepared during the early days.",
    category: "Baby Essentials"
  },
  {
    title: "Parenting Tips for First-Time Parents",
    slug: "parenting-tips-for-first-time-parents",
    excerpt:
      "Gentle, practical advice for new parents learning baby care one day at a time.",
    category: "Parenting Tips"
  }
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is NuvyaBaby?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NuvyaBaby is a baby gifting and parenting brand helping families discover thoughtful baby gifts, newborn essentials, and helpful parenting content."
        }
      },
      {
        "@type": "Question",
        name: "What baby gift ideas can I find at NuvyaBaby?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can explore newborn baby gifts, baby shower gifts, personalized baby gifts, gift hampers, essentials gift sets, and useful gifts for new parents."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="soft-gradient overflow-hidden py-5 md:py-5">
        <div className="container-page grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold text-cocoa shadow-soft">
              Thoughtful newborn gifts and baby hampers
            </p>

            <h1 className="font-serif text-[72px] font-black leading-[0.88] tracking-tight text-[#6B5148] sm:text-[96px] lg:text-[118px] xl:text-[140px]">
          Baby
          <span className="block pl-16 text-[#D83A8C] sm:pl-24 lg:pl-32">
            Gift Box
          </span>
        </h1>


            <p className="mt-6 max-w-xl text-lg leading-8 text-cocoa/75">
              Create a meaningful baby gift box filled with newborn essentials,
              soft comfort gifts, baby shower surprises, and thoughtful keepsakes
              for every precious little moment.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/baby-gifts">Build Baby Gift Box</CTAButton>
              <CTAButton href="/blog" variant="secondary">
                Read Parenting Tips
              </CTAButton>
            </div>
          </div>

    <div className="relative min-h-[520px] overflow-hidden lg:min-h-full">
      <img
        src="https://instagram.fdel3-4.fna.fbcdn.net/v/t51.82787-15/658988873_17919130533294291_4436975039943354497_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=Mzg2MzcyNzgzMzI2NDI5MjI3OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuODk2LnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=3XvAvBFSKVIQ7kNvwH03Zst&_nc_oc=Adotxrau9f38Aihl4FVG2wG1Dc2QYvO4yPvy9jM5eceC6TkHqmVGFwlwmbaCz6FD94enqLdQaU4L22KMp5hTINy8&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fdel3-4.fna&_nc_gid=6IX8zOiqGxLQvpu2D-yz2A&_nc_ss=7a22e&oh=00_Af-PyBswLSorSPOFZcJOoMK98ZJ1zjho3lijIAk0AVhuqw&oe=6A28D174"
        alt="Baby gift box with newborn essentials, soft toys, and baby shower gifts"
        className="h-full w-full object-cover"
      />
    </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-5 md:grid-cols-4">
          {[
            {
              icon: Heart,
              title: "Parent-Friendly",
              text: "Warm guidance for families and gift buyers."
            },
            {
              icon: Gift,
              title: "Gift-Focused",
              text: "Ideas for newborns, showers, birthdays, and parents."
            },
            {
              icon: ShieldCheck,
              title: "Safety-Minded",
              text: "Helpful content focused on comfort and care."
            },
            {
              icon: Sparkles,
              title: "SEO Guides",
              text: "Simple articles for baby gifting and parenting."
            }
          ].map((item) => (
            <div key={item.title} className="card rounded-3xl p-6">
              <item.icon className="h-8 w-8 text-pink-400" />
              <h3 className="mt-4 font-black text-cocoa">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-cocoa/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Baby gifting categories"
            title="Find the Perfect Baby Gift with Love and Confidence"
            description="Explore thoughtful baby gifts, newborn baby gifts, baby shower gifts, baby gift hampers, and parenting essentials created for families."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-400">
              Why choose NuvyaBaby
            </p>
            <h2 className="mt-4 text-3xl font-black text-cocoa md:text-5xl">
              Designed for meaningful gifting and confident parenting
            </h2>
          </div>

          <div className="space-y-5 text-cocoa/75">
            <p>
              NuvyaBaby brings baby gifting ideas and parenting content together
              in one warm, trustworthy place. Whether you are searching for
              newborn baby gifts, useful baby essentials, or simple baby care
              tips, our content helps you choose with confidence.
            </p>
            <p>
              We focus on emotional value, usefulness, baby comfort, and
              parent-friendly guidance, so every recommendation feels thoughtful
              and practical.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-lavenderbaby/40 py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="From the blog"
            title="Baby Gifting and Parenting Tips"
            description="Read helpful guides on newborn care, baby shower ideas, baby essentials, gift hampers, and parenting tips."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredBlogs.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}