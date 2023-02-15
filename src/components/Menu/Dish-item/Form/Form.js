import React, {useState, useRef, useEffect} from "react";
import styles from "./Form.module.scss";
import { Input } from "../../../UI/Input/Input";
import { SmallText } from "../../../UI/TextBlocks/SmallText";
import { AddBTN } from "../../../UI/Buttons/AddBTN";

export const Form = (props) => {
  const [isInputEmpty, setIsInputEmpty] = useState(true)
  const [enteredValue, setEnterdValue] = useState('0')

  const amountValue = useRef()
  
  useEffect(() => {
    console.log(enteredValue)
    if (enteredValue === '0') {
      setIsInputEmpty(true);
    }
  }, [enteredValue]);

  const isInputFilledHandler = (event) => {
    if (event.target.value.trim().length) {
      setEnterdValue(event.target.value.trim());
      if (event.target.value !== "0") {
        setIsInputEmpty(false);
      }
    }
  }

  const amountTransmisser = (event) => {
    event.preventDefault()
    props.order(+amountValue.current.value)
    amountValue.current.value = '0'
    setIsInputEmpty(true);
  }

  return (
    <form className={styles.amount}>
      <SmallText color={'grey'} text={'Amount'} />
      <div className={styles.input_body}>
        <Input
          onChange={isInputFilledHandler}
          ref={amountValue}
          input={{
            id: "Amount_" + props.id,
            type: "number",
            min: "0",
            max: "100",
            step: "1",
            placeholder: "0",
          }}
        />
        <AddBTN onclick={amountTransmisser} disabled={isInputEmpty}/>
      </div>
    </form>
  );
};