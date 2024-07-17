import React from 'react';
import carbonNeutralIcon from '../images/icon-carbon-neutral.svg';

export default function ConfirmOrderButton({ totalOrderPrice, setOrderConfirmed }) {

    return (
        <div className="my-6">
            <p className="text-sm flex items-center justify-between">
                <span>Order Total</span>
                <span className="font-extrabold text-xl">${totalOrderPrice.toFixed(2)}</span>
            </p>

            <div className="text-center my-6 p-3 rounded-lg flex items-center justify-center gap-2 bg-rose100">
                <img src={carbonNeutralIcon} alt="Carbon neutral delivery" className="h-6" />
                <p className="text-rose500 font-medium">
                    This is a <span className="font-semibold text-sm text-rose900">carbon-neutral</span> delivery
                </p>
            </div>

            <button
                className="bg-redGiven w-full py-3 px-2 rounded-3xl text-rose50 font-semibold hover:opacity-80"
                onClick={() => {setOrderConfirmed(true)}}
            >
                Confirm Order
            </button>

        </div>
    );
};
