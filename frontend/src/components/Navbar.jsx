import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";
import { AiContext } from "../context/AiContext";
import ProfilePage from "./ProfilePage";

const Navbar = () => {
  const { updatesInfo } = useContext(AiContext);
  const [showProfile, setShowProfile] = useState(false);
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
      <div className="flex items-center justify-between py-4 px-7 border-b border-b-gray-300/30 relative">
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
