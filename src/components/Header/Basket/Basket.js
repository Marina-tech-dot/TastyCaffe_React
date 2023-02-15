// import React from "react";
// import { useContext, useState } from "react";
// import { FullBasket } from "./FullBasket";
// import { OrderForm } from "./OrderForm/OrderForm";
// import { CancellationInfo } from "./CancellationInfo/CancellationInfo";
// import { BasketContext } from "../../context/basket-context/basket-context";

// export const Basket = (props) => {
//   const [isOrdered, setIsOrdered] = useState(true)
//   const [isSubmittedOrder, setIsSubmittedOrder] = useState(false)
//   const [completedOrder, setCompletedOrder] = useState([])

//   const { cleanBasket } = useContext(BasketContext);

//   const isOrderedHandler = () => {
//     setIsOrdered(false);
//   };

//   const isSubmittedOrderHandler = (order) => {
//     setIsSubmittedOrder(true)
//     setCompletedOrder(order)
//     cleanBasket()
//   }

//   return (
//     <>
//       {isOrdered && (
//         <FullBasket
//           startOrder={isOrderedHandler}
//           closeBasket={props.closeBasket}
//         />
//       )}
//       {!isOrdered && !isSubmittedOrder && (
//         <OrderForm
//           closeBasket={props.closeBasket}
//           submitOrder={isSubmittedOrderHandler}
//         />
//       )}
//       {!isOrdered && isSubmittedOrder && (
//         <CancellationInfo
//           closeBasket={props.closeBasket}
//           order={completedOrder}
//         ></CancellationInfo>
//       )}
//     </>
//   );
// }