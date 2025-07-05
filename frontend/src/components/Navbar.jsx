import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";
import { AiContext } from "../context/AiContext";
import ProfilePage from "./ProfilePage";
import { GoArrowRight } from "react-icons/go";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";

const Navbar = () => {
  const {
    updatesInfo,
    showProfile,
    setShowProfile,
    onHandleTheme,
    toggleTheme,
  } = useContext(AiContext);

  const onHandleFunc = () => {
    // toast("🚧  Under Developement  🚧", {
    //   style: {
    //     color: "red",
    //     border: "1px solid red",
    //   },
    // });
    setShowProfile((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center justify-between py-4 px-7 border-b border-b-gray-300/30 relative dark:border-0">
        <h1 className="text-3xl text-gray-500/90 dark:text-white">Else ai.</h1>
        <div className="flex items-center gap-5">
          {/* -------dark-theme------- */}

          <button onClick={onHandleTheme} className="p-1.5 dark:text-white dark:bg-slate-700 bg-gray-200 cursor-pointer rounded-full">
            {toggleTheme === "" && <IoMoon size={25} />}
            {toggleTheme === "dark" && <LuSun size={25}   />}
          </button>

          <div
            onClick={() => updatesInfo()}
            className="hidden  md:flex items-center space-x-2 border border-blue-500/30 rounded-full bg-blue-500/20 p-1 text-sm text-blue-600 cursor-pointer"
          >
            <div className="flex items-center space-x-1 bg-blue-500 text-white border border-blue-500 rounded-2xl px-3 py-1">
              <p> Future Updates</p>

              <GoArrowRight size={20} />
            </div>
          </div>

          <div
            onClick={() => updatesInfo()}
            className="flex items-center md:hidden space-x-2 border border-blue-500/30 rounded-full bg-blue-500/20 p-1 text-sm text-blue-600 cursor-pointer"
          >
            <div className=" flex items-center space-x-1 bg-blue-500 text-white border border-blue-500 rounded-2xl px-3 py-1">
              <FaRegCircleQuestion />
            </div>
          </div>

          <img
            onClick={onHandleFunc}
            src={assets.user_icon}
            alt="user-icon"
            className="rounded-full h-10 w-10  cursor-pointer"
          />
          {showProfile && (
            <div className="absolute z-[9999] top-16 right-5 w-full max-w-[250px] rounded-2xl border-2 border-gray-300 bg-cover bg-center overflow-hidden bg-white ">
              <img
                src={assets.mountains}
                alt="mountains-image"
                className="object-center w-full h-32"
              />
              <ProfilePage />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
