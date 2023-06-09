"use client";

import React from "react";
import Image from "next/image";
import RectangleFrame from "@/components/signin form/framebox";

const page = () => {
  return (
    <div className="container bottom-4 pt-8 pl-8 absolute right-[20px] ">
      <div className="row">
        <div className="column">
          <Image
            src="/Welcome.svg" // Replace with the path to your image
            alt="Image"
            width={450} // Specify the desired width of the image
            height={450} // Specify the desired height of the image
          />
        </div>
        <div className="column">
          <RectangleFrame/>
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
