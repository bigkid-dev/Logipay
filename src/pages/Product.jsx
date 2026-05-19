import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/index.jsx';

// SVG Icons
const Icons = {
  Api: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7L2 12L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 7L22 12L20 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 7L7 12L9 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 7L17 12L15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 3L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Store: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9L12 3L21 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 10V18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 20V14H15V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  WhatsApp: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.96 17.38 21.96 11.92C21.95 6.46 17.5 2 12.04 2Z" fill="#25D366" stroke="#25D366" strokeWidth="1.2"/>
      <path d="M12.04 3.5C16.67 3.5 20.46 7.29 20.46 11.92C20.46 16.55 16.67 20.33 12.04 20.33C10.55 20.33 9.09 19.95 7.79 19.21L7.09 18.82L4.48 19.53L5.21 16.95L4.8 16.23C4.09 14.96 3.72 13.51 3.72 12.03C3.71 7.4 7.5 3.5 12.04 3.5Z" fill="white"/>
      <path d="M12.04 7.5C10.46 7.5 9.16 8.8 9.16 10.38C9.16 11.96 10.46 13.26 12.04 13.26C13.62 13.26 14.92 11.96 14.92 10.38C14.92 8.8 13.62 7.5 12.04 7.5Z" fill="#25D366"/>
    </svg>
  ),
  Custom: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15 7L21 8L17 12L18 18L12 15L6 18L7 12L3 8L9 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 9L13 11L15 12L13 13L12 15L11 13L9 12L11 11L12 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  SocialNetwork: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 7L7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 7L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 15L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Logistics: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="14" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="8" cy="17" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="16" cy="17" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 4H16L20 9V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 9H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Restaurant: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2C18 2 17 5 17 8C17 10.5 18 12 20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2C12 2 13 5 13 8C13 10.5 12 12 10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 2V10C6 12 8 14 12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 14V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 18H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Discovery: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 4L12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 22L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 12L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Play: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
    </svg>
  ),
  Box: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16V8C20.9996 7.6493 20.9071 7.30481 20.7315 7.00122C20.556 6.69764 20.3037 6.44536 20 6.27L13 2.27C12.696 2.0945 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.0945 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69764 3.26846 7.00122C3.09294 7.30481 3.00036 7.6493 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3024 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3024 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22.08V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Chart: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  Domain: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2C14.5 4.5 15.5 8 15.5 12C15.5 16 14.5 19.5 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2C9.5 4.5 8.5 8 8.5 12C8.5 16 9.5 19.5 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Heart: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Comment: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Share: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 6L12 2L8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 2V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  User: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M20 21C20 17.1 16.4 14 12 14C7.6 14 4 17.1 4 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState('api');

  return (
    <div className="page-wrapper">
      <section className="section-padding bg-white dark:bg-navy-900 pt-20">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="orange" className="mb-4">The All-in-One Platform</Badge>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-navy dark:text-white mb-6">
                Payments. Stores. <span className="text-brand-orange">Social Discovery.</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8">
                LogiPay is the first platform that combines payments, store building, WhatsApp commerce,
                logistics, and social networking — all in one place. No developers needed.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                  Start building →
                </button>
                <button className="border border-slate-200 dark:border-white/10 hover:border-brand-orange/50 text-brand-navy dark:text-white font-semibold px-6 py-3 rounded-xl transition-all flex items-center gap-2">
                  Watch demo <Icons.Play />
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-orange/10 to-transparent rounded-2xl p-8 text-center">
              <div className="text-brand-orange mb-4 flex justify-center">
                <Icons.Api />
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm font-mono bg-slate-100 dark:bg-navy-800 p-4 rounded-xl">
                POST /v1/payments/initialize<br />
                {"{ \"amount\": 5000, \"currency\": \"NGN\" }"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-navy-800">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="orange" className="mb-4">One Platform</Badge>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-4">
              For every type of business
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Whether you're a developer, a store owner, or a supermarket chain — LogiPay adapts to you.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Online Stores', desc: 'Launch in minutes. No code needed.', icon: <Icons.Store /> },
              { title: 'Supermarkets', desc: 'POS + online + delivery integrated.', icon: <Icons.Custom /> },
              { title: 'Restaurants', desc: 'Order ahead. Pay at table. Delivery.', icon: <Icons.Restaurant /> },
              { title: 'Logistics', desc: 'Real-time tracking. Instant payouts.', icon: <Icons.Logistics /> },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-navy-900 rounded-xl p-6 text-center border border-slate-100 dark:border-white/5">
                <div className="text-brand-orange flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-display font-semibold text-brand-navy dark:text-white text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="orange" className="mb-4">Our Products</Badge>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-4">
              Everything you need to sell
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-slate-100 dark:border-white/10 pb-4">
            {[
              { id: 'api', label: 'API-First Platform', icon: <Icons.Api /> },
              { id: 'stores', label: 'No-Code Stores', icon: <Icons.Store /> },
              { id: 'whatsapp', label: 'WhatsApp Commerce', icon: <Icons.WhatsApp /> },
              { id: 'custom', label: 'Custom Solutions', icon: <Icons.Custom /> },
              { id: 'social', label: 'Social Discovery', icon: <Icons.SocialNetwork /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-brand-orange text-white'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-navy-800'
                }`}
              >
                <span className={activeTab === tab.id ? 'text-white' : 'text-brand-orange'}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === 'api' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-8">
                  <h3 className="font-display font-bold text-xl text-brand-navy dark:text-white mb-4">Integrate once. Sell everywhere.</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Direct API access for developers. Build custom checkout flows, manage subscriptions, handle refunds, and more — with one integration.</p>
                  <div className="bg-slate-900 rounded-xl p-4 mb-6">
                    <code className="text-slate-300 text-xs font-mono">
                      npm install logipay-sdk<br />
                      const logipay = new LogiPay('sk_live_xxxx');<br />
                      await logipay.payments.create({" "}{"amount: 5000, currency: 'NGN'"});
                    </code>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"><Icons.Check className="text-brand-orange" /> REST API & Webhooks</div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"><Icons.Check className="text-brand-orange" /> iOS, Android, Flutter SDKs</div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"><Icons.Check className="text-brand-orange" /> Shopify, WooCommerce plugins</div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"><Icons.Check className="text-brand-orange" /> Logistics API integration</div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'stores' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-8">
                  <h3 className="font-display font-bold text-xl text-brand-navy dark:text-white mb-4">No developers? No problem.</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Drag, drop, launch. Create a professional online store in under 10 minutes. Custom domains, inventory management, and built-in payments.</p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white dark:bg-navy-900 p-4 rounded-xl text-center">
                      <div className="flex justify-center mb-2 text-brand-orange"><Icons.Box /></div>
                      <p className="text-xs font-semibold">Product Management</p>
                    </div>
                    <div className="bg-white dark:bg-navy-900 p-4 rounded-xl text-center">
                      <div className="flex justify-center mb-2 text-brand-orange"><Icons.Chart /></div>
                      <p className="text-xs font-semibold">Analytics Dashboard</p>
                    </div>
                    <div className="bg-white dark:bg-navy-900 p-4 rounded-xl text-center">
                      <div className="flex justify-center mb-2 text-brand-orange"><Icons.Domain /></div>
                      <p className="text-xs font-semibold">Custom Domain</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs text-center">No coding required. Free SSL. Mobile-optimized.</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'whatsapp' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icons.WhatsApp />
                    <h3 className="font-display font-bold text-xl text-brand-navy dark:text-white">WhatsApp Payments + Logistics</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Sell directly on WhatsApp. Customers pay without leaving the chat. Plus, track deliveries in real-time — all inside WhatsApp.</p>
                  <div className="bg-white dark:bg-navy-900 rounded-xl p-5 mb-6">
                    <p className="text-sm font-mono text-brand-orange mb-2">Customer experience:</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">1. You send a payment link → 2. Customer taps → 3. Pays with card/transfer → 4. Gets delivery tracking link → 5. Done.</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="orange">Payment links</Badge>
                    <Badge variant="orange">QR codes</Badge>
                    <Badge variant="orange">Real-time tracking</Badge>
                    <Badge variant="orange">Delivery notifications</Badge>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'custom' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-8">
                  <h3 className="font-display font-bold text-xl text-brand-navy dark:text-white mb-4">Built for enterprises. Built for you.</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">We don't just integrate with stores — we co-build solutions. Custom POS systems, inventory sync, loyalty programs, and logistics integrations.</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-l-2 border-brand-orange pl-4">
                      <p className="font-semibold text-sm text-brand-navy dark:text-white">Supermarkets</p>
                      <p className="text-xs text-slate-500">Scan & pay. Online ordering. Delivery management.</p>
                    </div>
                    <div className="border-l-2 border-brand-orange pl-4">
                      <p className="font-semibold text-sm text-brand-navy dark:text-white">Restaurants</p>
                      <p className="text-xs text-slate-500">QR menus. Pay at table. Delivery integration.</p>
                    </div>
                    <div className="border-l-2 border-brand-orange pl-4">
                      <p className="font-semibold text-sm text-brand-navy dark:text-white">Logistics</p>
                      <p className="text-xs text-slate-500">Real-time tracking. Automated payouts. Route optimization.</p>
                    </div>
                    <div className="border-l-2 border-brand-orange pl-4">
                      <p className="font-semibold text-sm text-brand-navy dark:text-white">Retail chains</p>
                      <p className="text-xs text-slate-500">Multi-store management. Centralized inventory. Unified payments.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'social' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icons.SocialNetwork />
                    <h3 className="font-display font-bold text-xl text-brand-navy dark:text-white">Social Discovery Network</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">A social network built for discovering products, businesses, and people. Powered by algorithms that understand friends-of-friends, mutual connections, and shopping behavior.</p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange"><Icons.Discovery /></div>
                      <div><p className="font-semibold text-sm">Mutual Friends Algorithm</p><p className="text-xs text-slate-500">Discover products your friends trust. See what people in your network are buying.</p></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange"><Icons.SocialNetwork /></div>
                      <div><p className="font-semibold text-sm">Network-Based Recommendations</p><p className="text-xs text-slate-500">Products and stores recommended based on your social graph, not just algorithms.</p></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange"><Icons.Store /></div>
                      <div><p className="font-semibold text-sm">Business Discovery</p><p className="text-xs text-slate-500">Customers find you through friends, reviews, and shared purchases.</p></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-navy-800">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="orange" className="mb-4">Flexible by Design</Badge>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-4">
              Two ways to build. One platform.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-navy-900 rounded-2xl p-8 border border-slate-100 dark:border-white/5">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-4"><Icons.Store /></div>
              <h3 className="font-display font-bold text-lg text-brand-navy dark:text-white mb-2">No-Code Store Builder</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Perfect for business owners, local stores, and anyone who wants to sell online — fast.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600"><Icons.Check className="text-brand-orange" /> Drag-and-drop store builder</li>
                <li className="flex items-center gap-2 text-sm text-slate-600"><Icons.Check className="text-brand-orange" /> Built-in WhatsApp payments</li>
                <li className="flex items-center gap-2 text-sm text-slate-600"><Icons.Check className="text-brand-orange" /> Automatic social media sync</li>
                <li className="flex items-center gap-2 text-sm text-slate-600"><Icons.Check className="text-brand-orange" /> Zero coding required</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-navy-900 rounded-2xl p-8 border border-slate-100 dark:border-white/5">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-4"><Icons.Api /></div>
              <h3 className="font-display font-bold text-lg text-brand-navy dark:text-white mb-2">API-First Platform</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">For developers, platforms, and enterprises building custom solutions.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600"><Icons.Check className="text-brand-orange" /> Full REST API & webhooks</li>
                <li className="flex items-center gap-2 text-sm text-slate-600"><Icons.Check className="text-brand-orange" /> Logistics & delivery APIs</li>
                <li className="flex items-center gap-2 text-sm text-slate-600"><Icons.Check className="text-brand-orange" /> White-label checkout</li>
                <li className="flex items-center gap-2 text-sm text-slate-600"><Icons.Check className="text-brand-orange" /> SOC2 & PCI compliant</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="orange" className="mb-4">WhatsApp Ecosystem</Badge>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-4">
                Payments + Logistics. All inside WhatsApp.
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                Your customers never leave the chat. Send payment links, track deliveries, and manage orders — all from WhatsApp.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm"><Icons.Check className="text-brand-orange" /> One-tap payment links</li>
                <li className="flex items-center gap-2 text-sm"><Icons.Check className="text-brand-orange" /> Real-time delivery tracking</li>
                <li className="flex items-center gap-2 text-sm"><Icons.Check className="text-brand-orange" /> Automated order confirmations</li>
                <li className="flex items-center gap-2 text-sm"><Icons.Check className="text-brand-orange" /> Logistics API for couriers</li>
              </ul>
              <button className="text-brand-orange font-semibold text-sm flex items-center gap-1">Learn more <Icons.ArrowRight /></button>
            </div>
            <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 text-center">
              <div className="bg-white dark:bg-navy-900 rounded-xl p-4 max-w-xs mx-auto">
                <div className="flex items-center gap-2 mb-3">
                  <Icons.WhatsApp />
                  <span className="text-xs font-semibold">Store Name</span>
                </div>
                <p className="text-sm mb-2">Order confirmation</p>
                <p className="text-xs text-slate-500 mb-3">Pay here: logipay.africa/p/xxx</p>
                <div className="h-1 bg-slate-100 rounded-full overflow-hidden mb-2"><div className="w-2/3 h-full bg-brand-orange rounded-full"></div></div>
                <p className="text-xs text-slate-400">Delivery: Arriving in 15 mins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-brand-orange/5 to-transparent">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white dark:bg-navy-900 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                  <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange"><Icons.User /></div>
                  <div><p className="text-xs font-semibold">Sarah K.</p><p className="text-xs text-slate-400">Friend of yours • 2 min ago</p></div>
                </div>
                <p className="text-sm mb-3">Just bought this amazing bag from LogiStore — absolutely love it</p>
                <div className="bg-slate-100 dark:bg-navy-800 rounded-xl p-3 flex gap-3">
                  <div className="w-16 h-16 bg-slate-200 dark:bg-navy-700 rounded-lg flex items-center justify-center text-2xl"><Icons.Box /></div>
                  <div><p className="text-xs font-semibold">Handmade Leather Bag</p><p className="text-xs text-brand-orange">₦25,000</p></div>
                </div>
                <div className="flex gap-3 mt-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Icons.Heart /> 24</span>
                  <span className="flex items-center gap-1"><Icons.Comment /> 5</span>
                  <span className="flex items-center gap-1"><Icons.Share /> 3</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="orange" className="mb-4">Social Discovery</Badge>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-4">
                Discover products through people you trust
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                A social network built for commerce. See what your friends are buying, discover stores through mutual connections, and get recommendations powered by your social graph.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm"><Icons.Check className="text-brand-orange" /> Friends-of-friends discovery</li>
                <li className="flex items-center gap-2 text-sm"><Icons.Check className="text-brand-orange" /> Mutual connections algorithm</li>
                <li className="flex items-center gap-2 text-sm"><Icons.Check className="text-brand-orange" /> Social proof for products</li>
                <li className="flex items-center gap-2 text-sm"><Icons.Check className="text-brand-orange" /> Personalized store recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-navy dark:bg-navy-950">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
              Ready to take your business online?
            </h2>
            <p className="text-slate-300 text-sm mb-8">
              Join hundreds of businesses already using LogiPay to accept payments, build stores, and sell on social media.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Start building →
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Talk to sales
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