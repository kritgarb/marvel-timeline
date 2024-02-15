// App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/important-events'); // Atualize a URL da requisição
      console.log('Dados recebidos:', response.data);
      setEvents(response.data.data.results); // Atualize o estado do componente com os eventos recebidos
    } catch (error) {
      console.error('Erro ao obter eventos:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Chame a função de busca de dados quando o componente montar
  }, []); // O array vazio assegura que useEffect será executado apenas uma vez

  return (
    <div>
      <h1>Seu Título</h1>
      <nav>
        {/* Sua barra de navegação */}
      </nav>
      <div>
        {/* Renderize seus eventos aqui */}
        {events.map(event => (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
