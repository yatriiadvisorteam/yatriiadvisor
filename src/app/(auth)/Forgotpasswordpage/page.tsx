"use client";

import React from "react";
import Image from "next/image";
import RectangleFrame3 from "@/components/forgotpasswordform/frame3";


const page = () => {
  return (
    <div className="container bottom-4 pt-14 pl-8 absolute right-[20px] ">
      <div className="row">
        <div className="column">
          <Image
            src="/forgot.png" // Replace with the path to your image
            alt="Image"
            width={450} // Specify the desired width of the image
            height={400} // Specify the desired height of the image
          />
        </div>
        <div className="column">
          <RectangleFrame3/>
        </div>
      </div>
      <style jsx>{`
        .row {
          display: flex;
        }
        .column {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default page;
