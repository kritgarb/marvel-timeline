import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/events');
        setEvents(response.data.data.results);
      } catch (error) {
        console.error('Erro ao obter eventos:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Eventos da Marvel</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <strong>Data de Início:</strong> {event.start}
            <br />
            <strong>Data de Fim:</strong> {event.end}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
