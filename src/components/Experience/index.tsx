import { motion } from 'framer-motion';
import { experiences, Training } from '../../data';
import './Experience.css';

function TimelineItem({ e, i }: { e: any; i: number }) {
  return (
    <motion.div className="timeline-item reveal"
      initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: i * 0.15, duration: 0.8, ease: 'circOut' as any }}>
      <div className="timeline-left">
        <div className="timeline-period">{e.period}</div>
        <div className="timeline-dot-wrapper">
          <motion.div className="timeline-dot"
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
            transition={{ delay: i * 0.15 + 0.3, duration: 0.4, type: 'spring', stiffness: 300 }} />
        </div>
      </div>
      <div className="timeline-right">
        <div className="timeline-header">
          <h3 className="timeline-role">{e.role}</h3>
          <span className="timeline-company">{e.company} — <em>{e.location}</em></span>
        </div>
        <ul className="timeline-desc">
          {Array.isArray(e.desc) && e.desc.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
        </ul>
        {Array.isArray(e.chips) && (
          <div className="timeline-chips">
            {e.chips.map((c: string, ci: number) => (
              <motion.span key={c} className="timeline-chip"
                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15 + ci * 0.06 + 0.4, duration: 0.4 }}>
                {c}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <>
      <section id="experience" className="experience">
        <div className="experience-inner">
          <div className="section-label reveal">Experience</div>
          <h2 className="exp-heading reveal">My Journey</h2>
          <div className="timeline">
            {experiences.map((e, i) => <TimelineItem key={e.role} e={e} i={i} />)}
          </div>
        </div>
      </section>
      <section className="training">
        <div className="experience-inner">
          <div className="section-label reveal">Training</div>
          <div className="timeline">
            {Training.map((e, i) => <TimelineItem key={e.role} e={e} i={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}
