import React from "react";
import FriendsForm from "../forms/FriendsForm";

function UpdateFriends(props) {
  return (
    <div>
      <FriendsForm {...props} />
    </div>
  );
}

export default UpdateFriends;
