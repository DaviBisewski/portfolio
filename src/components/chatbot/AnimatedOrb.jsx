import React from 'react';
import { motion } from 'framer-motion';

const AnimatedOrb = () => {
  return (
    <div className="relative flex items-center justify-center mb-6 h-40">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute h-40 w-40 rounded-full border-2 border-transparent bg-gradient-to-r from-black via-gray-500 to-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ borderRadius: '50%' }}
      />

      {/* Middle rotating ring */}
      <motion.div
        className="absolute h-32 w-32 rounded-full border-2 border-white/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Inner pulsing glow */}
      <motion.div
        className="absolute h-28 w-28 rounded-full bg-gradient-to-br from-white/20 to-black/20 blur-2xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Core sphere */}
      <motion.div
        className="relative h-20 w-20 rounded-full bg-gradient-to-br from-white to-black shadow-[0_0_40px_rgba(0,0,0,0.6)]"
        animate={{
          boxShadow: [
            '0_0_20px_rgba(255,255,255,0.2), 0_0_40px_rgba(0,0,0,0.6)',
            '0_0_40px_rgba(255,255,255,0.4), 0_0_80px_rgba(0,0,0,0.3)',
            '0_0_20px_rgba(255,255,255,0.2), 0_0_40px_rgba(0,0,0,0.6)',
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Inner white dot */}
        <motion.div
          className="absolute inset-0 rounded-full flex items-center justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="h-4 w-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/60"
          animate={{
            x: Math.cos((i / 6) * Math.PI * 2) * 60,
            y: Math.sin((i / 6) * Math.PI * 2) * 60,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedOrb;
