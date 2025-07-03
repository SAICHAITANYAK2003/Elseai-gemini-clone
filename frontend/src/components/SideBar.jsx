import { useContext } from "react";
import { assets } from "../assets/assets";
import { AiContext } from "../context/AiContext";
import HelpContent from "./Help.jsx";
import HistoryContent from "./History.jsx";

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
        } hidden md:flex flex-col items-start justify-between py-5 px-2 bg-[#f0f4f9]`}
      >
        {/* ---top--- */}
        <div className="w-full">
          <img
            src={assets.menu_icon}
            alt="menu-icon"
            className="w-10 h-10 p-2 hover:bg-gray-300/40 rounded-full cursor-pointer"
            onClick={onHandleView}
          />

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
              <p>Recent</p>
              {prevPrompts.map((item, index) => (
                <div
                  key={index}
                  onClick={() => loadPrompt(item)}
                  className="flex items-center hover:bg-[#e6eaf1] mt-3 py-1.5 pl-2 rounded-md cursor-pointer"
                >
                  <img
                    src={assets.message_icon}
                    alt="message-icon"
                    className="w-6 h-6"
                  />
                  <p className="pl-2">{item.slice(0, 15)}...</p>
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
            className="flex hover:bg-[#e6eaf1] p-3 rounded-2xl cursor-pointer"
          >
            <img
              src={assets.question_icon}
              alt="question-icon"
              className="w-4 h-4 md:w-6 md:h-6"
            />
            {extended && <p className="ml-3">Help</p>}
          </div>

          {/* -----History-section------ */}
          <div
            onClick={() => {
              setModalContent(<HistoryContent />), setModalState(true);
            }}
            className="flex hover:bg-[#e6eaf1] p-3 rounded-2xl cursor-pointer"
          >
            <img
              src={assets.history_icon}
              alt="history-icon"
              className="w-4 h-4 md:w-6 md:h-6"
            />
            {extended && <p className="ml-3">History</p>}
          </div>

          {/* -----Setting-section------ */}
          <div
            onClick={() => setModalState((prev) => !prev)}
            className="flex hover:bg-[#e6eaf1] p-3 rounded-2xl cursor-pointer"
          >
            <img
              src={assets.setting_icon}
              alt="setting-icon"
              className="w-4 h-4 md:w-6 md:h-6"
            />
            {extended && <p className="ml-3">Settings</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
