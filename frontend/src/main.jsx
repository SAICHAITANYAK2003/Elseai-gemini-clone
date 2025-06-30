import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AiContextProvider from "./context/AiContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AiContextProvider>
      <App />
    </AiContextProvider>
  </StrictMode>
);
