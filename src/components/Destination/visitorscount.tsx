"use client"
import React from "react";
const Visitors = () => {
  const images = [
    {
      id: 1,
      src: '/Malpe.jpg',
      alt: 'Image 4',
      link: 'https://example.com/image2',
      place: "Malpe",
    rating: 4.7,
    count: 61200,
    },
    {
      id: 2,
      src: "/goa.jpg",
      alt: "Image 1",
      link: "https://example.com/image1",
      place: "Goa",
      rating: 4.5,
      count: 45100,
    },
    {
      id: 3,
      src: "/Hampi.jpg",
      alt: "Image 2",
      link: "https://example.com/image2",
      place: "Hampi",
      rating: 4.2,
      count: 43580,
    },
    {
      id: 4,
      src: "/Kochi.jpg",
      alt: "Image 3",
      link: "https://example.com/image3",
      place: "Kochi",
      rating: 4.7,
      count: 14620,
    }, {
      id: 5,
      src: '/lotus.jpg',
      alt: 'Image 6',
      link: 'https://example.com/image2',
      place: "Lotus temple",
      rating: 4.9,
      count: 12239,
    },
 
  
      {
        id: 6,
        src: '/Mysuru.jpg',
        alt: 'Image 5',
        link: 'https://example.com/image1',
        place: "Mysuru",
      rating: 4.7,
      count: 12007,
      },
      
  ];

  return (
    <div className="grid grid-cols-4 flex gap-6 pl-4">
      {images.map((image) => (
        <a
          key={image.id}
          href={image.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border border-button bg-white rounded overflow-hidden">
            <img
              className="h-[200px] w-full"
              src={image.src}
              alt={image.alt}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{image.place}</h3>
              <p className="text-sm mb-2">
                Rating: {image.rating} ({image.count} visitors)
              </p>
              <button className="bg-button hover:bg-hover text-white font-bold py-2 px-4 rounded-full">
                View Details
              </button>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Visitors;