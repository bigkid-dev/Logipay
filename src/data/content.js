// ============================================================
// CHRAFTY — ALL CONTENT DATA
// ============================================================

export const categories = [
  { id: 1, name: 'Plumbing', icon: 'Droplets', color: 'bg-blue-50 text-blue-600', count: '1,240+ artisans' },
  { id: 2, name: 'Electrical', icon: 'Zap', color: 'bg-yellow-50 text-yellow-600', count: '980+ artisans' },
  { id: 3, name: 'Carpentry', icon: 'Hammer', color: 'bg-amber-50 text-amber-700', count: '760+ artisans' },
  { id: 4, name: 'Painting', icon: 'PaintBucket', color: 'bg-pink-50 text-pink-600', count: '640+ artisans' },
  { id: 5, name: 'Welding', icon: 'Flame', color: 'bg-orange-50 text-orange-600', count: '430+ artisans' },
  { id: 6, name: 'Tiling', icon: 'Grid2x2', color: 'bg-teal-50 text-teal-600', count: '520+ artisans' },
  { id: 7, name: 'HVAC', icon: 'Wind', color: 'bg-sky-50 text-sky-600', count: '310+ artisans' },
  { id: 8, name: 'Cleaning', icon: 'Sparkles', color: 'bg-green-50 text-green-600', count: '890+ artisans' },
  { id: 9, name: 'Roofing', icon: 'Home', color: 'bg-stone-50 text-stone-600', count: '380+ artisans' },
  { id: 10, name: 'Landscaping', icon: 'Trees', color: 'bg-emerald-50 text-emerald-600', count: '290+ artisans' },
  { id: 11, name: 'Security', icon: 'ShieldCheck', color: 'bg-red-50 text-red-600', count: '210+ artisans' },
  { id: 12, name: 'Interior Design', icon: 'Sofa', color: 'bg-purple-50 text-purple-600', count: '340+ artisans' },
];

export const stats = [
  { value: '10,000+', label: 'Verified Artisans', icon: 'Users' },
  { value: '50,000+', label: 'Jobs Completed', icon: 'CheckCircle' },
  { value: '4.8★', label: 'Average Rating', icon: 'Star' },
  { value: '20+', label: 'Cities Covered', icon: 'MapPin' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Amara Okonkwo',
    role: 'Homeowner, Lagos',
    image: 'https://picsum.photos/seed/amara/80/80',
    text: 'Chrafty saved me weeks of stress. I found a verified plumber within the hour and the job was done perfectly the same day. The review system means you always know exactly who is coming to your home.',
    rating: 5,
    type: 'client',
  },
  {
    id: 2,
    name: 'Kwame Asante',
    role: 'Electrician, Johannesburg',
    image: 'https://picsum.photos/seed/kwame/80/80',
    text: 'Since joining Chrafty, my income has doubled. The platform handles bookings and payments so I can focus on the craft I love. My schedule is full three weeks ahead — something I never dreamed of before.',
    rating: 5,
    type: 'artisan',
  },
  {
    id: 3,
    name: 'Fatima Bello',
    role: 'Property Manager, Abuja',
    image: 'https://picsum.photos/seed/fatima/80/80',
    text: 'Managing 12 properties used to mean a constant scramble for reliable workers. Chrafty changed everything. I have a trusted roster of artisans on speed dial, all verified and insured. Absolute game-changer.',
    rating: 5,
    type: 'client',
  },
  {
    id: 4,
    name: 'Sipho Ndlovu',
    role: 'Carpenter, Durban',
    image: 'https://picsum.photos/seed/sipho/80/80',
    text: 'Chrafty gave me credibility. Clients trust me because of my verified badge and 47 five-star reviews. I have grown my business from a one-man shop to a three-person team in just 14 months.',
    rating: 5,
    type: 'artisan',
  },
];

export const howItWorksClient = [
  {
    step: '01',
    title: 'Post Your Job',
    desc: 'Describe what you need done — from a leaking tap to a full bathroom renovation. Add photos and set your preferred timeline.',
    icon: 'FileText',
  },
  {
    step: '02',
    title: 'Receive Quotes',
    desc: 'Verified artisans in your area review your job and send competitive quotes. Compare profiles, reviews, and pricing side by side.',
    icon: 'MessageSquare',
  },
  {
    step: '03',
    title: 'Hire & Pay Safely',
    desc: "Choose your artisan, confirm the booking, and pay securely through Chrafty. Your money is held in escrow and released only when you're satisfied.",
    icon: 'ShieldCheck',
  },
];

