import styles from "./Cart.module.scss";
import { useContext } from "react";
import { BasketContext } from "../context/basket-context/basket-context";
import { CartItem } from "./CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import { Title } from "../UI/TextBlocks/Tilte";
import { MediumText } from "../UI/TextBlocks/MediumText";
import { CloseBTN } from "../UI/Buttons/CloseBTN";
import { OrderBTN } from "../UI/Buttons/OrderBTN";
import { CardOnBody } from "../UI/Card-onBody.js/CardOnBody";

export const Cart = () => {
  const { order, totalPrice } = useContext(BasketContext);
  const navigate = useNavigate()

  const content = order.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        description={item.description}
        title={item.title}
        amount={item.amount}
        price={item.price}
        totalPrice={item.totalPrice}
      />
    );
  });

  const navigateHandler = () => {
    navigate('/order/submit')
  }

  const navigateMainHandler = () => {
    navigate('/')
  }
  
  return (
    <section id="cart">
      <CardOnBody>
        <Title text={"Cart"} />
        <ul className={styles.ul}>{content}</ul>
        <div className={styles.price_btn_body}>
          <div className={styles.total_price}>
            <MediumText text={"Total price"} />
            <MediumText color={"violet"} text={`$ ${totalPrice}`} />
          </div>
          <div className={styles.btn_body}>
            <CloseBTN onclick={navigateMainHandler} />
            <OrderBTN onclick={navigateHandler} disabled={totalPrice === 0} />
          </div>
        </div>
      </CardOnBody>
    </section>
  );
};