import { Cart } from "../components/Cart/Cart";
import styles from "../components/Body/Body.background.module.scss";


export const CartPage = () => {
  return (
    <div className={styles.container}>
      <Cart />
    </div>
  )
}