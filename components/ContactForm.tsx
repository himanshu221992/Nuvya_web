"use client";

export default function ContactForm() {
  return (
    <form className="card rounded-[2rem] p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-bold text-cocoa">Name</label>
          <input
            className="mt-2 w-full rounded-2xl border border-cocoa/10 bg-white px-4 py-3 outline-none focus:border-pink-300"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="text-sm font-bold text-cocoa">Email</label>
          <input
            type="email"
            className="mt-2 w-full rounded-2xl border border-cocoa/10 bg-white px-4 py-3 outline-none focus:border-pink-300"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="text-sm font-bold text-cocoa">Phone Number</label>
          <input
            className="mt-2 w-full rounded-2xl border border-cocoa/10 bg-white px-4 py-3 outline-none focus:border-pink-300"
            placeholder="Optional"
          />
        </div>

        <div>
          <label className="text-sm font-bold text-cocoa">Query Type</label>
          <select className="mt-2 w-full rounded-2xl border border-cocoa/10 bg-white px-4 py-3 outline-none focus:border-pink-300">
            <option>Baby gift suggestion</option>
            <option>Parenting question</option>
            <option>Collaboration</option>
            <option>Product inquiry</option>
            <option>General support</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm font-bold text-cocoa">Message</label>
        <textarea
          rows={6}
          className="mt-2 w-full rounded-2xl border border-cocoa/10 bg-white px-4 py-3 outline-none focus:border-pink-300"
          placeholder="Tell us how we can help..."
        />
      </div>

      <button
        type="button"
        className="mt-6 rounded-full bg-cocoa px-7 py-3 text-sm font-bold text-white transition hover:scale-105"
      >
        Send Query
      </button>
    </form>
  );
}