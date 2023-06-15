"use client"
import React, { useState } from 'react';
import TripCard from './TripCard';

const tripsData = [
  // Sample data for different trip categories
 
  {
    category: 'All',
    plans: [
      {
        title: 'Beach Getaway',
        description: 'Relax and unwind at a beautiful beach resort.',
        duration: '5 days',
        price: '$1500',
      },
      {
        title: ' Maple Beach',
        description: 'Enjoy with playing games in beach.',
        duration: '2 days',
        price: '$1500',
      },
      {
        title: 'Ruppis Resort',
        description: 'Relax and unwind at a beautiful Engoying  resort.',
        duration: '1 days',
        price: '$1500',
      },
      {
        title: 'Adventure Retreat',
        description: 'Experience thrilling adventures in the wilderness.',
        duration: '7 days',
        price: '$2000',
      },
      {
        title: 'Goa',
        description: 'Experience thrilling adventures in the wilderness.',
        duration: '3 days',
        price: '$2500',
      },
      {
        title: 'Kerala',
        description: 'Experience thrilling Environment.',
        duration: '5 days',
        price: '$3000',
      },
      {
        title: 'Rajasthan – Rich Cultural Heritage',
        description: 'Things to do: Desert Safari, Jungle Safari, Camping in golden dunes, Elephant ride to Amer Fort, Boating in Lake Pichola and Fateh Sagar Lake, village tours, etc.',
        duration: '5 days',
        price: '$1500',
      },
      {
        title: ' Kerala – God’s Own Country',
        description: 'Things to do: Tea, coffee, and spice plantation tour, Shikara and houseboat tour in backwaters, indulge in Ayurveda and Yoga retreats, a jungle safari in Periyar and Eravikulam National Park, etc.',
        duration: '6 days',
        price: '$15000',
      },
      {
        title: 'Ladakh – Adventure of a Lifetime',
        description: 'Things to do: Camel Safari on Bactrian camel, cross the highest motorable roads like Khardungla, Chang La, Shinkhu La, Shipki La, Baralacha La, etc., bike trip to the remotest places, Chadar Trek, trek to Stok Kangri, and many more.',
        duration: '10 days',
        price: '$15000',
      },
      {
        title: 'Hampi, Karnataka',
        description: 'A constant attraction in southern India, Hampi is a UNESCO heritage site that brilliantly displays detailed carvings in rocks. It is a great place that has always been captivating travellers for years because of its historical importance, temples, and sculptures.',
        duration: '3 days',
        price: '$2500',
      },
      {
        title: 'Bannerghatta Biological Park',
        description: 'Bannerghatta is a popular tourist destination located near Bangalore. It is a biological park that is considered to be a small haven for nature lovers.',
        duration: '1 days',
        price: '$1000',
      },
      {
        title: 'Kurnool',
        description: 'Kurnool has several sites of historical importance. From the caves to the rivers, the town literally has something for everyone to take away and cherish. The longest cave system, Belur caves is one of the biggest attractions around here',
        duration: '2 days',
        price: '$2000',
      },
      {
        title: 'Srinagar',
        description: 'Here one can spend nights in beautiful Dal Lake by boarding a houseboat called shikara, and enjoy the nights stress free with friends and the heavenly breeze.',
        duration: '10 days',
        price: '$20000',
      },
      {
        title: ' Coorg',
        description: 'Coorg is an amazing place to spend time with friends and to smell the sweet coffee plantation here. This place is also regarded as Indian Scotland.The other attractions here are Abbey Falls, Nalknad Palace, Nagarhole National Park, etc.',
        duration: '5 days',
        price: '$20500',
      },
      {
        title: 'Ooty',
        description: 'Being a mighty rock mountain it is adventurous for the youths to visit this place for many kinds of adventurous sports. Other attractions are Pillars Rocks, Kodai Lake, Bear Shola Falls, etc.',
        duration: '3 days',
        price: '$6000',
      },
      
    ],
  }, {
    category: 'Boys Trips',
    plans: [
      {
        title: 'Adventure Retreat',
        description: 'Experience thrilling adventures in the wilderness.',
        duration: '7 days',
        price: '$2000',
      },
      {
        title: 'Goa',
        description: 'Experience thrilling adventures in the wilderness.',
        duration: '3 days',
        price: '$2500',
      },
      {
        title: 'Kerala',
        description: 'Experience thrilling Environment.',
        duration: '5 days',
        price: '$3000',
      },
     
    ],
  },
  {
    category: 'Girls Trips',
    plans: [
      {
        title: 'Beach Getaway',
        description: 'Relax and unwind at a beautiful beach resort.',
        duration: '5 days',
        price: '$1500',
      },
      {
        title: ' Maple Beach',
        description: 'Enjoy with playing games in beach.',
        duration: '2 days',
        price: '$1500',
      },
      {
        title: 'Ruppis Resort',
        description: 'Relax and unwind at a beautiful Engoying  resort.',
        duration: '1 days',
        price: '$1500',
      },
      
    ],
  },
  {
    category: 'Family Trips',
    plans: [
      {
        title: 'Tirupathi',
        description: 'Lord Vishnu has manifested Himself in this temple during this Kali age to guide and direct His devotees towards salvation.',
        duration: '5 days',
        price: '$5500',
      },
      {
        title: 'Se cathedral',
        description: ' The grandeur of church is unique that makes it look beautiful. The church was constructed by the Roman Catholics under the Portuguese rule.',
        duration: '2 days',
        price: '$3500',
      },
      {
        title: 'Chennai Beach',
        description: 'The Marina beach was famed for its pristine beauty, jolly ambiance, and rich ecosystems. ',
        duration: '1 days',
        price: '$1500',
      },
      
    ],
  },
  {
    category: 'Solo Trips',
    plans: [
      {
        title: 'Rajasthan – Rich Cultural Heritage',
        description: 'Things to do: Desert Safari, Jungle Safari, Camping in golden dunes, Elephant ride to Amer Fort, Boating in Lake Pichola and Fateh Sagar Lake, village tours, etc.',
        duration: '5 days',
        price: '$1500',
      },
      {
        title: ' Kerala – God’s Own Country',
        description: 'Things to do: Tea, coffee, and spice plantation tour, Shikara and houseboat tour in backwaters, indulge in Ayurveda and Yoga retreats, a jungle safari in Periyar and Eravikulam National Park, etc.',
        duration: '6 days',
        price: '$15000',
      },
      {
        title: 'Ladakh – Adventure of a Lifetime',
        description: 'Things to do: Camel Safari on Bactrian camel, cross the highest motorable roads like Khardungla, Chang La, Shinkhu La, Shipki La, Baralacha La, etc., bike trip to the remotest places, Chadar Trek, trek to Stok Kangri, and many more.',
        duration: '10 days',
        price: '$15000',
      },
      
    ],
  },
  {
    category: 'Collage Trips',
    plans: [
      {
        title: 'Srinagar',
        description: 'Here one can spend nights in beautiful Dal Lake by boarding a houseboat called shikara, and enjoy the nights stress free with friends and the heavenly breeze.',
        duration: '10 days',
        price: '$20000',
      },
      {
        title: ' Coorg',
        description: 'Coorg is an amazing place to spend time with friends and to smell the sweet coffee plantation here. This place is also regarded as Indian Scotland.The other attractions here are Abbey Falls, Nalknad Palace, Nagarhole National Park, etc.',
        duration: '5 days',
        price: '$20500',
      },
      {
        title: 'Ooty',
        description: 'Being a mighty rock mountain it is adventurous for the youths to visit this place for many kinds of adventurous sports. Other attractions are Pillars Rocks, Kodai Lake, Bear Shola Falls, etc.',
        duration: '3 days',
        price: '$6000',
      },
      
    ],
  },
  {
    category: 'School Trips',
    plans: [
      {
        title: 'Hampi, Karnataka',
        description: 'A constant attraction in southern India, Hampi is a UNESCO heritage site that brilliantly displays detailed carvings in rocks. It is a great place that has always been captivating travellers for years because of its historical importance, temples, and sculptures.',
        duration: '3 days',
        price: '$2500',
      },
      {
        title: 'Bannerghatta Biological Park',
        description: 'Bannerghatta is a popular tourist destination located near Bangalore. It is a biological park that is considered to be a small haven for nature lovers.',
        duration: '1 days',
        price: '$1000',
      },
      {
        title: 'Kurnool',
        description: 'Kurnool has several sites of historical importance. From the caves to the rivers, the town literally has something for everyone to take away and cherish. The longest cave system, Belur caves is one of the biggest attractions around here',
        duration: '2 days',
        price: '$2000',
      },
      
    ],
  },
  
];

