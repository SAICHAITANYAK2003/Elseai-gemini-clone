import { useCallback, useContext, useRef } from "react";
import toast from "react-hot-toast";
import { AiContext } from "../context/AiContext";

export function useSpeechToText() {
  const { setInput, setIsListening } = useContext(AiContext);
  const recognitionRef = useRef(null);
  const startListening = useCallback(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      toast.error("Speech Recognition not supported in this browser.", {
        style: {
          border: "1px solid yellow",
        },
      });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onstart = () => {
      console.log("🎤 Listening...");
      setIsListening(true);
    };
    recognition.onspeechstart = () => console.log("🗣️ Speech has started");
    recognition.onspeechend = () => console.log("🔇 Speech has ended");
    recognition.onend = () => {
      console.log("🛑 Stopped listening");
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("You said:", transcript);
      setInput(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      toast.error("Speech recognition error", {
        style: {
          border: "1px solid red",
        },
      });
      setIsListening(false);
    };

    recognition.start();
    recognitionRef.current = recognition;
  }, [setInput, setIsListening]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
  }, []);

  return { startListening, stopListening };
}
