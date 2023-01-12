import React from "react"
import { Menu } from './Menu/Menu'
import styles from './Body.module.scss'

export const Body = () => {

  return (
    <main className={styles.container}>
      <div className={styles.background}></div>
      <Menu />
    </main>
  );
}