import SideBar from "./components/SideBar";
import HeroSection from "./components/HeroSection";
import { Toaster } from "react-hot-toast";
import ReactModal from "./components/Modal";

const App = () => {
  return (
    <>
      <div className="flex h-screen animate-[fade-in_0.9s_ease-out]">
        <Toaster position="top-center" reverseOrder={false} />
        <SideBar />
        <HeroSection />
        <ReactModal />
      </div>
    </>
  );
};

export default App;
