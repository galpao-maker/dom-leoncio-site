import React, { useState } from 'react';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Dados simulados das imagens
  const images = [
    { id: 1, src: '/gallery/espaco1.jpg', alt: 'Área externa do Espaço Gastronômico', category: 'espaco' },
    { id: 2, src: '/gallery/espaco2.jpg', alt: 'Mesas ao ar livre', category: 'espaco' },
    { id: 3, src: '/gallery/galpao1.jpg', alt: 'Entrada do Galpão Brasil', category: 'galpao' },
    { id: 4, src: '/gallery/galpao2.jpg', alt: 'Interior do Galpão Brasil', category: 'galpao' },
    { id: 5, src: '/gallery/garlic1.jpg', alt: 'Ambiente do Garlic e Açafrão', category: 'garlic' },
    { id: 6, src: '/gallery/garlic2.jpg', alt: 'Decoração do Garlic e Açafrão', category: 'garlic' },
    { id: 7, src: '/gallery/prato1.jpg', alt: 'Prato especial do Galpão Brasil', category: 'pratos' },
    { id: 8, src: '/gallery/prato2.jpg', alt: 'Sobremesa do Galpão Brasil', category: 'pratos' },
    { id: 9, src: '/gallery/prato3.jpg', alt: 'Entrada do Garlic e Açafrão', category: 'pratos' },
    { id: 10, src: '/gallery/prato4.jpg', alt: 'Prato principal do Garlic e Açafrão', category: 'pratos' },
    { id: 11, src: '/gallery/evento1.jpg', alt: 'Evento especial no espaço', category: 'eventos' },
    { id: 12, src: '/gallery/evento2.jpg', alt: 'Celebração no espaço', category: 'eventos' },
  ];
  
  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);
  
  const openLightbox = (image) => {
    setSelectedImage(image);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif text-center mb-8 text-[#556B2F]">Galeria</h1>
        
        {/* Filtros */}
        <div className="flex flex-wrap justify-center mb-8">
          <button 
            className={`m-1 px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'all' 
                ? 'bg-[#8B4513] text-white' 
                : 'bg-white text-[#8B4513] hover:bg-[#8B4513]/10'
            }`}
            onClick={() => setActiveFilter('all')}
          >
            Todos
          </button>
          <button 
            className={`m-1 px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'espaco' 
                ? 'bg-[#8B4513] text-white' 
                : 'bg-white text-[#8B4513] hover:bg-[#8B4513]/10'
            }`}
            onClick={() => setActiveFilter('espaco')}
          >
            Espaço
          </button>
          <button 
            className={`m-1 px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'galpao' 
                ? 'bg-[#8B4513] text-white' 
                : 'bg-white text-[#8B4513] hover:bg-[#8B4513]/10'
            }`}
            onClick={() => setActiveFilter('galpao')}
          >
            Galpão Brasil
          </button>
          <button 
            className={`m-1 px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'garlic' 
                ? 'bg-[#8B4513] text-white' 
                : 'bg-white text-[#8B4513] hover:bg-[#8B4513]/10'
            }`}
            onClick={() => setActiveFilter('garlic')}
          >
            Garlic e Açafrão
          </button>
          <button 
            className={`m-1 px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'pratos' 
                ? 'bg-[#8B4513] text-white' 
                : 'bg-white text-[#8B4513] hover:bg-[#8B4513]/10'
            }`}
            onClick={() => setActiveFilter('pratos')}
          >
            Pratos
          </button>
          <button 
            className={`m-1 px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'eventos' 
                ? 'bg-[#8B4513] text-white' 
                : 'bg-white text-[#8B4513] hover:bg-[#8B4513]/10'
            }`}
            onClick={() => setActiveFilter('eventos')}
          >
            Eventos
          </button>
        </div>
        
        {/* Grid de imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="bg-white p-2 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-md">
                <div className="w-full h-64 bg-[#8B4513]/10 flex items-center justify-center text-[#8B4513]">
                  {/* Aqui seria a imagem real */}
                  <span className="text-sm">{image.alt}</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-700 text-center">{image.alt}</p>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeLightbox}>
            <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 bg-[#8B4513]/10 flex items-center justify-center">
                  {/* Aqui seria a imagem real ampliada */}
                  <span className="text-[#8B4513]">{selectedImage.alt}</span>
                </div>
                <button 
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-gray-800 hover:bg-white"
                  onClick={closeLightbox}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-[#8B4513]">{selectedImage.alt}</h3>
                <p className="text-gray-600 mt-1">Espaço Gastronômico Dom Leôncio</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Nota sobre as imagens */}
        <div className="mt-10 text-center text-gray-600">
          <p>As imagens são apenas representativas. No site final, serão utilizadas as fotos reais do espaço e dos pratos.</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
