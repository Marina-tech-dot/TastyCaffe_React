import styles from "./CloseBTN.module.scss"

export const CloseBTN = ({disabled, onclick}) => {
  return (
    <button className={styles.btn} disabled={disabled} onClick={onclick}>
      Close
    </button>
  );
}