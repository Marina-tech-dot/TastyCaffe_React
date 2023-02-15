import React from "react";
import styles from "./SmallText.module.scss";

export const SmallText = (props) => {
  let styleName 
  if (!props.color) {
    styleName = `text_black`
  } else {
    styleName = `text_${props.color}`;
  }

  return (
    <p className={styles[styleName]}>{props.text}</p>
  );
};