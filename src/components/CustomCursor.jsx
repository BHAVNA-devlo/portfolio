import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export function CustomCursor() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2.5 w-2.5 rounded-full bg-mint opacity-80 md:block"
      animate={{ x: x - 5, y: y - 5 }}
      transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.2 }}
    />
  );
}
