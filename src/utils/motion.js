export const spring = {
  type: 'spring',
  stiffness: 160,
  damping: 22,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: 'blur(12px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
