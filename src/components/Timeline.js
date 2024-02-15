// src/components/Timeline.js
import React from 'react';
import Event from './Event';

const Timeline = ({ events }) => (
  <div className="max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Linha do Tempo da Marvel</h1>
    <div className="relative">
      {events.map((event, index) => (
        <React.Fragment key={event.id}>
          <Event {...event} />
          {index !== events.length - 1 && (
            <div className="absolute top-0 left-1/2 bg-gray-300 w-px h-full transform -translate-x-1/2"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default Timeline;
