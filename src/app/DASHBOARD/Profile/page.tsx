"use client";

import React from "react";
import ProfilePic from "@/components/ProfilePic";

import ProfileDetails from "@/components/PD";

const page = () => {
  return (
    <div className="container top-40 pt-2 pl-8 absolute right-[20px] ">
      <div className="row">
        <div className="column ">
        < ProfileDetails name={""} address={""} location={""} mobile={""} mailID={""} interestedPlace={""}/>
        </div>
        <div className="column">
        <ProfilePic/>
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
