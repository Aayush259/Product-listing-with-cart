import React, { useEffect, useState } from 'react';
import emptyCartIcon from '../images/illustration-empty-cart.svg';
import { useCartData } from '../context/CartDataContext.jsx';
import CartItem from './CartItem.jsx';
import ConfirmOrderButton from './ConfirmOrderButton.jsx';

export default function Cart() {

    // Getting cartItems from cart data context.
    const { cartItems, setCartItems } = useCartData();

    // State for total number of items present in cart.
    const [totalItemsInCart, setTotalItemsInCart] = useState(0);

    // State for total order price of cart.
    const [totalOrderPrice, setTotalOrderPrice] = useState(0);

    // Update total number of items and total price of all items in cart when cartItems from context changes.
    useEffect(() => {
        let totalItemsCount = 0;
        let totalPrice = 0;

        cartItems.forEach(item => {
            totalItemsCount += item['count'];
            totalPrice += item['price'] * item['count'];
        });

        setTotalItemsInCart(totalItemsCount);
        setTotalOrderPrice(totalPrice);
    }, [cartItems]);

    // This function removes the item from cart completely, means all the counts are removed.
    const removeItemFromCartCompletely = (itemName) => {
        setCartItems(prevCartItems => prevCartItems.filter(items => items['name'] !== itemName));
    };

    return (
        <div className="relative flex-grow max-w-96 min-w-80 mr-2">
            <div className="bg-rose50 sticky top-0 left-0 w-96 min-h-56 m-4 p-4 pb-1 rounded-lg">
                <p className="text-redGiven font-bold text-2xl mb-4">Your Cart ({totalItemsInCart})</p>
                {
                    totalItemsInCart <= 0 ? <>
                        <img src={emptyCartIcon} alt="Empty Cart" className="mx-auto mt-6" />
                        <p className="mt-4 mb-6 text-center text-rose500 font-semibold">Your added items will appear here</p>
                    </> : <>
                    {
                        cartItems.map(item => item['count'] > 0 ?
                            <CartItem key={item['name']} item={item} removeItemFromCartCompletely={removeItemFromCartCompletely} /> : null
                        )
                    }
                    <ConfirmOrderButton totalOrderPrice={totalOrderPrice} />
                    </>
                }
            </div>
        </div>
    );
};
