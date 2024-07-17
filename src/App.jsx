import React, { Suspense, lazy, useState } from 'react';
import { DessertContextProvider } from './context/DessertDataContext.jsx';
import { CartDataProvider } from './context/CartDataContext.jsx';
import Loader from './components/Loader.jsx';
const Cart = lazy(() => import('./components/Cart.jsx'));
const DessertContainer = lazy(() => import('./components/DessertContainer.jsx'));
const OrderConfirmedWindow = lazy(() => import('./components/OrderConfirmedWindow.jsx'));

export default function App() {

  // State for dessertData.
  const [dessertData, setDessertData] = useState(null);

  // State for cart items.
  const [cartItems, setCartItems] = useState([]);

  // State for total order price of cart.
  const [totalOrderPrice, setTotalOrderPrice] = useState(0);

  // State for order confirmation.
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  return (
    <DessertContextProvider values={{ dessertData, setDessertData }}>
      <CartDataProvider values={{ cartItems, setCartItems, orderConfirmed, setOrderConfirmed, totalOrderPrice, setTotalOrderPrice }}>
        <div className="bg-rose100 p-8 xl:p-12 min-h-[100vh] w-full overflow-x-hidden flex justify-center items-center flex-col sm:flex-row sm:items-start font-red-hat-text">
          <Suspense fallback={<Loader height={'100vh'} />}>
            <DessertContainer />
            <Cart />
            {
              orderConfirmed ? <OrderConfirmedWindow /> : null
            }
          </Suspense>
        </div>
      </CartDataProvider>
    </DessertContextProvider>
  );
};
