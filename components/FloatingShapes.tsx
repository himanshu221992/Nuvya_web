'use client';
import { motion } from 'framer-motion';

export default function FloatingShapes() {
  const shapes = [
    'left-[8%] top-24 bg-blush', 'right-[12%] top-32 bg-skybaby', 'left-[18%] bottom-28 bg-mintbaby', 'right-[20%] bottom-20 bg-lavenderbaby'
  ];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.span
          key={shape}
          className={`absolute h-16 w-16 rounded-[2rem] opacity-70 blur-[1px] ${shape}`}
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