export const howItWorksArtisan = [
  {
    step: '01',
    title: 'Create Your Profile',
    desc: 'Sign up, upload your credentials, certifications, and portfolio. Our team verifies your identity and qualifications within 48 hours.',
    icon: 'UserCheck',
  },
  {
    step: '02',
    title: 'Bid on Jobs',
    desc: 'Browse jobs in your trade and location. Send tailored quotes to clients who need exactly your skills. No bidding wars — just fair, transparent pricing.',
    icon: 'TrendingUp',
  },
  {
    step: '03',
    title: 'Complete & Get Paid',
    desc: 'Deliver quality work, collect your five-star review, and receive payment directly to your bank account or mobile wallet within 24 hours.',
    icon: 'Wallet',
  },
];

export const clientBenefits = [
  { title: 'Verified Professionals Only', desc: 'Every artisan is ID-verified, background-checked, and skill-certified before joining our platform.', icon: 'BadgeCheck' },
  { title: 'Secure Escrow Payments', desc: 'Your payment is protected until the job is complete and you confirm satisfaction. Zero risk.', icon: 'Lock' },
  { title: 'Transparent Reviews', desc: 'Real ratings from real clients. See exactly who you are hiring before committing to a booking.', icon: 'Star' },
  { title: '24/7 Support', desc: 'Our dedicated support team is always available to mediate, assist, or resolve any issues that arise.', icon: 'Headphones' },
];

export const artisanBenefits = [
  { title: 'Steady Stream of Jobs', desc: 'Access thousands of verified job listings across your city every single week, with no cold calling required.', icon: 'Briefcase' },
  { title: 'Build Your Reputation', desc: "Your public profile showcases reviews, completed jobs, and your portfolio — your reputation works for you 24/7.", icon: 'Award' },
  { title: 'Fast, Guaranteed Payment', desc: 'No chasing invoices. Payments are released within 24 hours of job completion directly to your account.', icon: 'CreditCard' },
  { title: 'Free Business Tools', desc: 'Manage bookings, invoices, and client communications all from the Chrafty artisan dashboard — completely free.', icon: 'LayoutDashboard' },
];

export const coreValues = [
  { title: 'Trust First', desc: 'Everything we build starts with trust. Rigorous verification, transparent reviews, and secure payments are non-negotiable at Chrafty.', icon: 'ShieldCheck', color: 'text-blue-500' },
  { title: 'Artisan Dignity', desc: 'Skilled tradespeople are the backbone of Africa\'s economy. We treat every artisan as a valued professional, not a commodity.', icon: 'Heart', color: 'text-red-500' },
  { title: 'Community Growth', desc: 'We exist to lift communities. By connecting talent to opportunity, we help build stronger local economies across Africa.', icon: 'Globe', color: 'text-green-500' },
  { title: 'Relentless Quality', desc: 'We hold every interaction — from onboarding to job completion — to an exceptionally high standard so you always get the best.', icon: 'Gem', color: 'text-purple-500' },
];

export const teamMembers = [
  { name: 'Arch. Gbenga', role: 'Founder & CEO', bio: 'Architect and enterpreneur who is passionate about entrepreneurship and building economic ladders for Africa\'s skilled workforce.', image: 'https://picsum.photos/seed/adaeze/300/300' },
  { name: 'Engnr. Ire', role: 'CTO', bio: 'Software engineer passionate about using technology to solve problems that matter to everyday Africans.', image: 'https://picsum.photos/seed/emeka/300/300' },
];

