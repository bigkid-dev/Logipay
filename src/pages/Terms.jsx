import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/index.jsx';

const sections = [
  {
    id: 'acceptance', title: '1. Acceptance of Terms',
    content: `By accessing or using the Logipay platform ("Platform"), including our website at Logipay.africa and any associated mobile applications, you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy, which is incorporated herein by reference. These Terms constitute a legally binding agreement between you and Logipay Technologies Ltd, a company incorporated under the laws of the Federal Republic of Nigeria with offices at 14 Broad Street, Lagos Island, Lagos, Nigeria.\n\nIf you are using the Platform on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms. If you do not agree with any part of these Terms, you must cease using the Platform immediately.`,
  },
  {
    id: 'description', title: '2. Platform Description',
    content: `Logipay is an online marketplace that connects clients who require skilled trade services with verified artisans who provide those services. Logipay acts solely as an intermediary and is not a party to any service agreement between clients and artisans. Logipay does not employ artisans and is not responsible for the quality, safety, legality, or any other aspect of the services provided by artisans listed on the Platform, except where expressly stated in these Terms.`,
  },
  {
    id: 'accounts', title: '3. User Accounts',
    content: `To access the Platform's core features, you must create an account. You agree to: provide accurate, current, and complete information during registration; maintain and promptly update your account information; keep your password secure and confidential; notify us immediately of any unauthorised access to your account; and be responsible for all activities conducted under your account. Logipay reserves the right to suspend or terminate accounts that violate these Terms, provide false information, or engage in fraudulent activity. You may not create more than one personal account. Business accounts must represent legitimate business entities.`,
  },
  {
    id: 'artisan-terms', title: '4. Artisan-Specific Terms',
    content: `Artisans who join Logipay agree to the following additional terms: You represent that you hold all required licences, certifications, and insurance required by applicable law to perform the services you offer. You agree to complete background verification as required by Logipay before your profile is made publicly visible. You will communicate honestly and accurately with clients about your qualifications, availability, and pricing. You will not engage in price manipulation, bid collusion, or any deceptive trade practice. Logipay charges a platform fee of 10–15% on all completed transactions, deducted before payment is released to you. You are solely responsible for your own tax obligations arising from income earned through the Platform.`,
  },
  {
    id: 'client-terms', title: '5. Client-Specific Terms',
    content: `Clients who use Logipay to find and hire artisans agree to the following: You will only post genuine, legally permissible job requests. You will provide accurate information about the job scope, location, and requirements. You will release payment promptly upon satisfactory completion of work, or raise a formal dispute within 72 hours of completion if not satisfied. You will not engage in fraudulent payment disputes or abuse the escrow system. You will treat artisans with respect and professionalism at all times. You will not attempt to circumvent the Platform by contracting directly with artisans you discovered through Logipay for a period of 12 months following your initial meeting.`,
  },
  {
    id: 'payments', title: '6. Payments & Escrow',
    content: `All financial transactions on the Platform are processed through our licensed payment partners. When a client confirms a booking, the agreed payment amount is held in a secure escrow account. Funds are released to the artisan within 24 hours of the client confirming satisfactory job completion. If no confirmation or dispute is raised within 72 hours of the artisan marking a job complete, funds are automatically released. Logipay's service fee is non-refundable once a job has been completed. Refunds for incomplete or disputed jobs are subject to our Dispute Resolution process described in Section 7.`,
  },
  {
    id: 'disputes', title: '7. Dispute Resolution',
    content: `In the event of a dispute between a client and artisan, both parties agree to the following resolution process: The disputing party must raise a formal dispute through the Platform within 72 hours of job completion. Both parties will have 48 hours to submit evidence and statements. Logipay's neutral mediation team will review the evidence and issue a resolution within 5 business days. Logipay's decision is final for disputes involving amounts under ₦500,000 or R50,000. For larger disputes, either party may escalate to formal arbitration under the Lagos Chamber of Commerce Arbitration Rules. Decisions made through Logipay's mediation are binding if both parties had agreed to this process at the time of booking.`,
  },
  {
    id: 'prohibited', title: '8. Prohibited Conduct',
    content: `Users of the Platform must not: post false, misleading, or defamatory content; use the Platform for any unlawful purpose; attempt to gain unauthorised access to any part of the Platform; scrape, harvest, or collect data from the Platform without written permission; create fake accounts, reviews, or job postings; use the Platform to harass, threaten, or abuse any other user; solicit or receive payment outside of Logipay's escrow system from users discovered through the Platform; attempt to circumvent Logipay's fee structure; upload malicious software or code; or impersonate any person or entity. Violation of these prohibitions may result in immediate account termination and, where applicable, legal action.`,
  },
  {
    id: 'liability', title: '9. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, Logipay and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from: your use of or inability to use the Platform; any conduct of other users (including artisans); any service or work performed or not performed by an artisan; or any unauthorised access to or alteration of your data. Logipay's total liability for any claim shall not exceed the greater of (i) the total fees paid by you to Logipay in the 12 months preceding the claim, or (ii) ₦50,000. Nothing in these Terms limits Logipay's liability for death, personal injury caused by our negligence, or fraud.`,
  },
  {
    id: 'governing', title: '10. Governing Law',
    content: `These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms or your use of the Platform that are not resolved through our internal dispute resolution process shall be submitted to the exclusive jurisdiction of the courts of Lagos State, Nigeria, except where mandatory consumer protection laws in your jurisdiction provide otherwise. If you are a South African resident, disputes may also be referred to the applicable South African court in your province of residence.`,
  },
];

export default function TermsPage() {
  const [active, setActive] = useState('acceptance');

  return (
    <div className="page-wrapper">
      <section className="bg-brand-navy py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="orange" className="mb-4">Legal</Badge>
            <h1 className="text-4xl sm:text-5xl font-display font-black text-white mb-4">Terms of Service</h1>
            <p className="text-slate-300 font-body">Last updated: 16 May 2026 · Effective: 16 May 2026</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none"><path d="M0 40L1440 40L1440 20C1200 40 960 0 720 10C480 20 240 40 0 20Z" fill="white" className="dark:fill-navy-900" /></svg>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          <div className="grid lg:grid-cols-4 gap-10">
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
