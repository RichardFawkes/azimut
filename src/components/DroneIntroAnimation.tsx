import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SkipForward } from 'lucide-react';
import cameraDroneImg from '../img/camera-drone.png';

interface DroneIntroAnimationProps {
  onComplete: () => void;
}

export function DroneIntroAnimation({ onComplete }: DroneIntroAnimationProps) {
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Mostra skip após 0.5 segundo
    const skipTimer = setTimeout(() => setShowSkip(true), 500);
    
    // Completa a animação em 2 segundos
    const completeTimer = setTimeout(() => onComplete(), 2000);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
      }}
    >
      {/* Botão Skip */}
      {showSkip && (
        <motion.button
          onClick={onComplete}
          className="absolute top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkipForward className="w-4 h-4" />
          <span className="text-sm">PULAR</span>
        </motion.button>
      )}

      {/* Drone passando */}
      <motion.div
        className="relative"
        initial={{ x: -300, opacity: 0 }}
        animate={{ 
          x: 300,
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 1.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <motion.img 
          src={cameraDroneImg} 
          alt="Drone" 
          className="w-20 h-20"
          animate={{
            y: [0, -2, 0, -1, 0],
            rotate: [0, 1, 0, -1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: `
              brightness(0) 
              saturate(100%) 
              invert(27%) 
              sepia(51%) 
              saturate(2878%) 
              hue-rotate(200deg) 
              brightness(104%) 
              contrast(97%)
              drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))
              drop-shadow(0 0 40px rgba(59, 130, 246, 0.4))
            `
          }}
        />
      </motion.div>

      {/* Logo aparecendo */}
      <motion.div
        className="absolute"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-white">
          AZIMUT
          <span className="text-blue-400"> VISION</span>
        </h2>
      </motion.div>
    </motion.div>
  );
} 