const AvailableTrips = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category: React.SetStateAction<string>) => {
    setSelectedCategory(category);
  };

  const filteredTrips = tripsData.find((trip) => trip.category === selectedCategory);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-roboto text-button font-bold mb-4">Available Trip Plans</h1>
      <div className="flex space-x-4 mb-4">
      <button
          className={`${
            selectedCategory === 'All' ? 'bg-button text-white' : 'bg-gray-200 font-bold text-button'
          } py-2 px-4 rounded-full`}
          onClick={() => handleCategoryClick('All')}
        >
          All
        </button>
        <button
          className={`${
            selectedCategory === 'Boys Trips' ? 'bg-button text-white' : 'bg-gray-200 font-bold text-button'
          } py-2 px-4 rounded-full`}
          onClick={() => handleCategoryClick('Boys Trips')}
        >
          Boys Trips
        </button>
        <button
          className={`${
            selectedCategory === 'Girls Trips' ? 'bg-button text-white' : 'bg-gray-200 font-bold text-button'
          } py-2 px-4 rounded-full`}
          onClick={() => handleCategoryClick('Girls Trips')}
        >
          Girls Trips
        </button>
        <button
          className={`${
            selectedCategory === 'Family Trips' ? 'bg-button text-white' : 'bg-gray-200 font-bold  text-button'
          } py-2 px-4 rounded-full`}
          onClick={() => handleCategoryClick('Family Trips')}
        >
          Family Trips
        </button>
        <button
          className={`${
            selectedCategory === 'Solo Trips' ? 'bg-button text-white' : 'bg-gray-200 font-bold text-button'
          } py-2 px-4 rounded-full`}
          onClick={() => handleCategoryClick('Solo Trips')}
        >
          Solo Trips
        </button>
        <button
          className={`${
            selectedCategory === 'Collage Trips' ? 'bg-button text-white' : 'bg-gray-200 font-bold  text-button'
          } py-2 px-4 rounded-full`}
          onClick={() => handleCategoryClick('Collage Trips')}
        >
          Collage Trips
        </button>
        <button
          className={`${
            selectedCategory === 'School Trips' ? 'bg-button text-white' : 'bg-gray-200 font-bold text-button'
          } py-2 px-4 rounded-full`}
          onClick={() => handleCategoryClick('School Trips')}
        >
          School Trips
        </button>
        {/* Add more buttons for other trip categories */}
      </div>
      {filteredTrips ? (
        <div className="grid grid-cols-2 gap-4">
          {filteredTrips.plans.map((plan, index) => (
            <TripCard key={index} plan={plan} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Select a category to view available trips.</p>
      )}
    </div>
    
  );
};

export default AvailableTrips;
