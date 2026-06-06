import Link from "next/link";

type BlogCardProps = {
  title: string;
  slug: string;
  excerpt: string;
  category?: string;
};

export default function BlogCard({
  title,
  slug,
  excerpt,
  category
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="card group block rounded-[2rem] p-6 transition hover:-translate-y-2 hover:shadow-soft"
    >
      {category && (
        <span className="rounded-full bg-mintbaby px-4 py-1 text-xs font-bold text-cocoa">
          {category}
        </span>
      )}
      <h3 className="mt-5 text-xl font-black leading-tight text-cocoa group-hover:text-pink-500">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-cocoa/70">{excerpt}</p>
      <p className="mt-5 text-sm font-bold text-cocoa">Read article →</p>
    </Link>
  );
}