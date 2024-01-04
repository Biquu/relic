'use client'
import { Chatbot } from 'react-chatbot-kit'; // Make sure to use the correct import

import config from './ChatBot/config';
import MessageParser from './ChatBot/MessageParser';
import ActionProvider from './ChatBot/ActionProvider';

import 'react-chatbot-kit/build/main.css';
import './Home.css'
// Define the Home component
function Home() {
  return (
    <div className='Home'>
      <Chatbot
        config={config}
        messageParser={MessageParser} // Correct the prop name
        actionProvider={ActionProvider} // Correct the prop name
      />
    </div>
  );
}

export default Home;
