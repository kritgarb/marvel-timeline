// src/components/Event.js
import React from 'react';

const Event = ({ title, description, start, end }) => (
  <div className="bg-gray-100 rounded p-4 mb-4">
    <h2 className="text-lg font-bold mb-2">{title}</h2>
    <p className="mb-2">{description}</p>
    <strong className="text-blue-500">Data de Início:</strong> {start}
    <br />
    <strong className="text-blue-500">Data de Fim:</strong> {end}
    <hr className="my-2 border-t-2 border-gray-300" />
  </div>
);

export default Event;
