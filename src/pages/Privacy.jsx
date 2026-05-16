import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/index.jsx';

const sections = [
  {
    id: 'overview', title: '1. Overview',
    content: `Chrafty Technologies Ltd ("Chrafty", "we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our marketplace platform, website, and mobile applications (collectively, the "Platform"). Please read this policy carefully. If you disagree with its terms, please discontinue use of the Platform immediately. We reserve the right to make changes to this policy at any time. We will notify you of material changes by updating the date of this policy and, where appropriate, by sending you an email notification.`,
  },
  {
    id: 'collect', title: '2. Information We Collect',
    content: `We collect information you provide directly to us when you create an account, post a job, submit a quote, make a payment, or contact our support team. This includes: full name, email address, phone number, physical address, government-issued ID (for artisan verification), professional qualifications and certifications, bank account or mobile money details (for payment processing), profile photos and portfolio images, and any other information you choose to share.\n\nWe also automatically collect certain information when you use the Platform, including: IP address, device type and identifier, browser type and version, pages visited and time spent, referring URL, and geolocation data (with your consent). This technical data helps us improve Platform performance, prevent fraud, and personalise your experience.`,
  },
  {
    id: 'use', title: '3. How We Use Your Information',
    content: `We use the information we collect to: create and manage your account; facilitate connections between clients and artisans; process payments and manage our escrow system; verify artisan identities and credentials; send transactional emails and service notifications; respond to your enquiries and provide customer support; detect, investigate, and prevent fraudulent transactions and other illegal activities; comply with legal obligations under Nigerian and South African law; improve and personalise our Platform; conduct analytics and research to enhance our services; and send you marketing communications where you have consented to receive them.`,
  },
  {
    id: 'share', title: '4. Information Sharing',
    content: `We do not sell your personal information to third parties. We may share your information with: other users of the Platform (e.g. your name and review history are visible to clients and artisans you engage with); service providers who assist us in operating the Platform (payment processors, cloud hosting providers, email delivery services, analytics providers) under strict confidentiality agreements; law enforcement or regulatory authorities where required by law or to protect our legal rights; and successors in interest in the event of a merger, acquisition, or sale of assets. We require all third parties to respect the security of your personal data and treat it in accordance with applicable law.`,
  },
  {
    id: 'security', title: '5. Data Security',
    content: `We implement appropriate technical and organisational measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access. These measures include: 256-bit SSL/TLS encryption for all data in transit; AES-256 encryption for sensitive data at rest; PCI-DSS compliant payment processing; regular security audits and penetration testing; role-based access controls for our team members; and two-factor authentication for admin systems. While we employ commercially reasonable safeguards, no method of transmission over the Internet or electronic storage is 100% secure.`,
  },
  {
    id: 'rights', title: '6. Your Rights',
    content: `Depending on your location, you may have rights under applicable data protection laws including the Nigerian Data Protection Regulation (NDPR) and the Protection of Personal Information Act (POPIA) in South Africa. These rights may include: the right to access your personal information; the right to correct inaccurate data; the right to request deletion of your data; the right to object to processing; the right to data portability; and the right to withdraw consent. To exercise these rights, please contact our Data Protection Officer at privacy@chrafty.africa. We will respond to all requests within 30 days.`,
  },
  {
    id: 'cookies', title: '7. Cookies & Tracking',
    content: `We use cookies and similar tracking technologies to enhance your experience on the Platform. Essential cookies are necessary for core Platform functionality and cannot be disabled. Analytics cookies help us understand how users interact with the Platform so we can improve it. Marketing cookies allow us to show you relevant advertisements on third-party platforms. You can manage your cookie preferences through your browser settings or our cookie consent banner. Note that disabling certain cookies may affect Platform functionality.`,
  },
  {
    id: 'retention', title: '8. Data Retention',
    content: `We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Specifically: active account data is retained throughout the life of your account; transaction records are retained for 7 years for tax and legal compliance; verification documents are retained for 5 years after account closure; marketing data is retained until you opt out; and anonymised analytics data may be retained indefinitely. Upon account deletion, we will delete or anonymise your personal data within 90 days, unless retention is required by law.`,
  },
  {
    id: 'children', title: "9. Children's Privacy",
    content: `The Chrafty Platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that we have collected data from a person under 18 without verifiable parental consent, we will take steps to delete that information promptly. If you believe we may have collected information from a minor, please contact us immediately at privacy@chrafty.africa.`,
  },
  {
    id: 'contact', title: '10. Contact Us',
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer at: Chrafty Technologies Ltd, 14 Broad Street, Lagos Island, Lagos, Nigeria. Email: privacy@chrafty.africa. Phone: +234 800 CHRAFTY. We take all privacy enquiries seriously and will respond within 5 business days.`,
  },
];

export default function PrivacyPage() {
  const [active, setActive] = useState('overview');

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="bg-brand-navy py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="orange" className="mb-4">Legal</Badge>
            <h1 className="text-4xl sm:text-5xl font-display font-black text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-300 font-body">Last updated: 16 May 2026 · Effective: 1 May 2026</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 20C1200 40 960 0 720 10C480 20 240 40 0 20Z" fill="white" className="dark:fill-navy-900" /></svg>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-slate-50 dark:bg-navy-800 rounded-2xl p-5 border border-slate-100 dark:border-white/5">
                <p className="font-display font-semibold text-brand-navy dark:text-white text-sm mb-4">Contents</p>
                <nav className="space-y-1">
                  {sections.map(s => (
                    <a key={s.id} href={`#${s.id}`} onClick={() => setActive(s.id)}
                      className={`block px-3 py-2 rounded-lg text-xs font-body transition-colors ${active === s.id ? 'bg-brand-orange text-white font-semibold' : 'text-slate-500 dark:text-slate-400 hover:text-brand-navy dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-700'}`}>
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3 space-y-12">
              {sections.map(s => (
                <div key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="font-display font-bold text-brand-navy dark:text-white text-xl mb-4 pb-3 border-b border-slate-100 dark:border-white/10">{s.title}</h2>
                  {s.content.split('\n\n').map((para, i) => (
                    <p key={i} className="text-slate-600 dark:text-slate-400 font-body text-sm leading-relaxed mb-4">{para}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
