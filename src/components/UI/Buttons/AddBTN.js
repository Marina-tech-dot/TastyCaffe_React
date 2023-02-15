import styles from "./AddBTN.module.scss"

export const AddBTN = ({disabled, onclick}) => {
  return (
    <button className={styles.btn} disabled={disabled} onClick={onclick}>Add</button>
  )
}