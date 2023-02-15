import { useState } from "react";
import { Form, redirect, useActionData, useNavigate, useSubmit } from "react-router-dom";
import styles from "./OrderForm.module.scss"
import { useIsValidFormField } from "../hooks/use-isValidFormField";
import { Modal } from "../UI/Modal/Modal";
import { useContext } from "react";
import { BasketContext } from "../context/basket-context/basket-context";
import { useHTTP } from "../hooks/use-HTTP";
import { CloseBTN } from "../UI/Buttons/CloseBTN";
import { OrderBTN } from "../UI/Buttons/OrderBTN";
import { Title } from "../UI/TextBlocks/Tilte";

export const OrderForm = () => {
  const navigate = useNavigate()
  const { sendRequest } = useHTTP();

  const [orderBTNClicked, setOrderBTNClicked] = useState(false)

  const {
    value: name,
    valueHandler: nameHandler,
    blurHandler: nameBlurHandler,
    isFiledValid: isNameFilled,
    isInvalid: isNameInvalid,
    errorText: errorInName,
  } = useIsValidFormField("name", orderBTNClicked);
  const {
    value: street,
    valueHandler: streetHandler,
    blurHandler: streetBlurHandler,
    isFiledValid: isStreetFilled,
    isInvalid: isStreetInvalid,
    errorText: errorInStreet,
  } = useIsValidFormField("street", orderBTNClicked);
  const {
    value: house,
    valueHandler: houseHandler,
    blurHandler: houseBlurHandler,
    isFiledValid: isHouseFilled,
    isInvalid: isHouseInvalid,
    errorText: errorInHouse,
  } = useIsValidFormField("adressNumber", orderBTNClicked);
  const {
    value: flat,
    valueHandler: flatHandler,
    blurHandler: flatBlurHandler,
    isFiledValid: isFlatFilled,
    isInvalid: isFlatInvalid,
    errorText: errorInFlat,
  } = useIsValidFormField("adressNumber", orderBTNClicked);
  const {
    value: email,
    valueHandler: emailHandler,
    blurHandler: emailBlurHandler,
    isFiledValid: isEmailFilled,
    isInvalid: isEmailInvalid,
    errorText: errorInEmail,
  } = useIsValidFormField("email", orderBTNClicked);
  const {
    value: phone,
    valueHandler: phoneHandler,
    blurHandler: phoneBlurHandler,
    isFiledValid: isPhoneFilled,
    isInvalid: isPhoneInvalid,
    errorText: errorInPhone,
  } = useIsValidFormField("phone", orderBTNClicked);
  
  let formIsValid = false

  if (
    isNameFilled &&
    isStreetFilled &&
    isHouseFilled &&
    isFlatFilled &&
    isEmailFilled &&
    isPhoneFilled
  ) {
    formIsValid = true;
  }

  const {order, totalAmount, totalPrice} = useContext(BasketContext); 
  const formDatas = useActionData()

  // то, что было и работало....
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   if (!formIsValid) {
  //     setOrderBTNClicked(true)
  //     return;
  //   }

  //   if (formIsValid) {
  //     const submittedOrder = {
  //       name,
  //       street,
  //       house,
  //       flat,
  //       email,
  //       phone,
  //       order,
  //       totalAmount,
  //       totalPrice,
  //     };

  //     const transformData = (data) => {
  //     return {...data, time: new Date()}
  //   }

  //   const httpInfo = {
  //     url: "https://tastycaffe-38e0d-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     data: transformData(submittedOrder),
  //   };

  //   sendRequest(httpInfo);
  //   navigate("/orderSubmitted");
  //   }
  // }

  const navigateMainHandler = () => {
    navigate('/')
  }

  const submitHandler = (data) => {
    console.log('changing', formIsValid);
    if (!formIsValid) {
      setOrderBTNClicked(true)
      return;
    }
    if (formIsValid) {
      // console.log(data.target)
      // data.method = 'post'
      // data.action = action
      // return data
      // submit(null, { method: "post", action: 'action'});
    }
  }

  return (
    <Modal closeBasket={navigateMainHandler}>
      {/* <Form method="post" onSubmit={submitHandler}> */}
      <Form onSubmit={submitHandler}>
        <Title text={'Order details'}/>
        <div className={styles.form_div}>
          <p>Name</p>
          <input
            type="text"
            value={name}
            name="name"
            className={`${styles.form_input_standart} ${
              isNameInvalid && styles.invalid
            }`}
            onChange={nameHandler}
            onBlur={nameBlurHandler}
          />
          {isNameInvalid && <p className={styles.error}>{errorInName}</p>}
        </div>
        <div className={styles.form_div}>
          <p>Street</p>
          <input
            type="text"
            value={street}
            name="street"
            className={`${styles.form_input_standart} ${
              isStreetInvalid && styles.invalid
            }`}
            onChange={streetHandler}
            onBlur={streetBlurHandler}
          />
          {isStreetInvalid && <p className={styles.error}>{errorInStreet}</p>}
        </div>
        <div className={styles.form_house_flat_body}>
          <div className={styles.form_div}>
            <p>House</p>
            <input
              type="number"
              min="1"
              value={house}
              name="house"
              className={`${styles.form_input_small} ${
                isHouseInvalid && styles.invalid
              }`}
              onChange={houseHandler}
              onBlur={houseBlurHandler}
            />
            {isHouseInvalid && <p className={styles.error}>{errorInHouse}</p>}
          </div>
          <div className={styles.form_div}>
            <p>Flat</p>
            <input
              type="number"
              min="1"
              value={flat}
              name="flat"
              className={`${styles.form_input_small} ${
                isFlatInvalid && styles.invalid
              }`}
              onChange={flatHandler}
              onBlur={flatBlurHandler}
            />
            {isFlatInvalid && <p className={styles.error}>{errorInFlat}</p>}
          </div>
        </div>
        <div className={styles.form_div}>
          <p>Email</p>
          <input
            type="email"
            value={email}
            name="email"
            className={`${styles.form_input_standart} ${
              isEmailInvalid && styles.invalid
            }`}
            onChange={emailHandler}
            onBlur={emailBlurHandler}
          />
          {isEmailInvalid && <p className={styles.error}>{errorInEmail}</p>}
        </div>
        <div className={styles.form_div}>
          <p>Phone</p>
          <input
            type="phone"
            value={phone}
            name="phone"
            className={`${styles.form_input_standart} ${
              isPhoneInvalid && styles.invalid
            }`}
            onChange={phoneHandler}
            onBlur={phoneBlurHandler}
          />
          {isPhoneInvalid && <p className={styles.error}>{errorInPhone}</p>}
        </div>
        <div className={styles.form_btn__body}>
          <input
            type="hidden"
            name="order"
            value={JSON.stringify(order)}
          ></input>
          <input type="hidden" name="totalAmount" value={totalAmount}></input>
          <input type="hidden" name="totalPrice" value={totalPrice}></input>
          {/* <button
            className={styles.form_btn__white}
            onClick={navigateMainHandler}
          >
            Close
          </button>
          <button className={styles.form_btn__violet}>Order</button> */}
          <CloseBTN onclick={navigateMainHandler} />
          <OrderBTN />
        </div>
      </Form>
    </Modal>
  );
}

export const action = async({request, params}) => {
  console.log('!')
  const data = await request.formData();

  const eventData = {
    name: data.get("name"),
    street: data.get("street"),
    house: data.get("house"),
    flat: data.get("flat"),
    email: data.get("email"),
    phone: data.get("phone"),
    order: JSON.parse(data.get("order")),
    totalAmount: data.get("totalAmount"),
    totalPrice: data.get("totalPrice"),
  };

  console.log(eventData)

  let url = "https://tastycaffe-38e0d-default-rtdb.europe-west1.firebasedatabase.app/orders.json";

  const response = await fetch(url, {
    method: 'POST',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    console.log('Problem with form order')
  }
  return response;
}