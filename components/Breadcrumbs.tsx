import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="mb-8 text-sm text-cocoa/60">
      <Link href="/" className="hover:text-cocoa">
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label}>
          <span className="mx-2">/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-cocoa">
              {item.label}
            </Link>
          ) : (
            <span className="text-cocoa">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}