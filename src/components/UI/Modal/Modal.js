import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";


const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.closeBasket}/>
};

const ModalOverLay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};


export const Modal = (props) => {
  const portalElement = document.querySelector("#overlay");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop closeBasket={props.closeBasket}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </>
  );
}