import styles from "./Card-container.module.scss";

export const CardContainer = ({name, children}) => {
  const classes = `${styles.card} ` + name;
    return <div className={classes}>{children}</div>;
}