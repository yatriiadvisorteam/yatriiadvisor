"use client"
import React, { useState } from 'react';


import image1 from '/goa.jpg';
import image2 from '/Mysuru.jpg';
import image3 from '/Chennai.jpg';

const Destination: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const destinations = [
    { name: 'Goa', season: 'Summer', state: 'goa', image: image1 },
    { name: 'Mysuru', season: 'Spring', state: 'Karnataka', image: image2 },
    { name: 'Chennai', season: 'Winter', state: 'Chennai', image: image3 },
    // Add more destinations as needed
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    console.log(`Navigating to ${image}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Destination Page</h1>
      <div className="my-4">
        <label htmlFor="season" className="mr-2">
          Search by Season:
        </label>
        <select id="season" className="px-2 py-1 border border-gray-400 rounded">
          <option value="">All Seasons</option>
          <option value="Summer">Summer</option>
          <option value="Spring">Spring</option>
          <option value="Winter">Winter</option>
          <option value="Autumn">Autumn</option>
        </select>
      </div>
      <div className="my-4">
        <label htmlFor="state" className="mr-2">
          Search by State:
        </label>
        <select id="state" className="px-2 py-1 border border-gray-400 rounded">
          <option value="">All States</option>
          <option value="California">California</option>
          <option value="New York">New York</option>
          <option value="Colorado">Colorado</option>
          <option value="Florida">Florida</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleImageClick(destination.image)}
          >
            <img src={destination.image} alt={destination.name} className="w-full h-auto" />
            <p className="text-lg font-semibold">{destination.name}</p>
            <p>Season: {destination.season}</p>
            <p>State: {destination.state}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
