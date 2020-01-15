import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Friends from "./components/Friends";
import Logout from "./components/Logout";
import ProtectedRoute from "./services/protectedRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <ProtectedRoute path="/friends/:id?" component={Friends} />
        <ProtectedRoute path="/friends" component={Friends} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
