import { useContext } from "react";
import { BasketContext } from "../../context/basket-context/basket-context";
import styles from "./BasketItem.module.scss"

export const BasketItem = (props) => {
  const { addInBasket, removeFromBasket } = useContext(BasketContext);

  const addInBasketHandler = () => {
    addInBasket({
      ...props,
      amount: 1,
    });
  }

  const removeFromBasketHandler = () => {
    removeFromBasket({
      ...props,
      amount: 1,
    });
  }

  return (
    <li className={styles.li}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.amount_price_body}>
        <div className={styles.amount}>
          <button
            className={styles.btnChanger}
            onClick={removeFromBasketHandler}
          >
            -
          </button>
          <div className={styles.props__amount}>{props.amount}</div>
          <button className={styles.btnChanger} onClick={addInBasketHandler}>
            +
          </button>
        </div>
        <div className={styles.price}>{`$ ${props.totalPrice}`}</div>
      </div>
    </li>
  );
};
