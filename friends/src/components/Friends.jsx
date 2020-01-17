import React, { useEffect } from "react";

import { Table, Button } from "react-bulma-components/dist";
import { getFriends, fetchDelete } from "../store/actions/actionCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Friends({ getFriends, friends, match, loading, error, fetchDelete }) {
  useEffect(() => {
    getFriends(match.params.id);
  }, [getFriends, match.params.id]);
  console.log("FRIENDS", friends);
  console.log("LOADING", loading);

  return (
    <>
      <div>
        <div className="card">
          <div className="friends-header card-content">
            <h1
              className="title is-3 has-text-primary"
              style={{ marginBottom: 0 }}
            >
              Hello Friends...
            </h1>
            <Link to={`/addFriend`}>
              <Button className="button is-primary">Add Friend</Button>
            </Link>

            {error && (
              <>
                <h2>{error}</h2>
                <Link to="/">Go Back Home</Link>
              </>
            )}
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            {loading && (
              <progress className="progress is-small is-primary" max="100">
                15%
              </progress>
            )}
            <Table className="table is-striped is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>More</th>
                </tr>
              </thead>
              <tbody>
                {friends.map((friend, index) => {
                  return (
                    <tr key={friend.id}>
                      <td>{index + 1}</td>
                      <td>{friend.name}</td>
                      <td>{friend.age}</td>
                      <td>{friend.email}</td>
                      <td>
                        <Link
                          to={`/addFriend/${friend.id}`}
                          className="has-text-primary"
                        >
                          <i title="Update" className="far fa-edit"></i>
                        </Link>{" "}
                        |{" "}
                        <Link
                          to="#"
                          className="table-more-btn has-text-primary"
                          onClick={() => fetchDelete(friend.id)}
                        >
                          <i title="Delete" className="far fa-trash-alt"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
  friends: state.data,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  getFriends: id => dispatch(getFriends(id)),
  fetchDelete: id => dispatch(fetchDelete(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
