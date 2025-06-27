import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  X, 
  Calendar, 
  MapPin, 
  Camera, 
  Video, 
  Navigation,
  Sparkles,
  Eye,
  Download,
  Share2,
  Heart
} from 'lucide-react';

const portfolioData = [
  {
    id: 1,
    title: 'Casamento Premium Vista Mar',
    category: 'wedding',
    location: 'Buzios, RJ',
    date: '2024',
    type: 'video',
    thumbnail: '/api/placeholder/400/300',
    duration: '2:30',
    views: '125K',
    likes: '8.2K',
    tags: ['Casamento', '4K', 'Drone', 'Aéreo']
  },
  {
    id: 2,
    title: 'Inspeção Industrial Complexo Petroquímico',
    category: 'industrial',
    location: 'Santos, SP',
    date: '2024',
    type: 'inspection',
    thumbnail: '/api/placeholder/400/300',
    duration: '5:45',
    views: '89K',
    likes: '6.1K',
    tags: ['Inspeção', 'Industrial', 'Térmico', 'Segurança']
  },
  {
    id: 3,
    title: 'Lançamento Residencial Luxury',
    category: 'architecture',
    location: 'São Paulo, SP',
    date: '2024',
    type: 'photo',
    thumbnail: '/api/placeholder/400/300',
    duration: '',
    views: '234K',
    likes: '15.7K',
    tags: ['Arquitetura', 'Imobiliário', 'Marketing', 'HDR']
  },
  {
    id: 4,
    title: 'Campanha Publicitária Automobilística',
    category: 'commercial',
    location: 'Rio de Janeiro, RJ',
    date: '2024',
    type: 'video',
    thumbnail: '/api/placeholder/400/300',
    duration: '1:15',
    views: '456K',
    likes: '28.9K',
    tags: ['Publicidade', 'Automóveis', 'Cinematic', 'Slow Motion']
  },
  {
    id: 5,
    title: 'Documentário Paisagens Brasileiras',
    category: 'tourism',
    location: 'Chapada Diamantina, BA',
    date: '2024',
    type: 'video',
    thumbnail: '/api/placeholder/400/300',
    duration: '8:20',
    views: '678K',
    likes: '45.2K',
    tags: ['Turismo', 'Natureza', 'Documentário', 'Time-lapse']
  },
  {
    id: 6,
    title: 'Evento Corporativo Tech Summit',
    category: 'events',
    location: 'São Paulo, SP',
    date: '2024',
    type: 'photo',
    thumbnail: '/api/placeholder/400/300',
    duration: '',
    views: '167K',
    likes: '12.3K',
    tags: ['Evento', 'Corporativo', 'Tech', 'Cobertura']
  }
];

const categories = [
  { id: 'all', label: 'TODOS', icon: Sparkles, color: 'from-white to-gray-300' },
  { id: 'wedding', label: 'CASAMENTOS', icon: Heart, color: 'from-pink-400 to-red-500' },
  { id: 'industrial', label: 'INDUSTRIAL', icon: Navigation, color: 'from-blue-400 to-cyan-500' },
  { id: 'architecture', label: 'ARQUITETURA', icon: Camera, color: 'from-orange-400 to-yellow-500' },
  { id: 'commercial', label: 'COMERCIAL', icon: Video, color: 'from-purple-400 to-pink-500' },
  { id: 'tourism', label: 'TURISMO', icon: MapPin, color: 'from-green-400 to-teal-500' },
  { id: 'events', label: 'EVENTOS', icon: Calendar, color: 'from-indigo-400 to-blue-500' }
];

export function Portfolio3D() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredData = activeCategory === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <section 
      className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden"
      ref={ref}
    >
      {/* Fundo sutil para mobile */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header responsivo */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-white">PORT</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 text-transparent bg-clip-text">
              FÓLIO
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Explore nossos projetos mais recentes em produção audiovisual
          </motion.p>
        </motion.div>

        {/* Category Filters - responsivo */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-3 md:px-4 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white scale-105' 
                    : 'bg-gray-800/60 text-gray-300 border border-gray-700 hover:border-blue-400/50 hover:text-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-1 md:gap-2">
                  <Icon className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">
                    {category.label.split(' ')[0]}
                  </span>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-full"
                    layoutId="activeFilter"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Portfolio Grid - responsivo */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                onHoverStart={() => setHoveredCard(item.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setSelectedItem(item.id)}
              >
                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/80 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gray-700/50 cursor-pointer hover:border-blue-400/50 transition-all duration-300">
                  
                  {/* Image Container */}
                  <div className="relative h-40 md:h-48 lg:h-56 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"
                    />
                    
                    {/* Simulated Image */}
                    <motion.div
                      className="w-full h-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 relative"
                      animate={hoveredCard === item.id ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Type indicator */}
                      <div className="absolute top-3 left-3 z-20">
                        <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                          item.type === 'video' ? 'bg-red-500/90 text-white' :
                          item.type === 'photo' ? 'bg-blue-500/90 text-white' :
                          'bg-green-500/90 text-white'
                        }`}>
                          {item.type === 'video' ? 'VÍDEO' :
                           item.type === 'photo' ? 'FOTO' : 'INSPEÇÃO'}
                        </div>
                      </div>

                      {/* Duration */}
                      {item.duration && (
                        <div className="absolute top-3 right-3 z-20">
                          <div className="px-2 py-1 bg-black/70 rounded text-xs text-white">
                            {item.duration}
                          </div>
                        </div>
                      )}

                      {/* Play button for videos */}
                      {item.type === 'video' && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center z-20"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={hoveredCard === item.id ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                            <Play className="w-4 h-4 md:w-6 md:h-6 text-white ml-0.5" />
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5 relative z-10">
                    <motion.h3
                      className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2"
                      animate={hoveredCard === item.id ? { x: 2 } : { x: 0 }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <div className="flex items-center gap-3 text-xs md:text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                        <span className="truncate">{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                        {item.date}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {item.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {item.likes}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="px-2 py-1 bg-blue-500/20 text-xs rounded-full text-blue-300 border border-blue-500/30"
                          initial={{ opacity: 0.7 }}
                          animate={hoveredCard === item.id ? { opacity: 1 } : { opacity: 0.7 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600/40 text-xs rounded-full text-gray-400">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 rounded-xl md:rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-white text-sm md:text-base shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4 md:w-5 md:h-5" />
              Ver Portfolio Completo
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal responsivo */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-blue-400/50 overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 md:p-6 lg:p-8">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white pr-4">
                    {portfolioData.find(item => item.id === selectedItem)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-2 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors shrink-0"
                  >
                    <X className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl mb-4 md:mb-6 flex items-center justify-center">
                  <Play className="w-12 h-12 md:w-16 md:h-16 text-blue-400" />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white text-sm md:text-base">
                    <Download className="w-4 h-4 md:w-5 md:h-5 inline mr-2" />
                    Download
                  </button>
                  <button className="flex-1 py-3 border border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-blue-400 hover:text-black transition-colors text-sm md:text-base">
                    <Share2 className="w-4 h-4 md:w-5 md:h-5 inline mr-2" />
                    Compartilhar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 