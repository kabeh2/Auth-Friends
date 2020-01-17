import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import MyTextInput from "./textInput";
import authService from "../services/authService";
import { login } from "../store/actions/actionCreators";

function LoginForm({ location, history, login }) {
  if (authService.getToken()) return <Redirect to="/" />;

  return (
    <div className="columns is-centered">
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Username is Required"),
          password: Yup.string()
            .required("Password is Required")
            .min(4, "Password must have at least 4 characters.")
        })}
        onSubmit={async (
          values,
          { setSubmitting, setErrors, setStatus, resetForm }
        ) => {
          try {
            //   console.log(values);
            await login(values);
            resetForm({});
            setStatus({ success: true });
            history.replace(
              location.state ? location.state.from.pathname : "/"
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
            <h1 className="title has-text-centered has-text-primary">Login</h1>
            <MyTextInput
              label="Username"
              name="username"
              type="text"
              placeholder="Username..."
            />
            <MyTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Password..."
            />

            <button type="submit" className="button is-primary">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  login: credentials => dispatch(login(credentials))
});

export default connect(null, mapDispatchToProps)(LoginForm);
