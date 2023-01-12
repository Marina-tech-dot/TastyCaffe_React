import React from "react";
import ReactDOM from "react-dom";
import styles from "./LoadingBackdrop.module.scss";

export const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.closeBasket} />;
};

export const Loading = (props) => {
  const portalElement = document.querySelector("#overlay");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeBasket={props.closeBasket} />,
        portalElement
      )}
    </React.Fragment>
  );
};
