// src/components/Navbar.js
import React from 'react';

const Navbar = ({ onSagaChange, selectedSaga }) => {
  const sagas = ['Saga 1', 'Saga 2', 'Saga 3']; // Adicione suas sagas aqui

  return (
    <nav className="bg-gradient-to-r from-red-800 to-red-600 py-4 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-3xl">Escolha a Saga:</div>
        <div className="flex space-x-4">
          {sagas.map(saga => (
            <button
              key={saga}
              className={`text-white py-2 px-4 rounded ${
                selectedSaga === saga
                  ? 'bg-white text-red-800 font-bold focus:outline-none focus:ring focus:border-blue-300 transform hover:scale-105'
                  : 'bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white hover:text-gray-100 focus:outline-none focus:ring focus:border-blue-300 transform hover:scale-105'
              }`}
              onClick={() => onSagaChange(saga)}
            >
              {saga}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
