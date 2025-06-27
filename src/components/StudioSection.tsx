import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Award, 
  Shield, 
  Camera, 
  Settings,
  CheckCircle,
  Building,
  Trophy,
  Timer
} from 'lucide-react';

const studioEquipment = [
  {
    category: 'Drones Profissionais',
    items: [
      { name: 'DJI Inspire 3', specs: '8K ProRes RAW', status: 'active' },
      { name: 'DJI Matrice 300 RTK', specs: 'Zenmuse H20T', status: 'active' },
      { name: 'DJI Air 2S', specs: '5.4K Video', status: 'active' }
    ],
    icon: Camera,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    category: 'Pós-Produção',
    items: [
      { name: 'Apple Mac Studio Ultra', specs: '128GB RAM', status: 'active' },
      { name: 'DaVinci Resolve Studio', specs: 'Color Grading', status: 'active' },
      { name: 'Adobe Creative Cloud', specs: 'Edição Profissional', status: 'active' }
    ],
    icon: Settings,
    color: 'from-purple-500 to-pink-400'
  }
];

const certifications = [
  {
    title: 'ANAC - Piloto Remoto',
    code: 'RPAS-0001234',
    issued: '2024',
    expires: '2026',
    icon: Shield
  },
  {
    title: 'ISO 9001:2015',
    code: 'QMS-BR-2024-001',
    issued: '2024',
    expires: '2027',
    icon: Award
  },
  {
    title: 'DJI Enterprise Partner',
    code: 'DJI-EP-BR-2024',
    issued: '2024',
    expires: '2025',
    icon: Trophy
  }
];

export function StudioSection() {
  const [activeEquipment, setActiveEquipment] = useState(0);
  const [studioStats] = useState({
    projects: 847,
    hours: 15420,
    clients: 312,
    awards: 23
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-black relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nosso <span className="text-blue-400">Estúdio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Infraestrutura de ponta e processos certificados para produção audiovisual profissional
          </p>
        </motion.div>

        {/* Studio Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {[
            { label: 'Projetos Entregues', value: studioStats.projects, suffix: '+', icon: CheckCircle },
            { label: 'Horas de Estúdio', value: studioStats.hours, suffix: '+', icon: Timer },
            { label: 'Clientes Corporativos', value: studioStats.clients, suffix: '+', icon: Building },
            { label: 'Prêmios Recebidos', value: studioStats.awards, suffix: '', icon: Trophy }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center p-4 bg-gray-900/50 rounded-xl">
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Equipment & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Equipment */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Settings className="w-6 h-6 text-blue-400" />
              Equipamentos
            </h3>

            <div className="space-y-4">
              {studioEquipment.map((category, categoryIndex) => {
                const Icon = category.icon;
                const isActive = activeEquipment === categoryIndex;
                
                return (
                  <div
                    key={category.category}
                    className={`p-4 bg-gray-900/50 rounded-xl cursor-pointer transition-colors ${
                      isActive ? 'bg-gray-800/70' : 'hover:bg-gray-800/50'
                    }`}
                    onClick={() => setActiveEquipment(categoryIndex)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        {category.category}
                      </h4>
                    </div>

                    {isActive && (
                      <div className="space-y-2 ml-10">
                        {category.items.map((item, index) => (
                          <div key={item.name} className="flex items-center justify-between p-2 bg-black/30 rounded">
                            <div>
                              <div className="text-white font-medium text-sm">{item.name}</div>
                              <div className="text-gray-400 text-xs">{item.specs}</div>
                            </div>
                            <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">
                              ATIVO
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-400" />
              Certificações
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={cert.title}
                    className="p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-green-500/20">
                        <Icon className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold mb-1">{cert.title}</h4>
                        <div className="text-sm text-gray-400 mb-2">
                          <span className="font-mono">{cert.code}</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>Emitida: {cert.issued}</span>
                          <span>Válida até: {cert.expires}</span>
                          <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded">
                            VÁLIDA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 