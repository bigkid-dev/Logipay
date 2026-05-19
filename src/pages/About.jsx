import { motion } from 'framer-motion';
import { Badge } from '../components/ui/index.jsx';

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <section className="section-padding bg-white dark:bg-navy-900 pt-20">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="orange" className="mb-4">Our Story</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-navy dark:text-white mb-6">
              Making payments as simple as possible
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              LogiPay is on a mission to take every business online — from local stores to supermarkets — 
              and make payments effortless for everyone across Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-navy-800">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="orange" className="mb-4">The Problem</Badge>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-4">
                Payments in Africa are still too hard
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Millions of businesses — local stores, artisans, online sellers — struggle to accept payments. 
                Multiple gateways, failed transactions, complex integrations, and no unified way to sell across 
                WhatsApp, Instagram, and physical stores.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We saw shop owners losing sales because customers couldn't pay the way they wanted. 
                We saw online stores spending weeks integrating payment gateways. We knew there had to be a better way.
              </p>
            </div>
            <div className="bg-brand-orange/10 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-brand-orange mb-2">67%</div>
              <p className="text-slate-600 dark:text-slate-300 text-sm">of African small businesses lose sales due to payment failures</p>
              <div className="text-5xl font-bold text-brand-orange mt-6 mb-2">40+</div>
              <p className="text-slate-600 dark:text-slate-300 text-sm">payment methods but no single integration</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="orange" className="mb-4">Our Solution</Badge>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-4">
              One platform. Every payment.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              LogiPay combines payment processing, store building, and social commerce into a single, simple platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Simple Payments',
                description: 'Cards, transfers, USSD, mobile money — one API. Your customers pay how they want.',
                icon: '💳'
              },
              {
                title: 'Built-in Stores',
                description: 'Launch an online store in minutes. No coding. No hassle. Just sell.',
                icon: '🏪'
              },
              {
                title: 'Social Commerce',
                description: 'Sell directly on WhatsApp, Instagram, and TikTok. Meet your customers where they are.',
                icon: '📱'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 border border-slate-100 dark:border-white/5">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-semibold text-brand-navy dark:text-white text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-orange/5">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-brand-orange text-6xl mb-6">“</div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-6">
              To take every business online and make payments invisible
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed italic">
              We believe that payments should just work. Behind the scenes, we handle the complexity — 
              so store owners can focus on what matters: their products and their customers.
            </p>
            <div className="mt-8">
              <p className="font-display font-semibold text-brand-navy dark:text-white">— The LogiPay Team</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="orange" className="mb-4">Why LogiPay</Badge>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-4">
              Different by design
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              We're not just a payment processor. We're a partner in your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Built for Africa',
                description: 'We understand local payment methods, currencies, and business challenges — from Lagos to Nairobi to Johannesburg.',
              },
              {
                title: 'Partner-first approach',
                description: 'We don\'t just integrate with stores. We co-build solutions with them to solve real problems.',
              },
              {
                title: 'Simplicity obsessed',
                description: 'If it takes more than 3 clicks to get paid, we go back to the drawing board.',
              },
              {
                title: 'Social by default',
                description: 'Selling on social media isn\'t an add-on. It\'s built into our DNA.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-1 h-12 bg-brand-orange rounded-full shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-display font-semibold text-brand-navy dark:text-white text-base mb-2">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-navy-800">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="orange" className="mb-4">Our Principles</Badge>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-4">
              What we stand for
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Simplicity first',
                quote: 'Complexity is the enemy of adoption. We make the complex simple.',
              },
              {
                title: 'Build with, not for',
                quote: 'The best solutions come from working alongside store owners, not in isolation.',
              },
              {
                title: 'Africa-first',
                quote: 'We build for African businesses first. Global is a bonus, not the goal.',
              },
              {
                title: 'Relentless reliability',
                quote: 'Payment failures cost real money. We obsess over uptime and success rates.',
              },
              {
                title: 'Transparency',
                quote: 'No hidden fees. No fine print surprises. Just honest pricing.',
              },
              {
                title: 'Continuous iteration',
                quote: 'We\'re never done. Every day we wake up trying to make payments simpler.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-navy-900 rounded-xl p-6 border border-slate-100 dark:border-white/5">
                <p className="text-brand-orange text-3xl mb-3">“</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm italic mb-4">{item.quote}</p>
                <p className="font-display font-semibold text-brand-navy dark:text-white text-xs uppercase tracking-wide">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="orange" className="mb-4">The Team</Badge>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-4">
              Built by builders, for builders
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              We're entrepreneurs, engineers, and payment nerds who have run online stores ourselves.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Oluwaseun Adebayo', role: 'CEO & Co-founder', image: '👨‍💻' },
              { name: 'Amina Mohammed', role: 'CTO & Co-founder', image: '👩‍💻' },
              { name: 'Kofi Mensah', role: 'Head of Product', image: '🧑‍💻' },
              { name: 'Thando Nkosi', role: 'Head of Engineering', image: '👨‍🔧' },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-24 h-24 bg-slate-100 dark:bg-navy-800 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="font-display font-semibold text-brand-navy dark:text-white text-base">{member.name}</h3>
                <p className="text-slate-400 text-xs">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-400 text-xs">
              + 15 more passionate people building the future of payments in Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-navy-800">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="orange" className="mb-4">Our Partners</Badge>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-4">
              Trusted by businesses across Africa
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              From local stores to supermarkets, we're proud to power their payments.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {['Store A', 'Supermarket B', 'Fashion C', 'Market D', 'Shop E', 'Mart F'].map((partner, idx) => (
              <div key={idx} className="text-slate-400 dark:text-slate-500 font-display text-sm tracking-wide">
                {partner}
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs mt-6">
            and 500+ more businesses using LogiPay every day
          </p>
        </div>
      </section>

      <section className="section-padding bg-brand-navy dark:bg-navy-950">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
              Ready to simplify your payments?
            </h2>
            <p className="text-slate-300 text-sm mb-8">
              Join hundreds of businesses already using LogiPay to accept payments, build stores, and sell on social media.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Start selling → 
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Contact sales
              </button>
            </div>
            <p className="text-slate-400 text-xs mt-6">
              No setup fees. Cancel anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}