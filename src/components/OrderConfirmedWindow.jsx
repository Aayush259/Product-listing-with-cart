import React, { useEffect } from 'react';
import orderConfirmedIcon from '../images/icon-order-confirmed.svg';
import { useCartData } from '../context/CartDataContext.jsx';
import ConfirmedItemInOrder from './ConfirmedItemInOrder.jsx';

export default function OrderConfirmedWindow() {

    // Getting cart details from cart data context.
    const { cartItems, totalOrderPrice, setTotalOrderPrice, setCartItems, setOrderConfirmed } = useCartData();

    // This function resets the cart and starts new order.
    const startNewOrder = () => {
        setCartItems([]);
        setTotalOrderPrice(0);
        setOrderConfirmed(false);
    };

    useEffect(() => {

        // Scroll to top.
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        document.querySelector('body').classList.add('overflow-y-hidden');

        // Cleanup function. When this component unmounts, allow scrolling in body.
        return () => {
            document.querySelector('body').classList.remove('overflow-y-hidden');
        };
    }, []);

    return (
        <div className="absolute top-0 left-0 bottom-0 right-0 w-full py-5 bg-black bg-opacity-30 min-h-[100vh] flex flex-col justify-center items-center overflow-auto">
            <div className="fixed bottom-0 sm:static bg-rose50 p-4 w-[550px] max-w-[100vw] rounded-bl-none rounded-br-none rounded-xl mt-32 sm:px-8 sm:rounded-br-xl sm:rounded-bl-xl">
                <img src={orderConfirmedIcon} alt="Order confirmed" />

                <p className="mt-6 font-bold text-rose900 text-4xl">Order Confirmed</p>

                <p className="mt-3 text-rose500 font-semibold">We hope you enjoy your food!</p>

                <div className="bg-rose100 rounded-lg p-2 mt-6">
                    <div className="max-h-[300px] overflow-auto">
                        {
                            cartItems.map(cartItem => <ConfirmedItemInOrder cartItem={cartItem} key={cartItem['name']} />)
                        }
                    </div>

                    <div className="flex flex-row items-center justify-between m-4 my-6 text-rose900">
                        <span className="text-sm">Order Total</span>
                        <span className="font-extrabold text-2xl">${totalOrderPrice.toFixed(2)}</span>
                    </div>
                </div>

                <button
                    className="bg-redGiven w-full py-3 px-2 rounded-3xl text-rose50 font-semibold mt-8 mb-4 hover:opacity-80"
                    onClick={startNewOrder}
                >
                    Start New Order
                </button>
            </div>
        </div>
    );
};
