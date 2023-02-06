import React, {useEffect, useState} from "react";
import styles from "./Menu.module.scss";
import { CardContainer } from "../../UI/Card-container/Card-container";
import { DishItem } from "./Dish-item/Dish-item";
import { useHTTP } from "../../hooks/use-HTTP";
import { Loading } from "../../UI/loadingBackDrop/LoadingBackdrop";
import { menuObj } from "../../../dummy-menu";
import { useNavigation } from "react-router-dom";

export const Menu = ({ meals }) => {
  const { isLoading, sendRequest } = useHTTP();
  const [httpsError, setHttpsError] = useState(false);
  const [fetchFailed, setFetchFailed] = useState(false);
  // const [meals, setMeals] = useState([])

  // useEffect(() => {
  //   const httpInfo = {
  //     url: "https://tastycaffe-38e0d-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
  //   };

  //   const extractFromFB = (data) => {
  //     const loaded = [];
  //     for (let key in data) {
  //       loaded.push({ ...data[key], id: key });
  //     }
  //     setMeals(loaded);
  //   };

  //   sendRequest(httpInfo, extractFromFB).catch((err) => {
  //     setHttpsError(`${err.message}, through 5 seconds will be shown basic menu...`);

  //     setTimeout(() => {
  //       setFetchFailed(true)
  //       setHttpsError(false)
  //       setMeals(menuObj);
  //     }, 5000)
  //   });
  // }, [sendRequest]);

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
        {
        // httpsError ? (
        //   <p className={styles.menu__error}>{httpsError}</p>
        // ):
         (
          menuList
        )}
      </ul>
    </CardContainer>
  );

  return (
    <section id="menu">
      {menu}
      {/* {!fetchFailed && isLoading && !httpsError ? <Loading /> : menu} */}
    </section>
  );
};

