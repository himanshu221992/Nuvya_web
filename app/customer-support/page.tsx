import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import SectionTitle from "@/components/SectionTitle";
import JsonLd from "@/components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nuvyababy.com";

export const metadata: Metadata = {
  title: "Customer Support | NuvyaBaby",
  description:
    "Contact NuvyaBaby for baby gift suggestions, parenting questions, collaborations, product inquiries, and general support.",
  alternates: {
    canonical: `${siteUrl}/customer-support`
  }
};

const faqs = [
  {
    question: "Can NuvyaBaby help me choose a baby gift?",
    answer:
      "Yes. You can contact us for baby gift suggestions based on the occasion, baby’s age, budget, and relationship."
  },
  {
    question: "Do you provide parenting advice?",
    answer:
      "NuvyaBaby shares general parenting and baby care content. For medical or urgent concerns, please contact a qualified healthcare professional."
  },
  {
    question: "Can brands collaborate with NuvyaBaby?",
    answer:
      "Yes. Please select Collaboration in the contact form and share your proposal."
  },
  {
    question: "Where can I send support queries?",
    answer:
      "You can use the contact form or email us at support@nuvyababy.com."
  }
];

export default function CustomerSupportPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="soft-gradient py-16">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Customer Support" }]} />
          <SectionTitle
            eyebrow="Support"
            title="How Can We Help Your Family Today?"
            description="Have a question about baby gifts, parenting content, product ideas, or collaborations? Send us a message and we’ll do our best to help."
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />

          <div className="card rounded-[2rem] p-8">
            <h2 className="text-2xl font-black text-cocoa">
              Friendly Support for Parents and Gift Buyers
            </h2>
            <p className="mt-4 leading-7 text-cocoa/75">
              Whether you need a newborn baby gift suggestion, a baby shower
              gifting idea, a product inquiry, or a parenting content question,
              NuvyaBaby is here to guide you with warmth and care.
            </p>
            <p className="mt-5 font-bold text-cocoa">
              Email: support@nuvyababy.com
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <SectionTitle
          eyebrow="FAQ"
          title="Common Questions"
          description="Quick answers for parents, families, and baby gift buyers."
        />
        <div className="mt-12">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}