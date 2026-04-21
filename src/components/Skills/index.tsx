import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { skills, bars } from '../../data';
import './Skills.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.7, ease: 'circOut' as any } }),
};

export default function Skills() {
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll<HTMLElement>('.bar-item').forEach((item, i) => {
          const pct = item.dataset.pct!;
          const fill = item.querySelector<HTMLElement>('.bar-fill')!;
          setTimeout(() => {
            fill.style.width = pct + '%';
            item.classList.add('animated');
          }, i * 120 + 200);
        });
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (barsRef.current) obs.observe(barsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skills-inner">
        <div className="section-label reveal">Skills & Tools</div>
        <h2 className="skills-heading reveal">My Technical Arsenal</h2>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <motion.div key={s.title} className="skill-card reveal" custom={i}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-title">{s.title}</div>
              <div className="skill-desc">{s.desc}</div>
              <div className="skill-tags">{s.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}</div>
            </motion.div>
          ))}
        </div>
        <div className="bars-section reveal" ref={barsRef}>
          <h3 className="bars-heading">Proficiency</h3>
          {bars.map((b, i) => (
            <div key={b.label} className="bar-item" data-pct={b.pct} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="bar-header">
                <span className="bar-label">{b.label}</span>
                <span className="bar-pct">{b.pct}%</span>
              </div>
              <div className="bar-track"><div className="bar-fill" /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
