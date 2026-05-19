import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../App";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";

const navLinks = [
  { label: "Docs", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Careers", to: "/careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  const navBase = `sticky top-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white/95 dark:bg-navy-900/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-white/5"
      : "bg-transparent"
  }`;

  return (
    <header className={navBase}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0"
            onClick={() => setOpen(false)}
          >
            {/* <img src="/artisan_logo.svg" alt="logo" height={70} width={70} />   */}

            <span className="font-display font-bold text-xl text-brand-navy dark:text-white tracking-tight">
              Logipay
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 font-body ${
                    isActive
                      ? "text-brand-orange bg-orange-50 dark:bg-orange-950/30"
                      : "text-slate-600 dark:text-slate-300 hover:text-brand-navy dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + toggles */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <Link
              to="/get-started"
              className="px-4 py-2 text-sm font-semibold text-brand-navy dark:text-white hover:text-brand-orange transition-colors font-body"
            >
              Get Started
            </Link>
            <Link
              to="/product"
              className="px-5 py-2.5 bg-brand-orange text-white text-sm font-semibold rounded-xl hover:bg-brand-orange-dark transition-all duration-150 shadow-sm hover:shadow-md font-body"
            >
              Products
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white dark:bg-navy-900 border-t border-slate-100 dark:border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-semibold transition-colors font-body ${
                      isActive
                        ? "text-brand-orange bg-orange-50 dark:bg-orange-950/30"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <div className="pt-4 flex flex-col gap-3 border-t border-slate-100 dark:border-white/10 mt-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-secondary text-center justify-center text-sm"
                >
                  Get Started
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary text-center justify-center text-sm"
                >
                  Products
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
