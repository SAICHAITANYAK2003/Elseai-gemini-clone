import { useState } from "react";
import { AiContext } from "./AiContext";
import main from "../config/gemini";
import toast from "react-hot-toast";

const AiContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [extended, setExtended] = useState(false);
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [toggleTheme, setToggleTheme] = useState("");

  const onHandleTheme = () => {
    setToggleTheme((prev) => (prev === "dark" ? "" : "dark"));
  };

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };
  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    let finalPrompt = prompt !== undefined ? prompt : input;

    // if (prompt === undefined) {
    //   setRecentPrompt(finalPrompt);
    // }
    setRecentPrompt(finalPrompt);

    setPrevPrompts((prev) =>
      prev.includes(finalPrompt) ? prev : [...prev, finalPrompt]
    );

    const response = await main(finalPrompt);

    let newResponse = response.split(" ");
    for (let i = 0; i < newResponse.length; i++) {
      const nextWord = newResponse[i];
      delayPara(i, nextWord + " ");
    }

    setLoading(false);
    setInput("");
  };

  const addNewChat = () => {
    setLoading(false);
    setRecentPrompt("");
    setShowResult(false);
  };
  const updatesInfo = () => {
    toast(
      <>
        <div className="flex flex-col items-start">
          <h2 className="mb-3">🔔 Future Updates :</h2>
          <div className="flex items-center gap-3">
            <p className="border border-gray-200 px-2 py-2 rounded-2xl bg-gray-100">
              🖼️ Image Upload 📸
            </p>
          </div>
        </div>
      </>,
      {
        duration: 4000,
      }
    );
  };

  const value = {
    input,
    setInput,
    extended,
    setExtended,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
    updatesInfo,
    addNewChat,
    isListening,
    setIsListening,
    modalContent,
    setModalContent,
    modalState,
    setModalState,
    showProfile,
    setShowProfile,
    onHandleTheme,
    toggleTheme,
    setToggleTheme,
  };
  return <AiContext.Provider value={value}>{children}</AiContext.Provider>;
};

export default AiContextProvider;
