import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AiContext } from "../context/AiContext";

const bottomSection = [
  {
    id: 1,
    imageLink: assets.question_icon,
    altImageLink: "question-icon",
    text: "Help",
  },
  {
    id: 2,
    imageLink: assets.history_icon,
    altImageLink: "history-icon",
    text: "Activity",
  },
  {
    id: 3,
    imageLink: assets.setting_icon,
    altImageLink: "setting-icon",
    text: "Settings",
  },
];

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, addNewChat } =
    useContext(AiContext);

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
          extended ? "w-[13%]" : "w-[6%]"
        } hidden md:flex flex-col items-start justify-between py-5 px-2  bg-[#f0f4f9]     `}
      >
        {/* ---top--- */}
        <div className="w-full  ">
          <img
            src={assets.menu_icon}
            alt="menu-icon"
            className="w-10 h-10 p-2 hover:bg-gray-300/40  rounded-full cursor-pointer"
            onClick={onHandleView}
          />

          <div
            onClick={addNewChat}
            className="flex items-center justify-center bg-[#e6eaf1] hover:bg-slate-300  mt-5  p-2 rounded-2xl cursor-pointer"
          >
            <img src={assets.plus_icon} alt="plus-icon" className="w-5 h-7" />
            {extended ? <p className="ml-2">New Chat</p> : null}
          </div>

          {/* -----recent-tabs------- */}
          {extended ? (
            <div className="mt-10">
              <p>Recent</p>

              {prevPrompts.map((item, index) => (
                <div
                  key={index}
                  onClick={() => loadPrompt(item)}
                  className="flex items-center hover:bg-[#e6eaf1] mt-3  py-1.5 pl-2 rounded-md cursor-pointer"
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
          ) : null}
        </div>
        {/* ---Bottom--- */}
        <div className="flex flex-col gap-y-3 w-full">
          {bottomSection.map((item) => (
            <div
              key={item.id}
              className="flex items-center   hover:bg-[#e6eaf1]   py-2 pl-5   rounded-2xl cursor-pointer"
            >
              <img
                src={item.imageLink}
                alt={item.altImageLink}
                className="w-6 h-6"
              />

              {extended ? <p className="ml-3">{item.text}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
