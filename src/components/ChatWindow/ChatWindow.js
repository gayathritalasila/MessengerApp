import React, { useState } from 'react';
import './chatWindow.css';

const ChatWindow = ({ friend, messages, onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  if (!friend) {
    return <div className="chat-window">Select a friend to start chatting.</div>;
  }

  return (
    <div className="chat-window">
      <h2>Chat with {friend}</h2>
      <div className="messages">
        {messages.slice().reverse().map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
