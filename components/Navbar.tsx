import Link from "next/link";
import { ChevronDown, Gift } from "lucide-react";

const navItems = [
  { label: "About us", href: "/about-us" },
  { label: "Baby gifts", href: "/baby-gifts", active: false, hasDropdown: false },
  { label: "Resources", href: "/blog", hasDropdown: false },
  { label: "Parenting", href: "/blog" },
  { label: "Contacts", href: "/customer-support" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-100 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D83A8C] text-white shadow-[0_12px_28px_rgba(216,58,140,0.28)]">
            <Gift size={23} strokeWidth={2.7} />
          </div>

          <span className="text-2xl font-black tracking-tight text-[#073B4C]">
            Nuvya<span className="text-[#D83A8C]">Baby</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              className={`group flex items-center gap-2 rounded-2xl px-5 py-3 text-[15px] font-bold transition-all duration-300 ${
                item.active
                  ? "bg-[#FFF1F8] text-[#D83A8C]"
                  : "text-slate-600 hover:bg-[#FFF1F8] hover:text-[#D83A8C]"
              }`}
            >
              {item.label}

              {item.hasDropdown && (
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              )}
            </Link>
          ))}
        </div>

        <Link
          href="/baby-gifts"
          className="hidden rounded-2xl bg-[#D83A8C] px-7 py-4 text-[15px] font-black text-white shadow-[0_14px_30px_rgba(216,58,140,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C72F7E] sm:inline-flex"
        >
          Build Gift Box
          <span className="ml-2">›</span>
        </Link>

        <Link
          href="/baby-gifts"
          className="rounded-2xl bg-[#D83A8C] px-5 py-3 text-sm font-black text-white shadow-[0_12px_25px_rgba(216,58,140,0.25)] lg:hidden"
        >
          Gifts
        </Link>
      </nav>
    </header>
  );
}