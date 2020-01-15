import React, { useEffect } from "react";
import { logout } from "../services/authService";

function Logout() {
  useEffect(() => {
    logout();
  }, []);

  return <div>LOGGED OUT!</div>;
}

export default Logout;
