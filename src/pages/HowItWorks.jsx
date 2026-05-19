import { motion } from 'framer-motion';
import { FileText, MessageSquare, ShieldCheck, UserCheck, TrendingUp, Wallet, CheckCircle, ArrowRight } from 'lucide-react';
import { howItWorksClient, howItWorksArtisan, faqData } from '../data/content';
import { Accordion, Badge } from '../components/ui/index.jsx';
import { Link } from 'react-router-dom';

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-brand-orange font-semibold text-xs uppercase tracking-[0.15em] mb-4 font-body">
      <span className="w-6 h-px bg-brand-orange"></span>{children}
    </span>
  );
}

const clientSteps = [
  { icon: FileText, title: 'Create a Free Account', desc: 'Sign up in under 2 minutes. No credit card required. Just your name, email, and location.' },
  { icon: MessageSquare, title: 'Describe Your Job', desc: 'Tell us what you need. Add photos for accuracy. Set your timeline and rough budget. The more detail, the better your quotes.' },
  { icon: ShieldCheck, title: 'Receive Verified Quotes', desc: 'Only verified, background-checked artisans in your area see your job. Quotes usually arrive within 2–4 hours.' },
  { icon: CheckCircle, title: 'Compare & Choose', desc: 'Review artisan profiles, ratings, completed jobs, and portfolios. Choose the best fit, not just the cheapest.' },
  { icon: Wallet, title: 'Secure Your Booking', desc: 'Pay via escrow. Your funds are held safely — not released until you confirm the job is done to your satisfaction.' },
  { icon: TrendingUp, title: 'Review & Repeat', desc: 'Leave an honest review to help the community. Build a roster of go-to artisans for future needs.' },
];

const artisanSteps = [
  { icon: UserCheck, title: 'Register to Join', desc: 'Submit your application with your trade details, ID, and any relevant certifications on the Logipay App. It takes just a few minutes.' },
  { icon: ShieldCheck, title: 'Get Verified', desc: 'Our team reviews your documents, calls your references, and verifies your credentials within 24-48 hours. Once approved, you\'re live.' },
  { icon: FileText, title: 'Set Up Your Profile', desc: 'Build a compelling profile: upload your portfolio, set your service area, list your specialisations, and set competitive rates.' },
  { icon: MessageSquare, title: 'Browse & Bid on Jobs', desc: 'See all relevant jobs posted near you. Send personalised, detailed quotes that showcase your expertise and professionalism.' },
  { icon: CheckCircle, title: 'Deliver Quality Work', desc: 'Show up on time, communicate clearly, and do great work. Your reputation is everything — and Logipay helps you build it.' },
  { icon: TrendingUp, title: 'Get Paid & Grow', desc: 'Receive payment within 24 hours of completion. Collect five-star reviews. Grow your client base every single week.' },
];

export default function HowItWorksPage() {
  const allFaq = [...faqData.general, ...faqData.clients, ...faqData.artisans].slice(0, 8);

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="bg-brand-navy relative overflow-hidden py-28 px-4">
        <div className="absolute inset-0 bg-hero-pattern opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="orange" className="mb-6">Simple by Design</Badge>
            <h1 className="text-5xl sm:text-6xl font-display font-black text-white mb-6">
              Everything You Need to <span className="text-brand-orange">Know</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-body">
              Logipay is built to make hiring and getting hired as simple, safe, and rewarding as possible — for everyone.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 30C1200 60 960 0 720 20C480 40 240 60 0 30Z" fill="white" className="dark:fill-navy-900" /></svg>
        </div>
      </section>

      {/* For Clients */}
      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          <div className="text-center mb-14">
            <SectionLabel>For Clients</SectionLabel>
            <h2 className="section-title mb-4 dark:text-white">Hire a Trusted Artisan in 6 Easy Steps</h2>
            <p className="section-subtitle mx-auto font-body">From posting a job to confirming completion, Logipay protects you every step of the way.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-7 h-full border border-slate-100 dark:border-white/5 hover:border-brand-orange/30 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-display font-black text-brand-orange text-3xl leading-none">0{i + 1}</span>
                      <div className="w-9 h-9 bg-orange-50 dark:bg-orange-950/30 rounded-lg flex items-center justify-center">
                        <Icon size={18} className="text-brand-orange" />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-brand-navy dark:text-white text-lg mb-3">{step.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-body">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Post a Job Free <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-2 bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange" />

      {/* For Artisans */}
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-max">
          <div className="text-center mb-14">
            <SectionLabel>For Artisans</SectionLabel>
            <h2 className="section-title mb-4 dark:text-white">Start Earning More in 6 Steps</h2>
            <p className="section-subtitle mx-auto font-body">Join Africa's largest verified artisan network and unlock a steady stream of quality clients.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artisanSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <div className="bg-white dark:bg-navy-800 rounded-2xl p-7 h-full border border-slate-100 dark:border-white/5 hover:border-brand-orange/30 transition-all duration-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-display font-black text-brand-orange text-3xl leading-none">0{i + 1}</span>
                      <div className="w-9 h-9 bg-orange-50 dark:bg-orange-950/30 rounded-lg flex items-center justify-center">
                        <Icon size={18} className="text-brand-orange" />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-brand-navy dark:text-white text-lg mb-3">{step.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-body">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Join as Artisan <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="section-title mb-4 dark:text-white">Common Questions</h2>
          </div>
          <Accordion items={allFaq} />
          <div className="text-center mt-8">
            <Link to="/faq" className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:gap-3 transition-all font-body text-sm">
              See all FAQs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
