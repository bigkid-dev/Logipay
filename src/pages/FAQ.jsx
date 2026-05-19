import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../components/ui/index.jsx';

// SVG Icons
const Icons = {
  Plus: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Minus: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Payment: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 10H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="18" cy="14" r="1" fill="currentColor"/>
    </svg>
  ),
  Store: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9L12 3L21 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 10V18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 20V14H15V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Social: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6.5 6.5L8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 16L17.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Security: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L4 7V12C4 16.97 7.53 21.74 12 22C16.47 21.74 20 16.97 20 12V7L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1" fill="currentColor"/>
    </svg>
  ),
  Billing: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 3H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="4" y="9" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 13H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 17H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Integrations: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 4L5 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 4L19 8L15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 20L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="6" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Contact: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const faqCategories = [
  {
    id: 'general',
    name: 'General',
    icon: <Icons.Payment />,
    questions: [
      {
        q: 'What is LogiPay?',
        a: 'LogiPay is a payment platform that helps businesses accept payments online, build stores, and sell on social media. We simplify payments so you can focus on growing your business.'
      },
      {
        q: 'Who can use LogiPay?',
        a: 'Anyone! From individual entrepreneurs and small business owners to large supermarkets and online stores. If you need to accept payments, LogiPay is for you.'
      },
      {
        q: 'Is LogiPay available outside Nigeria?',
        a: 'Yes! We currently support Nigeria, Ghana, Kenya, and South Africa. We\'re expanding to more African countries in 2025.'
      }
    ]
  },
  {
    id: 'payments',
    name: 'Payments & Transactions',
    icon: <Icons.Payment />,
    questions: [
      {
        q: 'What payment methods do you support?',
        a: 'We support cards (Visa, Mastercard, Verve), bank transfers, USSD, mobile money (MTN MoMo, Airtel Money, M-Pesa), and QR code payments.'
      },
      {
        q: 'How long do settlements take?',
        a: 'Card payments settle within 24 hours. Bank transfers and mobile money settle in 1-2 business days. Weekend transactions process on the next business day.'
      },
      {
        q: 'What are your transaction fees?',
        a: 'We charge 1.5% + ₦100 per local transaction. No setup fees, no monthly fees. Volume discounts available for high-transaction merchants.'
      },
      {
        q: 'What happens if a payment fails?',
        a: 'Failed payments are automatically retried up to 3 times. If still unsuccessful, the customer is notified and no funds are deducted.'
      }
    ]
  },
  {
    id: 'store',
    name: 'Building a Store',
    icon: <Icons.Store />,
    questions: [
      {
        q: 'Do I need coding skills to create a store?',
        a: 'Not at all. Our store builder is drag-and-drop. You can launch a professional online store in under 10 minutes without writing a single line of code.'
      },
      {
        q: 'Can I use my own domain?',
        a: 'Absolutely. You can connect any custom domain to your LogiPay store. We provide free SSL certificates for all custom domains.'
      },
      {
        q: 'Can I sell physical and digital products?',
        a: 'Yes. We support both physical products (with shipping options) and digital products (automatic delivery via email).'
      },
      {
        q: 'Can I migrate my existing store to LogiPay?',
        a: 'Yes! We provide migration tools for Shopify, WooCommerce, and other platforms. Our support team can help you move your products and customer data.'
      }
    ]
  },
  {
    id: 'social',
    name: 'Social Media Selling',
    icon: <Icons.Social />,
    questions: [
      {
        q: 'How does WhatsApp payment work?',
        a: 'Generate a payment link in your LogiPay dashboard, share it on WhatsApp, and customers pay without leaving the chat. We handle the rest.'
      },
      {
        q: 'Can I sell on Instagram with LogiPay?',
        a: 'Yes. Sync your products to Instagram Shopping and customers can checkout directly on Instagram. We integrate seamlessly with Meta Commerce.'
      },
      {
        q: 'Do I need a Facebook Business account?',
        a: 'For Instagram and Facebook selling, yes. We guide you through the setup process. For WhatsApp, you only need a WhatsApp Business account.'
      },
      {
        q: 'Can I accept payments on TikTok?',
        a: 'Yes! We support TikTok product catalogs and checkout links. Your TikTok bio or videos can include direct payment links.'
      }
    ]
  },
  {
    id: 'security',
    name: 'Security & Compliance',
    icon: <Icons.Security />,
    questions: [
      {
        q: 'Is LogiPay PCI compliant?',
        a: 'Yes. We are PCI-DSS Level 1 certified — the highest security standard in payments. Your customers\' card data is always encrypted and never touches your servers.'
      },
      {
        q: 'Do you store my customers\' card details?',
        a: 'Only with explicit consent. We use tokenization to securely store card details for repeat purchases. You never handle raw card data.'
      },
      {
        q: 'What fraud protection do you offer?',
        a: 'We use machine learning to detect and block fraudulent transactions in real-time. Our system analyzes over 100 signals per transaction.'
      }
    ]
  },
  {
    id: 'billing',
    name: 'Billing & Account',
    icon: <Icons.Billing />,
    questions: [
      {
        q: 'How do I get paid?',
        a: 'Settlements are sent automatically to your registered bank account or mobile money wallet. You can track all payouts in your dashboard.'
      },
      {
        q: 'Can I withdraw in multiple currencies?',
        a: 'Currently, we support NGN, GHS, KES, and ZAR. Multi-currency wallets are coming in Q2 2025.'
      },
      {
        q: 'How do I close my account?',
        a: 'Contact our support team. After confirming no pending transactions, we\'ll close your account and pay out any remaining balance.'
      }
    ]
  },
  {
    id: 'integrations',
    name: 'Integrations & API',
    icon: <Icons.Integrations />,
    questions: [
      {
        q: 'Do you offer an API?',
        a: 'Yes. Our REST API lets you build custom payment flows. Check our developer documentation for endpoints, webhooks, and SDKs.'
      },
      {
        q: 'Does LogiPay integrate with Shopify/WooCommerce?',
        a: 'Yes. We have official plugins for Shopify, WooCommerce, Magento, and custom platforms via our API.'
      },
      {
        q: 'Can I test integrations without real money?',
        a: 'Yes. Our sandbox environment provides test cards, mock responses, and a full simulation of the payment flow.'
      }
    ]
  }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (categoryId, questionIndex) => {
    const key = `${categoryId}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Filter questions based on search
  const filteredCategories = faqCategories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q =>
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  const activeCategoryData = filteredCategories.find(c => c.id === activeCategory) || filteredCategories[0];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="section-padding bg-white dark:bg-navy-900 pt-20">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="orange" className="mb-4">FAQ</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-navy dark:text-white mb-6">
            We've got answers
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            Everything you need to know about LogiPay. Cant find what you're looking for? Contact our team.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white dark:bg-navy-900 border-b border-slate-100 dark:border-white/5">
        <div className="container-max py-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Icons.Search />
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-700 dark:text-slate-300 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Questions Section */}
      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          {searchQuery ? (
            // Search Results View
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-xl text-brand-navy dark:text-white mb-6">
                Search results ({filteredCategories.reduce((acc, cat) => acc + cat.questions.length, 0)})
              </h2>
              {filteredCategories.map(cat => (
                cat.questions.map((q, idx) => {
                  const key = `${cat.id}-${idx}`;
                  const isOpen = openQuestions[key];
                  return (
                    <div key={key} className="mb-4 border border-slate-100 dark:border-white/5 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleQuestion(cat.id, idx)}
                        className="w-full flex justify-between items-center p-5 text-left bg-slate-50 dark:bg-navy-800 hover:bg-slate-100 dark:hover:bg-navy-700 transition-colors"
                      >
                        <div>
                          <span className="text-xs text-brand-orange font-medium mb-1 block">{cat.name}</span>
                          <span className="font-display font-semibold text-brand-navy dark:text-white text-sm">{q.q}</span>
                        </div>
                        <div className="text-slate-400">
                          {isOpen ? <Icons.Minus /> : <Icons.Plus />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="p-5 bg-white dark:bg-navy-900 border-t border-slate-100 dark:border-white/5">
                              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{q.a}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })
              ))}
              {filteredCategories.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    No questions found matching "{searchQuery}". Try different keywords.
                  </p>
                </div>
              )}
            </div>
          ) : (
            // Normal Category + Questions View
            <div className="grid lg:grid-cols-4 gap-10">
              {/* Category Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 bg-slate-50 dark:bg-navy-800 rounded-2xl p-5 border border-slate-100 dark:border-white/5">
                  <p className="font-display font-semibold text-brand-navy dark:text-white text-sm mb-4">Topics</p>
                  <nav className="space-y-1">
                    {filteredCategories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-body transition-colors ${
                          activeCategory === cat.id
                            ? 'bg-brand-orange text-white'
                            : 'text-slate-500 dark:text-slate-400 hover:text-brand-navy dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-700'
                        }`}
                      >
                        <span className={activeCategory === cat.id ? 'text-white' : 'text-brand-orange'}>
                          {cat.icon}
                        </span>
                        <span>{cat.name}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Questions Content */}
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-brand-orange">
                      {activeCategoryData?.icon}
                    </div>
                    <h2 className="font-display font-bold text-2xl text-brand-navy dark:text-white">
                      {activeCategoryData?.name}
                    </h2>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {activeCategoryData?.questions.length} question{activeCategoryData?.questions.length !== 1 ? 's' : ''}
                  </p>
                </div>

                <div className="space-y-4">
                  {activeCategoryData?.questions.map((q, idx) => {
                    const key = `${activeCategoryData.id}-${idx}`;
                    const isOpen = openQuestions[key];
                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="border border-slate-100 dark:border-white/5 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(activeCategoryData.id, idx)}
                          className="w-full flex justify-between items-center p-5 text-left bg-slate-50 dark:bg-navy-800 hover:bg-slate-100 dark:hover:bg-navy-700 transition-colors"
                        >
                          <span className="font-display font-semibold text-brand-navy dark:text-white text-sm">
                            {q.q}
                          </span>
                          <div className="text-slate-400">
                            {isOpen ? <Icons.Minus /> : <Icons.Plus />}
                          </div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="p-5 bg-white dark:bg-navy-900 border-t border-slate-100 dark:border-white/5">
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                  {q.a}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="section-padding bg-slate-50 dark:bg-navy-800">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-2xl mb-6 text-brand-orange">
              <Icons.Contact />
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-3">
              Still have questions?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
              Our support team is ready to help you 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Contact support
              </button>
              <button className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 text-brand-navy dark:text-white font-semibold px-6 py-3 rounded-xl hover:border-brand-orange/50 transition-all">
                View documentation →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}