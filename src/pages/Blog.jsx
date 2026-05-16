import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/content';
import { Card, Badge } from '../components/ui/index.jsx';
import { Link } from 'react-router-dom';

const categoryColors = {
  'Home Improvement': 'blue',
  'Artisan Economy': 'green',
  'Safety & Trust': 'orange',
  'Tips & Guides': 'slate',
  'Industry News': 'navy',
  'Success Stories': 'orange',
};

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-brand-orange font-semibold text-xs uppercase tracking-[0.15em] mb-4 font-body">
      <span className="w-6 h-px bg-brand-orange"></span>{children}
    </span>
  );
}

export default function BlogPage() {
  const featured = blogPosts.find(p => p.featured);
  const rest = blogPosts.filter(p => !p.featured);

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="bg-brand-navy relative overflow-hidden py-28 px-4">
        <div className="absolute inset-0 bg-hero-pattern opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="orange" className="mb-6">The Chrafty Blog</Badge>
            <h1 className="text-5xl sm:text-6xl font-display font-black text-white mb-6">
              Insights for <span className="text-brand-orange">Builders & Doers</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-body">
              Home improvement guides, artisan success stories, industry news, and expert tips — all focused on Africa's trades economy.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 30C1200 60 960 0 720 20C480 40 240 60 0 30Z" fill="white" className="dark:fill-navy-900" /></svg>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">

          {/* Featured Post */}
          {featured && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
              <SectionLabel>Featured Article</SectionLabel>
              <Card className="overflow-hidden grid lg:grid-cols-2 gap-0" hover={false}>
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant={categoryColors[featured.category] || 'orange'}>{featured.category}</Badge>
                  </div>
                  <h2 className="font-display font-bold text-brand-navy dark:text-white text-3xl mb-4 leading-tight">{featured.title}</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed font-body mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-slate-400 text-sm font-body">
                      <span className="flex items-center gap-1.5"><Calendar size={14} />{featured.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={14} />{featured.readTime}</span>
                    </div>
                    <Link to="/blog" className="inline-flex items-center gap-1.5 text-brand-orange font-semibold text-sm hover:gap-2.5 transition-all font-body">
                      Read Article <ChevronRight size={15} />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Grid of posts */}
          <div className="mb-8">
            <SectionLabel>Latest Articles</SectionLabel>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3">
                      <Badge variant={categoryColors[post.category] || 'orange'}>{post.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-brand-navy dark:text-white text-lg mb-3 leading-snug">{post.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-body mb-5 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                      <div className="flex items-center gap-3 text-slate-400 text-xs font-body">
                        <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                      </div>
                      <Link to="/blog" className="text-brand-orange text-xs font-semibold hover:underline font-body">Read →</Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <div className="bg-gradient-to-r from-brand-navy to-navy-700 dark:from-navy-800 dark:to-navy-700 rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-hero-pattern opacity-30" />
              <div className="relative z-10">
                <h3 className="font-display font-bold text-white text-2xl mb-3">Never Miss an Article</h3>
                <p className="text-slate-300 font-body mb-6 text-sm">Subscribe to our newsletter for the latest tips, stories, and platform updates.</p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto" onSubmit={e => e.preventDefault()}>
                  <input type="email" placeholder="your@email.com" className="input-base flex-1 text-sm" />
                  <button className="btn-primary text-sm whitespace-nowrap shrink-0">Subscribe</button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
