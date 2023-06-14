"use client"
import React from 'react';

const FavoritePlaces = () => {
  const places = [
    { name: 'Beach', image: '/goa.jpg' },
    { name: 'Mountain', image: '/Mountain.jpg' },
    { name: 'City', image: '/city.jpg' },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {places.map((place, index) => (
        <div key={index} className="w-64 m-4">
          <div className="relative">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 p-2 bg-gray-800 bg-opacity-75 text-white rounded-b-lg">
              <span>{place.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoritePlaces;
