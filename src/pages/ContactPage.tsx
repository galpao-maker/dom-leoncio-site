import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log(formData);
    setIsSubmitted(true);
  };
  
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-serif mb-4 text-[#556B2F]">Mensagem Enviada!</h1>
              <p className="text-gray-700 mb-6">
                Obrigado por entrar em contato conosco. Recebemos sua mensagem e retornaremos em breve.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-[#8B4513] hover:bg-[#CD5C5C] text-white py-2 px-6 rounded-md transition-colors"
              >
                Enviar Nova Mensagem
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif text-center mb-8 text-[#556B2F]">Contato</h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informações de Contato */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif mb-6 text-[#8B4513]">Fale Conosco</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#556B2F]/10 text-[#556B2F]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-[#556B2F]">Telefone</h3>
                    <p className="text-gray-700">(XX) XXXX-XXXX</p>
                    <p className="text-gray-700">(XX) XXXXX-XXXX (WhatsApp)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#556B2F]/10 text-[#556B2F]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-[#556B2F]">Email</h3>
                    <p className="text-gray-700">contato@domleoncio.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#556B2F]/10 text-[#556B2F]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-[#556B2F]">Endereço</h3>
                    <p className="text-gray-700">Estrada Principal, km 5 - Vale Verde</p>
                    <p className="text-gray-700">CEP: 00000-000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#556B2F]/10 text-[#556B2F]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-[#556B2F]">Horário de Funcionamento</h3>
                    <p className="text-gray-700">Terça a Quinta: 12h às 15h e 19h às 22h</p>
                    <p className="text-gray-700">Sexta e Sábado: 12h às 16h e 19h às 23h</p>
                    <p className="text-gray-700">Domingo: 12h às 17h</p>
                    <p className="text-gray-700">Segunda: Fechado</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-[#556B2F] mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8B4513] text-white hover:bg-[#CD5C5C] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.25c-2.69 0-2.9.01-3.95.06-1.02.05-1.69.21-2.29.45a4.67 4.67 0 0 0-1.68 1.1c-.5.48-.86 1.06-1.1 1.68-.24.6-.4 1.27-.45 2.29-.05 1.05-.06 1.26-.06 3.95s.01 2.9.06 3.95c.05 1.02.21 1.69.45 2.29.24.62.6 1.2 1.1 1.68.48.5 1.06.86 1.68 1.1.6.24 1.27.4 2.29.45 1.05.05 1.26.06 3.95.06s2.9-.01 3.95-.06c1.02-.05 1.69-.21 2.29-.45a4.67 4.67 0 0 0 1.68-1.1c.5-.48.86-1.06 1.1-1.68.24-.6.4-1.27.45-2.29.05-1.05.06-1.26.06-3.95s-.01-2.9-.06-3.95c-.05-1.02-.21-1.69-.45-2.29a4.67 4.67 0 0 0-1.1-1.68c-.48-.5-1.06-.86-1.68-1.1-.6-.24-1.27-.4-2.29-.45-1.05-.05-1.26-.06-3.95-.06z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8B4513] text-white hover:bg-[#CD5C5C] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8B4513] text-white hover:bg-[#CD5C5C] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Formulário de Contato */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif mb-6 text-[#8B4513]">Envie uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Nome Completo*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="subject">
                    Assunto*
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Reservas">Reservas</option>
                    <option value="Eventos">Eventos</option>
                    <option value="Informações">Informações</option>
                    <option value="Sugestões">Sugestões</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Mensagem*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#8B4513] hover:bg-[#CD5C5C] text-white py-3 px-6 rounded-md transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="mt-10 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-serif mb-4 text-[#8B4513]">Perguntas Frequentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-[#556B2F] mb-1">É necessário fazer reserva?</h3>
                <p className="text-gray-700">Recomendamos reservas, especialmente para fins de semana e feriados, mas também atendemos por ordem de chegada, sujeito à disponibilidade.</p>
              </div>
              <div>
                <h3 className="font-medium text-[#556B2F] mb-1">Aceitam cartões de crédito/débito?</h3>
                <p className="text-gray-700">Sim, aceitamos as principais bandeiras de cartões de crédito e débito, além de dinheiro e PIX.</p>
              </div>
              <div>
                <h3 className="font-medium text-[#556B2F] mb-1">Posso realizar eventos no espaço?</h3>
                <p className="text-gray-700">Sim, oferecemos opções para eventos privados. Entre em contato para mais informações e disponibilidade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
