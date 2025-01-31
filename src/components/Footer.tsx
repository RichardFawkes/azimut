import { LayoutGrid, Instagram, Mail, Phone } from 'lucide-react';
import Logo from '../img/logo.png'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
            <img src={Logo}  width={90}/>
            <span className="ml-2 text-xl font-semibold">Azimut Vision</span>
            </div>
            <p className="text-gray-400">
              Capturando momentos únicos com tecnologia de ponta e criatividade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+5511975441039" className="hover:text-white transition-colors">
                  +55 (11) 97544-1039
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:contato@azimutvision.com" className="hover:text-white transition-colors">
                  contato@azimutvision.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Instagram className="w-5 h-5 mr-2" />
                <a href="https://instagram.com/azimutvision" className="hover:text-white transition-colors">
                  @azimutvision
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Receba novidades e atualizações sobre nossos serviços.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Azimut Vision. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
