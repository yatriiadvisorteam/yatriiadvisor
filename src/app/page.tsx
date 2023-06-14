"use client";
import React from "react";
import "../styles/globals.css";
import { FaHeart, FaReadme, FaStar, FaUserAlt, FaUsers } from "react-icons/fa";
import NAV_Button from "@/components/Navigate_button";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <div className=" sticky bg-[url('/homepageImage.jpg')] bg-cover bg-no-repeat text-black h-[600px] pl-10 py-64 ">
        <div className="text-3xl w-[442px] text-button">
          Never Stop Explorint The World!
        </div>
        <div className="py-4 rounded-sm flex text-3xl space-x-4 cursor-pointer items-center text-button">
          <button className="font-bold">Get Started</button>
        </div>
      </div>
      <hr />
      <div className="pt-8 pl-8">
        <div className="text-button font-roboto font-bold pt-10 container pl-20 pb-8 text-3xl">
          On Going Trip
        </div>
        <div className="frame bg-white">
          <div className="image-container">
            <img
              src="/placeImage.jpg"
              alt="Place"
              className="place-image w-full"
            />
          </div>
          <div className="details-container">
            <h2 className="place-name">Place Name</h2>
            <p className="place-views">Views: 1000</p>
            <div className="review-stars">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
            </div>
            <div>
              <NAV_Button />
            </div>
          </div>
        </div>
      </div>
      <hr className="blue pt-4 pb-4" />
      <div className=" pb-2">
        <div className="text-button font-roboto font-bold pt-10 container pl-20 pb-8 text-3xl">
          Top Destinations
        </div>
        <div className="image-row">
          <div className="image-column">
            <div className="image-container">
              <img src="/image1.jpg" alt="Image 1" className="image" />
            </div>
          </div>
          <div className="image-column">
            <div className="image-container">
              <img src="/image2.jpg" alt="Image 2" className="image " />
            </div>
          </div>
          <div className="image-column">
            <div className="image-container">
              <img src="/image3.jpg" alt="Image 3" className="image" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-button font-roboto font-bold pt-2 container pl-20 pb-4  text-3xl">
          How It Works ?
        </div>
        <div className="flex">
          <div className="w-1/4 p-4">
            <div className="border border-button text-button bg-white p-4">
              <h2 className="text-lg font-bold"><FaReadme/></h2>
              <p>Register on our Website</p>
            </div>
          </div>
          <div className="w-1/4 p-4">
            <div className="border border-button text-button bg-white p-4">
              <h2 className="text-lg font-bold"><FaUserAlt/></h2>
              <p>Add Information About Yourself</p>
            </div>
          </div>
          <div className="w-1/4 p-4">
            <div className="border border-button text-button bg-white p-4">
              <h2 className="text-lg font-bold"><FaUsers/></h2>
              <p>Analyze the List Of People</p>
            </div>
          </div>
          <div className="w-1/4 p-4">
            <div className="border border-button text-button bg-white p-4">
              <h2 className="text-lg font-bold "><FaHeart/></h2>
              <p>Find Your Favourite Places</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
