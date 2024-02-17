// SagaSelector.js
import React from 'react';

const SagaSelector = ({ uniqueSagas, selectedSaga, onSagaChange }) => {
  console.log('SagaSelector - Rendering');
  console.log('SagaSelector - uniqueSagas:', uniqueSagas);
  console.log('SagaSelector - selectedSaga:', selectedSaga);

  return (
    <div>
      <label htmlFor="sagaSelector">Escolha a Saga:</label>
      <select
        id="sagaSelector"
        value={selectedSaga}
        onChange={(e) => onSagaChange(e.target.value)}
      >
        <option value="">Todas as Sagas</option>
        {uniqueSagas.map((saga) => (
          <option key={saga} value={saga}>
            {saga}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SagaSelector;
