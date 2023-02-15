import React, {useContext, useState, useEffect} from 'react';
import styles from './Header.module.scss' 
import cart from "../../assets/img/cart.svg" 
import login from "../../assets/img/login.svg" 
import { BasketContext } from '../context/basket-context/basket-context';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const cntx = useContext(BasketContext);
  const [isBasketFull, setIsBasketFull] = useState(cntx.order.length);
  const navigate = useNavigate()

  useEffect(() => {
    setIsBasketFull(cntx.order.length)
  }, [cntx.order.length]);

  const authHandler = () => {
    navigate("/auth?mode=login");
  }

  const logoHandler = () => {
    navigate('/')
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__logo} onClick={logoHandler}>Tasty Food</div>
        <div className={styles.header__cartbody}>
          <Link to="cart">
            <div
              className={`${styles.basket} ${
                isBasketFull && styles.cursor_pointer
              }`}
            >
              <img src={cart} alt="cart" className={styles.basket__img} />
              <div className={styles.basket__title}>Cart</div>
              <div className={styles.basket__amount_circle}>
                <div className={styles.basket__amount}>{cntx.totalAmount}</div>
              </div>
            </div>
          </Link>
          <div>
            <img
              className={styles.cursor_pointer}
              src={login}
              alt="login"
              onClick={authHandler}
            />
          </div>
        </div>
      </div>
    </header>
  );
}