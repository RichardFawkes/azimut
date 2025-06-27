import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Users, 
  Award, 
  CheckCircle,
  Briefcase
} from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Carlos Mendes',
    role: 'Diretor Técnico & Piloto ANAC',
    experience: '12 anos',
    avatar: 'CM',
    bio: 'Especialista em operações aéreas complexas com mais de 500 projetos executados.',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 2,
    name: 'Marina Santos',
    role: 'Diretora de Pós-Produção',
    experience: '8 anos',
    avatar: 'MS',
    bio: 'Especialista em finalização cinematográfica com trabalhos premiados.',
    color: 'from-purple-500 to-pink-400'
  },
  {
    id: 3,
    name: 'Roberto Silva',
    role: 'Diretor de Fotografia Aérea',
    experience: '10 anos',
    avatar: 'RS',
    bio: 'Diretor de fotografia com expertise em captação aérea cinematográfica.',
    color: 'from-red-500 to-orange-400'
  },
  {
    id: 4,
    name: 'Ana Costa',
    role: 'Coordenadora de Projetos',
    experience: '6 anos',
    avatar: 'AC',
    bio: 'Gerente de projetos especializada em produções audiovisuais de grande escala.',
    color: 'from-green-500 to-teal-400'
  }
];

const studioStats = [
  { label: 'Anos de Experiência', value: '15+', icon: CheckCircle },
  { label: 'Projetos Entregues', value: '800+', icon: CheckCircle },
  { label: 'Clientes Atendidos', value: '200+', icon: Users },
  { label: 'Prêmios Conquistados', value: '25+', icon: Award }
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gray-900 relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nossa <span className="text-blue-400">Equipe</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Profissionais certificados com expertise técnica e criativa
          </p>
        </motion.div>

        {/* Studio Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {studioStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center p-4 bg-gray-800/50 rounded-xl">
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar */}
                <div className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
                  {member.avatar}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <h4 className="text-sm text-blue-400 mb-1">
                    {member.role}
                  </h4>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Briefcase className="w-4 h-4" />
                    {member.experience}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-300 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 