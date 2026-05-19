import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/index.jsx';

// SVG Icons (reusing from previous pages)
const Icons = {
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
  Api: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7L2 12L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 7L22 12L20 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 7L7 12L9 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 7L17 12L15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 3L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Store: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9L12 3L21 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 10V18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 20V14H15V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  WhatsApp: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.96 17.38 21.96 11.92C21.95 6.46 17.5 2 12.04 2Z" fill="#25D366" stroke="#25D366" strokeWidth="1.2"/>
      <path d="M12.04 3.5C16.67 3.5 20.46 7.29 20.46 11.92C20.46 16.55 16.67 20.33 12.04 20.33C10.55 20.33 9.09 19.95 7.79 19.21L7.09 18.82L4.48 19.53L5.21 16.95L4.8 16.23C4.09 14.96 3.72 13.51 3.72 12.03C3.71 7.4 7.5 3.5 12.04 3.5Z" fill="white"/>
      <path d="M12.04 7.5C10.46 7.5 9.16 8.8 9.16 10.38C9.16 11.96 10.46 13.26 12.04 13.26C13.62 13.26 14.92 11.96 14.92 10.38C14.92 8.8 13.62 7.5 12.04 7.5Z" fill="#25D366"/>
    </svg>
  ),
  Code: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 17L3 12L8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Copy: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 4V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Sandbox: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 16H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Docs: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 7H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 11H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Support: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="8" r="1" fill="currentColor"/>
    </svg>
  ),
  Clock: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Rocket: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 8L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 15V23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

