import { useContext, useState } from "react";
import Modal from "react-modal";
import { IoIosCloseCircle } from "react-icons/io";
import { AiContext } from "../context/AiContext";

const customStyles = {
  overlay: {
    zIndex: 2000, // overlay layer
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "500px",
    height: "80%",
    maxHeight: "500px",
    borderRadius: "30px",
  },
};
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const ReactModal = () => {
  const { modalContent } = useContext(AiContext);
  const { modalState, setModalState } = useContext(AiContext);

  return (
    <>
      <div>
        {/* <button onClick={() => setModalState(true)}>Open</button> */}

        <Modal
          isOpen={modalState}
          style={customStyles}
          onRequestClose={() => setModalState(false)}
        >
          <div>
            <div className="flex-1 flex flex-col items-end  ">
              <button
                onClick={() => setModalState(false)}
                className="cursor-pointer"
              >
                <IoIosCloseCircle size={30} />
              </button>
              <hr className="border-[0.9px] border-gray-300 w-full mt-2" />
            </div>
            {modalContent}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ReactModal;
