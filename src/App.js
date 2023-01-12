import React, {useState} from 'react';
import './App.scss';
import styles from './components/App/styles.module.scss';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { BasketContextProvider } from './components/context/basket-context/basket-context';
import { Basket } from './components/Header/Basket/Basket';


function App() {
  const [isBasketOpen, setIsBasketOpen] = useState(false)

  const openBasketHandler = () => {
    setIsBasketOpen(true)
  }

  const closeBasketHandler = () => {
    setIsBasketOpen(false);
  }

  return (
    <BasketContextProvider>
      <div className={styles.wrapper}>
        <Header openBasket={openBasketHandler} />
        <Body />
        {isBasketOpen && <Basket closeBasket={closeBasketHandler} />}
      </div>
    </BasketContextProvider>
  );
}

export default App;