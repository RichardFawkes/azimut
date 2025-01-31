import React from 'react';
import { LayoutGrid, Menu, X } from 'lucide-react';

import Logo from '../img/logo.png'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="absolute w-full top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and brand */}
          <div className="flex items-center">
           <img src={Logo}  width={90}/>
            <span className="ml-2 text-xl font-semibold text-white">Azimut</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#services" className="text-white hover:text-gray-300 transition-colors">
              Serviços
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Sobre
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Contato
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-black/20"
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-black/20"
            >
              Serviços
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-black/20"
            >
              Sobre
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-black/20"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
