import React from "react";
import styles from "./Title.module.scss";

export const Title = (props) => {
  let styleName 
  if (!props.color) {
    styleName = `title_violet`
  } else {
    styleName = `title_${props.color}`;
  }

  return <p className={styles[styleName]}>{props.text}</p>;
};