import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Play, 
  Target, 
  ArrowRight, 
  Camera,
  Film,
  Timer
} from 'lucide-react';
import { redirectTo } from '../utils';
import { Header } from './Header';
import Capa from '../img/capa.png'

const words = ['INOVAÇÃO', 'TECNOLOGIA', 'PRECISÃO', 'EXCELÊNCIA'];

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden flex items-center pt-16 md:pt-20"
      ref={ref}
    >
      {/* Background simples */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px),
              linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-tech leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-white">PRODUÇÃO</span>
              <br />
              <span className="text-white">AÉREA</span>
              <br />
              <motion.span
                key={currentWord}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {words[currentWord]}
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Produção cinematográfica aérea com{' '}
            <span className="text-blue-400 font-semibold">tecnologia 8K</span>,{' '}
            <span className="text-blue-400 font-semibold">pilotos certificados</span> e{' '}
            <span className="text-blue-400 font-semibold">resultados premiados</span>
          </motion.p>

          {/* Stats - Simplificado */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: Camera, value: '800+', label: 'Projetos' },
              { icon: Film, value: '8K', label: 'Resolução' },
              { icon: Timer, value: '15K+', label: 'Horas de Voo' },
              { icon: Target, value: '24/7', label: 'Suporte' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center p-3 md:p-4 bg-black/20 backdrop-blur-sm border border-gray-600/30 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-lg md:text-2xl font-bold text-blue-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTAs - Simplificado */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            <motion.button
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold text-white text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-3">
                <Target className="w-5 h-5" />
                Iniciar Seu Projeto
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.button>

            <motion.button
              className="w-full sm:w-auto px-8 py-4 border border-blue-400/50 rounded-lg font-semibold text-blue-400 hover:text-white hover:bg-blue-400/10 transition-colors backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-3">
                <Play className="w-5 h-5" />
                Assistir Demo Reel
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Elementos sutis - apenas desktop */}
      <div className="hidden lg:block">
        {/* Radar discreto */}
        <div className="absolute bottom-6 right-6">
          <motion.div
            className="w-24 h-24 rounded-full border border-blue-400/20 relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 w-12 h-px bg-gradient-to-r from-blue-400/50 to-transparent origin-left transform -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400/50 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
