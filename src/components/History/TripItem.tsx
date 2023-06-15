"use client"
import React from 'react';
interface Trip {
    id: number;
    title: string;
    location: string;
    date: string;
    src: string;
  }

const TripItem = ({ trip }: { trip: Trip }) => {
  const { title, location, date, src } = trip;

  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <div className="p-4 border border-gray-300 rounded-md">
      <img src={`/public/${src}`} alt={title} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{location}</p>
      <p>{date}</p>
    </div>
    </div>
  );
};

export default TripItem;
