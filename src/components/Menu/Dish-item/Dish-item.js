import React, {useContext} from "react";
import styles from "./Dish-item.module.scss";
import { Form } from "./Form/Form";
import { BasketContext } from "../../context/basket-context/basket-context";
import { MediumText } from "../../UI/TextBlocks/MediumText";
import { SmallText } from "../../UI/TextBlocks/SmallText";


export const DishItem = (props) => {
  const cntx = useContext(BasketContext)

  const orderHandler = amount => {
    cntx.addInBasket({ ...props, amount });
  }

  return (
    <li className={styles.dish}>
      <div className={styles.dish_title_price_body}>
        <div className={styles.dish__title_body}>
          <MediumText text={props.title} />
          <SmallText text={props.description} />
        </div>
        <MediumText color={'violet'} text={`$ ${props.price}`} />
      </div>
      <div className={styles.dish__amount}>
        <Form order={orderHandler} />
      </div>
    </li>
  );
}