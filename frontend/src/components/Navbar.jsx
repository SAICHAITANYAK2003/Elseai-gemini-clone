import  { useContext } from "react";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";
import { AiContext } from "../context/AiContext";

const Navbar = () => {
  const { updatesInfo } = useContext(AiContext);
  const onHandleFunc = () => {
    toast("🚧  Under Developement  🚧", {
      style: {
        color: "red",
        border: "1px solid red",
      },
    });
  };

  return (
    <>
      <div className="flex items-center justify-between pt-5 px-7 ">
        <h1 className="text-3xl text-gray-500/90">Else ai.</h1>
        <div className="flex items-center gap-10">
          <button
            onClick={() => updatesInfo()}
            className="relative px-4 py-2  cursor-pointer "
          >
            Updates
            <span className="absolute top-0 right-0 left-20 flex h-3 w-5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-sky-500"></span>
            </span>
          </button>

          <img
            onClick={onHandleFunc}
            src={assets.user_icon}
            alt="user-icon"
            className="rounded-full h-10 w-10 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
