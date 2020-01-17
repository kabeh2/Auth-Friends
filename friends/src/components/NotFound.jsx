import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1 className="title is-2 has-text-danger">Page Not Found</h1>
      <Link to="/" className="button is-primary">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
