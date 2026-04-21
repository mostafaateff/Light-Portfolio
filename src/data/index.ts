export const personal = {
  name: 'Mostafa Atef',
  title: 'Frontend Developer',
  location: 'Cairo, Egypt',
  email: 'atefm5159@gmail.com',
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
    { label: 'GitHub', href: 'https://github.com/mostafaateff' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mostafa-atef-metwaly-10125a265/' },
  ],
};

export const skills = [
  { icon: '</>',  title: 'Core Stack',       desc: 'Modern React patterns and TypeScript every day.',            tags: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
  { icon: '▲',   title: 'Frameworks',        desc: 'Production Next.js with SSR, ISR, and edge deployments.',   tags: ['Next.js', 'React Router', 'Vite'] },
  { icon: '◈',   title: 'State & Data',      desc: 'Scalable state and efficient server data syncing.',          tags: ['Redux Toolkit', 'Context API', 'React Query', 'REST APIs'] },
  { icon: '✦',   title: 'Styling & UI',      desc: 'Pixel-perfect interfaces, utility-first to modular CSS.',   tags: ['Tailwind CSS', 'CSS Modules', 'Material UI' , 'Bootstrap'] },
  { icon: '☁',   title: 'Backend & Deploy',  desc: 'Serverless and cloud — from auth to edge functions.',       tags: ['Firebase', 'Vercel', 'Node.js', 'Supabase', 'Laravel'] },
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
    company: 'ICN Globe',
    location: 'New Cairo , 1st Settlement',
  desc: [
    "Developed and maintained a production-grade operations dashboard for Estbn, a mobile car-maintenance platform, resulting in a 15% increase in user engagement.",
    "Built scalable and reusable UI components using React, Redux Toolkit, and Material UI, improving development efficiency by 20%.",
    "Integrated RESTful APIs with Laravel backend, ensuring reliable data flow and seamless user experience.",
    "Enhanced application performance and responsiveness across different devices and screen sizes, reducing load times by 25%.",
    "Collaborated within an Agile team, participating in sprint planning, code reviews, and version control using Git & GitHub."
  ],
    chips: ['React', 'Laravel' , 'JavaScript', 'Redux Toolkit', 'Material UI', 'Git / GitHub' , 'Agile Methodology'],
  },
  {
    period: ' 2025 — Present',
    role: 'Freelance Frontend Developer (Remote) - Saudi Arabia & Jordan',
    company: 'Self-employed',
    location: 'Remote',
    desc: [
      `Delivered React-based web applications for international clients, focusing on performance, scalability, and responsive design, increasing client satisfaction by 30% .`,
      `Translated business requirements into functional and user-friendly frontend solutions, resulting in a 20% increase in feature adoption .`,
      `Developed dynamic features and integrated RESTful APIs to support real-time data and interactions .`,
      `Built reusable and maintainable component structures to support long-term scalability and reduce future 
development time by 15% .`,
      `Collaborated directly with clients to gather requirements, provide updates, and deliver on time .`,
    ], chips: ['React', 'TypeScript', 'Bootstrap', 'Material UI', 'Figma' ,'Vercel', 'Laravel' , "Node.js" , 'Context API', 'Redux Toolkit' ,'Git / GitHub', 'Client Communication' , 'Remote Collaboration'],
  },
];

export const Training = [
  {
    period: '04/2024 — 07/2024',
    role: 'Frontend Developer (Job Simulation Bootcamp)',
    company: 'Upskilling ',
    location: 'Cairo , Egypt',
  desc: [
`Completed a hands-on frontend job simulation bootcamp, building production-like applications with real APIs .`,
` Gained practical experience in Agile methodologies and modern UI frameworks like Bootstrap and Material UI .`,
  ],
    chips: ['React' , 'TypeScript' ,'JavaScript', 'Redux Toolkit', 'Material UI', 'Bootstrap' , 'Git / GitHub' , 'Agile Methodology'],
  },
  {
    period: '10/2023 — 02/2024',
    role: 'Front-End Developer Training',
    company: 'Route Academy',
    location: 'Cairo , Egypt',
    desc: [
` Completed a hands-on Front-End Developer training at Route Academy, mastering HTML, CSS, JavaScript, and React .`,
`Developed responsive, user-friendly applications and applied version control using Git in real-world projects .`
    ],
  },
];

export const posts = [
  { date: 'Mar 2024', title: 'Why I switched to Redux Toolkit and never looked back', excerpt: "RTK cut my boilerplate by 60% and made state logic far easier to test.", tag: 'State' },
  { date: 'Feb 2024', title: 'Next.js 14 App Router: a practical breakdown', excerpt: 'Server components, layouts, and the new data fetching model from real project experience.', tag: 'Next.js' },
  { date: 'Jan 2024', title: 'CSS Modules vs Tailwind: how I choose', excerpt: 'Both are great. Here is when I reach for each, and the team dynamics that decide it.', tag: 'CSS' },
];
