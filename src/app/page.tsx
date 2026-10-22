import Image from "next/image";
import Link from "next/link";

/* ─── data ──────────────────────────────────────────────── */

const challenges = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
      </svg>
    ),
    title: "Limited Online Visibility",
    desc: "Help potential customers discover your business and understand what you offer through a professional digital presence.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M4 4h16v16H4z"/><path d="M4 9h16M9 9v11"/>
      </svg>
    ),
    title: "Repetitive Manual Work",
    desc: "Reduce unnecessary repetitive tasks by identifying workflows that can be simplified or automated.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="3" width="7" height="7" rx="1"/><rect x="15" y="3" width="7" height="7" rx="1"/><rect x="9" y="14" width="6" height="7" rx="1"/><path d="M5.5 10v4M18.5 10v4M12 10v4"/>
      </svg>
    ),
    title: "Disconnected Business Processes",
    desc: "Organise information and improve the way your business manages enquiries, products, orders, and everyday activities.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Difficulty Scaling Operations",
    desc: "Explore practical technology solutions that can adapt as your business, team, and customer base grow.",
  },
];

const services = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
      </svg>
    ),
    bg: "bg-blue-50", tc: "text-blue-600",
    title: "Website Development",
    desc: "Professional, mobile-friendly websites that clearly communicate what your business does and how customers can reach you.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    bg: "bg-blue-50", tc: "text-blue-500",
    title: "Business Software & Automation",
    desc: "Custom software tools and workflow automation that reduce manual effort and keep your operations running smoothly.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    bg: "bg-orange-50", tc: "text-orange-500",
    title: "Digital Presence & Visibility",
    desc: "Practical strategies to help your business appear in search results and reach the right customers online.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    bg: "bg-green-50", tc: "text-green-600",
    title: "E-commerce & Online Catalogues",
    desc: "Online stores and product catalogue solutions that help customers browse, enquire, and purchase from your business.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    bg: "bg-sky-50", tc: "text-sky-500",
    title: "Technology Consulting & Support",
    desc: "Practical guidance on choosing, implementing, and maintaining the right technology for your business needs.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    bg: "bg-rose-50", tc: "text-rose-500",
    title: "Custom Application Development",
    desc: "Tailored software built around your specific business processes — when standard tools are not enough.",
  },
];

const industries = [
  {
    icon: "🏪",
    title: "Retail & Local Stores",
    desc: "Digital catalogues, inventory workflows, business websites, and customer enquiry solutions.",
  },
  {
    icon: "🍽️",
    title: "Restaurants & Food Businesses",
    desc: "Online menus, enquiry systems, website development, and ordering workflow solutions.",
  },
  {
    icon: "🎓",
    title: "Education & Coaching",
    desc: "Website development, student enquiry management, and administrative workflow solutions.",
  },
  {
    icon: "🏭",
    title: "Manufacturing & Distribution",
    desc: "Business websites, product catalogues, order tracking, and suitable operational software.",
  },
  {
    icon: "💼",
    title: "Professional Services",
    desc: "Online presence, appointment enquiry workflows, customer management, and business automation.",
  },
  {
    icon: "📈",
    title: "Growing SMEs",
    desc: "Custom digital solutions based on specific operational challenges and business objectives.",
  },
];

const steps = [
  {
    n: "01",
    icon: "💬",
    title: "Understand",
    desc: "We begin by discussing your business, identifying challenges, and understanding the outcomes you want to achieve.",
  },
  {
    n: "02",
    icon: "🗺️",
    title: "Plan",
    desc: "We recommend a practical solution based on your requirements, priorities, budget, and timeline.",
  },
  {
    n: "03",
    icon: "🛠️",
    title: "Build",
    desc: "Our team designs, develops, tests, and prepares the agreed solution for delivery.",
  },
  {
    n: "04",
    icon: "🚀",
    title: "Support & Improve",
    desc: "After delivery, we provide agreed technical support, maintenance, and improvements as your needs evolve.",
  },
];

