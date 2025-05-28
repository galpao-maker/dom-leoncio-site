import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-serif text-[#8B4513] font-bold">
            Dom Leôncio
          </Link>
          <span className="ml-2 text-sm text-[#556B2F]">Espaço Gastronômico</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
            Início
          </Link>
          <Link to="/sobre" className="text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
            Sobre
          </Link>
          <Link to="/restaurantes" className="text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
            Restaurantes
          </Link>
          <Link to="/cardapios" className="text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
            Cardápios
          </Link>
          <Link to="/galeria" className="text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
            Galeria
          </Link>
          <Link to="/reservas" className="text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
            Reservas
          </Link>
          <Link to="/localizacao" className="text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
            Localização
          </Link>
          <Link to="/contato" className="text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
            Contato
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#8B4513]"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="py-2 text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
                Início
              </Link>
              <Link to="/sobre" className="py-2 text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
                Sobre
              </Link>
              <Link to="/restaurantes" className="py-2 text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
                Restaurantes
              </Link>
              <Link to="/cardapios" className="py-2 text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
                Cardápios
              </Link>
              <Link to="/galeria" className="py-2 text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
                Galeria
              </Link>
              <Link to="/reservas" className="py-2 text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
                Reservas
              </Link>
              <Link to="/localizacao" className="py-2 text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
                Localização
              </Link>
              <Link to="/contato" className="py-2 text-[#8B4513] hover:text-[#CD5C5C] transition-colors">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
