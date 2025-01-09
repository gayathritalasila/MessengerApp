import React from 'react';
import './friendList.css';

const FriendList = ({ friends, selectedFriend, onSelectFriend }) => {
  return (
    <div className="friend-list">
      <h2>Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li
            key={friend}
            className={selectedFriend === friend ? 'selected' : ''}
            onClick={() => onSelectFriend(friend)}
          >
            {friend}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
