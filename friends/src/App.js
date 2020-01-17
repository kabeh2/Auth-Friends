import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Friends from "./components/Friends";
import Logout from "./components/Logout";
import ProtectedRoute from "./services/protectedRoute";
import NotFound from "./components/NotFound";
import "./App.scss";
import UpdateFriends from "./components/UpdateFriends";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <ProtectedRoute
            path="/addFriend/:id?"
            render={props => <UpdateFriends {...props} />}
          />
          <ProtectedRoute path="/friends/:id?" component={Friends} />
          <ProtectedRoute path="/friends" component={Friends} />
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/logout" component={Logout} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
