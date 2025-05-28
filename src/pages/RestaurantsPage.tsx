import React from 'react';

const RestaurantsPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif text-center mb-8 text-[#556B2F]">Nossos Restaurantes</h1>
        
        {/* Galpão Brasil */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto bg-[#8B4513]/10 flex items-center justify-center p-4">
                <div className="text-center text-[#8B4513]">
                  <p>Imagem do Galpão Brasil</p>
                  <p className="text-sm mt-2">No site final, esta área conterá uma imagem real do restaurante.</p>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-serif mb-4 text-[#8B4513]">Galpão Brasil</h2>
                <p className="text-gray-700 mb-4">
                  O Galpão Brasil celebra a riqueza da culinária brasileira em um ambiente rústico e acolhedor. Cada prato é uma homenagem às tradições culinárias das diversas regiões do país, preparados com ingredientes frescos e técnicas que preservam os sabores autênticos.
                </p>
                <p className="text-gray-700 mb-6">
                  Com uma decoração que remete ao interior do Brasil, o restaurante oferece uma experiência completa, onde os sabores, aromas e a atmosfera se complementam para criar momentos memoráveis.
                </p>
                <div className="flex space-x-4">
                  <a href="/cardapios" className="bg-[#8B4513] hover:bg-[#CD5C5C] text-white py-2 px-4 rounded-md transition-colors text-sm">
                    Ver Cardápio
                  </a>
                  <a href="/reservas" className="bg-transparent border border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513]/10 py-2 px-4 rounded-md transition-colors text-sm">
                    Reservar Mesa
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-medium text-[#556B2F] mb-2">Especialidades</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Feijoada Completa</li>
                <li>Moqueca de Peixe</li>
                <li>Picadinho de Filé</li>
                <li>Baião de Dois</li>
                <li>Bolinhos de Mandioca</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-medium text-[#556B2F] mb-2">Ambiente</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Decoração rústica brasileira</li>
                <li>Mesas de madeira e alvenaria</li>
                <li>Área externa integrada à natureza</li>
                <li>Música ambiente brasileira</li>
                <li>Iluminação aconchegante</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-medium text-[#556B2F] mb-2">Horário de Funcionamento</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Terça a Quinta: 12h às 15h e 19h às 22h</li>
                <li>Sexta e Sábado: 12h às 16h e 19h às 23h</li>
                <li>Domingo: 12h às 17h</li>
                <li>Segunda: Fechado</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Garlic e Açafrão */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/2 h-64 md:h-auto bg-[#8B4513]/10 flex items-center justify-center p-4">
                <div className="text-center text-[#8B4513]">
                  <p>Imagem do Garlic e Açafrão</p>
                  <p className="text-sm mt-2">No site final, esta área conterá uma imagem real do restaurante.</p>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-serif mb-4 text-[#8B4513]">Garlic e Açafrão</h2>
                <p className="text-gray-700 mb-4">
                  O Garlic e Açafrão nasceu da paixão por uma gastronomia que abraça e conforta. Em um ambiente biofílico e tranquilo, oferecemos pratos que combinam técnicas refinadas com o aconchego da comida caseira.
                </p>
                <p className="text-gray-700 mb-6">
                  Especializados em pratos que valorizam ervas aromáticas e especiarias, como o alho e o açafrão que dão nome ao restaurante, criamos uma experiência gastronômica que estimula os sentidos e proporciona momentos de verdadeiro prazer à mesa.
                </p>
                <div className="flex space-x-4">
                  <a href="/cardapios" className="bg-[#8B4513] hover:bg-[#CD5C5C] text-white py-2 px-4 rounded-md transition-colors text-sm">
                    Ver Cardápio
                  </a>
                  <a href="/reservas" className="bg-transparent border border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513]/10 py-2 px-4 rounded-md transition-colors text-sm">
                    Reservar Mesa
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-medium text-[#556B2F] mb-2">Especialidades</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Risoto de Açafrão</li>
                <li>Peixe ao Molho de Ervas</li>
                <li>Gnocchi ao Pesto</li>
                <li>Frango ao Alho e Limão</li>
                <li>Bruschetta de Tomate</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-medium text-[#556B2F] mb-2">Ambiente</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Decoração biofílica com muitas plantas</li>
                <li>Iluminação suave e aconchegante</li>
                <li>Espaço integrado à natureza</li>
                <li>Música ambiente relaxante</li>
                <li>Atmosfera tranquila e intimista</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-medium text-[#556B2F] mb-2">Horário de Funcionamento</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Terça a Quinta: 12h às 15h e 19h às 22h</li>
                <li>Sexta e Sábado: 12h às 16h e 19h às 23h</li>
                <li>Domingo: 12h às 17h</li>
                <li>Segunda: Fechado</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-[#556B2F] text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">Experimente Nossos Dois Restaurantes</h2>
          <p className="mb-6">
            Aproveite o melhor da gastronomia em um único espaço. Visite o Galpão Brasil e o Garlic e Açafrão para uma experiência gastronômica completa em harmonia com a natureza.
          </p>
          <a 
            href="/reservas" 
            className="inline-block bg-white text-[#556B2F] hover:bg-gray-100 py-3 px-8 rounded-md transition-colors font-medium"
          >
            Fazer Reserva
          </a>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsPage;
