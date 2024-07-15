import React, { useState } from 'react';
import Cart from './components/Cart.jsx';
import { DessertContextProvider } from './context/DessertDataContext.jsx';
import DessertContainer from './components/DessertContainer.jsx';
import { CartDataProvider } from './context/CartDataContext.jsx';

export default function App() {

  // State for dessertData.
  const [dessertData, setDessertData] = useState(null);

  // State for cart items.
  const [cartItems, setCartItems] = useState({});

  return (
    <DessertContextProvider values={{ dessertData, setDessertData }}>
      <CartDataProvider values={{ cartItems, setCartItems }}>
        <div className="bg-rose100 p-8 xl:p-12 min-h-[100vh] w-full overflow-x-hidden flex justify-center">
          <DessertContainer />
          <Cart />
        </div>
      </CartDataProvider>
    </DessertContextProvider>
  );
};
