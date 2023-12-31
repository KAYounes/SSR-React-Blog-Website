'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/Card';

export default function BlogContent({ children, title }) {
  const MotionCard = motion(Card);
  const cardAnimation = {
    start: { height: 300 },
    end: {
      height: 'unset',
      transition: {
        // type: 'tween',
        ease: [0.44, -0.4, 0.43, 1.42],
        // duration: 2,
        // repeat: 1,
        // repeatType: 'reverse',
        // when: 'beforeChildren',
        // delayChildren: 1,
      },
    },
  };

  const childrenAnimation = {
    start: { height: 0 },
    end: {
      height: 'unset',
    },
  };

  return (
    <MotionCard
      style={{ overflow: 'hidden' }}
      variants={cardAnimation}
      initial='start'
      animate='end'
    >
      <h1>{title}</h1>

      <motion.div
      //   variants={childrenAnimation}
      >
        {children}
      </motion.div>
    </MotionCard>
  );
}
