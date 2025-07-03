import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { IoIosArrowDropdown } from "react-icons/io";

const helpQuestions = [
  {
    id: uuidV4(),
    question: "How do I start a new chat",
    answer:
      "Click on the + New Chat button in the sidebar. It clears your current conversation and opens a fresh one.",
  },
  {
    id: uuidV4(),
    question: "How can I provide feedback or report a bug",
    answer: "Mail to the above mailId .",
  },
  {
    id: uuidV4(),
    question: " Can I see my previous chats",
    answer:
      "Yes! Your recent chats appear in the sidebar under “Recent.”",
  },
  {
    id: uuidV4(),
    question: "What technologies is this app built with",
    answer:
      "This app uses React, Tailwind CSS, and React Context for state management. It may also use libraries like react-modal for modals.",
  },
];

const HelpContent = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  return (
    <>
      <div className="w-full pt-5 space-y-3">
        <p className="py-2 px-5 bg-violet-200/60 rounded-2xl ">
          Mail-Id : k.saichaitanya222@gmail.com
        </p>
        <h2 className="text-xl font-bold mb-4">Help</h2>

        <div>
          {helpQuestions.map((eachItem) => (
            <div key={eachItem.id} className="border-b border-gray-300 mb-5">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">{eachItem.question}?</h3>
                <button
                  onClick={() =>
                    setOpenQuestionId(
                      openQuestionId === eachItem.id ? null : eachItem.id
                    )
                  }
                >
                  <IoIosArrowDropdown
                    className={`transition-transform duration-200 ${
                      openQuestionId === eachItem.id ? "rotate-180" : ""
                    } cursor-pointer`}
                    size={25}
                  />
                </button>
              </div>
              {openQuestionId === eachItem.id && (
                <p className="mt-2 text-gray-600">{eachItem.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HelpContent;
