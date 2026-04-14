export const personal = {
  name: 'Mostafa Atef',
  title: 'Frontend Developer',
  location: 'Cairo, Egypt',
  email: 'mostafa@example.com',
  bio: [
    "I'm a frontend developer based in Cairo with 2+ years of experience building modern web applications. My focus is clean, scalable React code that performs beautifully.",
    "I've shipped everything from landing pages to full-stack Next.js platforms — for freelance clients and agency projects alike. I care about the details others skip.",
    "Currently open to new opportunities — remote or on-site.",
  ],
  stats: [
    { num: '2+', label: 'Years Experience' },
    { num: '15+', label: 'Projects Shipped' },
    { num: '8+', label: 'Happy Clients' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
  ],
};

export const skills = [
  { icon: '</>',  title: 'Core Stack',       desc: 'Modern React patterns and TypeScript every day.',            tags: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
  { icon: '▲',   title: 'Frameworks',        desc: 'Production Next.js with SSR, ISR, and edge deployments.',   tags: ['Next.js', 'React Router', 'Vite'] },
  { icon: '◈',   title: 'State & Data',      desc: 'Scalable state and efficient server data syncing.',          tags: ['Redux Toolkit', 'Context API', 'React Query', 'REST APIs'] },
  { icon: '✦',   title: 'Styling & UI',      desc: 'Pixel-perfect interfaces, utility-first to modular CSS.',   tags: ['Tailwind CSS', 'CSS Modules', 'Framer Motion'] },
  { icon: '☁',   title: 'Backend & Deploy',  desc: 'Serverless and cloud — from auth to edge functions.',       tags: ['Firebase', 'Vercel', 'Node.js', 'Supabase'] },
  { icon: '⚙',   title: 'Tooling',           desc: 'Professional git workflows and modern dev tooling.',        tags: ['Git / GitHub', 'ESLint', 'Prettier', 'Figma'] },
];

export const bars = [
  { label: 'React / Next.js',    pct: 90 },
  { label: 'TypeScript',         pct: 82 },
  { label: 'Tailwind CSS',       pct: 88 },
  { label: 'Redux / State',      pct: 78 },
  { label: 'Firebase / Vercel',  pct: 75 },
];

export const projects = [
  {
    featured: true,
    num: '01',
    title: 'E-Commerce Platform',
    desc: 'Full-featured storefront with Next.js 14, Redux Toolkit cart, Firebase auth, and Stripe payments. Sub-2s load time on Vercel edge network.',
    stack: ['Next.js 14', 'TypeScript', 'Redux Toolkit', 'Firebase', 'Tailwind', 'Vercel'],
    live: '#',
    github: '#',
  },
  {
    num: '02',
    title: 'SaaS Dashboard',
    desc: 'Analytics platform with real-time data, filterable tables, and Recharts visualizations connected to a REST API.',
    stack: ['React', 'TypeScript', 'Recharts', 'CSS Modules'],
    live: '#',
    github: '#',
  },
  {
    num: '03',
    title: 'Portfolio CMS',
    desc: 'Next.js ISR content system with Firestore backend and a rich text editor — clients manage their own content.',
    stack: ['Next.js', 'Firestore', 'Tailwind', 'Vercel'],
    live: '#',
    github: '#',
  },
];

export const experiences = [
  {
    period: '2023 — Present',
    role: 'Frontend Developer',
    company: 'Tech Agency',
    location: 'Cairo, Egypt',
    desc: 'Building Next.js applications for clients across e-commerce, SaaS, and media. Led a legacy React-to-TypeScript migration with Redux Toolkit. Collaborate closely with designers for pixel-perfect delivery.',
    chips: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind'],
  },
  {
    period: '2022 — 2023',
    role: 'Freelance Frontend Developer',
    company: 'Self-employed',
    location: 'Remote',
    desc: 'Delivered 10+ projects for local and international clients — single-page sites to full React apps with Firebase backends. Owned the full project lifecycle from scoping to handoff.',
    chips: ['React', 'Firebase', 'Vercel', 'CSS Modules', 'Context API'],
  },
];

export const posts = [
  { date: 'Mar 2024', title: 'Why I switched to Redux Toolkit and never looked back', excerpt: "RTK cut my boilerplate by 60% and made state logic far easier to test.", tag: 'State' },
  { date: 'Feb 2024', title: 'Next.js 14 App Router: a practical breakdown', excerpt: 'Server components, layouts, and the new data fetching model from real project experience.', tag: 'Next.js' },
  { date: 'Jan 2024', title: 'CSS Modules vs Tailwind: how I choose', excerpt: 'Both are great. Here is when I reach for each, and the team dynamics that decide it.', tag: 'CSS' },
];
