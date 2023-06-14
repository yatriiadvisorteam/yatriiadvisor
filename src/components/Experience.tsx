"use client"
import React, { useState } from 'react';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExperience = {
      title,
      description,
    };
    setExperiences([...experiences, newExperience]);
    setTitle('');
    setDescription('');
  };

  return (
    <div className='container pl-8'>
      <h1 className="text-2xl font-bold font-roboto text-button mb-4">Trip Experiences</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="font-medium font-roboto text-button mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="description" className="font-medium font-roboto text-button mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-button text-white py-2 px-4 rounded hover:bg-blue-900"
        >
          Add Experience
        </button>
      </form>

      {experiences.length > 0 ? (
        <div className='pl-8 pr-8'>
          <h2 className="text-xl font-medium font-roboto text-button mb-2">Saved Experiences</h2>
          {experiences.map((experience, index) => (
            <div key={index} className="border bg-white border-button rounded p-4 mb-4">
              <h2 className="text-lg font-medium font-roboto text-center  text-hover mb-2">{experience.title}</h2>
              <p  className="text-lg font-medium font-roboto text-button mb-2">{experience.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No experiences yet.</p>
      )}
    </div>
  );
};

export default Experience;
