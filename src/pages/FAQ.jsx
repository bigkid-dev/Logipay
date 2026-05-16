import { useState } from 'react';
import { motion } from 'framer-motion';
import { faqData } from '../data/content';
import { Accordion, Badge } from '../components/ui/index.jsx';

const tabs = [
  { key: 'general', label: 'General', emoji: '🌍' },
  { key: 'clients', label: 'For Clients', emoji: '🏠' },
  { key: 'artisans', label: 'For Artisans', emoji: '🔨' },
  { key: 'payments', label: 'Payments & Safety', emoji: '🔒' },
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="bg-brand-navy relative overflow-hidden py-28 px-4">
        <div className="absolute inset-0 bg-hero-pattern opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="orange" className="mb-6">Help & Information</Badge>
            <h1 className="text-5xl sm:text-6xl font-display font-black text-white mb-6">
              Frequently Asked <span className="text-brand-orange">Questions</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-body">
              Everything you need to know about using Chrafty, answered clearly and honestly.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 30C1200 60 960 0 720 20C480 40 240 60 0 30Z" fill="white" className="dark:fill-navy-900" /></svg>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max max-w-4xl">
          {/* Tab switcher */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {tabs.map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 font-body flex items-center gap-2 ${
                  activeTab === tab.key
                    ? 'bg-brand-orange text-white shadow-md'
                    : 'bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-700'
                }`}>
                <span>{tab.emoji}</span>{tab.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            <Accordion items={faqData[activeTab]} />
          </motion.div>

          {/* Still have questions */}
          <div className="mt-16 bg-slate-50 dark:bg-navy-800 rounded-3xl p-10 text-center border border-slate-100 dark:border-white/5">
            <h3 className="font-display font-bold text-brand-navy dark:text-white text-2xl mb-3">Still Have Questions?</h3>
            <p className="text-slate-500 dark:text-slate-400 font-body mb-6">Our support team is available 7 days a week and typically responds in under 2 hours.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="/contact" className="btn-primary">Contact Support</a>
              <a href="/support" className="btn-secondary">Browse Help Center</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
