import React from "react";
import styles from "./MediumText.module.scss";

export const MediumText = (props) => {
  let styleName 
  if (!props.color) {
    styleName = `text_black`
  } else {
    styleName = `text_${props.color}`;
  }

  return <p className={styles[styleName]}>{props.text}</p>;
};