export default function GetStartedPage() {
  const [copied, setCopied] = useState(false);
  const [activePath, setActivePath] = useState('developer');

  const copyApiKey = () => {
    navigator.clipboard.writeText('sk_live_xxxx_xxxxxxxxxxxx');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="section-padding bg-white dark:bg-navy-900 pt-20">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="orange" className="mb-4">Get Started</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-navy dark:text-white mb-6">
              Start accepting payments in minutes
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
              Whether you're a developer integrating our API or a business owner building a store — 
              LogiPay has you covered. Choose your path below.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Create free account →
              </button>
              <button className="border border-slate-200 dark:border-white/10 hover:border-brand-orange/50 text-brand-navy dark:text-white font-semibold px-6 py-3 rounded-xl transition-all">
                View live demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Path Toggle */}
      <section className="bg-white dark:bg-navy-900 border-b border-slate-100 dark:border-white/5">
        <div className="container-max py-6">
          <div className="flex justify-center">
            <div className="bg-slate-100 dark:bg-navy-800 rounded-xl p-1 flex gap-1">
              <button
                onClick={() => setActivePath('developer')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activePath === 'developer'
                    ? 'bg-brand-orange text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-brand-navy'
                }`}
              >
                <Icons.Api />
                Developer API
              </button>
              <button
                onClick={() => setActivePath('business')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activePath === 'business'
                    ? 'bg-brand-orange text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-brand-navy'
                }`}
              >
                <Icons.Store />
                No-Code Store
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Path Content */}
      {activePath === 'developer' && (
        <section className="section-padding bg-white dark:bg-navy-900">
          <div className="container-max">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Steps */}
              <div className="lg:col-span-2 space-y-8">
                <h2 className="font-display font-bold text-2xl text-brand-navy dark:text-white">Quick setup guide</h2>
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">1</div>
                  <div>
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white mb-2">Create your account</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Sign up for free at dashboard.logipay.africa. No credit card required.</p>
                    <button className="text-brand-orange text-sm font-medium flex items-center gap-1">Create account <Icons.ArrowRight /></button>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">2</div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white mb-2">Get your API keys</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Navigate to Developers → API Keys in your dashboard.</p>
                    <div className="bg-slate-50 dark:bg-navy-800 rounded-xl p-4 flex items-center justify-between">
                      <code className="text-xs font-mono text-slate-600 dark:text-slate-300">sk_live_xxxx_xxxxxxxxxxxx</code>
                      <button onClick={copyApiKey} className="text-slate-400 hover:text-brand-orange transition-colors">
                        <Icons.Copy />
                      </button>
                    </div>
                    {copied && <p className="text-xs text-brand-orange mt-2">Copied to clipboard!</p>}
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">3</div>
                  <div>
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white mb-2">Install SDK</h3>
                    <div className="bg-slate-900 rounded-xl p-4 mb-3">
                      <code className="text-slate-300 text-xs font-mono">
                        npm install logipay-sdk<br />
                        # or<br />
                        yarn add logipay-sdk
                      </code>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">4</div>
                  <div>
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white mb-2">Initialize & make your first payment</h3>
                    <div className="bg-slate-900 rounded-xl p-4">
                      
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">5</div>
                  <div>
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white mb-2">Set up webhooks</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Register a webhook URL to receive payment notifications.</p>
                    <div className="bg-slate-50 dark:bg-navy-800 rounded-xl p-4 mt-2">
                      <code className="text-xs font-mono text-slate-600 dark:text-slate-300">
                        POST /v1/webhooks {"{ \"url\": \"https://yourdomain.com/webhook\", \"events\": [\"payment.success\"] }"}
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar - Sandbox */}
              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 border border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-brand-orange"><Icons.Sandbox /></div>
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white">Sandbox mode</h3>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mb-4">Test your integration without real money.</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold mb-1">Test cards</p>
                      <p className="text-xs text-slate-400">4242 4242 4242 4242 → Success</p>
                      <p className="text-xs text-slate-400">4000 0000 0000 0002 → Failed</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-1">Sandbox base URL</p>
                      <code className="text-xs text-slate-400">https://sandbox-api.logipay.africa/v1</code>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 border border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-brand-orange"><Icons.Docs /></div>
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white">Developer resources</h3>
                  </div>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-orange flex items-center justify-between">API Reference <Icons.ArrowRight className="w-4" /></a></li>
                    <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-orange flex items-center justify-between">SDK Documentation <Icons.ArrowRight className="w-4" /></a></li>
                    <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-orange flex items-center justify-between">Webhook Guide <Icons.ArrowRight className="w-4" /></a></li>
                    <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-orange flex items-center justify-between">Postman Collection <Icons.ArrowRight className="w-4" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Business Path Content */}
      {activePath === 'business' && (
        <section className="section-padding bg-white dark:bg-navy-900">
          <div className="container-max">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Steps */}
              <div className="lg:col-span-2 space-y-8">
                <h2 className="font-display font-bold text-2xl text-brand-navy dark:text-white">Launch your store in minutes</h2>
                
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">1</div>
                  <div>
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white mb-2">Create your free account</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Sign up at dashboard.logipay.africa. No credit card needed.</p>
                    <button className="text-brand-orange text-sm font-medium flex items-center gap-1">Create account <Icons.ArrowRight /></button>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">2</div>
                  <div>
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white mb-2">Set up your store</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Click "Create Store" — choose a template, add your logo, and customize colors.</p>
                    <div className="bg-slate-50 dark:bg-navy-800 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-200 dark:bg-navy-700 rounded-lg"></div>
                        <div><p className="text-xs font-semibold">Your Store Name</p><p className="text-xs text-slate-400">yourstore.logipay.africa</p></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">3</div>
                  <div>
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white mb-2">Add your products</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Upload product images, set prices, and manage inventory — all from one dashboard.</p>
                    <div className="flex gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Icons.Check className="text-brand-orange" /> Product variants</span>
                      <span className="flex items-center gap-1"><Icons.Check className="text-brand-orange" /> Bulk upload</span>
                      <span className="flex items-center gap-1"><Icons.Check className="text-brand-orange" /> Categories</span>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">4</div>
                  <div>
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white mb-2">Connect payment methods</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Enable cards, bank transfers, USSD, and mobile money — all work out of the box.</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="orange">Cards</Badge>
                      <Badge variant="orange">Bank transfer</Badge>
                      <Badge variant="orange">USSD</Badge>
                      <Badge variant="orange">Mobile money</Badge>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">5</div>
                  <div>
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white mb-2">Activate WhatsApp payments</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Connect your WhatsApp Business account and start sending payment links instantly.</p>
                    <button className="bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-2">
                      <Icons.WhatsApp /> Connect WhatsApp
                    </button>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">6</div>
                  <div>
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white mb-2">Go live</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Share your store link, embed checkout on your website, or start sharing WhatsApp payment links.</p>
                    <div className="bg-brand-orange/5 rounded-xl p-4 mt-3">
                      <p className="text-xs text-brand-navy dark:text-white font-mono">🔗 yourstore.logipay.africa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar - Business Resources */}
              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 border border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-brand-orange"><Icons.WhatsApp /></div>
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white">WhatsApp setup guide</h3>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mb-4">Get your WhatsApp Business account ready in 3 steps.</p>
                  <ol className="space-y-3 text-xs text-slate-600 dark:text-slate-400 list-decimal list-inside">
                    <li>Download WhatsApp Business app</li>
                    <li>Verify your business phone number</li>
                    <li>Connect to LogiPay in dashboard</li>
                  </ol>
                  <button className="mt-4 text-brand-orange text-xs font-medium flex items-center gap-1">Learn more <Icons.ArrowRight /></button>
                </div>

                <div className="bg-slate-50 dark:bg-navy-800 rounded-2xl p-6 border border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-brand-orange"><Icons.Docs /></div>
                    <h3 className="font-display font-semibold text-brand-navy dark:text-white">Business resources</h3>
                  </div>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-orange flex items-center justify-between">Store setup video tutorial <Icons.ArrowRight className="w-4" /></a></li>
                    <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-orange flex items-center justify-between">WhatsApp selling guide <Icons.ArrowRight className="w-4" /></a></li>
                    <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-orange flex items-center justify-between">Inventory management tips <Icons.ArrowRight className="w-4" /></a></li>
                  </ul>
                </div>

                <div className="bg-brand-orange/5 rounded-2xl p-6 border border-brand-orange/20 text-center">
                  <div className="text-brand-orange flex justify-center mb-3"><Icons.Support /></div>
                  <h3 className="font-display font-semibold text-brand-navy dark:text-white text-sm mb-2">Need help?</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mb-4">Our team is ready to assist you.</p>
                  <button className="text-brand-orange text-xs font-medium">Contact support →</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WhatsApp Activation Section (shown for both paths) */}
      <section className="section-padding bg-slate-50 dark:bg-navy-800">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="orange" className="mb-4">WhatsApp Commerce</Badge>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy dark:text-white mb-4">
                Activate WhatsApp payments today
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                No coding required. Generate payment links, share them on WhatsApp, and get paid instantly.
                Your customers never leave the chat.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm"><Icons.Check className="text-brand-orange" /> One-click payment links</li>
                <li className="flex items-center gap-2 text-sm"><Icons.Check className="text-brand-orange" /> Delivery tracking integrated</li>
                <li className="flex items-center gap-2 text-sm"><Icons.Check className="text-brand-orange" /> Automated order confirmations</li>
              </ul>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all flex items-center gap-2">
                <Icons.WhatsApp /> Connect WhatsApp now
              </button>
            </div>
            <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 text-center border border-slate-100 dark:border-white/5">
              <div className="max-w-xs mx-auto">
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-100">
                  <Icons.WhatsApp />
                  <span className="text-xs font-semibold">Your Store</span>
                </div>
                <p className="text-sm mb-2">🛍️ Your order #1234 is ready for payment</p>
                <div className="bg-slate-100 dark:bg-navy-800 rounded-lg p-2 mb-3">
                  <code className="text-xs text-brand-orange">logipay.africa/pay/abc123</code>
                </div>
                <p className="text-xs text-slate-400">Customer pays → You get notified → Done</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-2xl text-brand-navy dark:text-white mb-4">
              Stuck? We're here to help
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
              Get support from our team or join thousands of merchants in our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Contact support
              </button>
              <button className="border border-slate-200 dark:border-white/10 hover:border-brand-orange/50 text-brand-navy dark:text-white font-semibold px-6 py-3 rounded-xl transition-all">
                Join Slack community
              </button>
            </div>
            <div className="flex justify-center gap-8 mt-8 text-xs text-slate-400">
              <span className="flex items-center gap-1"><Icons.Docs /> API docs</span>
              <span className="flex items-center gap-1"><Icons.Clock /> 24/7 support</span>
              <span className="flex items-center gap-1"><Icons.Rocket /> Live onboarding</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}