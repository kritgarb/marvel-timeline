import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SagaSelector from './components/SagaSelector';

const App = () => {
  const [events, setEvents] = useState([]);
  const [allSagas, setAllSagas] = useState([]);
  const [uniqueSagas, setUniqueSagas] = useState([]);
  const [selectedSaga, setSelectedSaga] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/important-events');

      const validSagas = Array.from(new Set(
        response.data.data.results
          .filter((event) => event.saga)
          .map((event) => event.saga)
      ));

      setAllSagas(validSagas);
      setEvents(response.data.data.results);
    } catch (error) {
      console.error('Erro ao obter eventos:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setUniqueSagas((prevUniqueSagas) => {
      const uniqueSagas = Array.from(new Set([...prevUniqueSagas, ...allSagas]));
      return uniqueSagas;
    });
  }, [allSagas]);

  const handleSagaChange = (saga) => {
    setSelectedSaga(saga);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Eventos Importantes da Marvel</h1>
      <SagaSelector
        uniqueSagas={uniqueSagas}
        selectedSaga={selectedSaga}
        onSagaChange={handleSagaChange}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {events
          .filter((event) => !selectedSaga || event.saga === selectedSaga)
          .map((event) => (
            <div key={event.id} className="card">
              {event.thumbnail && (
                <img
                  src={`${event.thumbnail.path}/portrait_uncanny.${event.thumbnail.extension}`}
                  alt={event.title}
                  className="event-image"
                />
              )}
              <div className="event-details">
                <h2 className="event-title">{event.title}</h2>
                <p className="event-description">
                  {event.description || 'Descrição não disponível.'}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
