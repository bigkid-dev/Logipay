import { motion } from 'framer-motion';
import { Heart, TrendingUp, Globe, BookOpen, MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import { jobPositions, companyPerks } from '../data/content';
import { Card, Badge } from '../components/ui/index.jsx';
import { Link } from 'react-router-dom';

const iconMap = { Heart, TrendingUp, Globe, BookOpen };

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-brand-orange font-semibold text-xs uppercase tracking-[0.15em] mb-4 font-body">
      <span className="w-6 h-px bg-brand-orange"></span>{children}
    </span>
  );
}

export default function CareersPage() {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="bg-brand-navy relative overflow-hidden py-28 px-4">
        <div className="absolute inset-0 bg-hero-pattern opacity-40" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="orange" className="mb-6">We're Hiring</Badge>
            <h1 className="text-5xl sm:text-6xl font-display font-black text-white mb-6">
              Build the Future of <span className="text-brand-orange">African Craftsmanship</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-body max-w-2xl mx-auto">
              Join a passionate team working to empower millions of skilled artisans and transform how Africa hires and gets hired.
            </p>
            <a href="#positions" className="btn-primary mt-8 inline-flex text-base px-8 py-4">
              See Open Positions <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 30C1200 60 960 0 720 20C480 40 240 60 0 30Z" fill="white" className="dark:fill-navy-900" /></svg>
        </div>
      </section>

      {/* Culture image */}
      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionLabel>Why Chrafty</SectionLabel>
            <h2 className="section-title mb-4 dark:text-white">Work That Actually Matters</h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-body mb-6">
              We are a small team making an outsized impact. Every feature we ship, every artisan we onboard, every dispute we resolve — it directly changes lives. If you want to feel that at work every day, Chrafty is for you.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-body">
              We are building for the long term — a company rooted in African communities, solving African problems, with African talent. We move fast, think deeply, and celebrate both effort and results.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/team-culture/600/420" alt="Chrafty team culture" className="w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-max">
          <div className="text-center mb-14">
            <SectionLabel>Benefits & Perks</SectionLabel>
            <h2 className="section-title mb-4 dark:text-white">We Invest in Our People</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyPerks.map((perk, i) => {
              const Icon = iconMap[perk.icon] || Heart;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="p-7 h-full text-center">
                    <div className="w-12 h-12 bg-orange-50 dark:bg-orange-950/30 rounded-xl flex items-center justify-center mx-auto mb-5">
                      <Icon size={22} className="text-brand-orange" />
                    </div>
                    <h3 className="font-display font-bold text-brand-navy dark:text-white text-lg mb-3">{perk.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-body">{perk.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          <div className="text-center mb-14">
            <SectionLabel>Open Roles</SectionLabel>
            <h2 className="section-title mb-4 dark:text-white">Find Your Role at Chrafty</h2>
            <p className="section-subtitle mx-auto font-body">We're a growing team and these won't stay open for long. Apply early.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {jobPositions.map((job, i) => (
              <motion.div key={job.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-6" hover>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="orange">{job.dept}</Badge>
                        <Badge variant="slate">{job.type}</Badge>
                      </div>
                      <h3 className="font-display font-bold text-brand-navy dark:text-white text-xl">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2">
                        <span className="flex items-center gap-1.5 text-slate-500 text-sm font-body">
                          <MapPin size={14} className="text-brand-orange" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500 text-sm font-body">
                          <Clock size={14} className="text-brand-orange" /> {job.type}
                        </span>
                      </div>
                    </div>
                    <Link to="/contact"
                      className="px-5 py-2.5 bg-brand-navy dark:bg-brand-orange text-white text-sm font-semibold rounded-xl hover:bg-brand-orange dark:hover:bg-orange-600 transition-all duration-150 shrink-0 font-body">
                      Apply Now
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Application CTA */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <div className="bg-gradient-to-br from-brand-navy to-navy-700 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-hero-pattern opacity-30" />
              <div className="relative z-10">
                <h3 className="font-display font-bold text-white text-3xl mb-4">Don't See Your Role?</h3>
                <p className="text-slate-300 mb-8 font-body max-w-xl mx-auto">We're always looking for exceptional people. Send us your CV and a note about what you'd like to build at Chrafty.</p>
                <Link to="/contact" className="btn-primary text-base px-8 py-4">
                  Send Open Application <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
