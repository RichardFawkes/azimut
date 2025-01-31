import { Instagram, Search, BarChart } from 'lucide-react';

export function SocialProofSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Presença Digital
          </h2>
          <p className="text-gray-600 text-lg">
            Nossa presença online cresce a cada dia, alcançando mais pessoas e gerando resultados expressivos.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <a 
            href="https://www.instagram.com/azimutvision"
            className="group transform transition-all duration-300 hover:scale-105"
          >
            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative mx-auto w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl" />
                <Instagram className="relative z-10 w-16 h-16 p-4 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Instagram</h3>
              <p className="text-gray-600">Mais de 20k seguidores</p>
            </div>
          </a>
          <div className="group transform transition-all duration-300 hover:scale-105">
            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative mx-auto w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl" />
                <Search className="relative z-10 w-16 h-16 p-4 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">SEO</h3>
              <p className="text-gray-600">1º lugar em buscas locais</p>
            </div>
          </div>
          <div className="group transform transition-all duration-300 hover:scale-105">
            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative mx-auto w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl" />
                <BarChart className="relative z-10 w-16 h-16 p-4 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Engajamento</h3>
              <p className="text-gray-600">Taxa média de 15%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}