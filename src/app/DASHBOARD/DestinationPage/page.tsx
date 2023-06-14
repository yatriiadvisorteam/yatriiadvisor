import Desti from "@/components/Destination/Desti";
import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <div>
    <div className="text-button font-roboto font-bold pt-36 container pl-20 pb-8 text-3xl ">Top Destinations</div>
    <div><Desti/></div>
    <div className="pt-8"><Footer/></div>
    </div>
  );
};

export default page;
