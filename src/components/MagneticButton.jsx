import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function MagneticButton({ children, className = '', ...props }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16 });
  const springY = useSpring(y, { stiffness: 180, damping: 16 });
  const rotateX = useTransform(springY, [-14, 14], [5, -5]);
  const rotateY = useTransform(springX, [-14, 14], [-5, 5]);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      style={{ x: springX, y: springY, rotateX, rotateY }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}
