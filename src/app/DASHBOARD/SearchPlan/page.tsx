import Footer from "@/components/Footer";
import AvailableTrips from "@/components/searchplan/AvailableTrips";
import React from "react";

const page = () => {
  return (
    <div className="pt-36">
      <div>
        <AvailableTrips />
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
};

export default page;
