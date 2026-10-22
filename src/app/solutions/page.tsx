import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions — Alvino Technologies",
  description: "Discover how Alvino Technologies helps small and medium-sized businesses across different industries improve their digital presence, automate operations, and grow.",
};

const solutions = [
  {
    tag: "Digital Presence",
    title: "Establish Your Online Presence",
    desc: "For businesses that need a professional digital presence to help customers find them, understand what they offer, and get in touch.",
    features: [
      "Professional business website design and development",
      "Mobile-friendly layout for all devices",
      "Contact forms and customer enquiry systems",
      "Basic search engine setup and Google Business Profile",
      "Content management so you can update your site easily",
    ],
    cta: "Discuss This Solution",
    tagStyle: "bg-blue-50 text-blue-700",
    note: "This solution can be scoped and priced based on your specific requirements.",
  },
  {
    tag: "Operations",
    title: "Simplify Business Operations",
    desc: "For businesses that want to reduce manual effort, organise information, and improve the way everyday tasks are managed.",
    features: [
      "Review of current manual processes and workflows",
      "Custom tools for order tracking, enquiry management, or scheduling",
      "Automation of repetitive tasks to save time",
      "Integration between tools your team already uses",
      "Dashboards for better visibility of daily operations",
    ],
    cta: "Discuss This Solution",
    tagStyle: "bg-blue-50 text-blue-600",
    note: "Solutions are developed based on your specific business requirements after an initial discussion.",
  },
  {
    tag: "E-commerce",
    title: "Sell and Take Orders Online",
    desc: "For businesses that want to allow customers to browse products, place orders, or submit enquiries online.",
    features: [
      "Online product catalogue with categories and images",
      "E-commerce store with payment and order management",
      "Enquiry-based ordering for businesses that quote per order",
      "Inventory and stock visibility integration",
      "Mobile-optimised shopping and browsing experience",
    ],
    cta: "Discuss This Solution",
    tagStyle: "bg-green-50 text-green-700",
    note: "The right approach — whether a full store or an enquiry catalogue — depends on how your business operates.",
  },
  {
    tag: "Custom Software",
    title: "Build a Custom Business Tool",
    desc: "For businesses with specific operational challenges that standard software does not fully address.",
    features: [
      "Requirements discussion to understand the problem before building",
      "Custom web or mobile application tailored to your processes",
      "Integration with existing systems or third-party services",
      "User interface designed for ease of use by your team",
      "Testing, documentation, and training included in delivery",
    ],
    cta: "Discuss This Solution",
    tagStyle: "bg-sky-50 text-sky-700",
    note: "Custom software projects begin with a requirements discussion. We provide a clear scope and estimate before work starts.",
  },
];

const reasons = [
  { title: "We Understand Business First",  desc: "Before recommending any technology, we take time to understand your business, your customers, and the challenges you face.",    icon: "💡" },
  { title: "Practical Recommendations",     desc: "We recommend solutions that are appropriate for your needs and budget — not the most complicated or expensive option.",          icon: "🎯" },
  { title: "Transparent Scoping",           desc: "We discuss requirements and agree on scope, cost, and timeline before any work begins. No surprises.",                          icon: "📋" },
  { title: "Clear Communication",           desc: "We explain everything in plain language. You always know what we are building and why.",                                         icon: "💬" },
  { title: "Accessible Support",            desc: "After delivery, we are available for questions, fixes, and improvements. You are not left on your own.",                       icon: "🛟" },
  { title: "Flexible Engagement",           desc: "Whether you need a single project or an ongoing technology partner, we can work with you on the terms that suit your business.", icon: "🤝" },
];

export default function SolutionsPage() {
  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="bg-white border-b border-gray-100 py-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(0,153,255,0.06) 0%, transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">Solutions</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Practical Technology Solutions
            <span className="block bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              for Your Business.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500">
            Whether you need a professional website, a more efficient way to manage operations, or a
            custom tool built around your specific requirements — we work with you to find the right approach.
          </p>
        </div>
      </section>

      {/* ── Solutions grid ── */}
      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
          {solutions.map(s => (
            <div key={s.title}
              className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white flex flex-col">
              <span className={`inline-block self-start rounded-full px-3 py-1 text-xs font-bold mb-4 ${s.tagStyle}`}>{s.tag}</span>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{s.title}</h2>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2 flex-1">
                {s.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-400 italic">{s.note}</p>
              <Link href="/contact"
                className="group/btn mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg self-start"
                style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }}>
                {s.cta}
                <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Alvino Technologies ── */}
      <section className="bg-gray-50 py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">Why Work With Us</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What You Can Expect</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              We focus on being straightforward, practical, and easy to work with — not on impressive-sounding claims.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(r => (
              <div key={r.title}
                className="group rounded-2xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="text-3xl">{r.icon}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{r.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white border-t border-gray-100 py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{"Let's find the right solution for you."}</h2>
          <p className="mt-4 text-gray-500">
            Tell us about your business and what you are trying to achieve. We will discuss your options honestly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }}>
              Get in Touch
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-blue-300 hover:text-blue-600">
              View All Services →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
