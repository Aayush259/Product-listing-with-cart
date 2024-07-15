import React, { useEffect, useState } from 'react';
import emptyCartIcon from '../images/illustration-empty-cart.svg';
import { useCartData } from '../context/CartDataContext.jsx';

export default function Cart() {

    // Getting cartItems from cart data context.
    const { cartItems } = useCartData();

    // State for total number of items present in cart.
    const [totalItemsInCart, setTotalItemsInCart] = useState(0);

    // Update total number of items in cart when cartItems from context changes.
    useEffect(() => {
        let totalItemsCount = 0;

        cartItems.forEach(item => {
            totalItemsCount += item['count'];
        });

        setTotalItemsInCart(totalItemsCount);
    }, [cartItems]);

    return (
        <div className="relative flex-grow max-w-96 min-w-80 mr-2">
            <div className="bg-rose50 sticky top-0 left-0 w-80 min-h-56 max-h-96 m-4 p-4 rounded-lg">
                <p className="text-redGiven font-bold text-2xl">Your Cart ({totalItemsInCart})</p>
                <img src={emptyCartIcon} alt="Empty Cart" className="mx-auto mt-6" />
                <p className="mt-4 text-center text-rose500 font-semibold">Your added items will appear here</p>
            </div>
        </div>
    );
};
