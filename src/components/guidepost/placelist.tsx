"use client"
import React, { useState } from 'react';

const PlaceForm: React.FC = () => {
  const [place, setPlace] = useState('');
  const [destination, setDestination] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Create a data object with the place or destination details
    const data = {
      place,
      destination,
      image: image ? URL.createObjectURL(image) : null,
    };

    // Post the data as a frame to the parent window
    window.parent.postMessage(data, '*');

    // Reset form fields
    setPlace('');
    setDestination('');
    setImage(null);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mb-4">
        <label htmlFor="place" className="mb-1 font-bold">
          Place
        </label>
        <input
          type="text"
          id="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2"
          required
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="destination" className="mb-1 font-bold">
          Destination
        </label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2"
          required
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="image" className="mb-1 font-bold">
          Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="border border-gray-400 rounded px-3 py-2"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default PlaceForm;
