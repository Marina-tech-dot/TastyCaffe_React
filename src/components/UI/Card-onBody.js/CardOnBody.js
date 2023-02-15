import { CardContainer } from "../Card-container/Card-container"
import styles from './CardOnBody.module.scss'

export const CardOnBody = ({children}) => {
  return (
    <CardContainer name={styles.card}>
      {children}
    </CardContainer>
  )
}