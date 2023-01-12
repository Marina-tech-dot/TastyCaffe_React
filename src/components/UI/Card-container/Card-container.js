import styles from "./Card-container.module.scss";

export const CardContainer = (props) => {
  const classes = `${styles.card} ` + props.name;
    return <div className={classes}>{props.children}</div>;
}