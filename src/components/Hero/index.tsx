import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScramble } from '../../hooks/useScramble';
import { useMagnetic } from '../../hooks/useMagnetic';
import { personal } from '../../data';
import './Hero.css';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } };
const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'circOut' as any } } };

function wrapChars(text: string, cls: string) {
  return text.split('').map((ch, i) =>
    <span key={i} className={`name-char ${cls}`}>{ch === ' ' ? '\u00a0' : ch}</span>
  );
}

function MagBtn({ href, children, primary }: { href: string; children: React.ReactNode; primary?: boolean }) {
  const mag = useMagnetic(0.3);
  return (
    <motion.a href={href} className={primary ? 'btn-primary' : 'btn-outline'}
      ref={mag.ref as any} onMouseMove={mag.onMouseMove as any} onMouseLeave={mag.onMouseLeave}
      whileTap={{ scale: 0.96 }}>
      {primary ? <span>{children}</span> : children}
    </motion.a>
  );
}

export default function Hero() {
  const firstName = useScramble('Mostafa', 500);
  const lastName  = useScramble('Atef.', 900);
  const decoRef   = useRef<HTMLDivElement>(null);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll<HTMLElement>('[data-count]').forEach(el => {
          const target = parseInt(el.dataset.count!);
          let v = 0; const step = target / 60;
          const iv = setInterval(() => {
            v = Math.min(v + step, target);
            el.textContent = Math.round(v) + '+';
            if (v >= target) clearInterval(iv);
          }, 16);
        });
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    const stats = document.querySelector('.hero-stats');
    if (stats) observer.observe(stats);
    return () => observer.disconnect();
  }, []);

  // Parallax deco on mouse
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!decoRef.current) return;
      const rx = (e.clientX / window.innerWidth - 0.5) * 15;
      const ry = (e.clientY / window.innerHeight - 0.5) * 10;
      decoRef.current.style.transform = `translateY(-50%) translate(${rx}px, ${ry}px)`;
    };
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />
      <div className="hero-noise" />
      <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
        <motion.div className="hero-eyebrow" variants={item}>
          <span className="eyebrow-dot" />
          {personal.location} — Available for work
        </motion.div>
        <motion.h1 className="hero-name" variants={item}>
          <span className="name-first">{wrapChars(firstName, '')}</span>
          <br />
          <span className="name-last">{wrapChars(lastName, '')}</span>
        </motion.h1>
        <motion.p className="hero-title" variants={item}>Frontend Developer — React Specialist</motion.p>
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
              <div className="stat-num" data-count={s.num.replace(/\D/g, '')}>{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div className="hero-scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
        <div className="scroll-line" /><span>scroll</span>
      </motion.div>
      <motion.div className="hero-deco" ref={decoRef as any}
        initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: 'circOut' as any }}>
        {'{ }'}
      </motion.div>
    </section>
  );
}
