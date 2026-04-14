import { useRef, useCallback } from 'react';

export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    el.style.transition = 'transform 0.15s ease';
  }, [strength]);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0,0)';
    el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
