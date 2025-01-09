import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import FriendList from './components/FriendList/FriendList';
import ChatWindow from './components/ChatWindow/ChatWindow';
import './app.css';

const App = () => {
  const [friends, setFriends] = useState(['Alice', 'Bob', 'Charlie']);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState({
    Alice: [],
    Bob: [],
    Charlie: [],
  });

  useEffect(() => {
    // Load messages from localStorage
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }

    // Load friends list from localStorage
    const storedFriends = localStorage.getItem('friends');
    if (storedFriends) {
      setFriends(JSON.parse(storedFriends));
    }
  }, []);

  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);
  };

  const handleSendMessage = (friend, message) => {
    if (selectedFriend) {
      // Update the messages state
      setMessages((prevMessages) => {
        const updatedMessages = {
          ...prevMessages,
          [friend]: [...prevMessages[friend], message],
        };
  
        // Save the updated messages to localStorage
        localStorage.setItem('messages', JSON.stringify(updatedMessages));
  
        return updatedMessages;
      });
  
      // Move the active friend to the top of the list
      setFriends((prevFriends) => {
        const updatedFriends = prevFriends.filter((f) => f !== friend);
        const newFriendsList = [friend, ...updatedFriends];
  
        // Save the updated friends list to localStorage
        localStorage.setItem('friends', JSON.stringify(newFriendsList));
  
        return newFriendsList;
      });
    }
  };
  

  return (
    <div className="App">
      <h1>Messenger App</h1>
      <div className="container">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelectFriend={handleSelectFriend}
        />
        <ChatWindow
          friend={selectedFriend}
          messages={selectedFriend ? messages[selectedFriend] : []}
          onSendMessage={(message) => handleSendMessage(selectedFriend, message)}
        />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
