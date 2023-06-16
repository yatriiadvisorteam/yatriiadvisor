"use client"
import React, { useState } from 'react';

// Define the data for shared trips
const sharedTripsData = [
  {
    id: 1,
    destination: 'New York',
    date: 'June 20, 2023',
    description: 'Join us for an exciting trip to the Big Apple!',
  },
  {
    id: 2,
    destination: 'Paris',
    date: 'July 5, 2023',
    description: 'Experience the romantic charm of Paris!',
  },
  // Add more shared trip data as needed
];

// Component for displaying the shared trip details
const TripDetails = ({ trip}) => {
  return (
    <div className="p-4 border border-gray-300">
      <h2 className="text-xl font-bold">{trip.destination}</h2>
      <p className="text-gray-600">Date: {trip.date}</p>
      <p className="mt-2">{trip.description}</p>
    </div>
  );
};

// Component for the shared trip page
const SharedTrip = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);

  // Function to handle clicking on a trip
  const handleTripClick = (trip :any) => {
    setSelectedTrip(trip);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Shared Trips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Render the list of shared trips */}
        {sharedTripsData.map((trip) => (
          <div
            key={trip.id}
            className="p-4 border border-gray-300 cursor-pointer"
            onClick={() => handleTripClick(trip)}
          >
            <h2 className="text-lg font-bold">{trip.destination}</h2>
            <p className="text-gray-600">Date: {trip.date}</p>
          </div>
        ))}
      </div>
    
      {selectedTrip && <TripDetails trip={selectedTrip} />}
    </div>
  );
};

export default SharedTrip;
