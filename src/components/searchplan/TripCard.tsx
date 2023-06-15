"use client"
import React from 'react';

const TripCard = ({ plan}) => {
  const { title, description, duration, price } = plan;

  return (
    <div className="bg-white border-hover border shadow-md rounded-md p-4">
      <h2 className="text-xl text-button font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-600 mb-2">Duration: {duration}</p>
      <p className="text-gray-600">Price: {price}</p>
    </div>
  );
};

export default TripCard;
