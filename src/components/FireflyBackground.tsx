import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FireflyBackground() {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    const newFireflies = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setFireflies(newFireflies);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {fireflies.map((f) => (
        <motion.div
          key={f.id}
          className="absolute rounded-full"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            width: f.size,
            height: f.size,
            backgroundColor: '#D1FF4D',
            boxShadow: '0 0 10px #D1FF4D, 0 0 20px #F5C542',
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: f.duration,
            repeat: Infinity,
            delay: f.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
