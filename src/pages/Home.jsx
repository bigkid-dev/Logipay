import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, CheckCircle, Star, MapPin,
  Droplets, Zap, Hammer, PaintBucket, Flame, Grid2x2,
  Wind, Sparkles, Home, Trees, ShieldCheck, Sofa,
  ChevronDown,
} from 'lucide-react';
import {
  categories, stats, testimonials,
  howItWorksClient, howItWorksArtisan,
  clientBenefits, artisanBenefits,
} from '../data/content';

/* ─── icon maps ─────────────────────────────────────────────────── */
const iconMap = {
  Droplets, Zap, Hammer, PaintBucket, Flame,
  Grid2x2, Wind, Sparkles, Home, Trees, ShieldCheck, Sofa,
};

/* ─── tiny helpers ───────────────────────────────────────────────── */
const Tag = ({ children }) => (
  <span className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase
    text-amber-600 dark:text-amber-400 mb-5">
    {children}
  </span>
);

const Divider = () => (
  <div className="w-full h-px bg-neutral-200 dark:bg-white/10 my-0" />
);

/* ═══════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="bg-[#F8F6F1] dark:bg-[#0E0E0E] text-[#111] dark:text-white
      font-['Instrument_Sans',sans-serif] antialiased">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col overflow-hidden bg-[#0F1A12]"
      >
        {/* full-bleed background image with parallax */}
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/craft-worker-nigeria/1600/900"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          {/* editorial grain overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDQiLz48L3N2Zz4=')] opacity-60" />
          {/* bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-64
            bg-gradient-to-t from-[#0F1A12] to-transparent" />
        </motion.div>

        {/* content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex flex-col justify-end flex-1
            max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pb-20 pt-40"
        >
          {/* eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6"
          >
            Nigeria's Skilled-Trade Marketplace
          </motion.p>

          {/* headline — editorial split */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Fraunces',serif] italic font-black
                text-white leading-[0.95]
                text-[clamp(3rem,9vw,8.5rem)]"
            >
              Every skill,<br />
              <span className="not-italic text-amber-400">verified.</span>
            </motion.h1>
          </div>

          {/* sub + cta row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row sm:items-end
              justify-between gap-8 border-t border-white/20 pt-8"
          >
            <p className="text-white/70 text-base leading-relaxed max-w-sm">
              Plumbers, electricians, carpenters, welders — find a
              trusted artisan anywhere in Nigeria in under 10 minutes.
            </p>
            <div className="flex gap-3 shrink-0">
              <Link
                to="/contact"
                className="group flex items-center gap-2 bg-amber-400 hover:bg-amber-300
                  text-[#0F1A12] font-bold text-sm px-6 py-3.5 rounded-full
                  transition-all duration-200"
              >
                Find an Artisan
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 border border-white/30 hover:border-white/60
                  text-white font-medium text-sm px-6 py-3.5 rounded-full
                  transition-all duration-200"
              >
                Join as Artisan
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
            text-white/40 flex flex-col items-center gap-1"
        >
          <ChevronDown size={18} />
        </motion.div>
      </section>

      {/* ── TICKER ────────────────────────────────────────────────── */}
      <div className="bg-amber-400 overflow-hidden py-3.5">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          className="flex whitespace-nowrap gap-12 w-max"
        >
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex gap-12 text-[#0F1A12] font-semibold text-sm tracking-wide">
              {['Verified Artisans', 'Easy Payments','Quick Service','Affordable Rates','Skilled Tradespeople', 'Verified & Trusted', '4.8★ Average Rating', 'Nigeria', 'All Trade Categories', 'Same-Day Booking'].map(item => (
                <span key={item} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#0F1A12]/40 inline-block" />
                  {item}
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── CATEGORIES ────────────────────────────────────────────── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <Tag>What We Cover</Tag>
            <h2 className="font-['Fraunces',serif] font-black text-[clamp(2rem,5vw,3.5rem)]
              leading-[1.1] text-[#111] dark:text-white">
              All trades,<br />one platform.
            </h2>
          </div>
          <Link
            to="/how-it-works"
            className="group flex items-center gap-2 text-sm font-semibold
              text-amber-600 dark:text-amber-400 shrink-0"
          >
            See More Trade
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5
              group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* horizontal scroll on mobile, grid on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || ShieldCheck;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  to="/contact"
                  className="group flex flex-col gap-3 p-4 rounded-2xl
                    bg-white dark:bg-white/5
                    border border-neutral-200 dark:border-white/10
                    hover:border-amber-400/60 hover:-translate-y-1
                    hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    transition-all duration-200"
                >
                  <div className={`w-10 h-10 ${cat.color} rounded-xl
                    flex items-center justify-center`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#111] dark:text-white text-sm leading-snug">
                      {cat.name}
                    </p>
                    <p className="text-neutral-400 text-xs mt-0.5">{cat.count}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Divider />

      {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <Tag>The Process</Tag>
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-24">

          {/* left — sticky label */}
          <div className="lg:w-80 shrink-0 lg:sticky lg:top-28">
            <h2 className="font-['Fraunces',serif] font-black
              text-[clamp(2rem,4vw,3rem)] leading-[1.1]
              text-[#111] dark:text-white mb-4">
              Simple from<br />start to finish.
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
              Whether you need someone today or you're building your
              trade business, Logipay is built around you.
            </p>
          </div>

          {/* right — two columns */}
          <div className="flex-1 grid md:grid-cols-2 gap-10">
            {/* clients */}
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase
                text-neutral-400 mb-6">For Clients</p>
              <div className="space-y-8">
                {howItWorksClient.map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <span className="font-['Fraunces',serif] font-black text-3xl
                      text-amber-400/60 leading-none shrink-0 w-8">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="font-semibold text-[#111] dark:text-white
                        mb-1 text-base">
                        {step.title}
                      </h4>
                      <p className="text-neutral-500 dark:text-neutral-400
                        text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* artisans */}
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase
                text-neutral-400 mb-6">For Artisans</p>
              <div className="space-y-8">
                {howItWorksArtisan.map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <span className="font-['Fraunces',serif] font-black text-3xl
                      text-amber-400/60 leading-none shrink-0 w-8">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="font-semibold text-[#111] dark:text-white
                        mb-1 text-base">
                        {step.title}
                      </h4>
                      <p className="text-neutral-500 dark:text-neutral-400
                        text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />


      {/* ── FOR CLIENTS ───────────────────────────────────────────── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto
        grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Tag>For Clients</Tag>
          <h2 className="font-['Fraunces',serif] font-black
            text-[clamp(2rem,4vw,3.2rem)] leading-[1.1]
            text-[#111] dark:text-white mb-5">
            Hire with zero<br />guesswork.
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-base
            leading-relaxed mb-10 max-w-sm">
            Every artisan on Logipay has been background-checked,
            skill-tested, and reviewed by real customers before
            you ever see their profile.
          </p>
          <div className="space-y-5">
            {clientBenefits.map((b, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-amber-400/20
                  flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={11} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-[#111] dark:text-white
                    text-sm mb-0.5">{b.title}</p>
                  <p className="text-neutral-500 dark:text-neutral-400
                    text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 mt-10
              bg-[#111] dark:bg-white text-white dark:text-[#111]
              font-semibold text-sm px-7 py-3.5 rounded-full
              hover:opacity-80 transition-opacity"
          >
            Post a Job — It's Free
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden aspect-[4/3]"
        >
          <img
            src="https://picsum.photos/seed/client-happy-lagos/800/600"
            alt="Client reviewing artisan work"
            className="w-full h-full object-cover"
          />
          {/* caption tag */}
          <div className="absolute bottom-5 left-5 bg-white/90 dark:bg-black/80
            backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-2.5">
            <div className="flex -space-x-1.5">
              {['seed/face1', 'seed/face2', 'seed/face3'].map((s, j) => (
                <img
                  key={j}
                  src={`https://picsum.photos/${s}/32/32`}
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  alt=""
                />
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-[#111] dark:text-white
                leading-none">2,400+ happy clients</p>
              <p className="text-[10px] text-neutral-400 mt-0.5">this month alone</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FOR ARTISANS — dark band ─────────────────────────────── */}
      <section className="bg-[#0F1A12] py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] order-2 lg:order-1"
          >
            <img
              src="https://picsum.photos/seed/artisan-work-africa/800/600"
              alt="Artisan at work"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-amber-400 text-[11px] font-semibold
              tracking-[0.18em] uppercase mb-5 block">
              For Artisans
            </span>
            <h2 className="font-['Fraunces',serif] font-black
              text-[clamp(2rem,4vw,3.2rem)] leading-[1.1]
              text-white mb-5">
              Your skill deserves<br />
              a bigger audience.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-sm">
              Stop relying on word of mouth. Join 10,000+ artisans
              who've built real businesses on Logipay — with verified
              profiles, steady work, and on-time payments.
            </p>
            <div className="space-y-5">
              {artisanBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-amber-400/20
                    flex items-center justify-center shrink-0 mt-0.5">
                    <Star size={10} className="text-amber-400 fill-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-0.5">{b.title}</p>
                    <p className="text-white/50 text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 mt-10
                bg-amber-400 hover:bg-amber-300 text-[#0F1A12]
                font-bold text-sm px-7 py-3.5 rounded-full transition-colors"
            >
              Reguster to Join
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end
          justify-between gap-4 mb-14">
          <div>
            <Tag>Real Stories</Tag>
            <h2 className="font-['Fraunces',serif] font-black
              text-[clamp(2rem,4vw,3rem)] leading-[1.1]
              text-[#111] dark:text-white">
              Built For Africans<br />By Africans.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-7 rounded-3xl border flex flex-col gap-5
                ${i === 1
                  ? 'bg-[#0F1A12] border-white/10 text-white'
                  : 'bg-white dark:bg-white/5 border-neutral-200 dark:border-white/10'}`}
            >
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={13}
                    className={i === 1 ? 'fill-amber-400 text-amber-400'
                      : 'fill-amber-400 text-amber-400'} />
                ))}
              </div>
              <p className={`text-sm leading-relaxed flex-1
                ${i === 1 ? 'text-white/80' : 'text-neutral-600 dark:text-neutral-300'}`}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t
                border-neutral-100 dark:border-white/10">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <p className={`font-semibold text-sm
                    ${i === 1 ? 'text-white' : 'text-[#111] dark:text-white'}`}>
                    {t.name}
                  </p>
                  <p className={`text-xs
                    ${i === 1 ? 'text-white/50' : 'text-neutral-400'}`}>
                    {t.role}
                  </p>
                </div>
                <span className={`ml-auto text-[10px] font-semibold
                  px-2.5 py-1 rounded-full
                  ${t.type === 'artisan'
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400'
                    : 'bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400'}`}>
                  {t.type === 'artisan' ? 'Artisan' : 'Client'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────────────── */}
      <section className="mx-6 sm:mx-10 lg:mx-16 mb-24 rounded-3xl overflow-hidden
        bg-amber-400 relative">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture-warm/1200/400')]
          bg-cover opacity-10" />
        <div className="relative z-10 py-16 px-10 lg:px-16
          flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-['Fraunces',serif] font-black
              text-[clamp(1.8rem,4vw,3rem)] leading-[1.1]
              text-[#0F1A12] mb-3">
              Ready to get started?
            </h2>
            <p className="text-[#0F1A12]/70 text-base max-w-md">
              Join other Nigerians who
              already trust Logipay for every job around the home.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              to="/contact"
              className="bg-[#0F1A12] text-white font-bold text-sm
                px-7 py-3.5 rounded-full hover:opacity-80 transition-opacity
                flex items-center gap-2 group"
            >
              Find an Artisan
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="bg-white/30 hover:bg-white/50 text-[#0F1A12]
                font-semibold text-sm px-7 py-3.5 rounded-full
                transition-colors"
            >
              Join as Artisan
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}