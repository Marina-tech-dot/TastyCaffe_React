import React, {useContext, useState, useEffect} from 'react';
import styles from './Header.module.scss' 
import cart from "../../assets/img/cart.svg" 
import { BasketContext } from '../context/basket-context/basket-context';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
  const cntx = useContext(BasketContext);
  const [isBasketFull, setIsBasketFull] = useState(cntx.order.length);

  useEffect(() => {
    setIsBasketFull(cntx.order.length)
  }, [cntx.order.length]);

  const basketOpenHandler = () => {
    props.openBasket()
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__logo}>Tasty Food</div>
        <NavLink
          to="cart"
          className={`${styles.basket} ${
            isBasketFull && styles.cursor_pointer
          }`}
          onClick={basketOpenHandler}
        >
          <img src={cart} alt="cart" className={styles.basket__img} />
          <div className={styles.basket__title}>Cart</div>
          <div className={styles.basket__amount_circle}>
            <div className={styles.basket__amount}>{cntx.totalAmount}</div>
          </div>
        </NavLink>
      </div>
    </header>
  );
}