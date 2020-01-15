import React, { useState, useEffect } from "react";
import { getFriends } from "../services/authService";

function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getFriends(setFriends);
  }, []);

  return (
    <div>
      <h1>Hello Friends...</h1>
      <ul>
        {friends.map(friend => {
          return <li key={friend.id}>{friend.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Friends;
