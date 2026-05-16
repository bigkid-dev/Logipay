import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Rocket, CreditCard, UserCog, ShieldAlert, ChevronRight, MessageCircle, Mail } from 'lucide-react';
import { supportCategories, popularArticles } from '../data/content';
import { Card, Badge } from '../components/ui/index.jsx';
import { Link } from 'react-router-dom';

const iconMap = { Rocket, CreditCard, UserCog, ShieldAlert };

export default function SupportPage() {
  const [query, setQuery] = useState('');

  return (
    <div className="page-wrapper">
      {/* Hero with Search */}
      <section className="bg-brand-navy relative overflow-hidden py-28 px-4">
        <div className="absolute inset-0 bg-hero-pattern opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="orange" className="mb-6">Help Center</Badge>
            <h1 className="text-5xl sm:text-6xl font-display font-black text-white mb-6">
              How Can We <span className="text-brand-orange">Help You?</span>
            </h1>
            <p className="text-slate-300 mb-8 font-body">Search our knowledge base or browse categories below.</p>
            <div className="relative max-w-xl mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search for answers... e.g. 'how do I get a refund'"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:bg-white/15 transition-all font-body text-sm"
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 30C1200 60 960 0 720 20C480 40 240 60 0 30Z" fill="white" className="dark:fill-navy-900" /></svg>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          {/* Help Categories */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-brand-orange font-semibold text-xs uppercase tracking-[0.15em] mb-4 font-body">
              <span className="w-6 h-px bg-brand-orange"></span>Browse Topics
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-navy dark:text-white">What Do You Need Help With?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportCategories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Rocket;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="p-7 text-center cursor-pointer" hover>
                    <div className="w-14 h-14 bg-orange-50 dark:bg-orange-950/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-brand-orange" />
                    </div>
                    <h3 className="font-display font-bold text-brand-navy dark:text-white text-base mb-2">{cat.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-body mb-4">{cat.desc}</p>
                    <Badge variant="orange">{cat.articles} articles</Badge>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Popular Articles */}
            <div>
              <h3 className="font-display font-bold text-brand-navy dark:text-white text-xl mb-6">Popular Articles</h3>
              <div className="space-y-3">
                {popularArticles.map((article, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    <Link to="/faq"
                      className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-white/5 bg-white dark:bg-navy-800 hover:border-brand-orange/30 hover:shadow-sm transition-all duration-150 group">
                      <div>
                        <p className="text-brand-navy dark:text-white text-sm font-semibold group-hover:text-brand-orange transition-colors font-body">{article.title}</p>
                        <p className="text-slate-400 text-xs font-body mt-1">{article.category}</p>
                      </div>
                      <ChevronRight size={16} className="text-slate-400 group-hover:text-brand-orange transition-colors shrink-0" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div>
              <h3 className="font-display font-bold text-brand-navy dark:text-white text-xl mb-6">Still Need Help?</h3>
              <div className="space-y-4">
                <Card className="p-6" hover>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/30 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-brand-navy dark:text-white mb-1">Live Chat</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-body mb-3">Available Mon–Sun, 8am – 10pm WAT. Average response: under 5 minutes.</p>
                      <button className="btn-primary text-sm px-5 py-2">Start Chat</button>
                    </div>
                  </div>
                </Card>
                <Card className="p-6" hover>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-50 dark:bg-orange-950/30 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-brand-navy dark:text-white mb-1">Email Support</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-body mb-3">Send us an email and we'll respond within 2 hours during business hours.</p>
                      <Link to="/contact" className="btn-secondary text-sm px-5 py-2 inline-flex">Send Email</Link>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
