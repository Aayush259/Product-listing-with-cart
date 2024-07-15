import React, { createContext, useContext } from 'react';

// Creating new cart data context.
const CartData = createContext({});

// Cart data context provider
const CartDataProvider = ({ children, values }) => {

    return (
        <CartData.Provider value={values}>
            {children}
        </CartData.Provider>
    );
};

// Custom hook to use cart data context.
const useCartData = () => {
    return useContext(CartData);
};

export { useCartData, CartDataProvider };
