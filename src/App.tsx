import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);
  const tx = useRef(0), ty = useRef(0), cx = useRef(0), cy = useRef(0);

  useEffect(() => {
    // Cursor
    const onMove = (e: MouseEvent) => {
      tx.current = e.clientX; ty.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', onMove);
    let raf: number;
    const animTrail = () => {
      cx.current += (tx.current - cx.current) * 0.12;
      cy.current += (ty.current - cy.current) * 0.12;
      if (trailRef.current) {
        trailRef.current.style.left = cx.current + 'px';
        trailRef.current.style.top = cy.current + 'px';
      }
      raf = requestAnimationFrame(animTrail);
    };
    animTrail();

    // Progress bar
    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      if (progressRef.current) progressRef.current.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll);

    // Reveal observer
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => revealObs.observe(el));

    // Particles
    const canvas = particlesRef.current!;
    const ctx = canvas.getContext('2d')!;
    let W = 0, H = 0;
    type Particle = { x: number; y: number; r: number; vx: number; vy: number; alpha: number };
    let particles: Particle[] = [];
    const initCanvas = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      }));
    };
    let pRaf: number;
    const drawParticles = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,169,110,${p.alpha})`;
        ctx.fill();
      });
      pRaf = requestAnimationFrame(drawParticles);
    };
    window.addEventListener('resize', initCanvas);
    initCanvas(); drawParticles();

    return () => {
      document.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', initCanvas);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(pRaf);
      revealObs.disconnect();
    };
  }, []);

  return (
    <>
      <div id="progress" ref={progressRef} />
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-trail" ref={trailRef} />
      <canvas id="particles" ref={particlesRef} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
