import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Body } from "../components/Body/Body"


export const RootLayout = () => {
  return (
    <>
    <Header />
    <Body />
    <Outlet />
    </>
  )
}