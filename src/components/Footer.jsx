import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Careers', to: '/careers' },
    { label: 'Blog', to: '/blog' },
  ],
  Support: [
    { label: 'Help Center', to: '/support' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Safety Center', to: '/support' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Cookie Policy', to: '/privacy' },
    { label: 'Refund Policy', to: '/terms' },
  ],
};

const socials = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy dark:bg-navy-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center">
                <img src='icon.png' alt="Logipay" className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">Logipay</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs font-body">
              Nigeria's most trusted marketplace for skilled tradespeople and artisans. Connecting quality craftsmanship with people who need it, across Nigeria and South Africa.
            </p>
            {/* Contact info */}
            <div className="space-y-2.5 text-sm text-slate-400 font-body">
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-brand-orange shrink-0" />
                <span>Abeokuta, Ogun State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-brand-orange shrink-0" />
                <span>[PHONE_NUMBER]</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-brand-orange shrink-0" />
                <span>[EMAIL_ADDRESS]</span>
              </div>
            </div>
            {/* Socials */}
            {/* <div className="flex items-center gap-3 mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-orange transition-colors duration-200 flex items-center justify-center"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-150 font-body"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs font-body">
            © {new Date().getFullYear()} Logipay Technologies Ltd. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
