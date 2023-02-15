import { Outlet } from "react-router-dom"
import { Cart } from "../components/Cart/Cart"

export const OrderLayout = () => {
  return (
    <>
      <Cart />
      <Outlet />
    </>
  )
}