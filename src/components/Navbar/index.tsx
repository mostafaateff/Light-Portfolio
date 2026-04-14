import { motion, useScroll, useTransform } from 'framer-motion';
import { useMagnetic } from '../../hooks/useMagnetic';
import './Navbar.css';

const links = ['about','skills','projects','experience','blog','contact'];

function HireBtn() {
  const mag = useMagnetic(0.4);
  return (
    <motion.a
      href="#contact"
      className="nav-hire"
      ref={mag.ref as any}
      onMouseMove={mag.onMouseMove as any}
      onMouseLeave={mag.onMouseLeave}
      whileTap={{ scale: 0.96 }}
    >
      Hire me
    </motion.a>
  );
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 60], ['rgba(250,250,247,0)', 'rgba(250,250,247,0.96)']);
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1]);

  return (
    <motion.nav
      className="navbar"
      style={{ backgroundColor: bg }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'circOut' as const }}
    >
      <motion.div style={{ borderBottomColor: useTransform(borderOpacity, v => `rgba(200,169,110,${v * 0.3})`) }} className="nav-border" />
      <a href="#hero" className="nav-logo">
        <span className="logo-m">M</span>A
      </a>
      <ul className="nav-links">
        {links.map((l, i) => (
          <motion.li key={l} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}>
            <a href={`#${l}`} className="nav-link">{l}</a>
          </motion.li>
        ))}
      </ul>
      <HireBtn />
    </motion.nav>
  );
}
