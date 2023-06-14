"use client";
import React, { useState } from "react";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [stars, setStars] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExperience = {
      title,
      description,
      image,
      stars,
    };
    setExperiences([...experiences, newExperience]);
    setTitle("");
    setDescription("");
    setImage("");
    setStars(0);
  };

  return (
    <div className="container pl-8">
      <h1 className="text-2xl font-bold font-roboto text-button mb-4">
        Trip Experiences
      </h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex flex-col mb-4">
          <label
            htmlFor="title"
            className="font-medium font-roboto text-button mb-1"
          >
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
          <label
            htmlFor="description"
            className="font-medium font-roboto text-button mb-1"
          >
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

        <div className="flex flex-col mb-4">
          <label
            htmlFor="image"
            className="font-medium font-roboto text-button mb-1"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="stars"
            className="font-medium font-roboto text-button mb-1"
          >
            Stars
          </label>
          <input
            type="number"
            id="stars"
            value={stars}
            onChange={(e) => setStars(parseInt(e.target.value))}
            min="0"
            max="5"
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-button text-white py-2 px-4 rounded  hover:bg-blue-900"
        >
          Add Experience
        </button>
      </form>

      {experiences.length > 0 ? (
        <div className="pl-8 pr-8 w-[450px]">
          <h2 className="text-xl font-medium font-roboto text-button mb-2">
            Saved Experiences
          </h2>
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="border bg-white border-button rounded p-4 mb-4"
            >
              <h2 className="text-lg font-medium font-roboto text-center text-hover mb-2">
                {experience.title}
              </h2>
              <p className="text-lg font-medium font-roboto text-button mb-2">
                {experience.description}
              </p>
              <img
                src={experience.image}
                alt={experience.title}
                className="rounded mb-2"
              />
              <div className="flex justify-center mb-2">
                {Array.from({ length: experience.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    &#9733;
                  </span>
                ))}
              </div>
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
