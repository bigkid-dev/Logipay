// ── Button ──────────────────────────────────────────────────────────────────
export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 font-body disabled:opacity-60 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-white text-brand-navy border-2 border-slate-200 hover:border-brand-orange hover:text-brand-orange',
    outline: 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60',
    ghost: 'text-slate-600 hover:text-brand-navy hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10',
    dark: 'bg-brand-navy text-white hover:bg-navy-800 shadow-sm hover:shadow-md',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}

// ── Card ────────────────────────────────────────────────────────────────────
export function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`bg-white dark:bg-navy-800 rounded-2xl shadow-card ${hover ? 'hover:shadow-card-hover hover:-translate-y-1' : ''} transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// ── Badge ───────────────────────────────────────────────────────────────────
export function Badge({ children, variant = 'orange', className = '' }) {
  const variants = {
    orange: 'bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-400',
    blue: 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400',
    green: 'bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400',
    slate: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
    navy: 'bg-navy-100 text-brand-navy dark:bg-navy-700 dark:text-slate-200',
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-body ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

// ── Accordion ───────────────────────────────────────────────────────────────
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden bg-white dark:bg-navy-800">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
          >
            <span className="font-display font-semibold text-brand-navy dark:text-white text-base pr-4">{item.q}</span>
            <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
              <ChevronDown size={18} className={`transition-colors ${open === i ? 'text-brand-orange' : 'text-slate-400'}`} />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-body border-t border-slate-100 dark:border-white/5 pt-4">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ── Toast ────────────────────────────────────────────────────────────────────
import { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

export function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl font-body text-sm font-medium ${
        type === 'success' ? 'bg-brand-navy text-white' : 'bg-red-600 text-white'
      }`}
    >
      {type === 'success' ? <CheckCircle size={18} className="text-green-400 shrink-0" /> : <AlertCircle size={18} className="text-red-200 shrink-0" />}
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100 transition-opacity">
        <X size={15} />
      </button>
    </motion.div>
  );
}
