'use client';

import React, { useState } from 'react';
import './DumbledoreChat.scss';
import { useMutation } from '@tanstack/react-query';
import { generateChatResponse } from '../../utils/ai';

const DumbledoreChat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [response, setResponse] = useState('');

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      // const currentTokens = await fetchUserTokensById(userId);

      // if (currentTokens < 100) {
      //   // toast.error('Token balance too low....');
      //   return;
      // }

      const response = await generateChatResponse(messages);

      console.log('response 2', response);

      if (!response) {
        // toast.error('Something went wrong...');
        return;
      }
      setMessages((prev) => [...prev, response.message]);
      // const newTokens = await subtractTokens(userId, response.tokens);
      // toast.success(`${newTokens} tokens remaining...`);
    },
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    const query = { role: 'user', content: text };
    setMessages((prev) => [...prev, query]);
    setText('');
    mutate();
  };

  return (
    <div className="dumbledore-container">
      <h2 className="dumbledore-quotes">
        "Welcome to our humble abode, where wisdom and wonder await." - Albus Dumbledore
      </h2>
      <ul className="messages-list">
        {messages.map(({ role, content }, index) => {
          const avatar = role === 'user' ? '👤' : '🧙🏻‍♂️';
          const bcg = role === 'user' ? 'bg-base-200' : 'bg-base-100';
          return (
            <div key={index} className={`${bcg} flex py-6 -mx-8 px-8 text-xl leading-loose border-b border-base-300`}>
              <span className="mr-4">{avatar}</span>
              <p className="max-w-3xl">{content}</p>
            </div>
          );
        })}
        {isPending ? <span className="loading"></span> : null}
      </ul>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message, my dear..."
          className="dumbledore-input-field"
        />
        <button type="submit" className="dumbledore-send-button">
          Send
        </button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default DumbledoreChat;
