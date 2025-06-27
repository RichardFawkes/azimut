import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ArrowUp } from 'lucide-react';

export function WhatsAppFAB() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const whatsappURL = "https://wa.me/5511975441039?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20produção%20aérea%20com%20a%20Azimut%20Vision!";

  const handleWhatsAppClick = () => {
    window.open(whatsappURL, '_blank');
    setIsExpanded(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsExpanded(false);
  };

  // Controla visibilidade baseada no scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mostra/esconde baseado na direção do scroll
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false); // Escondendo quando scrolling down
      } else {
        setIsVisible(true); // Mostrando quando scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
        >
          {/* Menu expandido */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute bottom-16 right-0 space-y-3 mb-2"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Botão WhatsApp */}
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl transition-all duration-300 group fab-glow whitespace-nowrap"
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-semibold">Falar no WhatsApp</span>
                </motion.button>

                {/* Botão Voltar ao Topo */}
                {window.scrollY > 300 && (
                  <motion.button
                    onClick={scrollToTop}
                    className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-xl transition-all duration-300 group whitespace-nowrap"
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <ArrowUp className="w-5 h-5" />
                    <span className="text-sm font-semibold">Voltar ao Topo</span>
                  </motion.button>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botão principal */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-14 h-14 md:w-16 md:h-16 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center fab-glow ${
              isExpanded 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-green-500 hover:bg-green-600'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              rotate: isExpanded ? 180 : 0,
              scale: isExpanded ? 1.05 : 1
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="whatsapp"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
                  transition={{ duration: 0.2 }}
                  className="bounce-subtle"
                >
                  <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Efeito de pulso quando não expandido */}
          {!isExpanded && (
            <motion.div
              className="absolute inset-0 bg-green-400 rounded-full opacity-30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Indicador de notificação pulsante */}
          {!isExpanded && (
            <motion.div
              className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"
                animate={{
                  opacity: [1, 0.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          )}

          {/* Tooltip no hover (desktop) */}
          {!isExpanded && (
            <motion.div
              className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-300 hidden md:block"
              whileHover={{ opacity: 1 }}
            >
              Fale conosco no WhatsApp!
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-gray-800 border-y-4 border-y-transparent" />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
} 