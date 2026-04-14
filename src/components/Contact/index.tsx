import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMagnetic } from '../../hooks/useMagnetic';
import { personal } from '../../data';
import './Contact.css';

function EmailLink() {
  const mag = useMagnetic(0.15);
  return (
    <motion.a
      href={`mailto:${personal.email}`}
      className="contact-email"
      ref={mag.ref as any}
      onMouseMove={mag.onMouseMove as any}
      onMouseLeave={mag.onMouseLeave}
    >
      {personal.email}
    </motion.a>
  );
}

function SocialBtn({ label, href, delay, filled }: { label: string; href: string; delay: number; filled?: boolean }) {
  const mag = useMagnetic(0.3);
  return (
    <motion.a
      href={href}
      className={`social-btn${filled ? ' social-btn-filled' : ''}`}
      ref={mag.ref as any}
      onMouseMove={mag.onMouseMove as any}
      onMouseLeave={mag.onMouseLeave}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileTap={{ scale: 0.97 }}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
    >
      {label}
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="contact">
      <div className="contact-inner" ref={ref}>
        <motion.div className="section-label" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          Contact
        </motion.div>

        <motion.h2
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'circOut' as const }}
        >
          Let's build<br />
          <em>something great.</em>
        </motion.h2>

        <motion.p
          className="contact-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: 'circOut' as const }}
        >
          Open to full-time roles, freelance projects, and interesting collaborations.
          I respond within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.8 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <EmailLink />
        </motion.div>

        <div className="contact-socials">
          {personal.socials.map((s, i) => (
            <SocialBtn key={s.label} label={s.label} href={s.href} delay={0.5 + i * 0.08} />
          ))}
          <SocialBtn label="Download CV" href="#" delay={0.74} filled />
        </div>
      </div>

      <footer className="footer">
        <span className="footer-copy">
          © 2024 <strong>Mostafa Atef</strong>. Built with React & Framer Motion.
        </span>
        <span className="footer-stack">React · Next.js · TypeScript</span>
      </footer>
    </section>
  );
}
