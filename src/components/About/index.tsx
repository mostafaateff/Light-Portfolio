import { motion, Variants } from 'framer-motion';
import { personal } from '../../data';
import './About.css';

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <motion.div
          className="about-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="section-label" variants={fadeUp}>About</motion.div>
          <motion.h2 className="about-heading" variants={fadeUp}>
            Code is craft,<br /><em>not just output.</em>
          </motion.h2>
          {personal.bio.map((p, i) => (
            <motion.p key={i} className="about-p" variants={fadeUp}>{p}</motion.p>
          ))}
          <motion.div className="about-tags" variants={fadeUp}>
            {['Open to remote', 'Full-time / freelance', 'Cairo, Egypt'].map(t => (
              <span key={t} className="about-tag">{t}</span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="code-window">
            <div className="code-titlebar">
              <div className="code-dots">
                <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
              </div>
              <span className="code-filename">developer.ts</span>
            </div>
            <pre className="code-body">
              <span className="ck">const</span> <span className="cf">developer</span> = {'{'}{'\n'}
              {'  '}<span className="cp">name</span>: <span className="cs">'Mostafa Atef'</span>,{'\n'}
              {'  '}<span className="cp">role</span>: <span className="cs">'Frontend Developer'</span>,{'\n'}
              {'  '}<span className="cp">location</span>: <span className="cs">'Cairo 🇪🇬'</span>,{'\n'}
              {'  '}<span className="cp">stack</span>: [{'\n'}
              {'    '}<span className="cs">'React'</span>, <span className="cs">'Next.js'</span>,{'\n'}
              {'    '}<span className="cs">'TypeScript'</span>, <span className="cs">'Redux'</span>,{'\n'}
              {'    '}<span className="cs">'Tailwind'</span>, <span className="cs">'Firebase'</span>{'\n'}
              {'  '}],{'\n'}
              {'  '}<span className="cp">available</span>: <span className="co">true</span>,{'\n'}
              {'  '}<span className="cm">let's build something great</span>{'\n'}
              {'}'}<span className="ck"> as const</span>;
            </pre>
          </div>
          <div className="about-quote">
            <span className="quote-mark">"</span>
            The best code is the code your team can read at 2am during an outage.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
