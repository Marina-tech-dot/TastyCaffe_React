import React, {useContext} from "react";
import styles from "./Dish-item.module.scss";
import { Form } from "../../Form/Form";
import { BasketContext } from "../../../context/basket-context/basket-context";

export const DishItem = (props) => {
  const cntx = useContext(BasketContext)

  const orderHandler = amount => {
    cntx.addInBasket({ ...props, amount });
  }

  return (
    <li className={styles.dish}>
      <div className={styles.dish_title_price_body}>
        <div className={styles.dish__title_body}>
          <div className={styles.dish__title}>{props.title}</div>
          <div className={styles.dish__description}>{props.description}</div>
        </div>
        <div className={styles.dish__price}>{`$ ${props.price}`}</div>
      </div>
      <div className={styles.dish__amount}>
        <Form order={orderHandler} />
      </div>
    </li>
  );
}