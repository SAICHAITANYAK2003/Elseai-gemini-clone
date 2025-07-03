import React from "react";
import { assets } from "../assets/assets.js";
const ProfilePage = () => {
  return (
    <>
      <div className="relative h-[150px] flex items-center justify-center ">
        <img
          src={assets.user_icon}
          alt="user-icon"
          className="rounded-full border-2 border-white h-15 w-15 absolute left-24 bottom-32"
        />
        <h2 className="text-2xl">Hello Developer!</h2>
      </div>
    </>
  );
};

export default ProfilePage;
