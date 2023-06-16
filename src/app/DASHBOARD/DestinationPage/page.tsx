"use client"

import Destinations from "@/components/Destination/Destination";
import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <div>
    <div className="flex pt-36 fonto-roboto text-button font-bold pb-4 border-2-b border-hover text-3xl justify-center mb-4">Top Destinations</div>
    <div className="flex container justify-center pl-10"><Destinations/></div>
    <div className="pt-8"><Footer/></div>
    </div>
  );
};

export default page;
