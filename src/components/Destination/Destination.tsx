"use client"
import React, { useState } from 'react';
import { destinationsData } from './destinationData';

const Destinations: React.FC = () => {
  const [searchSeason, setSearchSeason] = useState('');
  const [searchState, setSearchState] = useState('');
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Filter destinations based on search criteria
  const filteredDestinations = destinationsData.filter(
    (destination: { season: string; state: string }) =>
      destination.season.toLowerCase().includes(searchSeason.toLowerCase()) &&
      destination.state.toLowerCase().includes(searchState.toLowerCase())
  );

  const handleDestinationClick = (destination: any) => {
    setSelectedDestination(destination);
  };

  return (
    <div>
      <div className="flex space-x-4 pb-4  justify-center mb-4">
        <input
          type="text"
          placeholder="Search by season"
          value={searchSeason}
          onChange={(e) => setSearchSeason(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded"
        />

        <input
          type="text"
          placeholder="Search by state"
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded"
        />
      </div>

      {filteredDestinations.length > 0 ? (
        <ul className="grid grid-cols-3 gap-4">
          {filteredDestinations.map((destination: any) => (
            <li key={destination.id} className="bg-white shadow rounded">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover rounded-t cursor-pointer"
                onClick={() => handleDestinationClick(destination)}
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{destination.name}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  Season: {destination.season}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  State: {destination.state}
                </p>
                <p className="text-sm text-gray-500">{destination.details}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-red-500 font-roboto font-bold text-2xl">
          No destinations found
        </p>
      )}

      {selectedDestination && (
        <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-2">
              {selectedDestination.name}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              Season: {selectedDestination.season}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              State: {selectedDestination.state}
            </p>
            <p className="text-sm text-gray-500">
              {selectedDestination.details}
            </p>
            <button
              onClick={() => setSelectedDestination(null)}
              className="bg-blue-500 text-white  px-4 py-2 mt-4 rounded-full bg-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;
