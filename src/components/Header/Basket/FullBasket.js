import { Modal } from "../../UI/Modal/Modal";
import styles from "./FullBasket.module.scss";
import { useContext } from "react";
import { BasketContext } from "../../context/basket-context/basket-context";
import { BasketItem } from "./BasketItem";

export const FullBasket = (props) => {
  const { order, totalPrice } = useContext(BasketContext);

  const content = order.map((item) => {
    return (
      <BasketItem
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

  const orderSubmitHandler = () => {
    props.startOrder()
  };
  
  return (
    <Modal closeBasket={props.closeBasket}>
      <p className={styles.title}>Cart</p>
      <ul className={styles.ul}>{content}</ul>
      <div className={styles.price_btn_body}>
        <div className={styles.total_price}>
          <p>Total price</p>
          <p>{`$ ${totalPrice}`}</p>
        </div>
        <div className={styles.btn_body}>
          <button className={styles.btn_white} onClick={props.closeBasket}>
            Close
          </button>
          <button className={styles.btn_violet} onClick={orderSubmitHandler} disabled={totalPrice === 0}>
            Order
          </button>
        </div>
      </div>
    </Modal>
  );
};