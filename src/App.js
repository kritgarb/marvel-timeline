// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedSaga, setSelectedSaga] = useState(null);

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

  const handleSagaChange = saga => {
    setSelectedSaga(saga);
    // Adicione lógica para filtrar eventos com base na saga selecionada, se necessário
  };

  return (
    <div>
      <Navbar onSagaChange={handleSagaChange} selectedSaga={selectedSaga} />
      <Timeline events={events} />
    </div>
  );
}

export default App;
