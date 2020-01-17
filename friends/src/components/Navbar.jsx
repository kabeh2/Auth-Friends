import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

function Navbar({ loggedIn }) {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item has-text-primary">
              FRIENDS APP
            </Link>

            <div
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <NavLink to="/" className="navbar-item">
                Home
              </NavLink>
              <NavLink to="/friends" className="navbar-item">
                Friends
              </NavLink>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <NavLink
                    to={loggedIn ? "/logout" : "/login"}
                    className={
                      loggedIn ? "button is-danger" : "button is-primary"
                    }
                  >
                    {loggedIn ? "Logout" : "Login"}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = ({ loggedIn }) => ({
  loggedIn
});

export default connect(mapStateToProps)(Navbar);