export const blogPosts = [
  {
    id: 1,
    category: 'Home Improvement',
    title: 'The 8 Home Repairs You Should Never Ignore — And What They Cost to Fix Later',
    excerpt: 'That small damp patch on the ceiling and the flickering hallway light might seem minor, but ignoring these common warning signs can turn a ₦15,000 fix into a ₦300,000 catastrophe. Here\'s what to watch for.',
    image: 'https://picsum.photos/seed/blog1/800/450',
    date: 'May 2, 2026',
    readTime: '6 min read',
    author: 'Chrafty Editorial' ,
    featured: true,
  },
  {
    id: 2,
    category: 'Artisan Economy',
    title: 'How Nigeria\'s Skilled Tradespeople Are Building Wealth in the Digital Age',
    excerpt: 'Meet the electricians, welders, and tilers who are using online platforms to double their income, build teams, and achieve financial independence — no office required.',
    image: 'https://picsum.photos/seed/blog2/800/450',
    date: 'April 25, 2026',
    readTime: '8 min read',
    author: 'Tunde Adeyemi',
    featured: false,
  },
  {
    id: 3,
    category: 'Safety & Trust',
    title: 'How Chrafty Verifies Every Single Artisan — Our 5-Step Process Explained',
    excerpt: 'Trust is everything. Learn exactly how we verify identities, check credentials, screen backgrounds, and maintain quality standards so you can hire with total confidence.',
    image: 'https://picsum.photos/seed/blog3/800/450',
    date: 'April 18, 2026',
    readTime: '5 min read',
    author: 'Adaeze Obi',
    featured: false,
  },

  {
    id: 7,
    category: 'Tips & Guides',
    title: '7 Questions to Ask Before Any Home Renovation Begins',
    excerpt: 'Avoid the most common and costly renovation mistakes by asking these seven critical questions before a single tool is lifted in your home.',
    image: 'https://picsum.photos/seed/blog7/800/450',
    date: 'March 20, 2026',
    readTime: '5 min read',
    author: 'Chrafty Editorial',
    featured: false,
  },
];

export const faqData = {
  general: [
    { q: 'What is Chrafty?', a: 'Chrafty is Africa\'s leading online marketplace connecting homeowners, property managers, and businesses with verified, skilled tradespeople and artisans. We currently operate across 20+ cities in Nigeria and South Africa, with plans to expand across the continent.' },
    { q: 'Which cities does Chrafty operate in?', a: 'We currently serve Lagos, Abuja, Port Harcourt, Kano, Ibadan, Enugu, Benin City, and Owerri in Nigeria; and Johannesburg, Cape Town, Durban, Pretoria, and Port Elizabeth in South Africa. We add new cities quarterly.' },
    { q: 'Is Chrafty free to use for clients?', a: 'Yes, it is completely free to post a job and receive quotes from artisans. Chrafty charges a small service fee on completed transactions to fund the platform, background checks, and customer support.' },
    { q: 'How does Chrafty make money?', a: 'We charge a transparent service fee of 10-15% on completed jobs. This fee covers payment processing, escrow services, background verification, insurance programs, and our 24/7 support team. There are no hidden charges.' },
    { q: 'Is Chrafty available as a mobile app?', a: 'Our web platform is fully mobile-optimised and works beautifully on all smartphones. Dedicated iOS and Android apps are currently in development and will be released in Q3 2026.' },
  ],
  clients: [
    { q: 'How do I post a job?', a: 'Simply create a free account, click "Post a Job", describe what you need done, add any relevant photos, and set your preferred timeline and rough budget. Verified artisans in your area will begin sending quotes within hours.' },
    { q: 'How does Chrafty protect my payment?', a: 'We use a secure escrow system. When you confirm a booking, your payment is held safely by Chrafty — not released to the artisan until you confirm the job is complete and you are satisfied. This means zero financial risk for you.' },
    { q: 'What if I\'m not happy with the work?', a: 'If you\'re not satisfied, do not release payment. Contact our support team and we will mediate the dispute. In most cases we resolve issues within 48 hours. If a resolution is not reached, you receive a full refund.' },
    { q: 'Are all artisans insured?', a: 'All artisans on our platform carry third-party liability insurance as a condition of joining Chrafty. In addition, Chrafty\'s platform guarantee covers damages of up to ₦500,000 or R50,000 per incident.' },
    { q: 'Can I request a specific artisan I\'ve used before?', a: 'Yes. You can favourite artisans and request them directly for new jobs. If they\'re available, they\'ll confirm the booking without needing to quote again.' },
  ],
  artisans: [
    { q: 'How do I join Chrafty as an artisan?', a: 'Visit our "Join as Artisan" page, fill in your details, upload your credentials and ID, and submit. Our verification team reviews your application within 48 hours. Once approved, your profile goes live and you can start bidding on jobs.' },
    { q: 'What documents do I need to join?', a: 'You need a valid government-issued ID, proof of your trade qualification or certification, at least two professional references, and a clear photo of yourself. For certain trades, we may request proof of insurance or a guild membership.' },
    { q: 'How and when do I get paid?', a: 'Payments are released within 24 hours of the client confirming job completion. You can receive payment via bank transfer, Paystack, or mobile money (M-Pesa, OPay, Flutterwave). There are no delays or hidden deductions.' },
    { q: 'Can I set my own rates?', a: 'Absolutely. You have full control over your pricing. We provide market rate benchmarks to help you price competitively, but the final decision is always yours.' },
    { q: 'What happens if a client doesn\'t release my payment?', a: 'If a client doesn\'t release payment within 72 hours of completion without raising a dispute, funds are automatically released to you. If there is a dispute, our mediation team reviews it fairly. We protect artisans as much as clients.' },
  ],
  payments: [
    { q: 'What payment methods are accepted?', a: 'We accept all major debit and credit cards, bank transfers, Paystack, Flutterwave, OPay, and mobile wallets.' },
    { q: 'Is my payment information secure?', a: 'Chrafty uses bank-grade 256-bit SSL encryption for all transactions. We are PCI-DSS compliant and never store your full card details on our servers. Payments are processed via certified payment gateways.' },
    { q: 'Can I get a refund?', a: 'Yes. If a job is not completed or you raise a valid dispute before releasing payment, you are eligible for a full refund. Refunds are processed within 3-5 business days.' },
    { q: 'Are there any hidden fees?', a: 'Never. The service fee is disclosed clearly before you confirm any booking. What you see is exactly what you pay. No surprises, ever.' },
    { q: 'How does the escrow system work?', a: 'When you confirm a booking, your payment is held securely in a Chrafty escrow account — held by our licensed payment partner, not directly by Chrafty. Once you confirm job satisfaction, the funds are released. This system protects both clients and artisans.' },
  ],
};

