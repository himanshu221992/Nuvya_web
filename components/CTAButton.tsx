import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function CTAButton({
  href,
  children,
  variant = "primary"
}: CTAButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-[#D83A8C] text-white shadow-[0_16px_35px_rgba(216,58,140,0.28)] hover:bg-[#C72F7E]"
      : "border border-pink-100 bg-white text-[#D83A8C] hover:bg-[#FFF1F8]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-black transition-all duration-300 hover:-translate-y-0.5 ${classes}`}
    >
      {children}
    </Link>
  );
}