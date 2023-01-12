import { useEffect } from "react";
import { Modal } from "../../../UI/Modal/Modal";
import { useHTTP } from "../../../hooks/use-HTTP";
import styles from './CancellationInfo.module.scss';
import Congrat from '../../../../assets/img/Congrat.svg'

export const CancellationInfo = (props) => {
  const { isLoading, sendRequest } = useHTTP();

  useEffect(()=> {
    const transformData = (data) => {
      return {...data, time: new Date()}
    }

    const httpInfo = {
      url: "https://tastycaffe-38e0d-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      data: transformData(props.order),
    };

    sendRequest(httpInfo);
  }, [sendRequest, props.order])

  const loadingText = <p>Loading...</p>
  const weRecived = (
    <div className={styles.cancelation_body}>
      <p className={styles.cancelation_title}>Order submited</p>
      <div className={styles.cancelation_img_text_btn_body}>
        <img src={Congrat} alt="Hooray" className={styles.cancelation_img} />
        <p className={styles.cancelation_text}>
          Order was successfully ended and sent to FireBase
        </p>
        <button
          className={styles.cancelation_button}
          onClick={props.closeBasket}
        >
          Return
        </button>
      </div>
    </div>
  );

  return (
    <Modal closeBasket={props.closeBasket}>
      {isLoading ? loadingText : weRecived}
    </Modal>
  );
};
