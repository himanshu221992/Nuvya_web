import Link from "next/link";

type CategoryCardProps = {
  title: string;
  description: string;
  icon?: string;
  href?: string;
};

export default function CategoryCard({
  title,
  description,
  icon = "🧸",
  href = "/baby-gifts"
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="card group rounded-[2rem] p-6 transition hover:-translate-y-2 hover:shadow-soft"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blush text-2xl transition group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-black text-cocoa">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-cocoa/70">{description}</p>
    </Link>
  );
}