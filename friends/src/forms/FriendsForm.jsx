import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import MyTextInput from "./textInput";
import { addFriends, updateRequest } from "../store/actions/actionCreators";
import authService from "../services/authService";

function FriendsForm({
  location,
  history,
  match,
  addFriends,
  friends,
  updateFriends
}) {
  const [updateMsg] = useState(match.params.id);
  if (!authService.getToken()) return <Redirect to="/" />;

  let friendsCopy = friends.filter(friend => friend.id === +updateMsg);

  return (
    <div className="columns is-centered">
      <Formik
        initialValues={{
          id: friendsCopy[0] ? friendsCopy[0].id : Date.now(),
          name: friendsCopy[0] ? friendsCopy[0].name : "",
          age: friendsCopy[0] ? friendsCopy[0].age : undefined,
          email: friendsCopy[0] ? friendsCopy[0].email : ""
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Email is Required"),
          age: Yup.number()
            .required("Age is Required")
            .moreThan(0.9999, "Age must be at least 1."),
          email: Yup.string()
            .required("Email is Required.")
            .email("Input valid email.")
            .min(4, "Minimum 4 characters")
        })}
        onSubmit={(
          values,
          { setSubmitting, setErrors, setStatus, resetForm }
        ) => {
          try {
            //   console.log(values);
            friendsCopy[0]
              ? updateFriends(friendsCopy[0].id, values)
              : addFriends(values);
            resetForm({});
            setStatus({ success: true });
            history.replace(
              location.state ? location.state.from.pathname : "/friends"
            );
            // window.location = state ? state.from.pathname : "/";
          } catch (error) {
            setStatus({ success: false });
            setSubmitting(false);
            setErrors({ submit: error.message });
          }
        }}
      >
        <Form className="card column is-two-fifths">
          <div className="card-content">
            <h1 className="title has-text-centered has-text-primary">
              {updateMsg ? "Update" : "Submit"}
            </h1>
            <MyTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Name..."
            />
            <MyTextInput
              label="Age"
              name="age"
              type="text"
              placeholder="Age..."
            />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Email..."
            />

            <button
              type="button"
              onClick={() => history.replace("/friends")}
              className="button is-warning cancel-btn"
            >
              Cancel
            </button>
            <button type="submit" className="button is-primary">
              {friendsCopy[0] ? "Update" : "Submit"}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

const mapStateToProps = state => ({
  friends: state.data
});

const mapDispatchToProps = dispatch => ({
  addFriends: values => dispatch(addFriends(values)),
  updateFriends: (id, values) => dispatch(updateRequest(id, values))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsForm);
