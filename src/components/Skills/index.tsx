import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills, bars } from '../../data';
import './Skills.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.7, ease: 'circOut' as const } }),
};

export default function Skills() {
  const barsRef = useRef<HTMLDivElement>(null);
  const barsInView = useInView(barsRef, { once: true, amount: 0.4 });

  return (
    <section id="skills" className="skills">
      <div className="skills-inner">
        <motion.div className="section-label" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          Skills & Tools
        </motion.div>
        <motion.h2 className="skills-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: 'circOut' as const }}>
          My Technical Arsenal
        </motion.h2>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <motion.div key={s.title} className="skill-card" custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: 'circOut' as const } }}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-title">{s.title}</div>
              <div className="skill-desc">{s.desc}</div>
              <div className="skill-tags">
                {s.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bars-section" ref={barsRef}>
          <motion.h3 className="bars-heading" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Proficiency
          </motion.h3>
          {bars.map((b, i) => (
            <motion.div key={b.label} className="bar-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
              <div className="bar-header">
                <span className="bar-label">{b.label}</span>
                <span className="bar-pct">{b.pct}%</span>
              </div>
              <div className="bar-track">
                <motion.div
                  className="bar-fill"
                  initial={{ width: 0 }}
                  animate={barsInView ? { width: `${b.pct}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: i * 0.15, ease: 'circOut' as const }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
