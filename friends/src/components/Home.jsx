import React from "react";

function Home() {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <h1 className="title is-3 has-text-primary">Home</h1>
        </div>
        <div className="card-content">
          <h5 className="title is-5 has-text-primary">What did I use?</h5>
          <ul>
            <li>React CRUD App</li>
            <li>Redux for State management</li>
            <li>Redux Thunk for async state</li>
            <li>Axios for http calls</li>
            <li>React Router</li>
            <li>Formik Forms with Yup Validation</li>
            <li>Node REST api</li>
            <li>Bulma CSS Framework</li>
          </ul>
        </div>
        <div className="card-content">
          <h5 className="title is-5 has-text-primary">Instructions</h5>
          <ol>
            <li>
              Add a route for a login page and build out a simple login form
              with username and password inputs and a submit button (design this
              however you would like).
            </li>
            <li>
              The login function should save the returned token to localStorage.
              You can setup isLoading state in your Login component, and show a
              spinner on your form or in your button while the login request is
              happening.
            </li>
            <li>
              When the request returns, save the token to localStorage, then use
              the history object in your Login component to navigate your user
              to your FriendsList route
            </li>
            <li>
              Create a PrivateRoute component to protect your other routes. It
              should check localStorage for a token, and redirect the user to
              your login route if there is not a token.
            </li>
            <li>
              Create a protected route for your friends list. Remember, if the
              user isn't logged in, navigating to this protected route will
              redirect them to the login page.
            </li>
            <li>
              In your FriendsList component, rendered with ProtectedRoute, you
              will create a list of your friends that you get from the API.
            </li>
            <li>Adding New Friends</li>
            <li>
              In the requirements for this project, we implemented a login POST
              operation, a GET operation, and a "add friend" POST operation. Add
              two more functions, one for making a PUT request, and the other
              for making a DELETE request.
            </li>
            <li>
              Style the friends list and the input field and make everything
              look nice.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
