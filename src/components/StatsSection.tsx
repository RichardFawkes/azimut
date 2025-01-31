import { Award, Clock, Bone as Drone } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="group text-center transform transition-all duration-300 hover:scale-105">
            <div className="relative mx-auto w-20 h-20 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl" />
              <Award className="relative z-10 w-20 h-20 p-4 text-white" />
            </div>
            <h4 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">150+</h4>
            <p className="text-gray-400 text-lg">Projetos Realizados</p>
          </div>
          <div className="group text-center transform transition-all duration-300 hover:scale-105">
            <div className="relative mx-auto w-20 h-20 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl" />
              <Clock className="relative z-10 w-20 h-20 p-4 text-white" />
            </div>
            <h4 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">10</h4>
            <p className="text-gray-400 text-lg">Anos de Experiência</p>
          </div>
          <div className="group text-center transform transition-all duration-300 hover:scale-105">
            <div className="relative mx-auto w-20 h-20 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl" />
              <Drone className="relative z-10 w-20 h-20 p-4 text-white" />
            </div>
            <h4 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">5</h4>
            <p className="text-gray-400 text-lg">Drones Profissionais</p>
          </div>
        </div>
      </div>
    </section>
  );
}