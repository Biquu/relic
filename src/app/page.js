'use client'
import React from 'react';
import ChatBot from 'react-simple-chatbot';

// Define the Home component
export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24 text-black">
      <h1>zort</h1>

      {/* Add the ChatBot component here */}
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            end: true,
          },
        ]}
        floating={true}
      />
    </main>
  );
}