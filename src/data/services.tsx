import {
  Bone as Drone,
  Camera,
  Edit3,
  BarChart
} from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'clinic',
    title: 'Captação de Imagens Clínicas',
    description: 'Documentação profissional para clínicas e centros cirúrgicos',
    icon: <Camera className="w-12 h-12 mb-4" />,
    details: {
      overview: 'Oferecemos serviços especializados de captação de imagens para ambientes médicos, garantindo a mais alta qualidade e respeitando todos os protocolos de higiene e privacidade.',
      features: [
        'Equipamentos esterilizados para ambiente cirúrgico',
        'Iluminação profissional não-invasiva',
        'Documentação detalhada de procedimentos',
        'Imagens em 4K com estabilização'
      ],
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'video',
    title: 'Edição de Vídeos',
    description: 'Pós-produção profissional para conteúdo audiovisual',
    icon: <Edit3 className="w-12 h-12 mb-4" />,
    details: {
      overview: 'Nossa equipe de editores utiliza as mais avançadas técnicas e softwares para transformar suas filmagens em conteúdo profissional e impactante.',
      features: [
        'Correção de cor profissional',
        'Edição não-linear em 4K',
        'Motion graphics personalizados',
        'Trilha sonora licenciada'
      ],
      image: 'https://images.unsplash.com/photo-1574717024453-354441190b6e?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'drone',
    title: 'Captação Aérea com Drone',
    description: 'Filmagens e fotos aéreas em alta resolução',
    icon: <Drone className="w-12 h-12 mb-4" />,
    details: {
      overview: 'Utilizamos drones profissionais de última geração para capturar imagens aéreas impressionantes, perfeitas para diversos tipos de projetos.',
      features: [
        'Drones DJI Professional Series',
        'Câmeras com sensor de 1" ou maior',
        'Permissões ANAC para voos',
        'Seguros inclusos'
      ],
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    description: 'Estratégias completas para presença digital',
    icon: <BarChart className="w-12 h-12 mb-4" />,
    details: {
      overview: 'Desenvolvemos estratégias personalizadas de marketing digital para maximizar o impacto do seu conteúdo audiovisual nas redes sociais.',
      features: [
        'Gestão de redes sociais',
        'Campanhas de mídia paga',
        'Otimização para SEO',
        'Relatórios mensais de performance'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
    }
  }
];