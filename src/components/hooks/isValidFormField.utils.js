export const isStringValid = (string, strLength) => {
  const isIncludeNumbers = string
    .trim()
    .toLowerCase()
    .split("")
    .filter(simb => (simb.charCodeAt(0) < 97 && simb.charCodeAt(0) !== 32) || simb.charCodeAt(0) > 122).length;

    return isIncludeNumbers || string.trim().length < strLength ? 0 : 1
}

export const isFilled= (value, valueLength) => {
  return value.length >= valueLength ? 1 : 0
}

export const isValidEmail = string => {
  const specialSimbInString = string.trim().split('').filter(simb => simb === '@' || simb ==='.')
  return specialSimbInString.includes('@') && specialSimbInString.includes('.') ? 1 : 0
}