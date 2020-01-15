import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./textInput";
import authService, { login } from "../services/authService";
import { Redirect } from "react-router-dom";

function LoginForm({ location, history }) {
  if (authService.getToken()) return <Redirect to="/" />;

  return (
    <div>
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
            const { state } = location;
            history.replace(state ? location.state.from.pathname : "/");
            // window.location = state ? state.from.pathname : "/";
          } catch (error) {
            setStatus({ success: false });
            setSubmitting(false);
            setErrors({ submit: error.message });
          }
        }}
      >
        <Form>
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

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
