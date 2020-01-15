import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../store/actions/actionCreators";

function Logout({ logout }) {
  useEffect(() => {
    logout();
  }, [logout]);

  return <div>LOGGED OUT!</div>;
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Logout);
