import React from "react";
import { InputText } from 'primereact/inputtext';
import { FieldRenderProps } from "react-final-form";

import styles from "../styles.module.css";

type FieldPropsType = FieldRenderProps<string, any>;

export const TextField = (props: FieldPropsType) => {
  const { 
    meta, 
    icon, 
    input, 
    label, 
    settings,
    onClickIcon = () => {},
    onError = () => {} 
  } = props;

  if(meta.error) onError(meta)

  return (
    <React.Fragment>
      <div
        className={`${styles.input} ${
          meta.error && meta.touched && styles.input_error
        }`}
      >
        <label>{label}</label>
        <div className={styles.inputWrapper}>
          <InputText {...input} {...settings} />
          {icon && <i className={icon} onClick={onClickIcon}></i>}
        </div>
        {meta.error && meta.touched && (
          <small className={styles.error}>{meta.error}</small>
        )}
      </div>
    </React.Fragment>
  );
}