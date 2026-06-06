import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-cocoa/10 bg-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-black text-cocoa">
            Nuvya<span className="text-pink-400">Baby</span>
          </h2>
          <p className="mt-4 text-sm leading-6 text-cocoa/70">
            Thoughtful baby gifts, newborn essentials, and parenting guidance
            created for every precious little moment.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-cocoa">Explore</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-cocoa/70">
            <Link href="/baby-gifts">Baby Gifts</Link>
            <Link href="/blog">Parenting Blog</Link>
            <Link href="/about-us">About Us</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-cocoa">Support</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-cocoa/70">
            <Link href="/customer-support">Customer Support</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-cocoa">Contact</h3>
          <p className="mt-4 text-sm text-cocoa/70">
            Email: support@nuvyababy.com
          </p>
        </div>
      </div>

      <div className="border-t border-cocoa/10 py-5 text-center text-sm text-cocoa/60">
        © {new Date().getFullYear()} NuvyaBaby. All rights reserved.
      </div>
    </footer>
  );
}