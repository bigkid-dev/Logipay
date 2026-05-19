import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook, Send, CheckCircle, AlertCircle, X } from 'lucide-react';
import { Card, Badge } from '../components/ui/index.jsx';

const contactInfo = [
  { icon: MapPin, label: 'Our Office', value: 'Onikoko, 16 Olujide Somolu street\nAbeokuta Ogun State, Nigeria', color: 'bg-orange-50 text-brand-orange' },
  { icon: Phone, label: 'Phone', value: '+234 800 Logipay\n+234 800 247 2389', color: 'bg-blue-50 text-blue-600' },
  { icon: Mail, label: 'Email', value: 'hello@Logipay.com\nsupport@Logipay.com', color: 'bg-green-50 text-green-600' },
];

const subjects = ['General Enquiry', 'Partnership', 'Technical Support', 'Press & Media', 'Artisan Application', 'Report an Issue', 'Other'];

function Toast({ message, type, onClose }) {
  return (
    <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 60 }}
      className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl text-sm font-body font-medium ${type === 'success' ? 'bg-brand-navy text-white' : 'bg-red-600 text-white'}`}>
      {type === 'success' ? <CheckCircle size={18} className="text-green-400" /> : <AlertCircle size={18} />}
      {message}
      <button onClick={onClose}><X size={15} className="ml-1 opacity-70 hover:opacity-100" /></button>
    </motion.div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setForm({ name: '', email: '', subject: '', message: '' });
    setToast({ type: 'success', message: 'Message sent! We\'ll get back to you within 2 hours.' });
    setTimeout(() => setToast(null), 5000);
  };

  return (
    <div className="page-wrapper">


      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          <div className="grid lg:grid-cols-1 gap-12">
       

            {/* Right — Form */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
              <Card className="p-8 md:p-10" hover={false}>
                <h2 className="font-display font-bold text-brand-navy dark:text-white text-2xl mb-2">Send Us a Message</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-body mb-8">We respond to every message within 2 business hours.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy dark:text-slate-200 mb-2 font-body">Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Amara Okonkwo"
                        className="input-base dark:bg-navy-800 dark:border-white/10 dark:text-white dark:placeholder-slate-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy dark:text-slate-200 mb-2 font-body">Email Address *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com"
                        className="input-base dark:bg-navy-800 dark:border-white/10 dark:text-white dark:placeholder-slate-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy dark:text-slate-200 mb-2 font-body">Subject *</label>
                    <select name="subject" value={form.subject} onChange={handleChange} required
                      className="input-base dark:bg-navy-800 dark:border-white/10 dark:text-white">
                      <option value="">Select a subject</option>
                      {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy dark:text-slate-200 mb-2 font-body">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                      placeholder="Tell us more about how we can help you..."
                      className="input-base resize-none dark:bg-navy-800 dark:border-white/10 dark:text-white dark:placeholder-slate-500" />
                  </div>
                  <button type="submit" disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-base">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <><Send size={18} /> Send Message</>
                    )}
                  </button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toast */}
      <AnimatePresence>
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      </AnimatePresence>
    </div>
  );
}
