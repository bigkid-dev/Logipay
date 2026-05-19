import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/index.jsx';

// Sample blog posts data
const allPosts = [
  {
    id: 1,
    title: 'How to Accept Payments on WhatsApp in 5 Minutes',
    excerpt: 'Your customers are already on WhatsApp. Here\'s how to start selling and getting paid without leaving the app.',
    category: 'Social Commerce',
    date: 'Jan 15, 2025',
    readTime: '4 min read',
    slug: 'accept-payments-whatsapp',
    featured: true,
  },
  {
    id: 2,
    title: 'The State of Online Payments in Africa 2025',
    excerpt: 'From mobile money to cards to USSD — we break down the payment methods African shoppers actually use.',
    category: 'Industry Trends',
    date: 'Jan 10, 2025',
    readTime: '7 min read',
    slug: 'state-of-payments-africa-2025',
    featured: false,
  },
  {
    id: 3,
    title: 'Why Your Online Store Needs a Local Payment Gateway',
    excerpt: 'International gateways fail. Local payment success rates are 30% higher. Here’s why it matters.',
    category: 'Store Tips',
    date: 'Jan 5, 2025',
    readTime: '5 min read',
    slug: 'why-local-payment-gateway',
    featured: false,
  },
  {
    id: 4,
    title: 'From Local Market to Online Store: A Success Story',
    excerpt: 'How a small fashion boutique in Lagos grew 10x by moving online with LogiPay.',
    category: 'Case Studies',
    date: 'Dec 20, 2024',
    readTime: '6 min read',
    slug: 'local-market-to-online-store',
    featured: false,
  },
  {
    id: 5,
    title: 'Building a Social-First Store: The Complete Guide',
    excerpt: 'Stop sending traffic to dead links. Learn how to turn Instagram and TikTok into sales channels.',
    category: 'Social Commerce',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    slug: 'social-first-store-guide',
    featured: false,
  },
  {
    id: 6,
    title: 'Understanding Payment Success Rates (And How to Improve Yours)',
    excerpt: 'Failed payments = lost revenue. Here are 7 tactics to boost your approval rates by 25%.',
    category: 'Analytics',
    date: 'Dec 10, 2024',
    readTime: '5 min read',
    slug: 'improve-payment-success-rates',
    featured: true,
  },
];

// SVG Icons
const Icons = {
  WhatsApp: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.96 17.38 21.96 11.92C21.95 6.46 17.5 2 12.04 2Z" fill="#25D366" stroke="#25D366" strokeWidth="1.5"/>
      <path d="M12.04 3.5C16.67 3.5 20.46 7.29 20.46 11.92C20.46 16.55 16.67 20.33 12.04 20.33C10.55 20.33 9.09 19.95 7.79 19.21L7.09 18.82L4.48 19.53L5.21 16.95L4.8 16.23C4.09 14.96 3.72 13.51 3.72 12.03C3.71 7.4 7.5 3.5 12.04 3.5Z" fill="white"/>
      <path d="M12.04 7.5C10.46 7.5 9.16 8.8 9.16 10.38C9.16 11.96 10.46 13.26 12.04 13.26C13.62 13.26 14.92 11.96 14.92 10.38C14.92 8.8 13.62 7.5 12.04 7.5Z" fill="#25D366"/>
    </svg>
  ),
  Trend: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 20L22 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 4L20 8L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 8L9 8C7.11438 8 5.17157 8.63214 3.75736 10.0464C2.34315 11.4606 2 13.1144 2 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Store: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9L12 3L21 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 10V18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 20V14H15V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  CaseStudy: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Analytics: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Clock: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Newsletter: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const categoryColors = {
  'Social Commerce': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400',
  'Industry Trends': 'bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400',
  'Store Tips': 'bg-amber-100 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400',
  'Case Studies': 'bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400',
  'Analytics': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/30 dark:text-cyan-400',
};

const categoryIcons = {
  'Social Commerce': <Icons.WhatsApp />,
  'Industry Trends': <Icons.Trend />,
  'Store Tips': <Icons.Store />,
  'Case Studies': <Icons.CaseStudy />,
  'Analytics': <Icons.Analytics />,
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(allPosts.map(post => post.category))];

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = allPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="section-padding bg-white dark:bg-navy-900 pt-20">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="orange" className="mb-4">Blog</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-navy dark:text-white mb-6">
              Insights for modern merchants
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              Stories, guides, and trends to help you sell smarter and grow faster.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white dark:bg-navy-900 border-b border-slate-100 dark:border-white/5">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Icons.Search />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-700 dark:text-slate-300 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-brand-orange text-white'
                      : 'bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-navy-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && searchQuery === '' && selectedCategory === 'All' && (
        <section className="section-padding bg-slate-50 dark:bg-navy-800">
          <div className="container-max">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <Badge variant="orange" className="mb-3">Featured</Badge>
              <h2 className="font-display font-bold text-2xl text-brand-navy dark:text-white">
                Must-read articles
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, idx) => (
                <motion.a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white dark:bg-navy-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-brand-orange">
                        {categoryIcons[post.category]}
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy dark:text-white mb-3 group-hover:text-brand-orange transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <Icons.Calendar />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icons.Clock />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-bold text-2xl text-brand-navy dark:text-white">
              {searchQuery || selectedCategory !== 'All' ? 'Search results' : 'Latest articles'}
            </h2>
            {filteredPosts.length === 0 && (
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-4">
                No articles found. Try a different search term or category.
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, idx) => (
              <motion.a
                key={post.id}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-slate-50 dark:bg-navy-800 rounded-xl p-5 border border-slate-100 dark:border-white/5 hover:border-brand-orange/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-brand-orange">
                    {categoryIcons[post.category]}
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-base text-brand-navy dark:text-white mb-2 group-hover:text-brand-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <Icons.Calendar />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icons.Clock />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icons.ArrowRight />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-brand-orange/5">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-2xl mb-6 text-brand-orange">
              <Icons.Newsletter />
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-3">
              Get payment insights in your inbox
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              Once a month. No spam. Just actionable tips to grow your online store.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-700 dark:text-slate-300 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange transition-colors"
              />
              <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-slate-400 text-xs mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}