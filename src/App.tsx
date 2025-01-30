import React, { useState } from 'react';
import {
  Bone as Drone,
  Camera,
  Video,
  MapPin,
  Award,
  Clock,
  ChevronDown,
  Edit3,
  Instagram,
  Search,
  BarChart
} from 'lucide-react';
import { redirectTo } from './utils';

type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: {
    overview: string;
    features: string[];
    image: string;
  };
};

function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: Service[] = [
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

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <header className="min-h-screen relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80"
            alt="Drone flying in sunset"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <nav className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <img
              src="https://i.imgur.com/Axr6yly.png"
              alt="Azimut Logo"
              className="h-16  w-auto"
            />
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-gray-300 transition">Serviços</a>
            <a href="#portfolio" className="hover:text-gray-300 transition">Portfólio</a>
            <a href="#about" className="hover:text-gray-300 transition">Sobre</a>
            <a href="#contact" className="hover:text-gray-300 transition">Contato</a>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 pt-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Capturando Momentos<br />do Alto
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
            Especialista em fotografia e filmagem aérea com drones.
            Oferecendo serviços profissionais para eventos, publicidade e inspeções.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition" onClick={() => redirectTo('https://wa.me/+5511975441039')}>
              Solicitar Orçamento
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Ver Portfólio
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </header>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedService(service.id)}
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white text-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {services.find(s => s.id === selectedService)?.details && (
                <>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold">
                      {services.find(s => s.id === selectedService)?.title}
                    </h3>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                  <img
                    src={services.find(s => s.id === selectedService)?.details.image}
                    alt={services.find(s => s.id === selectedService)?.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <p className="text-gray-700 mb-6">
                    {services.find(s => s.id === selectedService)?.details.overview}
                  </p>
                  <h4 className="font-semibold mb-4">Recursos e Benefícios:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    {services.find(s => s.id === selectedService)?.details.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-4xl font-bold mb-2">150+</h4>
              <p className="text-gray-400">Projetos Realizados</p>
            </div>
            <div>
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-4xl font-bold mb-2">10</h4>
              <p className="text-gray-400">Anos de Experiência</p>
            </div>
            <div>
              <Drone className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-4xl font-bold mb-2">5</h4>
              <p className="text-gray-400">Drones Profissionais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Presença Digital</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
             <Instagram className="w-12 h-12 mx-auto mb-4"  href='https://www.instagram.com/azimutvision'/>
              <h3 className="text-xl font-semibold mb-2">Instagram</h3>
              <p className="text-gray-600">Mais de 20k seguidores</p>
            </div>
            <div className="text-center">
              <Search className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">SEO</h3>
              <p className="text-gray-600">1º lugar em buscas locais</p>
            </div>
            <div className="text-center">
              <BarChart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Engajamento</h3>
              <p className="text-gray-600">Taxa média de 15%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
