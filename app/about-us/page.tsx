import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import JsonLd from "@/components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nuvyababy.com";

export const metadata: Metadata = {
  title: "About NuvyaBaby | Baby Gifting & Parenting Guidance",
  description:
    "Learn about NuvyaBaby, a baby gifting and parenting brand helping families discover thoughtful baby gifts, newborn essentials, and helpful parenting content.",
  alternates: {
    canonical: `${siteUrl}/about-us`
  },
  openGraph: {
    title: "About NuvyaBaby | Baby Gifting & Parenting Guidance",
    description:
      "Learn about NuvyaBaby, a baby gifting and parenting brand for thoughtful gifts and parenting guidance.",
    url: `${siteUrl}/about-us`
  }
};

export default function AboutPage() {
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
        name: "About Us",
        item: `${siteUrl}/about-us`
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="soft-gradient py-16">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <SectionTitle
            eyebrow="About NuvyaBaby"
            title="A Warm Place for Thoughtful Baby Gifts and Parenting Guidance"
            description="NuvyaBaby is built for families searching for thoughtful baby gifts, newborn essentials, and reliable parenting guidance."
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div className="card rounded-[2rem] p-8">
            <h2 className="text-3xl font-black text-cocoa">Who We Are</h2>
            <p className="mt-5 leading-8 text-cocoa/75">
              NuvyaBaby is a baby gifting and parenting brand created for
              parents, expecting parents, relatives, friends, and loved ones who
              want to choose meaningful baby gifts with care.
            </p>
            <p className="mt-4 leading-8 text-cocoa/75">
              We help families discover newborn baby gifts, baby shower gifts,
              baby essentials, personalized baby gift ideas, and parenting tips
              that feel useful, safe, emotional, and memorable.
            </p>
          </div>

          <div className="card rounded-[2rem] p-8">
            <h2 className="text-3xl font-black text-cocoa">Our Mission</h2>
            <p className="mt-5 leading-8 text-cocoa/75">
              Our mission is to make baby gifting simpler, warmer, and more
              thoughtful. We believe a good baby gift should support parents,
              comfort babies, and celebrate the joy of a new beginning.
            </p>
            <p className="mt-4 leading-8 text-cocoa/75">
              Through helpful content and carefully structured guides, NuvyaBaby
              supports families looking for baby products, newborn essentials,
              baby care advice, and parenting inspiration.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Why parents trust us"
            title="Comfort, Safety, Usefulness, and Emotional Value"
            description="Every NuvyaBaby guide is written with a parent-friendly tone and a focus on practical support."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              "Baby comfort",
              "Parent usefulness",
              "Safe gifting ideas",
              "Emotional gifting"
            ].map((item) => (
              <div key={item} className="card rounded-3xl p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blush text-2xl">
                  💛
                </div>
                <h3 className="font-black text-cocoa">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}