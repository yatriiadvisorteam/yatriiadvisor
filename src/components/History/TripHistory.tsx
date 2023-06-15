"use client"
import React, { useState } from 'react';

// Sample trip data
const tripData = [
  { imageUrl: '/goa.jpg', date: '2023-05-01' },
  { imageUrl: 'url2.jpg', date: '2023-05-05' },
  { imageUrl: 'url3.jpg', date: '2023-05-12' },
  // Add more trip objects as needed
];

const History1 = () => {
  const [filter, setFilter] = useState('');

  const filteredTrips = tripData.filter(trip =>
    trip.date.includes(filter)
  );

  return (
    <div className="flex flex-col items-start">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by date"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded-md"
        />
      </div>
      {filteredTrips.map((trip, index) => (
        <div key={index} className="flex items-center border bg-white mb-4">
          <div className="w-16 h-16 bg-gray-200">
            <img
              src={trip.imageUrl}
              alt={`Trip ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold">Trip {index + 1}</h3>
            <p className="text-gray-500">{trip.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History1;
