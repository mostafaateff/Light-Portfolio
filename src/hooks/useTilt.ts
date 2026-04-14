import { useRef, useCallback } from 'react';

export function useTilt(max = 10) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    el.style.transform = `perspective(800px) rotateY(${x * max}deg) rotateX(${-y * max}deg) scale(1.02)`;
    el.style.transition = 'transform 0.1s ease';
  }, [max]);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)';
    el.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
