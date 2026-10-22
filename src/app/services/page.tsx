import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Alvino Technologies",
  description: "Explore Alvino Technologies's technology services for small and medium-sized businesses — website development, business software, digital presence, e-commerce, and more.",
};

const services = [
  {
    icon: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>,
    bg: "bg-blue-50", tc: "text-blue-600",
    title: "Website Development",
    summary: "Professional, mobile-friendly websites that clearly communicate what your business does and how customers can reach you.",
    bullets: [
      "Custom website design aligned with your brand and business goals",
      "Mobile-responsive layouts that work on all devices",
      "Contact forms, enquiry systems, and call-to-action elements",
      "Basic search engine setup to help customers find you online",
      "Content management so your team can update the website easily",
    ],
  },
  {
    icon: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    bg: "bg-blue-50", tc: "text-blue-500",
    title: "Business Software & Automation",
    summary: "Custom software tools and workflow automation that reduce manual effort and keep your operations running smoothly.",
    bullets: [
      "Custom web-based tools built around your specific processes",
      "Automation of repetitive tasks such as data entry, notifications, and reports",
      "Integration between the tools and systems your team already uses",
      "Order management, enquiry tracking, and customer management systems",
      "Dashboard and reporting tools for better business visibility",
    ],
  },
  {
    icon: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    bg: "bg-orange-50", tc: "text-orange-500",
    title: "Digital Presence & Visibility",
    summary: "Practical strategies to help your business appear in search results and reach the right customers online.",
    bullets: [
      "Search engine optimisation for local and relevant search terms",
      "Google Business Profile setup and management",
      "Content strategy to help your website attract the right visitors",
      "Social media setup and guidance for consistent digital presence",
      "Analytics setup so you can understand how people find and use your website",
    ],
  },
  {
    icon: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>,
    bg: "bg-green-50", tc: "text-green-600",
    title: "E-commerce & Online Catalogues",
    summary: "Online stores and product catalogue solutions that help customers browse, enquire, and purchase from your business.",
    bullets: [
      "Online product catalogues with categories, images, and descriptions",
      "E-commerce stores with payment, delivery, and order management",
      "Enquiry-based catalogue solutions for businesses that quote per order",
      "Inventory management integration for stock visibility",
      "Mobile-optimised shopping experiences",
    ],
  },
  {
    icon: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
    bg: "bg-sky-50", tc: "text-sky-500",
    title: "Technology Consulting & Support",
    summary: "Practical guidance on choosing, implementing, and maintaining the right technology for your business.",
    bullets: [
      "Technology review to understand what you currently use and what could improve",
      "Recommendations on practical tools and software suited to your business",
      "Implementation support for new tools and systems",
      "Ongoing technical support for websites and software we have built",
      "Training for your team on how to use and manage new technology",
    ],
  },
  {
    icon: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
    bg: "bg-rose-50", tc: "text-rose-500",
    title: "Custom Application Development",
    summary: "Tailored software built around your specific business processes — when standard tools are not enough.",
    bullets: [
      "Requirements gathering to fully understand the problem before building anything",
      "Custom web and mobile application development",
      "Integration with existing systems, databases, or third-party services",
      "User interface design focused on ease of use for your team",
      "Testing, documentation, and handover as part of every delivery",
    ],
  },
];

const process = [
  { step: "01", title: "Understand",        desc: "We discuss your business requirements, challenges, and what you want the solution to achieve." },
  { step: "02", title: "Plan",              desc: "We recommend a practical approach and agree on scope, cost, and timeline before starting." },
  { step: "03", title: "Build",             desc: "We design, develop, and test the agreed solution, sharing progress along the way." },
  { step: "04", title: "Deliver",           desc: "We hand over the completed solution with documentation and any training your team needs." },
  { step: "05", title: "Support & Improve", desc: "We provide agreed support and can continue improving the solution as your needs evolve." },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="bg-white border-b border-gray-100 py-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(0,68,187,0.06) 0%, transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">What We Do</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Technology Services Built for
            <span className="block bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Your Business.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500">
            We work with small and medium-sized businesses to deliver practical technology solutions —
            from professional websites and online catalogues to custom software and business automation.
          </p>
          <Link href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }}>
            Discuss Your Requirements
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map(s => (
              <div key={s.title}
                className="group relative rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white overflow-hidden">
                <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(to bottom,#0044bb,#0099ff)" }} />
                <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${s.bg} ${s.tc} transition-transform duration-300 group-hover:scale-110`}>
                  {s.icon}
                </span>
                <h2 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{s.title}</h2>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{s.summary}</p>
                <ul className="mt-5 space-y-2">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-gray-50 py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">How We Work</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Delivery Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              A clear and transparent process so you always know where your project stands.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map(p => (
              <div key={p.step} className="group rounded-2xl bg-white border border-gray-100 p-6 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="inline-block text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">{p.step}</span>
                <h3 className="mt-3 text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white border-t border-gray-100 py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Not sure which service you need?</h2>
          <p className="mt-4 text-gray-500">
            Tell us about your business and your challenges. We will listen and recommend a practical approach.
          </p>
          <Link href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }}>
            Get in Touch
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
