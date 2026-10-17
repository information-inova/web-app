import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Inova Tech",
  description: "Inova Tech's privacy policy — how we collect, use, and protect your data.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `When you use our website or contact us, we may collect the following types of information:

**Information you provide directly:** Your name, email address, phone number, company name, and any project details you share through our contact form or email.

**Usage data:** Pages you visit, time spent on our website, browser type, device type, and referring URLs — collected automatically via standard web analytics tools.

**Communication records:** Emails, messages, or any correspondence you send to us.

We do not collect sensitive personal data such as payment card information, government IDs, or health records through this website.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

- Respond to your enquiries and project requests
- Send you updates or information you've requested (such as blog posts or newsletters)
- Improve our website and services based on usage patterns
- Comply with legal obligations

We do not sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: "3. Legal Basis for Processing",
    content: `We process your personal data on the following legal bases:

**Legitimate interest:** When you contact us with a project enquiry, we have a legitimate interest in responding and maintaining records of that communication.

**Consent:** When you subscribe to our newsletter or opt in to marketing communications, processing is based on your explicit consent. You may withdraw consent at any time.

**Contract:** Where we enter a service agreement with you, processing is necessary to fulfil that contract.`,
  },
  {
    title: "4. Data Sharing",
    content: `We may share your information with:

**Service providers:** Third-party tools we use to operate our business (email delivery, analytics, cloud hosting). These providers process data only on our behalf and under strict data protection agreements.

**Legal requirements:** Where required by law, court order, or regulatory authority.

We do not share your data with advertisers or data brokers.`,
  },
  {
    title: "5. Data Retention",
    content: `We retain your personal data only for as long as necessary to fulfil the purpose for which it was collected:

- Contact enquiries: Up to 2 years from your last interaction with us
- Newsletter subscriptions: Until you unsubscribe
- Client project records: As required by applicable law and our contractual obligations

After the retention period, your data is securely deleted or anonymised.`,
  },
  {
    title: "6. Cookies",
    content: `Our website uses cookies to enhance your browsing experience. These include:

**Essential cookies:** Required for the website to function (session management, security).

**Analytics cookies:** Help us understand how visitors interact with our website so we can improve it. We use privacy-friendly analytics that do not track you across other websites.

You can control cookies through your browser settings. Disabling analytics cookies will not affect your ability to use our website.`,
  },
  {
    title: "7. Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:

- **Access:** Request a copy of the data we hold about you
- **Correction:** Request that we correct inaccurate data
- **Deletion:** Request that we delete your personal data
- **Portability:** Request your data in a structured, machine-readable format
- **Objection:** Object to processing based on legitimate interest
- **Withdraw consent:** Where processing is based on consent, you can withdraw it at any time

To exercise any of these rights, contact us at **information.inova@gmail.com**. We will respond within 30 days.`,
  },
  {
    title: "8. Data Security",
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include:

- Encrypted data transmission (HTTPS/TLS)
- Access controls limiting who can view personal data
- Regular security reviews of our tools and processes

No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.`,
  },
  {
    title: "9. Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any personal information.`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we make material changes, we will update the "Last updated" date at the top of this page. We encourage you to review this page periodically.`,
  },
  {
    title: "11. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us:

**Email:** information.inova@gmail.com  
**Phone:** +91 8925246499  
**Address:** Bangalore, India`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-14 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{background:"radial-gradient(ellipse at 70% 50%, rgba(99,102,241,0.05) 0%, transparent 60%)"}} />
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
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-gray-500">Last updated: October 2026</p>
          <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed">
            At Inova Tech, we respect your privacy and are committed to protecting your personal data.
            This policy explains what information we collect, why we collect it, and how we use it.
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
            <Link href="/terms"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
              View Terms of Service
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
