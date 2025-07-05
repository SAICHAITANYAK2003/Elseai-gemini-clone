import { useContext } from "react";
import { assets } from "../assets/assets";
import { AiContext } from "../context/AiContext";
import HelpContent from "./Help.jsx";
import HistoryContent from "./History.jsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsChatSquare } from "react-icons/bs";

const SideBar = () => {
  const {
    onSent,
    prevPrompts,
    setRecentPrompt,
    addNewChat,
    setModalState,
    extended,
    setExtended,
    setModalContent,
  } = useContext(AiContext);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const onHandleView = () => {
    setExtended((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${
          extended ? "md:w-[15%] lg:w-[13%]" : "w-[8%] lg:w-[6%]"
        } hidden md:flex flex-col items-start justify-between py-5 px-2 bg-[#f0f4f9] dark:bg-black dark:border-r dark:border-zinc-800`}
      >
        {/* ---top--- */}
        <div className="w-full">
          <button
            className="w-10 h-10 p-2 hover:bg-gray-300/40 rounded-full cursor-pointer dark:text-white  "
            onClick={onHandleView}
          >
            <RxHamburgerMenu size={25} />
          </button>

          <div
            onClick={addNewChat}
            className="flex items-center justify-center bg-[#e6eaf1] hover:bg-slate-300 mt-5 p-2 rounded-2xl cursor-pointer"
          >
            <img src={assets.plus_icon} alt="plus-icon" className="w-5 h-7" />
            {extended && <p className="ml-2">New Chat</p>}
          </div>

          {/* -----recent-tabs------- */}
          {extended && (
            <div className="mt-10">
              <p className="dark:text-white">Recent</p>
              {prevPrompts.map((item, index) => (
                <div
                  key={index}
                  onClick={() => loadPrompt(item)}
                  className="flex items-center hover:bg-[#e6eaf1] mt-3 py-1.5 pl-2 rounded-md cursor-pointer dark:hover:bg-gray-800 "
                >
                  <BsChatSquare className="dark:text-white" />

                  <p className="pl-2 dark:text-white">{item.slice(0, 15)}...</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ---Bottom--- */}
        <div className="flex flex-col gap-y-3">
          {/* -----Help-section------ */}
          <div
            onClick={() => {
              setModalContent(<HelpContent />);
              setModalState(true);
            }}
            className="flex hover:bg-[#e6eaf1] p-3 rounded-2xl    dark:hover:bg-slate-700  "
          >
            <button className="w-4 h-4 md:w-6 md:h-6 dark:text-white cursor-pointer ">
              <FaRegCircleQuestion size={25} />
            </button>
            {extended && <p className="ml-3 dark:text-white">Help</p>}
          </div>

          {/* -----History-section------ */}
          <div
            onClick={() => {
              setModalContent(<HistoryContent />), setModalState(true);
            }}
            className="flex hover:bg-[#e6eaf1] p-3 rounded-2xl  dark:hover:bg-slate-700 cursor-pointer"
          >
            <button className="w-4 h-4 md:w-6 md:h-6 dark:text-white cursor-pointer ">
              <MdHistory size={25} />
            </button>

            {extended && <p className="ml-3 dark:text-white">History</p>}
          </div>

          {/* -----Setting-section------ */}
          {/* <div
            onClick={() => setModalState((prev) => !prev)}
            className="flex hover:bg-[#e6eaf1] p-3 rounded-2xl  dark:hover:bg-slate-700 cursor-pointer"
          >
            <button className="w-4 h-4 md:w-6 md:h-6 dark:text-white cursor-pointer ">
              <IoSettingsOutline size={25} />
            </button>
            {extended && <p className="ml-3 dark:text-white">Settings</p>}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SideBar;
