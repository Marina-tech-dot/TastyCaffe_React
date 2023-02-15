import styles from "./OrderBTN.module.scss"

export const OrderBTN = ({disabled, onclick}) => {
  return (
    <button className={styles.btn} disabled={disabled} onClick={onclick}>Order</button>
  )
}