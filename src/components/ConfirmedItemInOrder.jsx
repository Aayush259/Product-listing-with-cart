import React from 'react';

export default function ConfirmedItemInOrder({ cartItem }) {

    // Extracting details from cart item.
    const thumbnail = cartItem['thumbnail'];
    const dessertName = cartItem['name'];
    const dessertPrice = cartItem['price'];
    const dessertCount = cartItem['count'];

    return (
        <div className="flex flex-row items-center justify-between mt-4 px-4 pb-4 border-b">
            <div className="flex flex-row items-center gap-4">
                <img src={thumbnail} alt={dessertName} className="w-14 rounded-md" />

                <div className="flex flex-col justify-between gap-2 text-sm">
                    <p className="font-semibold text-rose900">{dessertName}</p>
                    <p>
                        <span className="text-redGiven font-semibold mr-4">{dessertCount}x</span>
                        <span className="text-rose900 font-light">@ ${dessertPrice.toFixed(2)}</span>
                    </p>
                </div>
            </div>

            <p className="font-semibold text-rose900">${(dessertCount * dessertPrice).toFixed(2)}</p>
        </div>
    );
};
