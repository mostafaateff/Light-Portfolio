import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTilt } from '../../hooks/useTilt';
import { projects } from '../../data';
import './Projects.css';

function ProjectCard({ p, i }: { p: typeof projects[0]; i: number }) {
  const tilt = useTilt(6);
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    tilt.onMouseMove(e as any);
    const r = cardRef.current!.getBoundingClientRect();
    cardRef.current!.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    cardRef.current!.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  };

  return (
    <motion.div
      className={`project-card${p.featured ? ' featured' : ''} reveal`}
      ref={(el) => { (tilt.ref as any).current = el; (cardRef as any).current = el; }}
      onMouseMove={onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.12, duration: 0.8, ease: 'circOut' as any }}>
      <div className="project-glow" />
      <div className="project-num">{p.num}</div>
      <div className="project-body">
        <h3 className="project-title">{p.title}</h3>
        <p className="project-desc">{p.desc}</p>
        <div className="project-stack">{p.stack.map(t => <span key={t} className="project-tech">{t}</span>)}</div>
      </div>
      <div className="project-links">
        <a href={p.live} className="proj-link">Live ↗</a>
        <a href={p.github} className="proj-link">GitHub ↗</a>
      </div>
      <div className="project-hover-line" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <div className="section-label reveal">Projects</div>
        <h2 className="projects-heading reveal">Things I've Built</h2>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.num} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
