import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";

const Element = Element => ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        <Element {...input} {...props} />
      </div>
      { hasError && <span>{meta.error}</span> }
    </div>
  );
}

export const Textarea = Element("textarea");

export const Input = Element("input");

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
  <div>
    <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}/> {text}
  </div>
)