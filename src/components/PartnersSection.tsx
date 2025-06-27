import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Award, 
  Users, 
  Handshake,
  Crown,
  Trophy
} from 'lucide-react';

const strategicPartners = [
  {
    name: 'DJI Enterprise',
    logo: 'DJI',
    partnership: 'Parceiro Autorizado',
    since: '2022',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    name: 'Blackmagic Design',
    logo: 'BMD',
    partnership: 'Certified Partner',
    since: '2021',
    color: 'from-purple-500 to-pink-400'
  },
  {
    name: 'Adobe Systems',
    logo: 'ADOBE',
    partnership: 'Solution Partner',
    since: '2020',
    color: 'from-red-500 to-orange-400'
  },
  {
    name: 'ANAC Brasil',
    logo: 'ANAC',
    partnership: 'Operador Certificado',
    since: '2019',
    color: 'from-green-500 to-teal-400'
  }
];

const successCases = [
  {
    client: 'Petrobras S.A.',
    project: 'Inspeção Industrial',
    value: 'R$ 280.000',
    year: '2024',
    color: 'from-blue-600 to-cyan-500'
  },
  {
    client: 'Netflix Brasil',
    project: 'Documentário Aéreo',
    value: 'R$ 420.000',
    year: '2023',
    color: 'from-red-600 to-orange-500'
  },
  {
    client: 'Cyrela Brazil Realty',
    project: 'Marketing Imobiliário',
    value: 'R$ 150.000',
    year: '2024',
    color: 'from-purple-600 to-pink-500'
  }
];

const industryRecognition = [
  { award: 'Prêmio Drone Show 2024', position: '1º Lugar' },
  { award: 'Festival de Cinema de Gramado', position: '2º Lugar' },
  { award: 'ANAC Excellence Award', position: 'Vencedor' },
  { award: 'Broadcast & Cable', position: 'Finalista' }
];

export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gray-800 relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Strategic Partners */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nossos <span className="text-blue-400">Parceiros</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Parcerias estratégicas com líderes globais de tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {/* Logo placeholder */}
                <div className={`w-16 h-16 bg-gradient-to-r ${partner.color} rounded-xl flex items-center justify-center mb-4 font-bold text-white text-sm`}>
                  {partner.logo}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {partner.name}
                </h3>

                <div className="text-sm text-blue-400 mb-1">
                  {partner.partnership}
                </div>
                <div className="text-xs text-gray-500">desde {partner.since}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cases de <span className="text-green-400">Sucesso</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {successCases.map((case_item, index) => (
              <motion.div
                key={case_item.client}
                className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {case_item.client}
                </h3>
                <h4 className="text-green-400 mb-4">{case_item.project}</h4>
                
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-white">
                    {case_item.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {case_item.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Recognition */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <Crown className="w-6 h-6 text-yellow-400" />
            Reconhecimento da Indústria
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industryRecognition.map((recognition, index) => (
              <div
                key={recognition.award}
                className="bg-gray-900/50 rounded-xl p-4 text-center"
              >
                <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <h4 className="text-white font-bold text-sm mb-1">{recognition.award}</h4>
                <div className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-bold">
                  {recognition.position}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 