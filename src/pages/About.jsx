import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Globe, Gem, Users, CheckCircle, Star, MapPin } from 'lucide-react';
import { teamMembers, coreValues, stats } from '../data/content';
import { Card, Badge } from '../components/ui/index.jsx';

const iconMap = { ShieldCheck, Heart, Globe, Gem };

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-brand-orange font-semibold text-xs uppercase tracking-[0.15em] mb-4 font-body">
      <span className="w-6 h-px bg-brand-orange"></span>{children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="bg-brand-navy relative overflow-hidden py-28 px-4">
        <div className="absolute inset-0 bg-hero-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-brand-orange/20 to-transparent rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="orange" className="mb-6">Our Story</Badge>
            <h1 className="text-5xl sm:text-6xl font-display font-black text-white mb-6">
              Built for Nigeria's <span className="text-brand-orange">Skilled Hands</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-body max-w-3xl mx-auto">
              We started Chrafty because we believed that every skilled artisan in Africa deserves access to opportunity — and every client deserves access to quality they can trust.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 30C1200 60 960 0 720 20C480 40 240 60 0 30Z" fill="white" className="dark:fill-navy-900" /></svg>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-max">
          <div className="text-center mb-14">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="section-title mb-4 dark:text-white">Our Core Values</h2>
            <p className="section-subtitle mx-auto font-body">These principles guide every decision we make, every product we build, and every person we hire.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => {
              const Icon = iconMap[v.icon] || ShieldCheck;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="p-7 h-full">
                    <div className="w-12 h-12 bg-slate-50 dark:bg-navy-700 rounded-xl flex items-center justify-center mb-5">
                      <Icon size={22} className={v.color} />
                    </div>
                    <h3 className="font-display font-bold text-brand-navy dark:text-white text-lg mb-3">{v.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-body">{v.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          <div className="text-center mb-14">
            <SectionLabel>The Team</SectionLabel>
            <h2 className="section-title mb-4 dark:text-white">People Who Care Deeply</h2>
            <p className="section-subtitle mx-auto font-body">Our team combines deep tech expertise with genuine passion for Africa's artisan economy.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="p-6 text-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 shadow-md">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-display font-bold text-brand-navy dark:text-white text-base mb-1">{member.name}</h3>
                  <Badge variant="orange" className="mb-4">{member.role}</Badge>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-body">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
     
    </div>
  );
}
