// config.js

import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from './Avatar';
import StartBtn from "./StartBtn";
import AdviceBtn from "./AdviceBtn";
import MusicGenresOptions from "./MusicGenresOptions";
import SupportOptions from "./SupportOptions";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

const handleButtonClick = (option) => {
  // Handle button click logic
  console.log("Button clicked:", option);
};

const actionProvider = new ActionProvider(createChatBotMessage, () => {});
const messageParser = new MessageParser(actionProvider, {});

const config = {
  initialMessages: [createChatBotMessage("Relic'e Hoşgeldiniz.Hangi konuda Yardım Almak İstiyorsunuz?", { widget: "adviceBtn" })],
  botName: "Müşteri Destek Hattı",
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#663399',
  
    },

  },
  state: {},
  widgets: [
    {
      widgetName: "startBtn",
      widgetFunc: (props) => <StartBtn {...props} />,
    },
    {
      widgetName: "adviceBtn",
      widgetFunc: (props) => <AdviceBtn handleButtonClick={handleButtonClick} actionProvider={actionProvider} {...props} />,
    },
    {
      widgetName: "musicGenresOptions",
      widgetFunc: (props) => <MusicGenresOptions createChatBotMessage={createChatBotMessage} actionProvider={actionProvider} {...props} />,
    },
    {
      widgetName: "supportOptions",
      widgetFunc: (props) => <SupportOptions createChatBotMessage={createChatBotMessage} actionProvider={actionProvider} {...props} />,
    },
  ],

  
};

export default config;
