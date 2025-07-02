import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "./Navbar";
import Cards from "./Cards";
import { assets } from "../assets/assets";
import { AiContext } from "../context/AiContext";
import toast from "react-hot-toast";
import { useSpeechToText } from "../hooks/useSpeechToText";

const HeroSection = () => {
  const {
    input,
    setInput,
    onSent,
    showResult,
    resultData,
    recentPrompt,
    loading,
    prevPrompts,
    updatesInfo,
    addNewChat,
  } = useContext(AiContext);
  const { startListening } = useSpeechToText(setInput);

  const onHandleInput = () => {
    if (input.length === 0) {
      toast("‼️ Enter Valid Text ‼️");
    } else {
      onSent(input);
    }
  };

  const onShowResultData = () => {
    return (
      <div className="flex flex-col gap-y-5 w-full h-full max-w-[700px] max-h-[600px] overflow-y-scroll pb-15">
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
            <div className="prose prose-slate max-w-none font-light text-[17px] mt-2">
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
        <div className="flex-1 flex flex-col items-center justify-center ">
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
            <button
              onClick={addNewChat}
              className="px-4 py-2 bg-[#f0f4f9] mb-2 rounded-2xl cursor-pointer hover:bg-[#dde1e6] md:hidden flex items-center"
            >
              <img
                src={assets.plus_icon}
                alt="plus-icons"
                className="w-5 h-6"
              />
              <span className="ml-2 text-[13px]">New Chat</span>
            </button>
            <div className="flex items-center justify-between bg-[#f0f4f9] px-8 py-5 rounded-2xl gap-3">
              <input
                type="text"
                placeholder="Enter a prompt here"
                className="flex-1 outline-none border-none"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />

              <div className="flex items-center gap-4">
                <img
                  onClick={() => updatesInfo()}
                  src={assets.gallery_icon}
                  alt="gallery-icon"
                  className="w-7 h-7 cursor-pointer"
                />
                <img
                  onClick={startListening}
                  src={assets.mic_icon}
                  alt="mic-icon"
                  className="w-7 h-7 cursor-pointer"
                />
                <img
                  src={assets.send_icon}
                  alt="send-icon"
                  className="w-7 h-7 cursor-pointer"
                  onClick={() => onHandleInput()}
                />
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
