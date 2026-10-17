import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Inova Tech",
  description: "Explore Inova Tech's full range of digital services: web development, mobile apps, cloud infrastructure, AI integration, and digital marketing.",
};

const services = [
  {
    icon: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>,
    bg: "bg-blue-50", tc: "text-blue-600",
    title: "Web Development",
    summary: "We craft high-performance websites and web experiences that convert visitors into customers.",
    bullets: ["Custom CMS & headless architectures (Next.js, Sanity, Contentful)","E-commerce on Shopify, WooCommerce, and custom stacks","Core Web Vitals optimisation — 90+ Lighthouse scores","Accessibility-first (WCAG 2.2 AA compliance)","Ongoing retainer support and performance monitoring"],
  },
  {
    icon: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    bg: "bg-purple-50", tc: "text-purple-600",
    title: "Web Applications & SaaS",
    summary: "From internal tooling to fully-fledged SaaS platforms — we architect, build, and ship.",
    bullets: ["React / Next.js frontends with TypeScript","Node.js, Go, or Python backends on serverless or containerised infra","Multi-tenant architecture and role-based access control","Stripe billing, usage metering, and subscription management","Real-time features with WebSockets and server-sent events"],
  },
  {
    icon: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
    bg: "bg-green-50", tc: "text-green-600",
    title: "Mobile App Development",
    summary: "Native-quality iOS and Android apps shipped from a single React Native or Flutter codebase.",
    bullets: ["Cross-platform with React Native or Flutter","Offline-first design and smart data sync","Push notifications, biometric auth, and device APIs","App Store & Google Play submission and compliance","OTA updates with Expo EAS or CodePush"],
  },
  {
    icon: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    bg: "bg-sky-50", tc: "text-sky-600",
    title: "Cloud & DevOps",
    summary: "Reliable, secure, and cost-efficient cloud infrastructure managed so your team can focus on product.",
    bullets: ["AWS, GCP, and Azure architecture and migration","Kubernetes, Docker, and serverless workloads","CI/CD with GitHub Actions, ArgoCD, or Terraform","Zero-downtime deployments and blue/green strategies","24/7 alerting, log aggregation, and incident response"],
  },
  {
    icon: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    bg: "bg-orange-50", tc: "text-orange-500",
    title: "Digital Marketing & SEO",
    summary: "We put your product in front of the right audience and turn traffic into revenue.",
    bullets: ["Technical SEO audits, schema markup, and site architecture","Content strategy and long-form editorial production","Paid media management (Google, Meta, LinkedIn)","Conversion rate optimisation (CRO) and A/B testing","Monthly reporting dashboards with actionable insights"],
  },
  {
    icon: <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><circle cx="18" cy="6" r="3"/></svg>,
    bg: "bg-rose-50", tc: "text-rose-500",
    title: "AI & Automation",
    summary: "We integrate large language models, ML pipelines, and intelligent automation into your existing products.",
    bullets: ["LLM feature development (OpenAI, Anthropic, Mistral, local models)","Retrieval-Augmented Generation (RAG) pipelines with vector databases","AI-powered document processing and data extraction","Workflow automation with n8n, Zapier, or custom agents","Model fine-tuning and evaluation frameworks"],
  },
];

const process = [
  { step: "01", title: "Discovery",      desc: "We start with a deep-dive into your goals, users, and constraints. No assumptions." },
  { step: "02", title: "Architecture",   desc: "Our technical leads design a stack and delivery plan tailored to your scale." },
  { step: "03", title: "Build & Iterate",desc: "Weekly sprints with continuous deployment. You see progress every step of the way." },
  { step: "04", title: "Launch",         desc: "We handle go-live, monitoring, and the inevitable post-launch tweaks." },
  { step: "05", title: "Grow",           desc: "Ongoing retainer or hand-off to your team — we're here for the long run." },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">

      {/* ── Hero ── white, no dark bg */}
      <section className="bg-white border-b border-gray-100 py-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{background:"radial-gradient(ellipse at 70% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)"}} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-4">What We Do</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Services Built for
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500">
            Whether you&apos;re a seed-stage startup or a scaling enterprise, Inova Tech delivers
            end-to-end engineering, design, and marketing services under one roof.
          </p>
          <Link href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
            Get a Free Estimate
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map(s => (
              <div key={s.title}
                className="group relative rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white overflow-hidden">
                <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{background:"linear-gradient(to bottom,#6366f1,#a855f7)"}} />
                <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${s.bg} ${s.tc} transition-transform duration-300 group-hover:scale-110`}>
                  {s.icon}
                </span>
                <h2 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{s.title}</h2>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{s.summary}</p>
                <ul className="mt-5 space-y-2">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
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
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">How We Work</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Delivery Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">A repeatable, transparent process built from day one with clarity and speed.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map(p => (
              <div key={p.step} className="group rounded-2xl bg-white border border-gray-100 p-6 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="inline-block text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{p.step}</span>
                <h3 className="mt-3 text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white border-t border-gray-100 py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Not sure which service fits?</h2>
          <p className="mt-4 text-gray-500">Book a free 30-minute discovery call. We&apos;ll map the right approach to your goals.</p>
          <Link href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
            Book a Discovery Call
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
