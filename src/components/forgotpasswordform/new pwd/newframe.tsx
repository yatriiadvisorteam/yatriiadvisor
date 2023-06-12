"use client";
import NewPasswordForm from "./new_pwd";

export default function RectangleFrame4() {
    return (
      <div className="h-[340px] w-[340px]  container top-10 bg-frame border-[1px] border-button rounded-[20px]  flex flex-col items-center ">
        <NewPasswordForm/>
      </div>
    );
  }