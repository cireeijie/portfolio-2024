export const menuContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const menuItem = {
  hidden: { x: "-100%" },
  show: { x: "0%", transition: { duration: 0.5 } },
};
