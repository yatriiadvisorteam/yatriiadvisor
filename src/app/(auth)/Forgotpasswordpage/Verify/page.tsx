"use client";

import React from "react";
import Image from "next/image";
import VFrame from "@/components/forgotpasswordform/Verify/Vframe";




const page = () => {
  return (
    <div className="container top-40 absolute right-[20px]  ">
      <div className="row">
        <div className="column">
          <Image
            src="/verify.jpg" // Replace with the path to your image
            alt="Image"
            width={350} // Specify the desired width of the image
            height={350} // Specify the desired height of the image
          />
        </div>
        <div className="column container ">
          <VFrame/>
        </div>
      </div>
      <style jsx>{`
        .row {
          display: flex;
         
        }
        .column {
          flex: 2;
        }
      `}</style>
    </div>
  );
};

export default page;
