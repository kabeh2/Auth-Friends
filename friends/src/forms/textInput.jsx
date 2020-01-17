import React from "react";
import { useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div className="field">
      <div className="control">
        {/* <label htmlFor={props.id || props.name}>{label}</label> */}
        <input
          className={meta.touched && meta.error ? "input is-danger" : "input"}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className="error has-text-danger">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

export default MyTextInput;