const principles = [
  {
    icon: "🎯",
    title: "Practical Solutions",
    desc: "We focus on solving actual business problems rather than adding unnecessary complexity.",
  },
  {
    icon: "🤝",
    title: "Solutions Around Your Needs",
    desc: "We begin with your requirements and recommend suitable options based on your business objectives.",
  },
  {
    icon: "💬",
    title: "Clear Communication",
    desc: "We aim to explain project scope, pricing, timelines, and technical decisions in understandable terms.",
  },
  {
    icon: "🔄",
    title: "Collaborative Working",
    desc: "We work with clients to gather feedback, refine requirements, and align delivery with business priorities.",
  },
  {
    icon: "🌱",
    title: "Long-Term Thinking",
    desc: "We consider maintainability, usability, and future improvements when planning technology solutions.",
  },
];

/* ─── component ──────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-white">
        <Image
          src="/background.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

          {/* Left copy */}
          <div className="flex flex-col">
            <span className="inline-flex items-center self-start gap-1.5 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-[11px] sm:text-xs font-bold text-gray-600 mb-6">
              Empowering Businesses Through Technology
            </span>

            <h1 className="text-[2rem] font-extrabold leading-[1.12] text-gray-900 sm:text-5xl lg:text-[3.8rem]">
              Technology That Helps Your{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Business Move Forward.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600">
              Alvino Technologies helps small and medium-sized businesses strengthen their digital
              presence, simplify everyday operations, and discover better ways to grow through
              practical technology solutions.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              From professional websites to business automation and custom software, we work with
              you to understand your challenges and build solutions around your needs.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl w-full sm:w-auto"
                style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }}
              >
                Discuss Your Project
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-blue-300 hover:text-blue-600 w-full sm:w-auto"
              >
                Explore Our Services
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Mobile service pills */}
            <div className="mt-8 lg:hidden flex flex-wrap gap-2">
              {["Websites","Web Apps","Mobile","Automation","E-commerce","Consulting"].map(l => (
                <span key={l} className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600">
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[500px]">
            <div className="relative z-10 w-[300px] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
              <div className="px-4 py-2.5 flex items-center gap-1.5 bg-gray-50 border-b border-gray-100">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-gray-400 text-[11px] font-medium">Your Business Dashboard</span>
              </div>
              <div className="p-5">
                <p className="text-sm font-bold text-gray-900">Business Overview</p>
                <p className="text-[11px] text-gray-400 mb-4">Operations at a glance</p>
                <div className="space-y-3">
                  {[
                    { label: "Online Enquiries", val: "12 new", color: "bg-blue-50 text-blue-700" },
                    { label: "Website Visitors", val: "+34% this week", color: "bg-green-50 text-green-700" },
                    { label: "Pending Orders", val: "8 to process", color: "bg-orange-50 text-orange-600" },
                    { label: "Support Tickets", val: "2 open", color: "bg-sky-50 text-sky-600" },
                  ].map(item => (
                    <div key={item.label} className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2.5">
                      <span className="text-[11px] text-gray-500">{item.label}</span>
                      <span className={`text-[11px] font-bold rounded-full px-2 py-0.5 ${item.color}`}>{item.val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl bg-gray-50 p-3">
                  <p className="text-[11px] font-semibold text-gray-600 mb-2">Monthly Growth</p>
                  <div className="flex items-end gap-1 h-10">
                    {[30,45,38,60,52,74,68,85].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm"
                        style={{ height: `${h}%`, background: "linear-gradient(to top,#0044bb,#0099ff)" }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating service badges */}
            {[
              { top: "top-4", right: "right-4", bg: "bg-blue-50", tc: "text-blue-600", label: "Website", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg> },
              { top: "top-[150px]", right: "-right-5", bg: "bg-green-50", tc: "text-green-600", label: "Automation", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> },
              { top: "top-[290px]", right: "-right-4", bg: "bg-orange-50", tc: "text-orange-500", label: "E-commerce", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg> },
              { top: "bottom-[100px]", right: "-right-5", bg: "bg-sky-50", tc: "text-sky-500", label: "Consulting", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
              { top: "top-10", left: "left-2", bg: "bg-rose-50", tc: "text-rose-500", label: "Custom", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg> },
              { top: "bottom-16", left: "left-2", bg: "bg-blue-50", tc: "text-blue-600", label: "Support", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg> },
            ].map(b => (
              <div key={b.label}
                className={`absolute z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl border border-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-default ${b.top} ${b.right ?? ""} ${(b as { left?: string }).left ?? ""}`}
                title={b.label}>
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${b.bg} ${b.tc}`}>
                  {b.icon}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 text-gray-400">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <span className="h-5 w-px bg-gradient-to-b from-gray-400 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          BUSINESS CHALLENGES
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">Common Challenges</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Every Business Has Challenges.<br className="hidden sm:block" /> Technology Can Help.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              Managing a growing business takes time, coordination, and the right tools. When processes
              remain manual or a business lacks a strong online presence, opportunities can be harder to capture.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {challenges.map(c => (
              <div key={c.title}
                className="group rounded-2xl bg-white border border-gray-100 p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-4 p-3">
                  {c.icon}
                </span>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/solutions"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md">
              Explore Solutions
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHAT ALVINO DOES — services
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">What We Do</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Technology Services Built Around Your Business.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              We combine technical expertise, thoughtful design, and a practical understanding of business needs
              to develop solutions that make technology more useful in everyday operations.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(s => (
              <Link key={s.title} href="/services"
                className="group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-blue-500 to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className={`inline-flex h-13 w-13 items-center justify-center rounded-2xl ${s.bg} ${s.tc} p-3 transition-transform duration-300 group-hover:scale-110`}>
                  {s.icon}
                </span>
                <h3 className="mt-4 text-base font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.desc}</p>
                <span className="mt-4 inline-block text-xs font-semibold text-blue-600 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md">
              View All Services
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">Industries We Support</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Supporting Businesses Across Different Industries.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              Every industry has its own challenges. Our approach begins by understanding your business model,
              your customers, and the processes you want to improve.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(ind => (
              <div key={ind.title}
                className="group rounded-2xl bg-white border border-gray-100 p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="text-3xl mb-3 block">{ind.icon}</span>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{ind.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }}>
              Find a Solution for Your Business
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          {/* visual — logo on card */}
          <div className="relative flex justify-center overflow-hidden py-6">
            <div className="relative rounded-3xl flex items-center justify-center p-6 shadow-2xl bg-white border border-gray-100">
              <Image src="/web.jpeg" alt="Alvino Technologies" width={340} height={120} className="w-72 sm:w-96 h-auto object-contain" />
            </div>
            <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-2xl opacity-20 hidden sm:block"
              style={{background:"linear-gradient(135deg,#a855f7,#6366f1)"}} />
            <div className="absolute -top-5 -left-5 h-16 w-16 rounded-xl opacity-15 hidden sm:block"
              style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          HOW WE WORK
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">Our Process</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              A Straightforward Approach to Better Technology.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.n}
                className="group relative rounded-2xl bg-gray-50 border border-gray-100 p-7 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white overflow-hidden">
                {i < steps.length - 1 && (
                  <div aria-hidden className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gray-200 z-10" />
                )}
                <span className="text-3xl block mb-3">{step.icon}</span>
                <span className="inline-block text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                  {step.n}
                </span>
                <h3 className="mt-2 text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md">
              Start a Conversation
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHY CHOOSE ALVINO
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          {/* copy */}
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">Why Alvino Technologies</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight">
              A Business-First Approach{" "}
              <span className="block bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                to Technology.
              </span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              We believe businesses of every size deserve access to practical technology. Our goal is
              to understand real business challenges and create solutions that help businesses operate
              more efficiently and pursue new opportunities.
            </p>
            <ul className="mt-8 space-y-5">
              {principles.map(item => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* visual */}
          <div className="relative flex justify-center overflow-hidden py-6">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden"
              style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }}>
              <div aria-hidden className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
              <Image src="/logo.jpeg" alt="Alvino Technologies" width={200} height={200} className="object-contain relative z-10 w-36 sm:w-48 h-auto" />
            </div>
            <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-2xl opacity-20 hidden sm:block"
              style={{ background: "linear-gradient(135deg,#0099ff,#0044bb)" }} />
            <div className="absolute -top-5 -left-5 h-16 w-16 rounded-xl opacity-15 hidden sm:block"
              style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          OUR VISION
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">Our Vision</p>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Making Useful Technology Accessible to More Businesses.
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed">
            We believe businesses of every size should have the opportunity to benefit from practical
            technology. Our goal is to bring skilled people together, understand real business challenges,
            and create solutions that help businesses operate more efficiently and pursue new opportunities.
          </p>
          <Link href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            Learn More About Us →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {"Let's Find the Right Technology"}
            <span className="block bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              for Your Business.
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Whether you want to establish your digital presence, improve an existing process, or explore
            a custom software solution — we are ready to listen and help you find the right path forward.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }}>
              Discuss Your Project
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-blue-300 hover:text-blue-600">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
