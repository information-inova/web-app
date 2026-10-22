import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Alvino Technologies",
  description: "Learn about Alvino Technologies — our mission to make practical technology accessible to small and medium-sized businesses, and how we work with clients.",
};

const values = [
  { icon: "🎯", title: "Practical Over Complex",      desc: "We favour simple, well-understood solutions. Our goal is to solve real problems, not to add unnecessary complexity." },
  { icon: "🤝", title: "Business Understanding First", desc: "We start by understanding your business model, your customers, and your goals before recommending any technology." },
  { icon: "🔒", title: "Honest Communication",        desc: "We are transparent about what is achievable, what it costs, and how long it will take. No misleading promises." },
  { icon: "🔄", title: "Collaborative Approach",      desc: "We work closely with clients throughout every project, gathering feedback and aligning delivery with business priorities." },
  { icon: "🌱", title: "Long-Term Thinking",          desc: "We build solutions with maintainability and growth in mind, so your technology remains useful as your business evolves." },
  { icon: "📐", title: "Quality Delivery",            desc: "Every solution we deliver is tested, documented, and handed over in a way that makes it easy for your team to use." },
];

const principles = [
  {
    icon: "💡",
    title: "We Focus on Business Outcomes",
    desc: "Technology is a tool. What matters is whether it helps your business run better, reach more customers, or reduce unnecessary effort.",
  },
  {
    icon: "🗣️",
    title: "We Communicate Clearly",
    desc: "We explain technical decisions in plain language. You should always understand what we are building and why.",
  },
  {
    icon: "⚙️",
    title: "We Deliver What We Agree",
    desc: "We document requirements, agree on scope, and deliver against what has been planned and discussed.",
  },
  {
    icon: "🌍",
    title: "We Grow With Your Business",
    desc: "We aim to be a technology partner you can return to — for support, improvements, and new challenges as your business develops.",
  },
];

const steps = [
  { n: "01", icon: "🔍", title: "Discovery & Scoping",    desc: "We discuss your business, your challenges, and the outcomes you want to achieve before recommending anything." },
  { n: "02", icon: "🗺️", title: "Planning & Agreement",  desc: "We recommend a practical solution and agree on scope, timeline, and cost before any work begins." },
  { n: "03", icon: "🎨", title: "Design & Prototype",     desc: "We create a working design or prototype for your feedback before moving into full development." },
  { n: "04", icon: "🛠️", title: "Build & Review",         desc: "We develop the solution in stages, sharing progress regularly so you can provide feedback along the way." },
  { n: "05", icon: "🚀", title: "Testing & Delivery",     desc: "We test thoroughly before delivery and provide handover documentation so your team can use the solution confidently." },
  { n: "06", icon: "📈", title: "Support & Improvement",  desc: "After delivery, we offer ongoing support and can make improvements as your requirements evolve." },
];

export default function AboutPage() {
  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="bg-white border-b border-gray-100 py-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(0,68,187,0.06) 0%, transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">About Alvino Technologies</p>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              A Technology Partner
              <span className="block bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                for Your Business.
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Alvino Technologies is a technology services company helping small and medium-sized businesses
              improve their digital presence, streamline their operations, and grow through practical
              technology solutions.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We are not simply a company that builds websites. We work to understand your business
              challenges and develop technology that supports how you actually operate.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }}>
                Discuss Your Project
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-blue-300 hover:text-blue-600">
                View Our Services
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative rounded-3xl flex items-center justify-center p-6 bg-white border border-gray-100 shadow-xl">
              <Image src="/web.jpeg" alt="Alvino Technologies" width={340} height={120} className="w-80 sm:w-96 h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-gray-50 py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white border border-gray-100 p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-600 uppercase tracking-widest mb-5">Our Mission</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Making useful technology accessible to more businesses.</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe businesses of every size should benefit from practical technology. Not every business
              has the resources to hire a large internal technology team, but every business deserves access
              to solutions that actually work for them.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to bring skilled people together, understand real business challenges, and build
              solutions that help businesses operate more efficiently and pursue new opportunities.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-gray-100 p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-600 uppercase tracking-widest mb-5">Our Vision</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">A trusted technology partner for businesses that want to grow.</h2>
            <p className="text-gray-600 leading-relaxed">
              Many small and medium-sized businesses want to improve how they use technology but find it
              difficult to know where to start, who to trust, or whether the investment is worthwhile.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We aim to be the kind of technology partner that listens first, gives honest recommendations,
              and delivers solutions that businesses can actually use and benefit from.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">How We Work</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              These are the principles that guide how we approach every project and every client relationship.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(v => (
              <div key={v.title} className="group rounded-2xl bg-gray-50 border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white">
                <span className="text-3xl">{v.icon}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="bg-gray-50 py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">Our Approach</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Makes Us Different</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              We focus on being a practical, honest technology partner — not on impressive-sounding claims.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(p => (
              <div key={p.title}
                className="group rounded-2xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="text-3xl">{p.icon}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div className="mt-16 rounded-2xl bg-white border border-gray-100 p-8 shadow-sm">
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase text-center mb-6">
              Industries We Support
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Retail & Local Stores","Restaurants & Food","Education & Coaching",
                "Manufacturing","Distribution","Professional Services",
                "Healthcare","Real Estate","E-commerce","Logistics","SMEs",
              ].map(ind => (
                <span key={ind}
                  className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 cursor-default">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">Our Process</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How We Work</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              A clear, straightforward process designed to keep you informed and in control at every stage.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.n}
                className="group relative rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white overflow-hidden">
                <span className="absolute top-5 right-6 text-6xl font-extrabold text-gray-100 select-none transition-colors duration-300 group-hover:text-blue-50">
                  {step.n}
                </span>
                <span className="text-3xl mb-4 block">{step.icon}</span>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                {i < 5 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-blue-200 z-10" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl p-8 text-center"
            style={{ background: "linear-gradient(135deg,rgba(0,68,187,0.06),rgba(0,153,255,0.06))" }}>
            <p className="text-lg font-bold text-gray-900">Ready to discuss your project?</p>
            <p className="mt-2 text-gray-500 text-sm">We are happy to answer questions and explore how we can help your business.</p>
            <Link href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }}>
              Get In Touch →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-50 border-t border-gray-100 py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{"Let's work together."}</h2>
          <p className="mt-4 text-gray-500">
            If you have a business challenge and want to explore how technology might help, we would be glad to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }}>
              Contact Us
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-blue-300 hover:text-blue-600">
              View Our Services →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
