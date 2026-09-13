import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LandingAnimationProps {
  onComplete: () => void;
}

const LandingAnimation: React.FC<LandingAnimationProps> = ({ onComplete }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-teal-50"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.04, 1.08] }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute w-96 h-96 rounded-full bg-sky-300/30 blur-3xl"
          initial={{ x: '-50%', y: '-50%', scale: 0 }}
          animate={{
            x: ['-50%', '-30%', '-50%'],
            y: ['-50%', '-30%', '-50%'],
            scale: [0, 1.5, 2],
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-teal-300/30 blur-3xl"
          initial={{ x: '50%', y: '50%', scale: 0 }}
          animate={{
            x: ['50%', '30%', '50%'],
            y: ['50%', '30%', '50%'],
            scale: [0, 1.5, 2],
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />

        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="gradient-text glow-text">Petru Constantin</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Portfolio
          </motion.p>

          <motion.div
            className="mt-8 w-48 h-1 bg-sky-100 rounded-full overflow-hidden mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-sky-500 to-teal-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
              onAnimationComplete={onComplete}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-white to-sky-50/80"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-white to-teal-50/80"
          initial={{ x: 0 }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />

        <motion.div
          className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-sky-50/50"
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.4, 0, 0.2, 1] }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-teal-50/50"
          initial={{ y: 0 }}
          animate={{ y: '100%' }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.4, 0, 0.2, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LandingAnimation;
