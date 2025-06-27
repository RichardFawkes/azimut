import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Send, 
  Shield, 
  Award, 
  Zap, 
  Building,
  Globe,
  ArrowUp,
  ExternalLink,
  Clock,
  Headphones
} from 'lucide-react';
import Logo from '../img/logo.png';

const quickLinks = [
  { name: 'Home', href: '#', icon: Building },
  { name: 'Serviços', href: '#services', icon: Zap },
  { name: 'Portfolio', href: '#portfolio', icon: Award },
  { name: 'Estúdio', href: '#studio', icon: Shield },
  { name: 'Contato', href: '#contact', icon: Phone }
];

const services = [
  'Filmagem Aérea 8K',
  'Inspeção Industrial',
  'Marketing Imobiliário',
  'Eventos Corporativos',
  'Documentários',
  'Mapeamento LiDAR'
];

const certifications = [
  { name: 'ANAC Certificado', code: 'RPAS-001234' },
  { name: 'ISO 9001:2015', code: 'QMS-BR-2024' },
  { name: 'DJI Enterprise Partner', code: 'DJI-EP-BR' }
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-dark-slate to-black overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-gray/50 via-black/80 to-dark-slate/50" />
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 48px,
                rgba(0,245,255,0.1) 50px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 48px,
                rgba(0,245,255,0.1) 50px
              )
            `
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              className="flex items-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="relative">
                <img src={Logo} width={80} alt="Azimut Vision" className="relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-blue to-cyber-purple rounded-full blur-lg opacity-0 group-hover:opacity-50"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold font-tech">
                  <span className="text-white">Azimut</span>
                  <span className="text-neon-blue ml-1">Vision</span>
                </h3>
                <div className="text-xs font-mono text-neon-blue/70 tracking-wider">
                  PROFESSIONAL STUDIOS
                </div>
              </div>
            </motion.div>

            <p className="text-gray-300 leading-relaxed">
              Estúdio de produção audiovisual especializado em captação aérea profissional. 
              <span className="text-neon-blue font-semibold"> Tecnologia de ponta, resultados excepcionais.</span>
            </p>

            {/* Real-time Status */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg border border-gray-700/30">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">Sistema Online</span>
                <span className="text-xs text-neon-blue font-mono ml-auto">
                  {currentTime.toLocaleTimeString()}
                </span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg border border-gray-700/30">
                <Headphones className="w-4 h-4 text-neon-blue" />
                <span className="text-sm text-gray-300">Suporte 24/7 Ativo</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse delay-100" />
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse delay-200" />
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <h4 className="text-sm font-mono text-neon-blue tracking-wider">CERTIFICAÇÕES</h4>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="flex items-center justify-between p-2 bg-black/20 rounded border border-gray-700/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-xs text-gray-300">{cert.name}</span>
                  <span className="text-xs font-mono text-neon-green">{cert.code}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-neon-blue" />
              NAVEGAÇÃO
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.a
                      href={link.href}
                      className="group flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-neon-blue/10 hover:border-neon-blue/30 border border-transparent"
                      whileHover={{ x: 5 }}
                    >
                      <Icon className="w-4 h-4 text-neon-blue group-hover:text-white transition-colors" />
                      <span className="text-gray-400 group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                      <motion.div
                        className="ml-auto opacity-0 group-hover:opacity-100"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ExternalLink className="w-3 h-3 text-neon-blue" />
                      </motion.div>
                    </motion.a>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-neon-blue" />
              SERVIÇOS
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-1.5 h-1.5 bg-neon-blue rounded-full" />
                  <span className="text-sm">{service}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-neon-blue" />
              CONTATO
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {[
                { icon: Phone, text: '+55 (11) 97544-1039', href: 'tel:+5511975441039' },
                { icon: Mail, text: 'contato@azimutvision.com', href: 'mailto:contato@azimutvision.com' },
                { icon: MapPin, text: 'São Paulo, SP - Brasil', href: '#' }
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.text}
                    href={contact.href}
                    className="group flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-neon-blue/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Icon className="w-4 h-4 text-neon-blue" />
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                      {contact.text}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono text-neon-blue tracking-wider">NEWSLETTER</h4>
              <p className="text-gray-400 text-sm">
                Receba atualizações sobre tecnologia e projetos exclusivos
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                    required
                  />
                  <motion.div
                    className="absolute inset-0 border-2 border-neon-blue/50 rounded-lg opacity-0 focus-within:opacity-100 pointer-events-none"
                    animate={{ 
                      borderColor: ['rgba(0,245,255,0.5)', 'rgba(189,0,255,0.5)', 'rgba(0,245,255,0.5)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full p-3 bg-gradient-to-r from-neon-blue to-cyber-purple rounded-lg font-semibold text-black transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <span className="flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4" />
                      Inscrito com Sucesso!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Assinar Newsletter
                    </span>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="pt-8 border-t border-gray-700/30">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Siga-nos:</span>
              {[
                { icon: Instagram, href: 'https://instagram.com/azimutvision', color: 'hover:text-pink-400' },
                { icon: Linkedin, href: 'https://linkedin.com/company/azimutvision', color: 'hover:text-blue-400' },
                { icon: Youtube, href: 'https://youtube.com/@azimutvision', color: 'hover:text-red-400' },
                { icon: Globe, href: 'https://azimutvision.com', color: 'hover:text-neon-blue' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-black/30 border border-gray-700/30 text-gray-400 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Azimut Vision Studios. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Desenvolvido com tecnologia de ponta | CNPJ: 12.345.678/0001-90
              </p>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-neon-blue to-cyber-purple rounded-full text-black hover:scale-110 transition-all duration-300 group"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </footer>
  );
}
