import { motion } from 'framer-motion';
import { useScramble } from '../../hooks/useScramble';
import { useMagnetic } from '../../hooks/useMagnetic';
import { personal } from '../../data';
import './Hero.css';

const container: import('framer-motion').Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item: import('framer-motion').Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'circOut' as const } },
};

function MagBtn({ href, children, primary }: { href: string; children: React.ReactNode; primary?: boolean }) {
  const mag = useMagnetic(0.3);
  return (
    <motion.a
      href={href}
      className={primary ? 'btn-primary' : 'btn-outline'}
      ref={mag.ref as any}
      onMouseMove={mag.onMouseMove as any}
      onMouseLeave={mag.onMouseLeave}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const firstName = useScramble('Mostafa', 500);
  const lastName = useScramble('Atef.', 900);

  return (
    <section id="hero" className="hero">
      <div className="hero-noise" />

      <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
        <motion.div className="hero-eyebrow" variants={item}>
          <span className="eyebrow-dot" />
          {personal.location} — Available for work
        </motion.div>

        <motion.h1 className="hero-name" variants={item}>
          <span className="name-first">{firstName}</span>
          <br />
          <span className="name-last">{lastName}</span>
        </motion.h1>

        <motion.p className="hero-title" variants={item}>
          Frontend Developer — React Specialist
        </motion.p>

        <motion.p className="hero-desc" variants={item}>
          I craft scalable, performant interfaces with Next.js, TypeScript, and modern state management.
          Clean code. Thoughtful architecture. No shortcuts.
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <MagBtn href="#projects" primary>View my work →</MagBtn>
          <MagBtn href="#contact">Let's talk</MagBtn>
        </motion.div>

        <motion.div className="hero-stats" variants={item}>
          {personal.stats.map(s => (
            <div key={s.label} className="stat">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="scroll-line"
          animate={{ scaleY: [0, 1, 0], y: [0, 0, 20] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
        <span>scroll</span>
      </motion.div>

      {/* decorative big number */}
      <motion.div
        className="hero-deco"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: 'circOut' as const }}
      >
        {'{ }'}
      </motion.div>
    </section>
  );
}
