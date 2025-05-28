import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReservationPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableTimes = [
    '12:00', '12:30', '13:00', '13:30', '14:00', 
    '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio da reserva
    console.log({
      selectedDate,
      selectedTime,
      selectedRestaurant,
      guests,
      name,
      email,
      phone,
      notes
    });
    
    // Simulando sucesso na reserva
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
              <h1 className="text-3xl font-serif mb-4 text-[#556B2F]">Reserva Confirmada!</h1>
              <p className="text-gray-700 mb-6">
                Obrigado por reservar uma mesa no {selectedRestaurant}. Enviamos um email de confirmação para {email} com os detalhes da sua reserva.
              </p>
              <div className="bg-gray-50 p-4 rounded-md mb-6 text-left">
                <h2 className="font-medium text-gray-800 mb-2">Detalhes da Reserva:</h2>
                <p><strong>Data:</strong> {selectedDate?.toLocaleDateString('pt-BR')}</p>
                <p><strong>Horário:</strong> {selectedTime}</p>
                <p><strong>Restaurante:</strong> {selectedRestaurant}</p>
                <p><strong>Número de pessoas:</strong> {guests}</p>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-[#8B4513] hover:bg-[#CD5C5C] text-white py-2 px-6 rounded-md transition-colors"
              >
                Fazer Nova Reserva
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
        <h1 className="text-3xl font-serif text-center mb-8 text-[#556B2F]">Reservas</h1>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-700 mb-8 text-center">
            Reserve sua mesa no Espaço Gastronômico Dom Leôncio e desfrute de uma experiência gastronômica única em harmonia com a natureza.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="restaurant">
                  Restaurante*
                </label>
                <select
                  id="restaurant"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                  value={selectedRestaurant}
                  onChange={(e) => setSelectedRestaurant(e.target.value)}
                  required
                >
                  <option value="">Selecione um restaurante</option>
                  <option value="Galpão Brasil">Galpão Brasil</option>
                  <option value="Garlic e Açafrão">Garlic e Açafrão</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="guests">
                  Número de Pessoas*
                </label>
                <select
                  id="guests"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'pessoa' : 'pessoas'}</option>
                  ))}
                  <option value="11">Mais de 10 pessoas</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="date">
                  Data*
                </label>
                <DatePicker
                  id="date"
                  selected={selectedDate}
                  onChange={date => setSelectedDate(date)}
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                  placeholderText="Selecione uma data"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="time">
                  Horário*
                </label>
                <select
                  id="time"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                >
                  <option value="">Selecione um horário</option>
                  {availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Nome Completo*
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Telefone*
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="notes">
                Observações
              </label>
              <textarea
                id="notes"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Informe aqui qualquer necessidade especial ou pedido adicional"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#8B4513] hover:bg-[#CD5C5C] text-white py-3 px-8 rounded-md transition-colors"
              >
                Confirmar Reserva
              </button>
            </div>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-serif mb-4 text-[#556B2F]">Informações Importantes</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Reservas podem ser feitas com até 30 dias de antecedência</li>
              <li>Para grupos com mais de 10 pessoas, entre em contato diretamente pelo telefone</li>
              <li>Cancelamentos devem ser feitos com pelo menos 24 horas de antecedência</li>
              <li>Reservas não confirmadas serão mantidas por até 15 minutos após o horário marcado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
