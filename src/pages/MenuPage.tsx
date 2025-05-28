import React, { useState } from 'react';

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState('galpao');

  const menuGalpao = {
    entradas: [
      { name: 'Pão de alho com patê', description: 'Pão caseiro com alho e ervas, acompanhado de patê cremoso', price: 'R$ 28,00' },
      { name: 'Bolinho de mandioca', description: 'Bolinhos crocantes de mandioca com recheio de carne seca', price: 'R$ 32,00' },
      { name: 'Dadinho de tapioca', description: 'Cubos crocantes de tapioca com queijo coalho, servidos com geleia de pimenta', price: 'R$ 30,00' }
    ],
    principais: [
      { name: 'Feijoada completa', description: 'Tradicional feijoada com carnes nobres, acompanha arroz, couve, farofa e laranja', price: 'R$ 75,00' },
      { name: 'Moqueca de peixe', description: 'Peixe fresco cozido no leite de coco com pimentões, tomate e coentro, acompanha arroz e pirão', price: 'R$ 85,00' },
      { name: 'Picadinho de filé', description: 'Cubos de filé mignon salteados com legumes, servido com arroz, feijão e farofa', price: 'R$ 68,00' },
      { name: 'Baião de dois', description: 'Arroz e feijão de corda cozidos juntos com queijo coalho, acompanha carne de sol e vinagrete', price: 'R$ 62,00' }
    ],
    sobremesas: [
      { name: 'Pudim de leite', description: 'Clássico pudim de leite condensado com calda de caramelo', price: 'R$ 22,00' },
      { name: 'Cartola', description: 'Banana frita com queijo coalho, canela e açúcar', price: 'R$ 25,00' },
      { name: 'Cocada cremosa', description: 'Cocada mole servida quente com sorvete de creme', price: 'R$ 28,00' }
    ],
    bebidas: [
      { name: 'Caipirinha', description: 'Tradicional ou com frutas da estação', price: 'R$ 25,00' },
      { name: 'Suco natural', description: 'Diversos sabores', price: 'R$ 15,00' },
      { name: 'Água mineral', description: 'Com ou sem gás', price: 'R$ 8,00' },
      { name: 'Cerveja artesanal', description: 'Consulte opções disponíveis', price: 'R$ 22,00' }
    ]
  };

  const menuGarlic = {
    entradas: [
      { name: 'Bruschetta de tomate', description: 'Fatias de pão italiano com tomate, manjericão e azeite aromatizado', price: 'R$ 26,00' },
      { name: 'Carpaccio de abobrinha', description: 'Finas fatias de abobrinha com lascas de parmesão e azeite de ervas', price: 'R$ 30,00' },
      { name: 'Homus com pão sírio', description: 'Pasta de grão de bico com tahine, servido com pão sírio tostado', price: 'R$ 28,00' }
    ],
    principais: [
      { name: 'Risoto de açafrão', description: 'Arroz arbóreo cremoso com açafrão e cogumelos frescos', price: 'R$ 65,00' },
      { name: 'Peixe ao molho de ervas', description: 'Filé de peixe grelhado com molho de ervas frescas, acompanha purê de batata e legumes', price: 'R$ 72,00' },
      { name: 'Gnocchi ao pesto', description: 'Gnocchi caseiro com molho pesto de manjericão e nozes', price: 'R$ 58,00' },
      { name: 'Frango ao alho e limão', description: 'Peito de frango grelhado marinado em alho e limão, com legumes salteados', price: 'R$ 60,00' }
    ],
    sobremesas: [
      { name: 'Panna cotta', description: 'Clássica sobremesa italiana com calda de frutas vermelhas', price: 'R$ 24,00' },
      { name: 'Torta de maçã', description: 'Torta caseira de maçã com canela, servida quente com sorvete', price: 'R$ 26,00' },
      { name: 'Mousse de chocolate', description: 'Mousse aerada de chocolate meio amargo com raspas de chocolate', price: 'R$ 22,00' }
    ],
    bebidas: [
      { name: 'Chá gelado', description: 'Diversos sabores com ervas frescas', price: 'R$ 14,00' },
      { name: 'Suco detox', description: 'Combinação de frutas e vegetais', price: 'R$ 16,00' },
      { name: 'Água aromatizada', description: 'Com frutas e ervas da casa', price: 'R$ 10,00' },
      { name: 'Vinho em taça', description: 'Consulte opções disponíveis', price: 'R$ 28,00' }
    ]
  };

  const renderMenu = (menu) => {
    return (
      <div className="space-y-10">
        <section>
          <h3 className="text-2xl font-serif mb-4 text-[#8B4513] border-b border-[#8B4513]/20 pb-2">Entradas</h3>
          <div className="space-y-4">
            {menu.entradas.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <h4 className="font-medium text-[#556B2F]">{item.name}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <span className="font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h3 className="text-2xl font-serif mb-4 text-[#8B4513] border-b border-[#8B4513]/20 pb-2">Pratos Principais</h3>
          <div className="space-y-4">
            {menu.principais.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <h4 className="font-medium text-[#556B2F]">{item.name}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <span className="font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h3 className="text-2xl font-serif mb-4 text-[#8B4513] border-b border-[#8B4513]/20 pb-2">Sobremesas</h3>
          <div className="space-y-4">
            {menu.sobremesas.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <h4 className="font-medium text-[#556B2F]">{item.name}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <span className="font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h3 className="text-2xl font-serif mb-4 text-[#8B4513] border-b border-[#8B4513]/20 pb-2">Bebidas</h3>
          <div className="space-y-4">
            {menu.bebidas.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <h4 className="font-medium text-[#556B2F]">{item.name}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <span className="font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif text-center mb-8 text-[#556B2F]">Nossos Cardápios</h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex mb-8 border-b border-gray-200">
            <button
              className={`py-3 px-6 font-medium transition-colors ${
                activeTab === 'galpao' 
                  ? 'text-[#8B4513] border-b-2 border-[#8B4513]' 
                  : 'text-gray-500 hover:text-[#8B4513]'
              }`}
              onClick={() => setActiveTab('galpao')}
            >
              Galpão Brasil
            </button>
            <button
              className={`py-3 px-6 font-medium transition-colors ${
                activeTab === 'garlic' 
                  ? 'text-[#8B4513] border-b-2 border-[#8B4513]' 
                  : 'text-gray-500 hover:text-[#8B4513]'
              }`}
              onClick={() => setActiveTab('garlic')}
            >
              Garlic e Açafrão
            </button>
          </div>
          
          {/* Menu Content */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            {activeTab === 'galpao' ? (
              <>
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-serif mb-2 text-[#8B4513]">Galpão Brasil</h2>
                  <p className="text-gray-700">Culinária brasileira autêntica em um ambiente rústico e acolhedor</p>
                </div>
                {renderMenu(menuGalpao)}
              </>
            ) : (
              <>
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-serif mb-2 text-[#8B4513]">Garlic e Açafrão</h2>
                  <p className="text-gray-700">Comida caseira com toques especiais em um ambiente biofílico e tranquilo</p>
                </div>
                {renderMenu(menuGarlic)}
              </>
            )}
            
            <div className="mt-10 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 italic mb-4">Os preços e disponibilidade dos itens podem variar conforme a sazonalidade dos ingredientes.</p>
              <a 
                href="#" 
                className="inline-block bg-[#8B4513] hover:bg-[#CD5C5C] text-white py-2 px-6 rounded-md transition-colors"
              >
                Baixar Cardápio Completo (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
