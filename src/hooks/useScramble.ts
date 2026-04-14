import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function useScramble(target: string, delay = 0) {
  const [display, setDisplay] = useState('');
  const raf = useRef<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      const totalFrames = target.length * 4;

      const animate = () => {
        setDisplay(
          target.split('').map((char, i) => {
            if (char === ' ') return ' ';
            if (i < Math.floor(iteration / 4)) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join('')
        );
        if (iteration < totalFrames) {
          iteration++;
          raf.current = requestAnimationFrame(animate);
        } else {
          setDisplay(target);
        }
      };

      raf.current = requestAnimationFrame(animate);
    }, delay);

    return () => { clearTimeout(timeout); cancelAnimationFrame(raf.current); };
  }, [target, delay]);

  return display;
}
