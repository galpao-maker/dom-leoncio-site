import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center flex items-center" style={{ backgroundImage: 'url("/hero-background.jpg")' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Dom Leôncio</h1>
          <p className="text-xl md:text-2xl mb-8">Espaço Gastronômico</p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">Uma experiência gastronômica autêntica em harmonia com a natureza</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/reservas" className="bg-[#8B4513] hover:bg-[#CD5C5C] text-white py-3 px-6 rounded-md transition-colors text-center">
              Reservar Mesa
            </Link>
            <Link to="/cardapios" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#556B2F] text-white py-3 px-6 rounded-md transition-colors text-center">
              Ver Cardápios
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurantes Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12 text-[#556B2F]">Nossos Restaurantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Galpão Brasil */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: 'url("/galpao-brasil.jpg")' }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-2 text-[#8B4513]">Galpão Brasil</h3>
                <p className="text-gray-700 mb-4">Culinária brasileira autêntica em um ambiente rústico e acolhedor. Experimente os sabores tradicionais do Brasil em um espaço que celebra nossa cultura.</p>
                <Link to="/restaurantes" className="text-[#8B4513] hover:text-[#CD5C5C] font-medium">
                  Conhecer mais →
                </Link>
              </div>
            </div>
            
            {/* Garlic e Açafrão */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: 'url("/garlic-acafrao.jpg")' }}></div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-2 text-[#8B4513]">Garlic e Açafrão</h3>
                <p className="text-gray-700 mb-4">Comida caseira com toques especiais em um ambiente biofílico e tranquilo. Um espaço para desfrutar de momentos de paz com uma gastronomia que abraça.</p>
                <Link to="/restaurantes" className="text-[#8B4513] hover:text-[#CD5C5C] font-medium">
                  Conhecer mais →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12 text-[#556B2F]">Uma Experiência Única</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#556B2F]/10 text-[#556B2F]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2 text-[#8B4513]">Natureza</h3>
              <p className="text-gray-700">Ambiente integrado à natureza, com árvores preservadas e vegetação abundante.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#556B2F]/10 text-[#556B2F]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2 text-[#8B4513]">Autenticidade</h3>
              <p className="text-gray-700">Ambiente genuinamente rústico, não temático, com materiais naturais e design único.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#556B2F]/10 text-[#556B2F]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2 text-[#8B4513]">Gastronomia</h3>
              <p className="text-gray-700">Pratos preparados com ingredientes selecionados e apresentação cuidadosa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8B4513] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Venha Viver Esta Experiência</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Dois restaurantes únicos, uma experiência inesquecível. Faça sua reserva e descubra o melhor da gastronomia em harmonia com a natureza.</p>
          <Link to="/reservas" className="inline-block bg-white text-[#8B4513] hover:bg-[#F5F5F5] py-3 px-8 rounded-md transition-colors font-medium">
            Reservar Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
