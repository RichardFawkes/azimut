import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Navigation, 
  Zap, 
  Signal,
  Battery,
  Satellite,
  Target,
  Camera,
  Settings,
  Activity
} from 'lucide-react';

const DroneHUD = () => {
  const [telemetry, setTelemetry] = useState({
    altitude: 125,
    speed: 18,
    battery: 96,
    signal: 100,
    satellites: 15,
    distance: 450,
    flightTime: '08:32'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        ...prev,
        altitude: Math.max(100, prev.altitude + (Math.random() - 0.5) * 15),
        speed: Math.max(10, prev.speed + (Math.random() - 0.5) * 8),
        battery: Math.max(85, prev.battery - 0.02),
        signal: Math.max(95, prev.signal + (Math.random() - 0.5) * 3),
        satellites: Math.max(12, Math.min(18, prev.satellites + (Math.random() - 0.5))),
        distance: Math.max(200, prev.distance + (Math.random() - 0.5) * 50)
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80 md:h-96 bg-gradient-to-br from-gray-900/90 to-black/80 rounded-xl border border-blue-400/20 overflow-hidden">
      {/* Grid simples */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px),
              linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Interface simplificada */}
      <div className="absolute inset-4 flex flex-col md:flex-row gap-4">
        {/* Dados principais */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="bg-black/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-mono">VOO</span>
            </div>
            <div className="text-blue-400 font-mono text-lg">{telemetry.altitude.toFixed(0)}m</div>
            <div className="text-gray-400 text-xs">Altitude</div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Battery className="w-3 h-3 text-green-400" />
              <span className="text-green-400 text-xs font-mono">BAT</span>
            </div>
            <div className="text-green-400 font-mono text-lg">{telemetry.battery.toFixed(0)}%</div>
            <div className="text-gray-400 text-xs">Bateria</div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Satellite className="w-3 h-3 text-blue-400" />
              <span className="text-blue-400 text-xs font-mono">GPS</span>
            </div>
            <div className="text-blue-400 font-mono text-lg">{Math.round(telemetry.satellites)}</div>
            <div className="text-gray-400 text-xs">Satélites</div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Camera className="w-3 h-3 text-blue-400" />
              <span className="text-blue-400 text-xs font-mono">CAM</span>
            </div>
            <div className="text-blue-400 font-mono text-lg">8K</div>
            <div className="text-gray-400 text-xs">Resolução</div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-3 h-3 text-blue-400" />
              <span className="text-blue-400 text-xs font-mono">MISS</span>
            </div>
            <div className="text-blue-400 font-mono text-lg">74%</div>
            <div className="text-gray-400 text-xs">Progresso</div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-3 h-3 text-green-400" />
              <span className="text-green-400 text-xs font-mono">SYS</span>
            </div>
            <div className="text-green-400 font-mono text-lg">OK</div>
            <div className="text-gray-400 text-xs">Sistema</div>
          </div>
        </div>

        {/* Drone central - apenas desktop */}
        <div className="hidden md:flex items-center justify-center w-32">
          <motion.div
            className="relative"
            animate={{ 
              y: [-5, 5, -5],
              rotateZ: [-2, 2, -2]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg border-2 border-blue-400 flex items-center justify-center relative">
              <Navigation className="w-6 h-6 text-white" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-lg animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Status bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 border-t border-blue-400/20 p-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-blue-400 font-mono">AZIMUT VISION</span>
          <span className="text-green-400 font-mono">SISTEMA ONLINE</span>
        </div>
      </div>
    </div>
  );
};

export function TechSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techSpecs = [
    {
      icon: Camera,
      title: 'TECNOLOGIA CINEMA 8K',
      description: 'Câmeras profissionais de cinema com gravação ProRes RAW',
      specs: ['8K @ 30fps', 'ProRes RAW', 'DCI 4K', 'HDR10+']
    },
    {
      icon: Navigation,
      title: 'NAVEGAÇÃO DE PRECISÃO',
      description: 'GPS RTK com precisão de nível centimétrico',
      specs: ['GPS RTK', 'IMU Duplo', 'Sensores Visuais', 'LiDAR']
    },
    {
      icon: Zap,
      title: 'VOO INTELIGENTE',
      description: 'Sistemas de voo autônomo alimentados por IA',
      specs: ['Evasão de Obstáculos', 'RTH Inteligente', 'Nav. Waypoint', 'Rastreamento Auto']
    },
    {
      icon: Signal,
      title: 'CONTROLE LONGO ALCANCE',
      description: 'Transmissão profissional até 15km',
      specs: ['Alcance 15km', 'Baixa Latência', 'Banda Dupla', 'Troca Auto']
    }
  ];

  return (
    <section className="py-20 pt-32 md:pt-40 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden" ref={ref}>
      {/* Background simples */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-black/50 backdrop-blur-xl border border-blue-400/20 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Settings className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-mono text-blue-400 tracking-wider">TECNOLOGIA AVANÇADA</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold font-tech mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-white">TECNOLOGIA</span><br/>
            <span className="text-gradient">DRONE</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Experimente nossa{' '}
            <span className="text-blue-400 font-semibold">tecnologia de drone de ponta</span>{' '}
            com interface HUD em tempo real e sistemas profissionais de telemetria
          </motion.p>
        </motion.div>

        {/* HUD Interface */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <DroneHUD />
        </motion.div>

        {/* Tech Specifications - Simplificado */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          {techSpecs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="card-glass rounded-xl p-6 h-full">
                  <motion.div
                    className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 mb-4 inline-block"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {spec.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {spec.description}
                  </p>

                  <div className="space-y-2">
                    {spec.specs.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 