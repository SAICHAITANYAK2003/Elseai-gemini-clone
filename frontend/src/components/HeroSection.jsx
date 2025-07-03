import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "./Navbar";
import Cards from "./Cards";
import { assets } from "../assets/assets";
import { AiContext } from "../context/AiContext";
import toast from "react-hot-toast";
import { useSpeechToText } from "../hooks/useSpeechToText";
import ListenerButton from "./ListenerButton.jsx";
import { FaRegStopCircle } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiImageCircleFill, RiSendPlane2Fill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import HistoryContent from "./History.jsx";
import HelpContent from "./Help.jsx";
import { IoIosHelpCircle } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";

const HeroSection = () => {
  const {
    input,
    setInput,
    onSent,
    showResult,
    resultData,
    recentPrompt,
    loading,
    updatesInfo,
    addNewChat,
    isListening,
    setModalContent,
    setModalState,
  } = useContext(AiContext);
  const { startListening, stopListening } = useSpeechToText();

  const onHandleInput = () => {
    if (input.length === 0) {
      toast("‼️ Enter Valid Text ‼️");
    } else {
      onSent(input);
    }
  };

  const onShowResultData = () => {
    return (
      <div className="flex flex-col gap-y-5 w-full h-full max-w-[700px] max-h-[600px] overflow-y-auto  pb-15 mb-10  ">
        {/* ---user-input-field----- */}

        <div className="flex items-center justify-end">
          <p className="mr-3">{recentPrompt}</p>
          <img
            src={assets.user_icon}
            alt="user-icon"
            className="w-9 h-9 rounded-full"
          />
        </div>

        {/* ---ai-input-field----- */}

        <div className="flex  items-start justify-start p-3 gap-3">
          <img
            src={assets.gemini_icon}
            alt="user-icon"
            className="w-9 h-9 rounded-full"
          />
          {loading ? (
            <div
              className="animate-spin inline-block size-6 border-3 border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500 mt-1"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div
              className="prose prose-slate max-w-[700px] text-[17px] leading-8 tracking-wide mt-4
    prose-headings:font-semibold prose-p:font-normal prose-li:font-normal
    prose-p:mb-4 prose-ul:pl-5 prose-li:mb-2"
            >
              <ReactMarkdown>{resultData}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex-1 flex flex-col relative">
        <Navbar />
        <div className="flex flex-col items-center justify-center ">
          {showResult ? (
            onShowResultData()
          ) : (
            <>
              <div className="text-left mb-6 ">
                <p className="text-2xl md:text-5xl font-medium ">
                  <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">
                    Hello, Dev.
                  </span>
                </p>
                <p className="text-2xl md:text-5xl font-medium text-[#c4c7c5]">
                  How can I help you today?
                </p>
              </div>
              <Cards />
            </>
          )}

          <div className="absolute bottom-1 md:bottom-4 w-[100%] max-w-[800px] z-40">
            <div className="flex items-center space-x-2">
              <button
                onClick={addNewChat}
                className="px-4 py-2 bg-[#f0f4f9] mb-2 rounded-2xl cursor-pointer hover:bg-[#dde1e6] md:hidden flex items-center z-50"
              >
                <IoIosAddCircle size={23} />
                {/* <img
                src={assets.plus_icon}
                alt="plus-icons"
                className="w-5 h-6"
              /> */}
                <span className="ml-2 text-[13px]">New Chat</span>
              </button>

              <button
                onClick={() => {
                  setModalContent(<HistoryContent />), setModalState(true);
                }}
                className="px-4 py-2 bg-[#f0f4f9] mb-2 rounded-2xl cursor-pointer hover:bg-[#dde1e6] md:hidden flex items-center z-50"
              >
                <FaFileAlt size={23} />
                <span className="ml-2 text-[13px]">History</span>
              </button>

              <button
                onClick={() => {
                  setModalContent(<HelpContent />), setModalState(true);
                }}
                className="px-4 py-2 bg-[#f0f4f9] mb-2 rounded-2xl cursor-pointer hover:bg-[#dde1e6] md:hidden flex items-center z-50"
              >
                <IoIosHelpCircle size={23} />
                <span className="ml-2 text-[13px]">Help</span>
              </button>
            </div>

            <div className="flex items-center justify-between bg-[#f0f4f9] px-8 py-4 rounded-2xl gap-3">
              {isListening ? (
                <ListenerButton />
              ) : (
                <input
                  type="text"
                  placeholder="Enter a prompt here"
                  className="flex-1 outline-none border-none"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
              )}

              <div className="flex items-center gap-4 ">
                {isListening ? null : (
                  <button
                    onClick={() => updatesInfo()}
                    className="cursor-pointer hover:bg-gray-200 rounded-md p-1.5"
                  >
                    <RiImageCircleFill size={28} />
                  </button>
                )}

                {isListening ? (
                  <button
                    onClick={stopListening}
                    className="cursor-pointer hover:bg-gray-200 rounded-md p-1.5"
                  >
                    <FaRegStopCircle size={28} />
                  </button>
                ) : (
                  <button
                    onClick={startListening}
                    className="cursor-pointer hover:bg-gray-200 rounded-md p-1.5"
                  >
                    <FaMicrophoneAlt size={25} />
                  </button>
                )}

                <button
                  onClick={() => onHandleInput()}
                  className="cursor-pointer hover:bg-gray-200 rounded-md p-1.5"
                >
                  <RiSendPlane2Fill size={25} />
                </button>
              </div>
            </div>
            <p className="text-center hidden md:block">
              Ai can make mistakes. so double check its responses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
