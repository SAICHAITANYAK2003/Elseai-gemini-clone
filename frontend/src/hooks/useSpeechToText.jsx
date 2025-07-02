import { useCallback } from "react";
import toast from "react-hot-toast";

export function useSpeechToText(setInput) {
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
    };

    recognition.start();
  }, [setInput]);

  return { startListening };
}
