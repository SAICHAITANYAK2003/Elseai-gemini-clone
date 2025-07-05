import SideBar from "./components/SideBar";
import HeroSection from "./components/HeroSection";
import { Toaster } from "react-hot-toast";
import ReactModal from "./components/Modal";
import { useContext } from "react";
import { AiContext } from "./context/AiContext";

const App = () => {
  const { toggleTheme } = useContext(AiContext);
  return (
    <>
      <div
        className={`${
          toggleTheme === "dark" ? "dark" : ""
        } flex h-screen animate-[fade-in_0.9s_ease-out] dark:bg-black`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <SideBar />
        <HeroSection />
        <ReactModal />
      </div>
    </>
  );
};

export default App;
