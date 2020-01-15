import React from "react";
import LoginForm from "../forms/LoginForm";

function Login(props) {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm {...props} />
    </div>
  );
}

export default Login;
