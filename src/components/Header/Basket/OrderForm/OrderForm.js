import { useState } from "react";
import styles from "./OrderForm.module.scss"
import { useIsValidFormField } from "../../../hooks/use-isValidFormField";
import { Modal } from "../../../UI/Modal/Modal";
import { useContext } from "react";
import { BasketContext } from "../../../context/basket-context/basket-context";

export const OrderForm = (props) => {
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

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      setOrderBTNClicked(true)
      return;
    }

    if (formIsValid) {
      const submittedOrder = {
        name,
        street,
        house,
        flat,
        email,
        phone,
        order,
        totalAmount,
        totalPrice,
      };
      props.submitOrder(submittedOrder);
    }
  }

  return (
    <Modal>
      <form onSubmit={submitHandler}>
        <p className={styles.form_title}>Order details</p>
        <div className={styles.form_div}>
          <p>Name</p>
          <input
            type="text"
            value={name}
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
            className={`${styles.form_input_standart} ${
              isPhoneInvalid && styles.invalid
            }`}
            onChange={phoneHandler}
            onBlur={phoneBlurHandler}
          />
          {isPhoneInvalid && <p className={styles.error}>{errorInPhone}</p>}
        </div>
        <div className={styles.form_btn__body}>
          <button
            className={styles.form_btn__white}
            onClick={props.closeBasket}
          >
            Close
          </button>
          {/* <button className={styles.form_btn__violet} disabled={!formIsValid}> */}
          <button className={styles.form_btn__violet}>
            Order
          </button>
        </div>
      </form>
    </Modal>
  );
}