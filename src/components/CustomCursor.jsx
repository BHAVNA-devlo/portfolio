import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export function CustomCursor() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-7 w-7 rounded-full border border-mint/50 mix-blend-screen md:block"
      animate={{ x: x - 14, y: y - 14 }}
      transition={{ type: 'spring', stiffness: 420, damping: 30, mass: 0.4 }}
    >
      <div className="absolute inset-2 rounded-full bg-mint/45 blur-[2px]" />
    </motion.div>
  );
}