export const jobPositions = [
  { title: 'UX/UI Designer', dept: 'Design', location: 'Abeokuta, Ogun State, Nigeria', type: 'Hybrid', id: 'DES-03' },
  { title: 'Growth Marketing Manager', dept: 'Growth', location: 'Abeokuta, Ogun State, Nigeria', type: 'Hybrid', id: 'MKT-04' },
  { title: 'Artisan Success Manager', dept: 'Operations', location: 'Abeokuta, Ogun State, Nigeria', type: 'Full-time', id: 'OPS-05' },
];

export const companyPerks = [
  { title: 'Purpose-Driven Work', desc: 'Every line of code and every decision moves the needle for thousands of artisans and their families across Africa. Your work genuinely matters.', icon: 'Heart' },
  { title: 'Competitive Compensation', desc: 'We pay at the top of market with equity participation, so every team member shares in the company\'s success as we grow across the continent.', icon: 'TrendingUp' },
  { title: 'Remote-Flexible Culture', desc: 'We judge output, not hours. Work from our Lagos or Johannesburg offices, from home, or from anywhere in Africa — whatever makes you most productive.', icon: 'Globe' },
  { title: 'Learning & Development', desc: 'We invest heavily in our team. Every employee gets an annual learning budget, access to courses, and dedicated time for personal development.', icon: 'BookOpen' },
];

export const supportCategories = [
  { title: 'Getting Started', desc: 'New to Chrafty? Learn how to post jobs, create a profile, and make your first booking.', icon: 'Rocket', articles: 12 },
  { title: 'Payments & Billing', desc: 'Everything about escrow, refunds, payment methods, and transaction fees.', icon: 'CreditCard', articles: 18 },
  { title: 'Account & Profile', desc: 'Manage your account settings, update your profile, change passwords, and more.', icon: 'UserCog', articles: 9 },
  { title: 'Disputes & Safety', desc: 'Understand our dispute resolution process and how we keep every transaction safe.', icon: 'ShieldAlert', articles: 14 },
];

export const popularArticles = [
  { title: 'How to post your first job in 5 minutes', category: 'Getting Started' },
  { title: 'Understanding Chrafty\'s escrow payment system', category: 'Payments & Billing' },
  { title: 'How to verify your artisan credentials', category: 'Account & Profile' },
  { title: 'What to do if you\'re unhappy with a job', category: 'Disputes & Safety' },
  { title: 'How to get your first 5-star review as an artisan', category: 'Artisan Tips' },
  { title: 'Withdrawing your earnings: step-by-step guide', category: 'Payments & Billing' },
];
