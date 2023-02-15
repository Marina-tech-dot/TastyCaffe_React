import React from "react";
import styles from "./Input.module.scss";

export const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input className={styles.input}ref={ref} {...props.input} onChange={props.onChange}/>
    </div>
  );
});
