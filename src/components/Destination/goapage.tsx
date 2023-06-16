"use client";
import React from "react";
import Footer from "../Footer";
import { FaArrowAltCircleRight } from "react-icons/fa";

const GoaLink = () => {
  return (
    <div>
      <h1 className="text-button font-bold pl-20 text-4xl font-roboto text center ">
        Goa
      </h1>
      <div>
        <h3 className="text-button font-bold pl-20 text-2xl pt-6  pb-4 font-roboto text center ">
          1. Baga Beach
        </h3>
        <img src="/goa.jpg" className="pl-20 pt-4 h-[450px] w-[950px] pb-8" />
        <p className="font-roboto text-button text-xl pl-20 pr-20 pb-4 ">
          Undoubtedly, the most famous and happening beach in Goa, Baga is known
          for its pulsating beach parties, exciting nightlife and delicious
          seafood. It is the perfect place to indulge in water sports and enjoy
          a sunbath during the day and dance to foot-tapping music at night, all
          in the company of a lively crowd.
        </p>
        <p className="font-roboto text-button text-xl font-md pl-20 pr-20 pb-4 ">
          {" "}
          # Location: North Goa
        </p>
        <p className="font-roboto text-button text-xl font-md pl-20 pr-20 pb-4 ">
          {" "}
          # Best Time To Visit : October - February
        </p>
        <p className="font-roboto text-button text-xl font-md pl-20 pr-20 pb-4 ">
          {" "}
          # Timming : 4pm - 6pm
        </p>
        <p className="font-roboto text-button text-xl font-md pl-20 pr-20 pb-4 ">
          {" "}
          # Visitors : 2M+
        </p>
      </div>
      <div>
        <h3 className="text-button font-bold pl-20 text-2xl pt-6  pb-4 font-roboto text center ">
         2. Magnificence Redefined church
        </h3>
        <img src="/Church.jpg" className="pl-20 pt-4 h-[450px] w-[950px] pb-8" />
        <p className="font-roboto text-button text-xl pl-20 pr-20 pb-4 ">
        Built in the 16th century, Basilica of Bom Jesus is one of the oldest and most famous churches in the region. The edifice of this UNESCO World Heritage Site is a fabulous example of Baroque architecture. The church is famous for being home to the mummy of St. Francis Xavier.
        </p>
        <p className="font-roboto text-button text-xl font-md pl-20 pr-20 pb-4 ">
          {" "}
          # Location: Old Goa
        </p>
        <p className="font-roboto text-button text-xl font-md pl-20 pr-20 pb-4 ">
          {" "}
          # Best Season To Visit : August - December
        </p>
        <p className="font-roboto text-button text-xl font-md pl-20 pr-20 pb-4 ">
          {" "}
          # Timming : 9AM - 5pm
        </p>
        <p className="font-roboto text-button text-xl font-md pl-20 pr-20 pb-4 ">
          {" "}
          # Visitors : 10M+
        </p>
      </div>
      <div>
        <h3 className="text-button font-bold pl-20 text-2xl pt-6  pb-4 font-roboto text center ">
          3. Morjim
        </h3>
        <img src="/Morjim.jpg" className="pl-20 pt-4 h-[450px] w-[950px] pb-8" />
        <p className="font-roboto text-button text-xl pl-20 pr-20 pb-4 ">
        Its natural beauty notwithstanding, Morjim beach is mainly popular as a nesting site for Olive Ridley sea turtles that can be seen here in large numbers. It is also a great place to spot various species of birds.
        </p>
        <p className="font-roboto text-button text-xl font-md pl-20 pr-20 pb-4 ">
          {" "}
          # Location: North Goa
        </p>
        <p className="font-roboto text-button text-xl font-md pl-20 pr-20 pb-4 ">
          {" "}
          # Best Season To Visit : December - April
        </p>
        <p className="font-roboto text-button text-xl font-md pl-20 pr-20 pb-4 ">
          {" "}
          # Timming : 4pm - 6pm
        </p>
        <p className="font-roboto text-button text-xl font-md pl-20 pr-20 pb-4 ">
          {" "}
          # Visitors : 5M+
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default GoaLink;
