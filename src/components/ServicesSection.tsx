import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Camera, 
  Video, 
  Building, 
  Heart, 
  Shield, 
  MapPin, 
  Zap, 
  Star,
  ArrowRight,
  Play
} from 'lucide-react';
import { services } from '../data/services';
import { ServiceModal } from './ServiceModal';

const modernServices = [
  {
    id: 'eventos',
    title: 'Eventos & Casamentos',
    description: 'Momentos únicos capturados do alto com cinematografia profissional',
    icon: Heart,
    gradient: 'from-blue-500 to-blue-600',
    features: ['4K Ultra HD', 'Edição Profissional', 'Múltiplos Ângulos'],
    price: 'A partir de R$ 800',
    popular: true
  },
  {
    id: 'inspections',
    title: 'Inspeções Técnicas',
    description: 'Análises precisas e detalhadas com tecnologia de ponta',
    icon: Shield,
    gradient: 'from-blue-500 to-blue-600',
    features: ['Relatórios Técnicos', 'Mapas Térmicos', 'Análise 3D'],
    price: 'A partir de R$ 600'
  },
  {
    id: 'architecture',
    title: 'Arquitetura & Construção',
    description: 'Acompanhamento de obras e marketing imobiliário de alto nível',
    icon: Building,
    gradient: 'from-blue-500 to-blue-600',
    features: ['Relatórios de Progresso', 'Material de Marketing', 'Tours Virtuais'],
    price: 'A partir de R$ 900'
  },
  {
    id: 'commercial',
    title: 'Vídeos Publicitários',
    description: 'Conteúdo visual impactante para marcas e empresas',
    icon: Video,
    gradient: 'from-blue-500 to-blue-600',
    features: ['Roteiro Criativo', 'Pós-produção', 'Motion Graphics'],
    price: 'A partir de R$ 1.200'
  },
  {
    id: 'tourism',
    title: 'Turismo & Paisagens',
    description: 'Capturando a beleza natural com perspectivas únicas',
    icon: MapPin,
    gradient: 'from-blue-500 to-blue-600',
    features: ['Paisagens 360°', 'Time-lapse', 'Fotografia HDR'],
    price: 'A partir de R$ 500'
  },
  {
    id: 'photography',
    title: 'Fotografia Aérea',
    description: 'Imagens profissionais de alta resolução para todos os propósitos',
    icon: Camera,
    gradient: 'from-blue-500 to-blue-600',
    features: ['RAW + JPEG', 'Retoque Profissional', 'Múltiplas Resoluções'],
    price: 'A partir de R$ 400'
  }
];

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <section id="services" className="py-32 pt-40 md:pt-48 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-50, -200],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-mono text-blue-400">SERVIÇOS PROFISSIONAIS</span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-7xl font-bold mb-8 font-tech"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="text-white">Nossos</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-[length:200%_100%] animate-gradient-x text-transparent bg-clip-text">
              Serviços
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Soluções completas em captação aérea e produção audiovisual com{' '}
            <span className="text-blue-400 font-semibold">tecnologia de última geração</span>{' '}
            e profissionais experientes
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modernServices.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}
                  animate={hoveredCard === service.id ? { opacity: 0.75 } : { opacity: 0 }}
                />

                {/* Main Card */}
                <motion.div
                  className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 h-full cursor-pointer overflow-hidden"
                  onClick={() => setSelectedService(service.id)}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full text-xs font-bold text-white"
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <Star className="w-3 h-3 inline mr-1" />
                      POPULAR
                    </motion.div>
                  )}

                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={hoveredCard === service.id ? { opacity: 0.1 } : { opacity: 0 }}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 relative overflow-hidden`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      animate={hoveredCard === service.id ? { x: "100%" } : { x: "-100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={hoveredCard === service.id ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-blue-400 font-bold text-lg">
                          {service.price}
                        </div>
                      </div>
                      
                      <motion.div
                        className="flex items-center gap-2 text-blue-400 group-hover:text-white transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-sm font-semibold">Saiba mais</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>

                    {/* Hover Play Button */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={hoveredCard === service.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-2xl">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${hoveredCard === service.id ? '#3b82f6' : 'transparent'}, transparent)`
                    }}
                    animate={hoveredCard === service.id ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 2, repeat: hoveredCard === service.id ? Infinity : 0, ease: "linear" }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            className="group relative px-12 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-bold text-white overflow-hidden text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Solicitar Orçamento Personalizado
            </span>
            <div className="absolute inset-0 rounded-full animate-pulse-glow" />
          </motion.button>
        </motion.div>
      </div>

      {selectedServiceData && (
        <ServiceModal
          service={selectedServiceData}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}