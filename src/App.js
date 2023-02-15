import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.scss';
import { BasketContextProvider } from './components/context/basket-context/basket-context';
import { RootLayout } from './pages/RootLayout';
import { loader as RootLoader } from "./pages/Menu";
import { CartPage } from "./pages/Cart";
import { OrderLayout } from "./pages/OrderLayout";
import { MenuPage } from "./pages/Menu";
import { OrderForm } from "./components/OrderForm/OrderForm";
import { AuthPage } from "./pages/Auth";
import { action as AuthAction } from "./pages/Auth";
import { action as OrderAction } from "./components/OrderForm/OrderForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <MenuPage />, loader: RootLoader },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "order",
        element: <OrderLayout />,
        action: OrderAction,
        children: [
          {
            path: "submit",
            element: <OrderForm />,
          },
        ],
      },
      { path: "auth", element: <AuthPage />, action: AuthAction },
    ],
  },
]);

export function App() {
  return (
    <BasketContextProvider>
      <RouterProvider router={router} />
    </BasketContextProvider>
  );
}