import React, { useContext, useState } from "react";
import { AiContext } from "../context/AiContext";
import { IoIosCloseCircle } from "react-icons/io";

const HistoryContent = () => {
  const { prevPrompts, setPrevPrompts } = useContext(AiContext);
  const [searchTerm, setSearchTerm] = useState("");

  const removeHistoryItem = (index) => {
    setPrevPrompts((prev) => prev.filter((_, i) => i !== index));
  };

  // Filtered list based on input
  const filteredPrompts = prevPrompts.filter((prompt) =>
    prompt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-1">
      <h2 className="text-2xl">History</h2>
      <input
        type="text"
        placeholder="Search your history..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 px-3 py-2 outline-none border-[1.5px] border-gray-400 w-full rounded-md"
      />

      <div className="pt-5 px-3  ">
        {filteredPrompts.length > 0 ? (
          filteredPrompts.map((eachPrompt, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-200 p-3 mb-2 hover:bg-gray-200/20 rounded-2xl"
            >
              <p className="text-[18px]">{eachPrompt}</p>
              <button
                onClick={() => removeHistoryItem(index)}
                className="text-red-500 cursor-pointer"
              >
                <IoIosCloseCircle size={20} />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm text-center pt-10">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
};

export default HistoryContent;
