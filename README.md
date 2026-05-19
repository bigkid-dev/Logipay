# Logipay — Africa's Trusted Artisan Marketplace

A premium React.js landing website for **Logipay**, a marketplace connecting clients with skilled tradespeople, professionals, and artisans across Nigeria and South Africa.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 9+

### Installation

```bash
# 1. Navigate into the project folder
cd Logipay

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will open at **http://localhost:3000**

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `/dist` folder. Preview the production build with:

```bash
npm run preview
```

---

## 📁 Project Structure

```
Logipay/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky responsive navbar with dark mode
│   │   ├── Footer.jsx          # Multi-column footer
│   │   └── ui/
│   │       └── index.jsx       # Button, Card, Badge, Accordion, Toast
│   ├── data/
│   │   └── content.js          # All site content (categories, FAQs, blog posts, etc.)
│   ├── pages/
│   │   ├── Home.jsx            # Main landing page
│   │   ├── About.jsx           # Company story, values, team
│   │   ├── HowItWorks.jsx      # Step-by-step guides for clients & artisans
│   │   ├── Careers.jsx         # Job listings & culture
│   │   ├── Blog.jsx            # Blog with featured post + grid
│   │   ├── FAQ.jsx             # Tabbed FAQ with accordion
│   │   ├── Support.jsx         # Help center with search
│   │   ├── Privacy.jsx         # Full privacy policy with sidebar nav
│   │   ├── Terms.jsx           # Full terms of service with sidebar nav
│   │   └── Contact.jsx         # Contact form with map & social links
│   ├── App.jsx                 # Router, dark mode context, page transitions
│   ├── index.css               # Global styles + Tailwind layers
│   └── main.jsx                # React entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🎨 Tech Stack

| Package | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 5 | Build tool |
| TailwindCSS | 3 | Styling |
| React Router DOM | 6 | Client-side routing |
| Framer Motion | 11 | Page transitions & animations |
| Lucide React | 0.383 | Icon library |

---

## 🌟 Features

- **10 fully-content pages** — Home, About, How It Works, Careers, Blog, FAQ, Support, Privacy, Terms, Contact
- **Dark mode** — persisted via localStorage, toggled from the navbar
- **Smooth page transitions** — Framer Motion `AnimatePresence`
- **Scroll-to-top** — automatic on route change
- **Responsive** — mobile-first, works on all screen sizes
- **Toast notifications** — on contact form submit
- **Loading states** — on all forms
- **Accordion FAQ** — animated, categorised
- **Escrow-aware content** — explains payments, trust, and safety throughout
- **African-focused copy** — Lagos, Abuja, Johannesburg, ₦ and R currencies

---

## 🎨 Design System

**Fonts (Google Fonts)**
- Headings: `Outfit` — bold, geometric, modern
- Body: `Plus Jakarta Sans` — clean, readable

**Colors**
- Navy (primary): `#0A1628`
- Orange (accent): `#F97316`
- Sky (highlight): `#38BDF8`
- Background: `#F8FAFC`

---

## 🗺️ Pages & Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/how-it-works` | How It Works |
| `/careers` | Careers |
| `/blog` | Blog |
| `/faq` | FAQ |
| `/support` | Support / Help Center |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/contact` | Contact |

---

## 🔧 Customisation

- **Content**: Edit `/src/data/content.js` to update all text, testimonials, blog posts, FAQs, job listings, and categories without touching any page components.
- **Colors**: Edit `tailwind.config.js` → `theme.extend.colors.brand` to change the primary palette.
- **Fonts**: Change the Google Fonts import in `index.html` and update `tailwind.config.js` → `theme.extend.fontFamily`.

---

## 📦 Deployment

Deploy to **Vercel**, **Netlify**, or any static host:

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod --dir=dist
```

---

*Built with ❤️ for Africa's artisan economy.*
