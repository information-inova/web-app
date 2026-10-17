import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Inova Tech",
  description: "Inova Tech's terms of service — the rules and conditions governing your use of our website and services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the Inova Tech website (inova.io) or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.

These terms apply to all visitors, clients, and anyone else who accesses or uses our website or engages our services.`,
  },
  {
    title: "2. Services",
    content: `Inova Tech provides digital product development services including, but not limited to:

- Web development and design
- Web application and SaaS development
- Mobile app development (iOS and Android)
- Cloud infrastructure and DevOps
- Digital marketing and SEO
- AI and automation integration

Specific deliverables, timelines, pricing, and project scope are defined in individual service agreements or statements of work (SOW) agreed upon between Inova Tech and the client.`,
  },
  {
    title: "3. Use of Website",
    content: `You agree to use this website only for lawful purposes. You must not:

- Use the website in any way that breaches any applicable local, national, or international law
- Transmit any unsolicited or unauthorised advertising or promotional material
- Attempt to gain unauthorised access to any part of the website or its systems
- Upload or transmit any harmful, offensive, or malicious content
- Reproduce, duplicate, or resell any part of our website without our express written consent`,
  },
  {
    title: "4. Intellectual Property",
    content: `All content on this website — including text, graphics, logos, icons, images, and software — is the property of Inova Tech and is protected by applicable intellectual property laws.

**Client work:** Upon full payment, clients receive ownership of custom deliverables created specifically for them as outlined in their service agreement. Inova Tech retains the right to use anonymised work samples for portfolio and marketing purposes unless otherwise agreed in writing.

**Third-party materials:** Our work may incorporate open-source software, stock assets, or third-party libraries. These remain subject to their respective licences.`,
  },
  {
    title: "5. Client Responsibilities",
    content: `When engaging our services, clients agree to:

- Provide accurate and complete project information in a timely manner
- Review and provide feedback on deliverables within agreed timescales
- Ensure they have legal rights to any materials, content, or assets provided to Inova Tech for use in the project
- Make payments in accordance with the agreed payment schedule
- Not engage Inova Tech to build anything illegal, harmful, or in violation of third-party rights`,
  },
  {
    title: "6. Payment Terms",
    content: `Payment terms are defined in individual service agreements. General terms include:

- Projects typically require an upfront deposit before work commences
- Remaining balances are invoiced at milestones or project completion as agreed
- Late payments may incur interest charges as specified in the service agreement
- Inova Tech reserves the right to pause or terminate work on accounts with outstanding unpaid invoices

All prices are exclusive of applicable taxes unless stated otherwise.`,
  },
  {
    title: "7. Confidentiality",
    content: `Both parties agree to keep confidential any proprietary information shared during the course of a project. This includes business strategies, technical details, client data, and any information marked as confidential.

This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law.

Inova Tech will not disclose client information to third parties without express consent, except where required by law or to service providers directly involved in delivering the project.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the fullest extent permitted by applicable law, Inova Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:

- Use of or inability to use our website or services
- Errors, omissions, or interruptions in our services
- Loss of data, revenue, or profits

Our total liability for any claim arising from our services shall not exceed the amount paid by you to Inova Tech in the three months preceding the claim.

This limitation does not apply to death or personal injury caused by our negligence, or to any liability that cannot be excluded by law.`,
  },
  {
    title: "9. Warranties and Disclaimers",
    content: `Our website and its content are provided "as is" without any warranty of any kind, express or implied.

We do not warrant that:
- The website will be uninterrupted or error-free
- Defects will be corrected
- The website or server is free of viruses or harmful components

For services delivered under a contract, any warranties are defined in the relevant service agreement.`,
  },
  {
    title: "10. Third-Party Links",
    content: `Our website may contain links to third-party websites. These links are provided for your convenience only. Inova Tech has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.`,
  },
  {
    title: "11. Termination",
    content: `Either party may terminate a service engagement as specified in the relevant service agreement. In cases of material breach, the non-breaching party may terminate with written notice.

Upon termination, the client is responsible for payment of all work completed up to the termination date. Inova Tech will deliver all completed work products upon receipt of outstanding payments.`,
  },
  {
    title: "12. Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Bangalore, Karnataka, India.`,
  },
  {
    title: "13. Changes to Terms",
    content: `We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Your continued use of our website or services after any changes constitutes your acceptance of the new terms.

We encourage you to review these terms periodically.`,
  },
  {
    title: "14. Contact Us",
    content: `If you have any questions about these Terms of Service, please contact us:

**Email:** information.inova@gmail.com  
**Phone:** +91 8925246499  
**Address:** Bangalore, India`,
  },
];

export default function TermsPage() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-14 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{background:"radial-gradient(ellipse at 30% 50%, rgba(168,85,247,0.05) 0%, transparent 60%)"}} />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors mb-8 group">
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to Home
          </Link>
          <p className="text-xs font-bold tracking-[0.3em] text-indigo-600 uppercase mb-3">Legal</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-gray-500">Last updated: October 2026</p>
          <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed">
            Please read these Terms of Service carefully before using our website or engaging our services.
            By using Inova Tech, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map(s => (
              <div key={s.title}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold text-gray-900 mb-4">{s.title}</h2>
                <div className="text-sm text-gray-600 leading-relaxed space-y-3">
                  {s.content.split("\n\n").map((para, i) => (
                    <p key={i}
                      dangerouslySetInnerHTML={{
                        __html: para
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                          .replace(/- (.*)/g, '• $1')
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200">
            <Link href="/"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors">
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              Back to Home
            </Link>
            <Link href="/privacy"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
              View Privacy Policy
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
