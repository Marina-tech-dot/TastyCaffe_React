import React, {useEffect, useState} from "react";
import styles from "./Menu.module.scss";
import { CardContainer } from "../../UI/Card-container/Card-container";
import { DishItem } from "./Dish-item/Dish-item";
import { useHTTP } from "../../hooks/use-HTTP";
import { Loading } from "../../UI/loadingBackDrop/LoadingBackdrop";

export const Menu = () => {
  const { isLoading, sendRequest } = useHTTP();
  const [meals, setMeals] = useState([])

  useEffect(() => {
    const httpInfo =
      {url: "https://tastycaffe-38e0d-default-rtdb.europe-west1.firebasedatabase.app/meals.json"};

    const extractFromFB = (data) => {
      const loaded = [];
      for (let key in data) {
        loaded.push({ ...data[key], id: key });
      }
      setMeals(loaded);
    };

    sendRequest(httpInfo, extractFromFB);
  }, [sendRequest])

  const menuList = meals.map((dish) => {
    return (
      <DishItem
        key={dish.id}
        id={dish.id}
        title={dish.title}
        description={dish.description}
        price={dish.price}
        category={dish.category}
        amount={dish.amount}
      />
    );
  });

  const menu = (
    <CardContainer name={styles.menu}>
      <ul className={styles.menu__ul}>
        <p className={styles.menu__title}>Would you like something to eat?</p>
        {menuList}
      </ul>
    </CardContainer>
  );
  
  return (
    <section id="menu">
        {isLoading ? <Loading /> : menu}
    </section>
  );
};

