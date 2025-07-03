const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from "@google/genai";

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: geminiApiKey,
  });
  const config = {
    responseMimeType: "text/plain",
  };
  const model = "gemini-2.0-flash";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fileIndex = "";
  for await (const chunk of response) {
    console.log(chunk.text);
    fileIndex += chunk.text
  }

  return fileIndex;
}

export default main;
