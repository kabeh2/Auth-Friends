import React from "react";
import { connect } from "react-redux";
import { logout } from "../store/actions/actionCreators";
import { Redirect } from "react-router-dom";

function Logout({ logout }) {
  logout();

  return (
    <div>
      <Redirect to="/" />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Logout);
