'use client';

import React, { useState } from 'react';
import './DumbledoreChat.scss';
import { useMutation } from '@tanstack/react-query';
import { generateChatResponse } from '../../utils/ai';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';

const DumbledoreChat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const response = await generateChatResponse(messages);
      setMessages((prev) => [...prev, response.message]);
    },
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    const query = { role: 'user', content: text };
    setMessages((prev) => [...prev, query]);
    setText('');
    mutate();
  };

  const redirectBack = () => {
    router.push('/');
  };

  return (
    <div className="DumbledoreChat w-full h-full">
      <ArrowLeftIcon cursor="pointer" boxSize={7} className="back-btn" onClick={redirectBack} />
      <div className="chat-container">
        <h2 className="dumbledore-quotes">
          "Welcome to our humble abode, where wisdom and wonder await." - Albus Dumbledore
        </h2>
        <ul className="messages-list">
          {messages.map(({ role, content }, index) => {
            const avatar = role === 'user' ? '👤' : '🧙🏻‍♂️';
            const bcg = role === 'user' ? 'user-block' : 'ai-block';
            return (
              <div key={index} className={`${bcg} text-wrap`}>
                <span className="avatar">{avatar}</span>
                <p className="main-text">{content}</p>
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
          <div className="action-block">
            <button type="submit" className="dumbledore-send-button">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DumbledoreChat;
