import React, { createContext, useContext } from 'react';

// Creating new dessert context.
const DessertContext = createContext({});

// Dessert Context Provider
const DessertContextProvider = ({children, values}) => {

    return (
        <DessertContext.Provider value={values}>
            {children}
        </DessertContext.Provider>
    );
};

// Custom hook to use dessert context.
const useDessertContext = () => {
    return useContext(DessertContext);
};

export {useDessertContext, DessertContextProvider};
