export default function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return <figure className="rounded-[2rem] bg-white p-6 shadow-soft"><blockquote className="leading-8 text-cocoa/75">“{quote}”</blockquote><figcaption className="mt-5 font-extrabold text-cocoa">— {name}</figcaption></figure>;
}
