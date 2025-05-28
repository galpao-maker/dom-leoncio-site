import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif text-center mb-8 text-[#556B2F]">Sobre Nós</h1>
        
        <div className="max-w-4xl mx-auto">
          {/* História */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-serif mb-6 text-[#8B4513]">Nossa História</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  O Espaço Gastronômico Dom Leôncio nasceu do sonho de criar um ambiente onde a gastronomia e a natureza pudessem coexistir em perfeita harmonia. Fundado em 2018, nosso espaço foi cuidadosamente planejado para preservar as árvores e elementos naturais do terreno, integrando-os à arquitetura rústica e acolhedora.
                </p>
                <p className="text-gray-700 mb-4">
                  O nome "Dom Leôncio" é uma homenagem ao patriarca da família, que sempre valorizou as refeições como momentos de união e celebração. Sua paixão pela culinária autêntica e pelo acolhimento caloroso são valores que mantemos vivos em cada detalhe do nosso espaço.
                </p>
                <p className="text-gray-700">
                  Ao longo dos anos, crescemos e evoluímos, mas nunca perdemos nossa essência: oferecer uma experiência gastronômica autêntica em um ambiente que celebra a conexão com a natureza e valoriza os sabores genuínos.
                </p>
              </div>
              <div className="md:w-1/2 bg-[#8B4513]/10 rounded-lg flex items-center justify-center p-4">
                <div className="text-center text-[#8B4513]">
                  <p>Imagem da fachada do espaço</p>
                  <p className="text-sm mt-2">No site final, esta área conterá uma imagem real do espaço.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Nossos Restaurantes */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-serif mb-6 text-[#8B4513]">Nossos Restaurantes</h2>
            
            <div className="space-y-8">
              {/* Galpão Brasil */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 bg-[#8B4513]/10 rounded-lg flex items-center justify-center p-4 order-1 md:order-1">
                  <div className="text-center text-[#8B4513]">
                    <p>Imagem do Galpão Brasil</p>
                    <p className="text-sm mt-2">No site final, esta área conterá uma imagem real do restaurante.</p>
                  </div>
                </div>
                <div className="md:w-1/2 order-2 md:order-2">
                  <h3 className="text-xl font-serif mb-3 text-[#556B2F]">Galpão Brasil</h3>
                  <p className="text-gray-700 mb-4">
                    O Galpão Brasil celebra a riqueza da culinária brasileira em um ambiente rústico e acolhedor. Cada prato é uma homenagem às tradições culinárias das diversas regiões do país, preparados com ingredientes frescos e técnicas que preservam os sabores autênticos.
                  </p>
                  <p className="text-gray-700">
                    Com uma decoração que remete ao interior do Brasil, o restaurante oferece uma experiência completa, onde os sabores, aromas e a atmosfera se complementam para criar momentos memoráveis.
                  </p>
                </div>
              </div>
              
              {/* Garlic e Açafrão */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 order-2 md:order-1">
                  <h3 className="text-xl font-serif mb-3 text-[#556B2F]">Garlic e Açafrão</h3>
                  <p className="text-gray-700 mb-4">
                    O Garlic e Açafrão nasceu da paixão por uma gastronomia que abraça e conforta. Em um ambiente biofílico e tranquilo, oferecemos pratos que combinam técnicas refinadas com o aconchego da comida caseira.
                  </p>
                  <p className="text-gray-700">
                    Especializados em pratos que valorizam ervas aromáticas e especiarias, como o alho e o açafrão que dão nome ao restaurante, criamos uma experiência gastronômica que estimula os sentidos e proporciona momentos de verdadeiro prazer à mesa.
                  </p>
                </div>
                <div className="md:w-1/2 bg-[#8B4513]/10 rounded-lg flex items-center justify-center p-4 order-1 md:order-2">
                  <div className="text-center text-[#8B4513]">
                    <p>Imagem do Garlic e Açafrão</p>
                    <p className="text-sm mt-2">No site final, esta área conterá uma imagem real do restaurante.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Nossa Filosofia */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-serif mb-6 text-[#8B4513]">Nossa Filosofia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#556B2F]/10 text-[#556B2F]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-2 text-[#8B4513]">Respeito à Natureza</h3>
                <p className="text-gray-700">
                  Acreditamos que a gastronomia deve estar em harmonia com o meio ambiente. Por isso, nosso espaço foi construído preservando as árvores e elementos naturais, criando uma experiência única de integração.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#556B2F]/10 text-[#556B2F]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-2 text-[#8B4513]">Autenticidade</h3>
                <p className="text-gray-700">
                  Valorizamos o autêntico em tudo que fazemos. Desde os ingredientes selecionados até a arquitetura genuinamente rústica, buscamos oferecer uma experiência verdadeira e sem artificialidades.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#556B2F]/10 text-[#556B2F]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-2 text-[#8B4513]">Excelência Gastronômica</h3>
                <p className="text-gray-700">
                  Comprometemo-nos com a excelência em cada prato que servimos. Selecionamos cuidadosamente os ingredientes, valorizamos técnicas tradicionais e investimos na criatividade para proporcionar experiências gastronômicas memoráveis.
                </p>
              </div>
            </div>
          </div>
          
          {/* Equipe */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-serif mb-6 text-[#8B4513]">Nossa Equipe</h2>
            
            <p className="text-gray-700 mb-6 text-center">
              Por trás do Espaço Gastronômico Dom Leôncio está uma equipe apaixonada e dedicada, comprometida em proporcionar experiências inesquecíveis a cada visitante.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#8B4513]/10 flex items-center justify-center text-[#8B4513]">
                  <p>Foto</p>
                </div>
                <h3 className="font-medium text-[#556B2F]">Carlos Mendes</h3>
                <p className="text-gray-700">Proprietário e Chef Executivo</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#8B4513]/10 flex items-center justify-center text-[#8B4513]">
                  <p>Foto</p>
                </div>
                <h3 className="font-medium text-[#556B2F]">Ana Oliveira</h3>
                <p className="text-gray-700">Chef do Galpão Brasil</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#8B4513]/10 flex items-center justify-center text-[#8B4513]">
                  <p>Foto</p>
                </div>
                <h3 className="font-medium text-[#556B2F]">Ricardo Souza</h3>
                <p className="text-gray-700">Chef do Garlic e Açafrão</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700">
                Nossa equipe é formada por profissionais apaixonados pela gastronomia e pelo atendimento de excelência. Cada membro contribui com seu talento e dedicação para criar uma experiência completa e memorável para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
