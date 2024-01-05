// components/Chatbot/Chatbot.js
"use client";

import "react-chatbot-kit/build/main.css";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { Chatbot } from "react-chatbot-kit"; // Doğru import'ı kullandığınızdan emin olun
import { useEffect, useContext } from "react";
import { IoMdChatbubbles } from "react-icons/io";

import "react-chatbot-kit/build/main.css";
import { GlobalContext } from "@/context";

export default function ChatBot() {
  const { isChatbotOpen, setChatbotOpen } = useContext(GlobalContext);

  const toggleChatbot = () => {
    setChatbotOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const chatbotContainer = document.getElementById("chatbot-container");

      // Kontrol etmek istediğimiz bölgenin dışına tıklanmışsa ve chatbot açıksa, chatbot'u kapat
      if (
        chatbotContainer &&
        !chatbotContainer.contains(event.target) &&
        isChatbotOpen
      ) {
        setChatbotOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isChatbotOpen]);

  return (
    <div>
      {!isChatbotOpen && (
        <button
          className="fixed bottom-4 right-4 bg-customPurple text-white py-2 px-4 rounded focus:outline-none hover:bg-customPurpleDark transition duration-300"
          onClick={toggleChatbot}
        >
          <IoMdChatbubbles size={24} />
        </button>
      )}

      {isChatbotOpen && (
        <div id="chatbot-container" className="fixed z-20 bottom-0 right-0 p-4">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
}
