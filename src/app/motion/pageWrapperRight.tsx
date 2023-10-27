"use client"

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: React.ReactNode;
}

export const PageWrapperRight = ({ children }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Reset the animation when the component becomes visible
  React.useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 2 }}
      variants={{
        hidden: { x: 500, opacity: 0 },
        show: { x: 0, opacity: 1 },
      }}
    >
      {children}
    </motion.div>
  );
};
