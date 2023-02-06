import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.scss';
import styles from './components/App/styles.module.scss';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { BasketContextProvider } from './components/context/basket-context/basket-context';
import { Basket } from './components/Header/Basket/Basket';
import { RootLayout } from './pages/RootLayout';
import { HomePage } from './pages/Home';
import { OrderForm } from './components/Header/Basket/OrderForm/OrderForm';
import { loader as MenuLoader } from './components/Body/Body';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: MenuLoader,
    children: [
      // {index: true, element: <HomePage />},
      { path: "/cart", element: <Basket /> },
      { path: "/submit", element: <OrderForm /> },
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







// function App() {
//   const [isBasketOpen, setIsBasketOpen] = useState(false)

//   const openBasketHandler = () => {
//     setIsBasketOpen(true)
//   }

//   const closeBasketHandler = () => {
//     setIsBasketOpen(false);
//   }

//   return (
//     <BasketContextProvider>
//       <div className={styles.wrapper}>
//         <Header openBasket={openBasketHandler} />
//         <Body />
//         {isBasketOpen && <Basket closeBasket={closeBasketHandler} />}
//       </div>
//     </BasketContextProvider>
//   );
// }

// export default App;