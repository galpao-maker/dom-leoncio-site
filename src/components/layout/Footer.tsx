import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#556B2F] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Dom Leôncio</h3>
            <p className="mb-2">Espaço Gastronômico</p>
            <p className="mb-2">Uma experiência gastronômica autêntica em harmonia com a natureza</p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Restaurantes</h3>
            <ul className="space-y-2">
              <li>Galpão Brasil</li>
              <li>Garlic e Açafrão</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Contato</h3>
            <p className="mb-2">Telefone: (XX) XXXX-XXXX</p>
            <p className="mb-2">Email: contato@domleoncio.com.br</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-[#CD5C5C]" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.25c-2.69 0-2.9.01-3.95.06-1.02.05-1.69.21-2.29.45a4.67 4.67 0 0 0-1.68 1.1c-.5.48-.86 1.06-1.1 1.68-.24.6-.4 1.27-.45 2.29-.05 1.05-.06 1.26-.06 3.95s.01 2.9.06 3.95c.05 1.02.21 1.69.45 2.29.24.62.6 1.2 1.1 1.68.48.5 1.06.86 1.68 1.1.6.24 1.27.4 2.29.45 1.05.05 1.26.06 3.95.06s2.9-.01 3.95-.06c1.02-.05 1.69-.21 2.29-.45a4.67 4.67 0 0 0 1.68-1.1c.5-.48.86-1.06 1.1-1.68.24-.6.4-1.27.45-2.29.05-1.05.06-1.26.06-3.95s-.01-2.9-.06-3.95c-.05-1.02-.21-1.69-.45-2.29a4.67 4.67 0 0 0-1.1-1.68c-.48-.5-1.06-.86-1.68-1.1-.6-.24-1.27-.4-2.29-.45-1.05-.05-1.26-.06-3.95-.06z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#CD5C5C]" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#CD5C5C]" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Dom Leôncio Espaço Gastronômico. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
