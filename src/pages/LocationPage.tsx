import React from 'react';

const LocationPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif text-center mb-8 text-[#556B2F]">Localização</h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Mapa Interativo */}
            <div className="h-96 bg-[#8B4513]/10 flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-[#8B4513] mb-4">Aqui será integrado o mapa interativo com a localização do Espaço Gastronômico Dom Leôncio.</p>
                <p className="text-gray-600 text-sm">No site final, este espaço conterá um mapa do Google Maps ou OpenStreetMap com marcador personalizado e funcionalidades interativas.</p>
              </div>
            </div>
            
            {/* Informações de Localização */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-serif mb-4 text-[#8B4513]">Como Chegar</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-[#556B2F] mb-1">Endereço</h3>
                      <p className="text-gray-700">Estrada Principal, km 5 - Vale Verde</p>
                      <p className="text-gray-700">CEP: 00000-000</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-[#556B2F] mb-1">Referências</h3>
                      <p className="text-gray-700">A 2 km da entrada da cidade, próximo ao mirante.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-[#556B2F] mb-1">De Carro</h3>
                      <p className="text-gray-700">Siga pela Estrada Principal sentido Vale Verde. Após o posto de gasolina, continue por mais 3 km. O Espaço Gastronômico estará à direita, com estacionamento próprio.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-[#556B2F] mb-1">Transporte Público</h3>
                      <p className="text-gray-700">Pegue a linha 123 - Vale Verde no terminal central. Desça no ponto "Mirante" e caminhe cerca de 500 metros.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-serif mb-4 text-[#8B4513]">Informações Adicionais</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-[#556B2F] mb-1">Horário de Funcionamento</h3>
                      <p className="text-gray-700">Terça a Quinta: 12h às 15h e 19h às 22h</p>
                      <p className="text-gray-700">Sexta e Sábado: 12h às 16h e 19h às 23h</p>
                      <p className="text-gray-700">Domingo: 12h às 17h</p>
                      <p className="text-gray-700">Segunda: Fechado</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-[#556B2F] mb-1">Estacionamento</h3>
                      <p className="text-gray-700">Estacionamento próprio gratuito para clientes.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-[#556B2F] mb-1">Acessibilidade</h3>
                      <p className="text-gray-700">O espaço conta com rampas de acesso e banheiros adaptados.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-[#556B2F] mb-1">Contato</h3>
                      <p className="text-gray-700">Telefone: (XX) XXXX-XXXX</p>
                      <p className="text-gray-700">WhatsApp: (XX) XXXXX-XXXX</p>
                      <p className="text-gray-700">Email: contato@domleoncio.com.br</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-[#556B2F] mb-2">Compartilhar Localização</h3>
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-700 hover:text-[#8B4513]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Compartilhar
                  </button>
                  <button className="flex items-center text-gray-700 hover:text-[#8B4513]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Imprimir
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-serif mb-4 text-[#8B4513]">Dúvidas sobre como chegar?</h2>
            <p className="text-gray-700 mb-4">Entre em contato conosco e teremos prazer em ajudar com informações adicionais sobre como chegar ao Espaço Gastronômico Dom Leôncio.</p>
            <a 
              href="/contato" 
              className="inline-block bg-[#8B4513] hover:bg-[#CD5C5C] text-white py-2 px-6 rounded-md transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
