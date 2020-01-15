import React, { useEffect } from "react";
import { getFriends } from "../store/actions/actionCreators";
import { connect } from "react-redux";

function Friends({ getFriends, friends }) {
  useEffect(() => {
    getFriends();
  }, [getFriends]);

  return (
    <>
      <div>
        <h1>Hello Friends...</h1>
        {friends.length < 1 && <h2>Loading...</h2>}
        <ul>
          {friends.map(friend => {
            return <li key={friend.id}>{friend.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  friends: state.data
});

const mapDispatchToProps = dispatch => ({
  getFriends: id => dispatch(getFriends(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
