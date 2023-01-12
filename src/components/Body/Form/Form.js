import React, {useState, useRef, useEffect} from "react";
import styles from "./Form.module.scss";
import { Input } from "../../UI/Input/Input";

export const Form = (props) => {
  const [isInputEmpty, setIsInputEmpty] = useState(true)
  const [enteredValue, setEnterdValue] = useState('0')

  const amountValue = useRef()
  
  useEffect(() => {
    if (enteredValue === '0') {
      setIsInputEmpty(true);
    }
  }, [enteredValue]);

  const isInputFilledHandler = (event) => {
    if (event.target.value.trim().length) {
      setIsInputEmpty(false)
      setEnterdValue(event.target.value.trim());
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
      <p>Amount</p>
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
        <button
          className={styles.btn}
          onClick={amountTransmisser}
          disabled={isInputEmpty}
        >
          Add
        </button>
      </div>
    </form>
  );
};