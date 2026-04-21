import { useEffect, useRef, useState } from 'react';
import { personal } from '../../data';
import './About.css';

const codeLines = [
  { html: '<span class="ck">const</span> <span class="cf">developer</span> = {' },
  { html: '  <span class="cp">name</span>: <span class="cs">\'Mostafa Atef\'</span>,' },
  { html: '  <span class="cp">role</span>: <span class="cs">\'Frontend Developer\'</span>,' },
  { html: '  <span class="cp">location</span>: <span class="cs">\'Cairo 🇪🇬\'</span>,' },
  { html: '  <span class="cp">stack</span>: [' },
  { html: '    <span class="cs">\'React\'</span>, <span class="cs">\'Next.js\'</span>,' },
  { html: '    <span class="cs">\'TypeScript\'</span>, <span class="cs">\'Redux\'</span>,' },
  { html: '    <span class="cs">\'Tailwind\'</span>, <span class="cs">\'Firebase\'</span>' },
  { html: '  ],' },
  { html: '  <span class="cp">available</span>: <span class="co">true</span>,' },
  { html: '}<span class="ck"> as const</span>;' },
];

export default function About() {
  const [visibleLines, setVisibleLines] = useState(0);
  const codeRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        let idx = 0;
        const iv = setInterval(() => {
          idx++;
          setVisibleLines(idx);
          if (idx >= codeLines.length) clearInterval(iv);
        }, 160);
      }
    }, { threshold: 0.4 });
    if (codeRef.current) obs.observe(codeRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="reveal-left">
          <div className="section-label">About</div>
          <h2 className="about-heading">Code is craft,<br /><em>not just output.</em></h2>
          {personal.bio.map((p, i) => <p key={i} className="about-p">{p}</p>)}
          <div className="about-tags">
            {['Open to remote', 'Full-time / freelance', 'Cairo, Egypt'].map(t => (
              <span key={t} className="about-tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="reveal-right" ref={codeRef}>
          <div className="code-window">
            <div className="code-titlebar">
              <div className="code-dots"><span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" /></div>
              <span className="code-filename">developer.ts</span>
            </div>
            <pre className="code-body">
              {codeLines.slice(0, visibleLines).map((l, i) => (
                <span key={i} dangerouslySetInnerHTML={{ __html: l.html + '\n' }} />
              ))}
              {visibleLines < codeLines.length && <span className="code-cursor">&nbsp;</span>}
            </pre>
          </div>
          <div className="about-quote">
            <span className="quote-mark">"</span>
            The best code is the code your team can read at 2am during an outage.
          </div>
        </div>
      </div>
    </section>
  );
}
