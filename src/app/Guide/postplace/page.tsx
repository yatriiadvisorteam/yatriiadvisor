"use client"
import React, { useState } from 'react';

const PostPlaceDetails = () => {
  const [placeName, setPlaceName] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [bestSeason, setBestSeason] = useState('');
  const [fromMonth, setFromMonth] = useState('');
  const [toMonth, setToMonth] = useState('');
  const [bestTimeFrom, setBestTimeFrom] = useState('');
  const [bestTimeTo, setBestTimeTo] = useState('');
  const [photos, setPhotos] = useState([]);
  const [thingsToDo, setThingsToDo] = useState('');
  const [location, setLocation] = useState('');

  const handlePhotoChange = (event:any) => {
    const selectedFiles = Array.from(event.target.files);
    setPhotos(selectedFiles);
  };

  const handleSubmit = (e :any) => {
    e.preventDefault();
    // Perform form submission or data handling here
    console.log({
      placeName,
      destination,
      description,
      bestSeason,
      fromMonth,
      toMonth,
      bestTimeFrom,
      bestTimeTo,
      photos,
      thingsToDo,
      location,
    });
    // Clear form fields after submission
    setPlaceName('');
    setDestination('');
    setDescription('');
    setBestSeason('');
    setFromMonth('');
    setToMonth('');
    setBestTimeFrom('');
    setBestTimeTo('');
    setPhotos([]);
    setThingsToDo('');
    setLocation('');
  };

  return (
    <div className="container mx-auto pt-36">
      <h1 className="text-3xl font-bold my-4">Post Place Details</h1>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="placeName" className="block font-medium mb-1">
            Place Name
          </label>
          <input
            type="text"
            id="placeName"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={placeName}
            onChange={(e) => setPlaceName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="destination" className="block font-medium mb-1">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="bestSeason" className="block font-medium mb-1">
            Best Season to Visit
          </label>
          <input
            type="text"
            id="bestSeason"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={bestSeason}
            onChange={(e) => setBestSeason(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fromMonth" className="block font-medium mb-1">
            From Month
          </label>
          <input
            type="text"
            id="fromMonth"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={fromMonth}
            onChange={(e) => setFromMonth(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="toMonth" className="block font-medium mb-1">
            To Month
          </label>
          <input
            type="text"
            id="toMonth"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={toMonth}
            onChange={(e) => setToMonth(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bestTimeFrom" className="block font-medium mb-1">
            Best Time to Visit (From Time)
          </label>
          <input
            type="text"
            id="bestTimeFrom"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={bestTimeFrom}
            onChange={(e) => setBestTimeFrom(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bestTimeTo" className="block font-medium mb-1">
            Best Time to Visit (To Time)
          </label>
          <input
            type="text"
            id="bestTimeTo"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={bestTimeTo}
            onChange={(e) => setBestTimeTo(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photos" className="block font-medium mb-1">
            Place Photos
          </label>
          <input
            type="file"
            id="photos"
            className="mb-2"
            multiple
            onChange={handlePhotoChange}
          />
          {photos.map((photo, index) => (
            <div key={index} className="mb-2">
              <img
                src={URL.createObjectURL(photo)}
                alt={`Place Photo ${index + 1}`}
                className="w-40 h-40 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label htmlFor="thingsToDo" className="block font-medium mb-1">
            Things to Do
          </label>
          <textarea
            id="thingsToDo"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={thingsToDo}
            onChange={(e) => setThingsToDo(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block font-medium mb-1">
            Location
          </label>
          <textarea
            id="location"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostPlaceDetails;
