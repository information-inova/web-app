import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Alvino Technologies",
  description: "Get in touch with Alvino Technologies. Tell us about your project and we'll respond within one business day.",
};

const offices = [
  { city: "India", address: "Bangalore, India", email: "alvinotechnologies@gmail.com", phone: "+91 8925246499" },
];

const faqs = [
  { q: "How quickly can you start?",            a: "For most projects we can kick off discovery within 5–10 business days of signing. Urgent engagements can often start sooner." },
  { q: "Do you work with startups?",             a: "Absolutely. About 40% of our client base is seed-to-Series A companies. We offer a dedicated Startup Launchpad track with scoped pricing." },
  { q: "What's your typical project size?",      a: "Project budgets range from £15k for focused MVPs to £500k+ for large enterprise transformations. We'll recommend the right scope after discovery." },
  { q: "Do you offer ongoing retainer support?", a: "Yes. Most clients stay with us after launch on a monthly retainer covering engineering, infrastructure, and product iteration." },
];

export default function ContactPage() {
  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="bg-white border-b border-gray-100 py-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{background:"radial-gradient(ellipse at 60% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)"}} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-4">Get In Touch</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Let&apos;s Build Something
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              That Matters.
            </span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-gray-500 text-lg">
            Tell us about your project. We read every message and respond within one business day.
          </p>
        </div>
      </section>

      {/* ── Form + info ── */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-16 lg:grid-cols-5">

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Send us a message</h2>
            <form className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Full Name *</label>
                <input type="text" required placeholder="Jane Smith"
                  className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Work Email *</label>
                <input type="email" required placeholder="jane@company.com"
                  className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Company</label>
                <input type="text" placeholder="Acme Inc."
                  className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Service Needed</label>
                <select className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all duration-200 hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white">
                  <option value="">Select a service…</option>
                  <option>Web Development</option>
                  <option>Web Application / SaaS</option>
                  <option>Mobile App</option>
                  <option>Cloud &amp; DevOps</option>
                  <option>Digital Marketing &amp; SEO</option>
                  <option>AI &amp; Automation</option>
                  <option>Not sure — need advice</option>
                </select>
              </div>
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Tell us about your project *</label>
                <textarea required rows={5} placeholder="Describe what you're building, what problem it solves, and any relevant timelines…"
                  className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none resize-none transition-all duration-200 hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit"
                  className="group w-full rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                  style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
                  Send Message
                  <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 mb-5">Our Office</h2>
              {offices.map(o => (
                <div key={o.city} className="mb-5 rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">{o.city}</p>
                  <p className="text-sm text-gray-600 mb-3">{o.address}</p>
                  <a href={`mailto:${o.email}`} className="block text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors">{o.email}</a>
                  <a href={`tel:${o.phone.replace(/\s/g,"")}`} className="block text-sm text-gray-500 hover:text-indigo-600 transition-colors">{o.phone}</a>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Response Time</p>
              <div className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
                <p className="text-sm text-gray-700 leading-relaxed">
                  We respond to all enquiries within <strong>one business day</strong>. For urgent needs call us directly.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { label: "LinkedIn",  href: "https://www.linkedin.com/company/144016158/admin/edit/?editPageActiveTab=info" },
                  { label: "Instagram", href: "https://www.instagram.com/alvino_technologies?obrf=MWFxMWJ5bm45aG5kcg==" },
                  { label: "WhatsApp",  href: "https://wa.me/918925246499" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="rounded-full border border-gray-200 px-4 py-1.5 text-xs font-semibold text-gray-600 hover:border-indigo-300 hover:text-indigo-600 transition-all">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">FAQ</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(f => (
              <div key={f.q}
                className="rounded-2xl bg-gray-50 border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-indigo-100 hover:bg-white transition-all duration-200">
                <p className="text-sm font-bold text-gray-900 mb-2">{f.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
