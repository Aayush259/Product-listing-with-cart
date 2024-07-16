import React from 'react';
import removeIcon from '../images/icon-remove-item.svg';

export default function CartItem({ item }) {

    // Item details to display in cart.
    const itemName = item['name'];
    const itemCount = item['count'];
    const itemPrice = item['price'];
    const totalPrice = (itemCount * itemPrice).toFixed(2);

    return (
        <div className="flex flex-row items-center justify-between mt-5 border-b-2 border-rose100 pb-3">
            <div>
                <p className="font-semibold">{itemName}</p>
                <p className="mt-1">
                    <span className="text-redGiven font-semibold">{itemCount}x</span>
                    <span className="font-thin text-rose900 ml-5 text-sm">@ ${itemPrice}</span>
                    <span className="font-extralight text-rose900 ml-3 text-sm">${totalPrice}</span>
                </p>
            </div>
            <button className="rounded-full">
                <img src={removeIcon} alt="Remove item" className="border border-rose300 rounded-full h-4 p-[2px] hover:border-rose900 " />
            </button>
        </div>
    );
};
