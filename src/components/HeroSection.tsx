import { ChevronDown } from 'lucide-react';
import { redirectTo } from '../utils';
import { Header } from './Header';
import Capa from '../img/capa.png'

export function HeroSection() {
  return (
    <header className="min-h-screen relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black z-10" />
        <img
          src={Capa}
          alt="Drone flying in sunset"
          className="w-full h-full object-cover"
        />
      </div>

      <Header />

      <div className="relative z-10 container mx-auto px-6 pt-32 lg:pt-48">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Capturando Momentos<br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              do Alto
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 animate-fade-in-delay">
            Especialista em fotografia e filmagem aérea com drones.
            Oferecendo serviços profissionais para eventos, publicidade e inspeções.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button
              onClick={() => redirectTo('https://wa.me/+5511975441039')}
              className="group relative px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Solicitar Orçamento</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </button>
            <button className="group relative px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Ver Portfólio
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10">
        <ChevronDown size={32} className="text-white/80 hover:text-white transition-colors" />
      </div>
    </header>
  );
}
