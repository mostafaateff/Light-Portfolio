import { motion } from 'framer-motion';
import { experiences } from '../../data';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-inner">
        <motion.div className="section-label" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          Experience
        </motion.div>
        <motion.h2 className="exp-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: 'circOut' as const }}>
          My Journey
        </motion.h2>

        <div className="timeline">
          {experiences.map((e, i) => (
            <motion.div
              key={e.role}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: 'circOut' as const }}
            >
              <div className="timeline-left">
                <div className="timeline-period">{e.period}</div>
                <div className="timeline-dot-wrapper">
                  <motion.div
                    className="timeline-dot"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.4, type: 'spring', stiffness: 300 }}
                  />
                </div>
              </div>
              <div className="timeline-right">
                <div className="timeline-header">
                  <h3 className="timeline-role">{e.role}</h3>
                  <span className="timeline-company">{e.company} — <em>{e.location}</em></span>
                </div>
                <p className="timeline-desc">{e.desc}</p>
                <div className="timeline-chips">
                  {e.chips.map((c, ci) => (
                    <motion.span
                      key={c}
                      className="timeline-chip"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + ci * 0.06 + 0.4, duration: 0.4 }}
                    >
                      {c}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
