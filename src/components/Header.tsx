import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Camera, 
  Film, 
  Users, 
  Phone, 
  Target
} from 'lucide-react';
import Logo from '../img/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { href: '#', label: 'ESTÚDIO', icon: Camera },
    { href: '#services', label: 'SERVIÇOS', icon: Film },
    { href: '#portfolio', label: 'PORTFÓLIO', icon: Film },
    { href: '#team', label: 'EQUIPE', icon: Users },
    { href: '#contact', label: 'CONTATO', icon: Phone }
  ];

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-blue-500/20' 
          : 'bg-gradient-to-b from-black/90 to-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo e Branding */}
          <motion.div 
            className="flex items-center group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              className="relative mr-3"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={Logo} width={40} className="md:w-[50px] relative z-10" alt="Azimut Vision" />
              <motion.div
                className="absolute inset-0 bg-blue-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-60"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
            
            <div>
              <motion.h1 
                className="text-lg md:text-xl font-bold font-tech"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-white">AZIMUT</span>
                <span className="text-blue-400 ml-1">VISION</span>
              </motion.h1>
              <motion.div
                className="text-xs text-gray-400 font-mono hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Estúdios Profissionais
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop Navigation - Limpo */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="group relative flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
                  <span className="text-gray-300 group-hover:text-white font-medium text-sm transition-colors">
                    {item.label}
                  </span>
                  
                  <motion.div
                    className="absolute inset-0 bg-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              );
            })}

            {/* CTA Button - Simplificado */}
            <motion.button
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold text-white text-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Target className="w-4 h-4 inline mr-2" />
              Solicitar Projeto
            </motion.button>
          </nav>

          {/* Mobile Menu Button - Limpo */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-blue-400/20 bg-black/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-blue-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-blue-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation - Ultra Limpo */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute w-full bg-black/98 backdrop-blur-xl border-b border-blue-400/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 space-y-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-3 p-4 rounded-lg hover:bg-blue-400/5 transition-colors"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => setIsMenuOpen(false)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">
                      {item.label}
                    </span>
                  </motion.a>
                );
              })}

              {/* Mobile CTA */}
              <motion.button
                className="w-full mt-4 p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Target className="w-5 h-5 inline mr-2" />
                Solicitar Projeto
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Linha de status sutil */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </motion.header>
  );
}
