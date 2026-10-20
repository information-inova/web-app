import Image from "next/image";
import Link from "next/link";
import { posts } from "./blog/data";

/* ── data ──────────────────────────────────────────────── */
const services = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
      </svg>
    ),
    bg: "bg-blue-50", tc: "text-blue-600",
    title: "Web Development",
    desc: "Pixel-perfect, lightning-fast websites engineered for conversion, Core Web Vitals, and long-term SEO growth.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    bg: "bg-purple-50", tc: "text-purple-600",
    title: "Web Applications & SaaS",
    desc: "Scalable, multi-tenant SaaS platforms and internal tools built on modern cloud-native stacks — MVP to enterprise scale.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    bg: "bg-green-50", tc: "text-green-600",
    title: "Mobile App Development",
    desc: "Native-quality iOS & Android apps from a single React Native codebase — offline-first, fast, and delightful.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    bg: "bg-sky-50", tc: "text-sky-500",
    title: "Cloud & DevOps",
    desc: "AWS, GCP, and Azure managed by certified architects — CI/CD, Kubernetes, zero-downtime deployments, 24/7 monitoring.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    bg: "bg-orange-50", tc: "text-orange-500",
    title: "Digital Marketing & SEO",
    desc: "Technical SEO, paid media, and content strategies built on data — not guesswork. We grow traffic that compounds.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><circle cx="18" cy="6" r="3"/>
      </svg>
    ),
    bg: "bg-rose-50", tc: "text-rose-500",
    title: "AI & Automation",
    desc: "LLM integration, RAG pipelines, and intelligent automation that reduces manual effort and unlocks new product capabilities.",
  },
];

const whyPoints = [
  {
    title: "We Think Like Founders",
    desc: "Most agencies optimise for hours billed. We optimise for your outcome. Before any work begins, we align on the metrics that actually matter to your business.",
  },
  {
    title: "One Team, Zero Gaps",
    desc: "Strategy, design, engineering, and DevOps — all under one roof. When your product needs to evolve, we don't pass the baton. We own the whole race.",
  },
  {
    title: "Speed With Substance",
    desc: "We move fast without cutting corners. Automated testing, code review, and CI/CD are non-negotiable defaults — not optional add-ons at the end of a sprint.",
  },
  {
    title: "Partners, Not Vendors",
    desc: "We've built long relationships because we care about what happens after launch. Seventy percent of our revenue comes from clients who've been with us for over two years.",
  },
];

const process = [
  { n: "01", title: "Discovery",      desc: "We map your goals, users, and constraints before writing a single line of code." },
  { n: "02", title: "Architecture",   desc: "Technical leads design the stack and delivery plan tailored to your scale." },
  { n: "03", title: "Build & Iterate",desc: "Weekly sprints, continuous deployment — you see real progress every step." },
  { n: "04", title: "Launch",         desc: "We handle go-live, monitoring, and the inevitable post-launch adjustments." },
  { n: "05", title: "Grow",           desc: "Ongoing retainer or clean handoff — we're built for the long relationship." },
];

const latestPosts = posts.slice(0, 3);

const tagColors: Record<string, string> = {
  Engineering: "bg-blue-50 text-blue-600",
  Product:     "bg-purple-50 text-purple-600",
  AI:          "bg-rose-50 text-rose-600",
  Mobile:      "bg-green-50 text-green-600",
  Cloud:       "bg-sky-50 text-sky-600",
};

