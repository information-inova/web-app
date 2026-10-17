import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions — Inova Tech",
  description: "Discover how Inova Tech's tailored solutions help startups, SMEs, and enterprises solve real technology challenges and scale with confidence.",
};

const solutions = [
  {
    tag: "Startups",
    title: "Startup Launchpad",
    desc: "From zero to live product in 8–12 weeks. We've helped over 40 startups validate, build, and launch their MVPs with the right tech stack to attract investors and early users.",
    features: ["MVP scoping and technical roadmap","Rapid prototyping and user testing","Scalable foundations that grow with you","Pitch deck tech narrative support"],
    cta: "Launch Your MVP",
    tagStyle: "bg-indigo-50 text-indigo-700",
  },
  {
    tag: "Growth Stage",
    title: "Scale & Optimise",
    desc: "Your product is live and gaining traction — now the architecture needs to catch up. We audit, refactor, and evolve your platform to handle 10x the load without 10x the cost.",
    features: ["Architecture audit and performance review","Database query optimisation and caching layers","Feature velocity improvement","Engineering team augmentation"],
    cta: "Scale Your Platform",
    tagStyle: "bg-purple-50 text-purple-700",
  },
  {
    tag: "Enterprise",
    title: "Digital Transformation",
    desc: "Legacy systems don't have to slow you down. Inova Tech guides enterprise teams through modernisation — API-first architectures, cloud migrations, and workflow automation at scale.",
    features: ["Legacy system assessment and migration planning","API-first microservices architecture","SSO, compliance, and enterprise security","Change management and team training"],
    cta: "Transform Your Enterprise",
    tagStyle: "bg-rose-50 text-rose-700",
  },
  {
    tag: "All Businesses",
    title: "AI-Powered Products",
    desc: "Embed intelligence into your product. We've integrated AI features into CRMs, ERPs, marketplaces, and customer-facing apps — with measurable productivity gains.",
    features: ["AI product strategy and use-case prioritisation","LLM API integration and prompt engineering","Custom AI agents and workflow automation","AI cost management and guardrails"],
    cta: "Add AI to Your Product",
    tagStyle: "bg-emerald-50 text-emerald-700",
  },
];

const reasons = [
  { title: "Outcome-Driven",       desc: "KPIs agreed upfront. We measure success by your growth, not hours billed.",               icon: "📈" },
  { title: "Full-Stack Ownership", desc: "One team — design, development, infrastructure, and support. No gaps to fall through.",    icon: "🏗️" },
  { title: "Radical Transparency", desc: "Live dashboards, weekly demos, and direct Slack access to your engineers.",               icon: "🔍" },
  { title: "Speed Without Debt",   desc: "We move fast and maintain quality — automated tests and code review are non-negotiable.", icon: "⚡" },
  { title: "Security by Default",  desc: "Every system is designed with OWASP top-10, encryption at rest and in transit.",          icon: "🔒" },
  { title: "Long-Term Partner",    desc: "We build lasting relationships. 70% of our revenue comes from returning clients.",        icon: "🤝" },
];

export default function SolutionsPage() {
  return (
    <div className="pt-20">

      {/* ── Hero ── white, no dark bg */}
      <section className="bg-white border-b border-gray-100 py-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{background:"radial-gradient(ellipse at 30% 50%, rgba(168,85,247,0.06) 0%, transparent 60%)"}} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-4">Solutions</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            The Right Technology
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              For Your Stage
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500">
            Whether you&apos;re validating an idea, scaling a product, or transforming an enterprise,
            Inova Tech has a proven playbook tailored to where you are — and where you&apos;re going.
          </p>
        </div>
      </section>

      {/* ── Solutions grid ── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
          {solutions.map(s => (
            <div key={s.title}
              className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white">
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold mb-4 ${s.tagStyle}`}>{s.tag}</span>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{s.title}</h2>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="group/btn mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
                {s.cta}
                <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Inova Tech ── */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">Why Choose Inova Tech</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Sets Us Apart</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              We&apos;ve refined our approach across every project we take on.
              Here&apos;s what clients consistently tell us makes the difference.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(r => (
              <div key={r.title}
                className="group rounded-2xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="text-3xl">{r.icon}</span>
                <h3 className="mt-4 text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{r.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white border-t border-gray-100 py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Let&apos;s find the right solution for you.</h2>
          <p className="mt-4 text-gray-500">Book a free discovery call — no obligation, no pitch deck.</p>
          <Link href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
            Talk to an Expert
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
