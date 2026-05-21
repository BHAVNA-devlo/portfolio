import { useEffect, useState } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const update = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', update, { passive: true });
    return () => window.removeEventListener('pointermove', update);
  }, []);

  return position;
}
