import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Alvino Technologies",
  description: "Learn about Alvino Technologies's mission, vision, values, and the team behind our successful digital products.",
};

const values = [
  { icon: "🎯", title: "Clarity Over Complexity",   desc: "We favour simple, well-understood solutions over clever ones. Maintainability is a feature." },
  { icon: "🚀", title: "Bias for Action",            desc: "Ideas are worthless without execution. We move decisively and learn from real feedback." },
  { icon: "🔒", title: "Trust Through Transparency", desc: "No hidden blockers or spin. We share the truth — including the uncomfortable parts." },
  { icon: "♾️", title: "Continuous Improvement",     desc: "Every project ends with a retrospective. Every system has an owner who cares about its quality." },
  { icon: "🌍", title: "Impact at Scale",            desc: "We measure success by how much value we create for our clients' customers — not just deliverables." },
  { icon: "🤝", title: "People First",               desc: "Great products are built by happy, respected teams. We invest in culture, not just code." },
];

const whyChoose = [
  {
    icon: "🏆",
    title: "Proven Track Record",
    desc: "Every project we ship is treated like our own product — built with care, speed, and a long-term mindset.",
  },
  {
    icon: "⚡",
    title: "Speed Without Compromise",
    desc: "Agile two-week sprints, CI/CD pipelines on day one, and automated testing baked into every project. Fast delivery that doesn't cut corners.",
  },
  {
    icon: "🔍",
    title: "Full Transparency",
    desc: "Live project boards, weekly video demos, and direct Slack access to your engineers. You always know exactly where your project stands.",
  },
  {
    icon: "🌐",
    title: "End-to-End Capability",
    desc: "Strategy, UX design, frontend, backend, mobile, cloud, AI, and marketing — all under one roof. No gaps, no hand-offs, no finger-pointing.",
  },
  {
    icon: "🔒",
    title: "Security by Default",
    desc: "OWASP top-10 compliance, encryption at rest and in transit, and regular penetration testing built into every engagement from day one.",
  },
  {
    icon: "🤝",
    title: "Long-Term Relationships",
    desc: "Over 70% of our revenue comes from returning clients. We measure our success by how much your business grows after we launch.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="bg-white border-b border-gray-100 py-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{background:"radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)"}} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-4">About Alvino Technologies</p>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              We Build the
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Digital Future.
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Alvino Technologies is a full-service digital innovation studio. We help companies —
              from seed-stage startups to global enterprises — design, build, and scale
              technology that creates real, measurable impact.
            </p>
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
            <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold text-indigo-600 uppercase tracking-widest mb-5">Our Mission</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">To democratise world-class technology.</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe exceptional software shouldn&apos;t be the exclusive preserve of companies
              with massive engineering budgets. Alvino Technologies exists to give ambitious businesses — regardless
              of size — access to the same calibre of product thinking, design craft, and engineering
              rigour as the world&apos;s best tech companies.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every engagement is shaped by one question: <em>&ldquo;What would this look like if we built it at the highest possible standard?&rdquo;</em>
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-gray-100 p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            <span className="inline-block rounded-full bg-purple-50 px-4 py-1.5 text-xs font-bold text-purple-600 uppercase tracking-widest mb-5">Our Vision</span>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">A world where great ideas find great technology.</h2>
            <p className="text-gray-600 leading-relaxed">
              Too many transformative ideas never reach users because the founders behind them
              couldn&apos;t find a trusted technology partner. We&apos;re building the studio that closes
              that gap — combining deep technical expertise with genuine curiosity about the
              problems our clients are trying to solve.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              By 2030, we aim to have directly contributed to products used by 50 million people worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">How We Work</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              These aren&apos;t marketing words — they&apos;re the principles we apply every day in every engagement.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(v => (
              <div key={v.title} className="group rounded-2xl bg-gray-50 border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white">
                <span className="text-3xl">{v.icon}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-gray-50 py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">Why Alvino Technologies</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Makes Us Different</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              We&apos;ve refined our approach across hundreds of projects. Here&apos;s what clients
              consistently tell us sets us apart.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map(w => (
              <div key={w.title}
                className="group rounded-2xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="text-4xl">{w.icon}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>

          {/* Client industries strip */}
          <div className="mt-16 rounded-2xl bg-white border border-gray-100 p-8 shadow-sm">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase text-center mb-6">
              Industries We Serve
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "FinTech","HealthTech","E-Commerce","Logistics","SaaS",
                "EdTech","Real Estate","Retail","AI / ML","Enterprise",
                "Media","Non-Profit",
              ].map(ind => (
                <span key={ind}
                  className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 cursor-default">
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
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">Our Process</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How We Work</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              A transparent, repeatable delivery process built on trust, real communication,
              and a shared obsession with outcomes.
            </p>
          </div>

          {/* Steps */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: "01",
                title: "Discovery & Scoping",
                desc: "We spend time understanding your business goals, target users, and technical constraints before writing a single line of code. No assumptions.",
                icon: "🔍",
              },
              {
                n: "02",
                title: "Architecture & Planning",
                desc: "Our technical leads design the right stack, define sprint milestones, and agree KPIs upfront. You know exactly what you're getting and when.",
                icon: "🏗️",
              },
              {
                n: "03",
                title: "Design & Prototype",
                desc: "High-fidelity wireframes and interactive prototypes are tested with real users before development begins — saving cost and catching problems early.",
                icon: "🎨",
              },
              {
                n: "04",
                title: "Agile Build & Iterate",
                desc: "Two-week sprints with continuous deployment. You see a live demo every fortnight and give direct feedback to your assigned engineers.",
                icon: "⚡",
              },
              {
                n: "05",
                title: "QA & Launch",
                desc: "Automated test suites, security audits, and load testing before every release. We handle go-live, monitoring, and post-launch stabilisation.",
                icon: "🚀",
              },
              {
                n: "06",
                title: "Grow & Optimise",
                desc: "Post-launch isn't the end — it's the beginning. We analyse real user behaviour, run A/B tests, and iterate continuously to compound your results.",
                icon: "📈",
              },
            ].map((step, i) => (
              <div key={step.n}
                className="group relative rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white overflow-hidden">
                {/* step number accent */}
                <span className="absolute top-5 right-6 text-6xl font-extrabold text-gray-100 select-none transition-colors duration-300 group-hover:text-indigo-50">
                  {step.n}
                </span>
                <span className="text-3xl mb-4 block">{step.icon}</span>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                {/* connector dot */}
                {i < 5 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-indigo-200 z-10" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA band */}
          <div className="mt-14 rounded-2xl p-8 text-center"
            style={{background:"linear-gradient(135deg,rgba(99,102,241,0.06),rgba(168,85,247,0.06))"}}>
            <p className="text-lg font-bold text-gray-900">Ready to see this process in action?</p>
            <p className="mt-2 text-gray-500 text-sm">Book a free 30-minute discovery call — no obligation, no pitch deck.</p>
            <a href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{background:"linear-gradient(135deg,#4f7df9,#a855f7)"}}>
              Book a Discovery Call →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-50 border-t border-gray-100 py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Want to build with us?</h2>
          <p className="mt-4 text-gray-500">We&apos;re always looking for ambitious clients and talented team members.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{background:"linear-gradient(135deg,#4f7df9,#a855f7)"}}>
              Start a Project
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-indigo-300 hover:text-indigo-600">
              Read Our Blog →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
