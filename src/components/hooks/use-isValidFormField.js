import { useState } from "react"
import { isStringValid, isFilled, isValidEmail } from "./isValidFormField.utils";

export const useIsValidFormField = (whatIsValue, isClickedBTNOrder) => {
  const [fieldValue, setFieldValue] = useState('')
  const [fieldTouched, setIsFiledTouched] = useState(false);

  let checkFn
  let errorText
  
  if (whatIsValue === 'name' ) {
    checkFn = isStringValid.bind(null, fieldValue, 2);
    errorText = `This field should contains only english letters, more than 1`
  } else if (whatIsValue === 'street') {
    checkFn = isStringValid.bind(null,fieldValue, 7)
    errorText = `Field should contains only english letters, more than 6`;
  } else if (whatIsValue === 'adressNumber') {
    checkFn = isFilled.bind(null, fieldValue, 1);
    errorText = `Field shouldn't be empty`;
  } else if (whatIsValue === 'email') {
    checkFn = isValidEmail.bind(null, fieldValue);
    errorText = `Entered invalid email`;
  }  else if (whatIsValue === 'phone') {
    checkFn = isFilled.bind(null, fieldValue, 11);
    errorText = `Entered incorrect phone number`;
  }

  let isFiledValid = checkFn();
  let inputIsInvalid = !isFiledValid && (fieldTouched || isClickedBTNOrder);

  const valueHandler = (event) => {
    setFieldValue(event.target.value)
  }

  const blurHandler = () => {
    setIsFiledTouched(true)
  }

  return {
    value: fieldValue,
    isFiledValid,
    isInvalid: inputIsInvalid,
    errorText,
    valueHandler,
    blurHandler,
  };
}