import { useContext } from "react";
import { AiContext } from "../context/AiContext";
import { useSpeechToText } from "../hooks/useSpeechToText";

const colors = [
  //   "bg-gray-200",
  //   "bg-gray-900",
  "bg-blue-600",
  "bg-green-500",
  "bg-red-500",
  //   "bg-purple-500",
  //   "bg-indigo-500",
  //   "bg-yellow-300",
  //   "bg-teal-500",
];

const ListenerButton = () => {
  const { isListening } = useContext(AiContext);
  return (
    <div className="flex items-center gap-1 px-6 py-1.5 rounded-2xl bg-white border-2 border-gray-200">
      <p>Listening</p>
      {colors.map((color, index) => (
        <span
          key={index}
          className={`w-3 h-3 rounded-full ${color} ${
            isListening ? "animate-bounceY" : ""
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        ></span>
      ))}
    </div>
  );
};

export default ListenerButton;