const badgeServices = [
  { label: "Websites",   bg: "bg-blue-50",   tc: "text-blue-600",   icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg> },
  { label: "Web Apps",   bg: "bg-purple-50", tc: "text-purple-600", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> },
  { label: "Mobile Apps",bg: "bg-green-50",  tc: "text-green-600",  icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg> },
  { label: "Marketing",  bg: "bg-orange-50", tc: "text-orange-500", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
  { label: "Cloud",      bg: "bg-sky-50",    tc: "text-sky-500",    icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg> },
];

/* ── component ─────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════════════════════
          HERO  —  background.png on white, no overlay
      ════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-white">

        {/* Background image — full bleed, no overlay, no transparency */}
        <Image
          src="/background.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">

          {/* ── LEFT copy ── */}
          <div className="flex flex-col">
            {/* tagline pill — no uppercase tracking on mobile to prevent wrapping */}
            <span className="inline-flex items-center self-start gap-1.5 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-[11px] sm:text-xs font-bold text-gray-600 mb-6 whitespace-nowrap">
              Innovate · Execute · Elevate
            </span>

            <h1 className="text-[2rem] font-extrabold leading-[1.12] text-gray-900 sm:text-5xl lg:text-[4.2rem]">
              Turning Ideas Into{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Intelligent Products
              </span>{" "}
              That Scale.
            </h1>

            <p className="mt-5 w-full text-base sm:text-lg leading-relaxed text-gray-600">
              Alvino Technologies architects, builds, and launches world-class digital products — from
              high-growth SaaS platforms and AI-powered tools to mobile apps and enterprise
              cloud solutions that drive measurable business outcomes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4">
              {/* primary CTA */}
              <Link href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl w-full sm:w-auto"
                style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
                Start Your Project
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>

              {/* secondary */}
              <Link href="/about"
                className="group inline-flex items-center justify-center gap-3 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-200 w-full sm:w-auto">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-200 text-indigo-600 transition-all duration-200 group-hover:ring-indigo-400 group-hover:shadow-lg text-sm">
                  ▶
                </span>
                <span>
                  Watch Our Story
                  <span className="block text-xs text-gray-400 font-normal">2 min</span>
                </span>
              </Link>
            </div>

            {/* Mobile-only: stats + service pills */}
            <div className="mt-8 lg:hidden">
              <div className="grid grid-cols-4 gap-2 text-center mb-5">
                {[{v:"20+",l:"Projects"},{v:"15+",l:"Clients"},{v:"2026",l:"Founded"},{v:"99.9%",l:"Uptime"}].map(s=>(
                  <div key={s.l} className="bg-white/70 rounded-xl py-2.5 px-1">
                    <p className="text-sm font-extrabold text-gray-900">{s.v}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  {label:"Websites",  bg:"bg-blue-50",   tc:"text-blue-600"  },
                  {label:"Web Apps",  bg:"bg-purple-50", tc:"text-purple-600"},
                  {label:"Mobile",    bg:"bg-green-50",  tc:"text-green-600" },
                  {label:"Marketing", bg:"bg-orange-50", tc:"text-orange-500"},
                  {label:"Cloud",     bg:"bg-sky-50",    tc:"text-sky-500"   },
                  {label:"AI",        bg:"bg-rose-50",   tc:"text-rose-500"  },
                ].map(b=>(
                  <span key={b.label}
                    className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold ${b.bg} ${b.tc}`}>
                    {b.label}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT visual ── */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[540px]">

            {/* Dashboard card — centred in the space */}
            <div className="relative z-10 w-[320px] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
              <div className="px-4 py-2.5 flex items-center gap-1.5 bg-gray-50 border-b border-gray-100">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-gray-400 text-[11px] font-medium">inova.app — Dashboard</span>
              </div>
              <div className="p-5">
                <p className="text-sm font-bold text-gray-900">Build. Innovate. Grow.</p>
                <p className="text-[11px] text-gray-400 mb-4">All your digital products in one place.</p>
                <div className="grid grid-cols-4 gap-1.5 mb-4 text-center">
                  {[{v:"20+",l:"Projects"},{v:"10+",l:"Apps"},{v:"15+",l:"Clients"},{v:"99.9%",l:"Uptime"}].map(k=>(
                    <div key={k.l} className="rounded-xl bg-indigo-50 py-2 px-0.5">
                      <p className="text-xs font-extrabold text-indigo-700">{k.v}</p>
                      <p className="text-[8px] text-gray-400 mt-0.5">{k.l}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-gray-50 p-3">
                  <p className="text-[11px] font-semibold text-gray-600 mb-2">Growth Analytics</p>
                  <div className="flex items-end gap-1 h-12">
                    {[35,52,38,68,52,82,70,90].map((h,i)=>(
                      <div key={i} className="flex-1 rounded-sm"
                        style={{height:`${h}%`,background:"linear-gradient(to top,#6366f1,#a855f7)"}} />
                    ))}
                  </div>
                  <p className="mt-1.5 text-[11px] font-bold text-emerald-600">+29% Revenue</p>
                </div>
              </div>
            </div>

            {/* ── Icon-only badges scattered around the card ── */}

            {/* Websites — top right */}
            <div className="absolute top-6 right-8 z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl border border-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-default"
              title="Websites">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>
              </span>
            </div>

            {/* Web Apps — right side upper-mid */}
            <div className="absolute top-[130px] -right-6 z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl border border-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-default"
              title="Web Apps">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              </span>
            </div>

            {/* Mobile Apps — right side mid */}
            <div className="absolute top-[260px] -right-4 z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl border border-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-default"
              title="Mobile Apps">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
              </span>
            </div>

            {/* Marketing — bottom right */}
            <div className="absolute bottom-[110px] -right-6 z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl border border-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-default"
              title="Digital Marketing">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </span>
            </div>

            {/* Cloud — bottom right corner */}
            <div className="absolute bottom-8 right-8 z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl border border-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-default"
              title="Cloud Solutions">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
              </span>
            </div>

            {/* AI — top left of right col */}
            <div className="absolute top-16 left-4 z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl border border-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-default"
              title="AI & Automation">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><circle cx="18" cy="6" r="3"/></svg>
              </span>
            </div>

            {/* DevOps — bottom left of right col */}
            <div className="absolute bottom-16 left-4 z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl border border-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-default"
              title="Cloud & DevOps">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </span>
            </div>

          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 text-gray-400">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <span className="h-5 w-px bg-gradient-to-b from-gray-400 to-transparent animate-pulse" />
        </div>
      </section>



      {/* ════════════════════════════════════════════════════
          SERVICES PREVIEW
      ════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-8 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">What We Build</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              End-to-End Technology Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              Alvino Technologies covers every phase of the product lifecycle — from design sprints and architecture
              decisions to launch, scaling, and ongoing optimisation.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(s => (
              <Link key={s.title} href="/services"
                className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                {/* hover accent strip */}
                <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${s.bg} ${s.tc} transition-transform duration-300 group-hover:scale-110`}>
                  {s.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900 transition-colors duration-200 group-hover:text-indigo-600">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.desc}</p>
                <span className="mt-4 inline-block text-xs font-semibold text-indigo-600 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md">
              View All Services
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          WHY INOVA  —  light bg, logo visual on right
      ════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          {/* copy */}
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">Why Alvino Technologies</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight">
              We Don&apos;t Just Build.
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                We Grow With You.
              </span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Alvino Technologies was founded on a simple belief: businesses deserve a technology partner
              that measures success the same way they do. Not by lines of code shipped or hours
              logged — but by real, compounding business value delivered.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Since 2026 and across our first projects in fintech, healthcare, logistics, and e-commerce,
              we&apos;ve refined a model that combines senior engineering talent, honest communication,
              and a genuine stake in your success.
            </p>
            <ul className="mt-8 space-y-5">
              {whyPoints.map(item => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold"
                    style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>✓</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/solutions"
              className="group mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
              Explore Solutions
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* visual — logo on card */}
          <div className="relative flex justify-center overflow-hidden py-6">
            <div className="relative rounded-3xl flex items-center justify-center p-6 shadow-2xl bg-white border border-gray-100">
              <Image src="/web.jpeg" alt="Alvino Technologies" width={340} height={120} className="w-72 sm:w-96 h-auto object-contain" />
            </div>
            {/* floating accent squares — hidden on very small screens */}
            <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-2xl opacity-20 hidden sm:block"
              style={{background:"linear-gradient(135deg,#a855f7,#6366f1)"}} />
            <div className="absolute -top-5 -left-5 h-16 w-16 rounded-xl opacity-15 hidden sm:block"
              style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          HOW WE WORK — process steps
      ════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-8 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">Our Process</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How We Deliver</h2>
            <p className="mt-4 max-w-xl mx-auto text-gray-500">
              A transparent, repeatable delivery process built from day one with clarity and speed.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p,i) => (
              <div key={p.n} className="group relative rounded-2xl bg-gray-50 border border-gray-100 p-7 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white overflow-hidden">
                {/* connector line */}
                {i < process.length - 1 && (
                  <div aria-hidden className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gray-200 z-10" />
                )}
                <span className="inline-block text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {p.n}
                </span>
                <h3 className="mt-3 text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          RESULTS WE DELIVER
      ════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-8 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">Impact</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Results We Deliver</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              We measure success by what our clients achieve — not by hours billed or features shipped.
            </p>
          </div>

          {/* Result cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                metric: "3× faster",
                context: "Average time-to-market vs. in-house teams",
                icon: "🚀",
                bg: "bg-indigo-50",
                tc: "text-indigo-600",
              },
              {
                metric: "+34% YoY",
                context: "Average revenue growth across client portfolio",
                icon: "📈",
                bg: "bg-green-50",
                tc: "text-green-600",
              },
              {
                metric: "99.9%",
                context: "Uptime SLA maintained across all production systems",
                icon: "🔒",
                bg: "bg-sky-50",
                tc: "text-sky-600",
              },
              {
                metric: "6 weeks",
                context: "Average MVP to live product for startup engagements",
                icon: "⚡",
                bg: "bg-orange-50",
                tc: "text-orange-500",
              },
              {
                metric: "70%+",
                context: "Clients who stay on retainer after initial project launch",
                icon: "🤝",
                bg: "bg-purple-50",
                tc: "text-purple-600",
              },
              {
                metric: "47% avg",
                context: "Cloud infrastructure cost reduction after our DevOps audit",
                icon: "☁️",
                bg: "bg-rose-50",
                tc: "text-rose-500",
              },
            ].map(r => (
              <div key={r.metric}
                className="group rounded-2xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${r.bg} mb-5`}>
                  {r.icon}
                </span>
                <p className={`text-3xl font-extrabold ${r.tc}`}>{r.metric}</p>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{r.context}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center">
            <p className="text-gray-500 text-sm mb-5">Ready to add your name to these numbers?</p>
            <Link href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{background:"linear-gradient(135deg,#4f7df9,#a855f7)"}}>
              Start a Conversation
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          BLOG PREVIEW
      ════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12 gap-3">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-2">Insights</p>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">From the Alvino Technologies Blog</h2>
              <p className="mt-2 text-gray-500 max-w-xl">
                Engineering deep-dives, product lessons, and AI insights from our team of practitioners.
              </p>
            </div>
            <Link href="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
              All posts →
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4 ${tagColors[p.tag] ?? "bg-gray-100 text-gray-600"}`}>
                  {p.tag}
                </span>
                <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-indigo-600 transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">{p.excerpt}</p>
                <p className="mt-4 text-xs text-gray-400">{p.date} · {p.read}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link href="/blog" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">All posts →</Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA BAND  —  light, matching footer
      ════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to Build Something
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              That Matters?
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Tell us about your idea — we'll respond within one business day.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
              Start a Project
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-indigo-300 hover:text-indigo-600">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
