import React from 'react';
import addToCartIcon from '../images/icon-add-to-cart.svg';
import incrementIcon from '../images/icon-increment-quantity.svg';
import decrementIcon from '../images/icon-decrement-quantity.svg';

export default function AddToCartButton({ addedInCartCount, addItemToCart, removeItemFromCart }) {

    return (
        <>
            {
                addedInCartCount <= 0 ? <button className="flex items-center min-w-36 gap-2 border border-rose400 py-3 px-5 mx-auto -translate-y-1/2 rounded-3xl bg-rose50" onClick={addItemToCart}>

                    <img src={addToCartIcon} alt="Add to cart" />
                    <span>Add to Cart</span>

                </button> : <div className="flex items-center justify-between w-36 py-3 px-5 mx-auto -translate-y-1/2 rounded-3xl bg-redGiven border border-redGiven text-rose50">

                    <button className="flex items-center justify-center rounded-full border border-rose50 h-5 w-5 p-1 hover:opacity-65" onClick={removeItemFromCart}>
                        <img src={decrementIcon} alt="Decrease quantity" className="w-full" />
                    </button>

                    <span>{addedInCartCount}</span>

                    <button className="flex items-center justify-center rounded-full border border-rose50 h-5 w-5 p-1 hover:opacity-65" onClick={addItemToCart}>
                        <img src={incrementIcon} alt="Increase quantity" className="w-full" />
                    </button>

                </div>
            }
        </>
    );
};
