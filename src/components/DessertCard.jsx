import React, { useEffect, useState } from 'react';
import addToCartIcon from '../images/icon-add-to-cart.svg';
import { useCartData } from '../context/CartDataContext.jsx';

export default function DessertCard({ dessertItem }) {

    // Getting dessert details.
    const dessertName = dessertItem['name'];
    const dessertCategory = dessertItem['category'];
    const dessertPrice = dessertItem['price'];

    // Getting cartItems and its setter function from cart data context.
    const { cartItems, setCartItems } = useCartData();

    // State for item count in cart.
    const [countInCart, setCountInCart] = useState(0);

    // When count of dessert item in cart is changed, update it in the cartItems context.
    useEffect(() => {

        // Copy of cart items array.
        const updatedCartItems = [...cartItems];

        // Getting index of that dessert item, whose count is changed (it is removed or added to cart).
        const indexOfDessertItem = updatedCartItems.findIndex(obj => (obj['name'] === dessertName));

        // If the dessert item is present already in cart, then increase it's count, else if the count of the dessert item is greater than 0, then add this item in the updatedCartItems array.
        if (indexOfDessertItem >= 0) {
            updatedCartItems[indexOfDessertItem] = {name: dessertName, count: countInCart};
        } else if (countInCart > 0) {
            updatedCartItems.push({
                name: dessertName,
                count: countInCart
            });
        }

        // Update the original cartItems array.
        setCartItems(updatedCartItems);

    }, [countInCart]);

    // This function returns the dessert image src based on given width.
    const getImageURL = (width) => {

        if (width >= 1024) {
            return dessertItem['image']['desktop'];
        } else if (width >= 768) {
            return dessertItem['image']['tablet'];
        } else {
            return dessertItem['image']['mobile'];
        }
    };

    // State for dessertImage src.
    const [dessertImage, setDessertImage] = useState(getImageURL(window.innerWidth));

    useEffect(() => {

        // This function updates the dessert image based on window's innerWidth.
        const handleWidthResize = () => {
            setDessertImage(getImageURL(window.innerWidth));
        };

        // Adding event listener to window so that when screen size is changed, it updates the dessert image.
        window.addEventListener('resize', handleWidthResize);

        // Cleanup the event listener when the component unmounts.
        return () => {
            window.removeEventListener('resize', handleWidthResize);
        };
    }, []);

    // This function updates the number of items added in the cart.
    const addItemToCart = () => {
        setCountInCart(prevCount => prevCount + 1);
    };

    return (
        <div className="w-52 max-w-[90vw] mx-4 my-4">
            <img src={dessertImage} alt={dessertName} className="rounded-lg w-full border-2 border-transparent" />

            <button className="flex items-center gap-2 border border-rose400 py-2 px-4 mx-auto -translate-y-1/2 rounded-3xl bg-rose50" onClick={addItemToCart}>
                <img src={addToCartIcon} alt="Add to cart" />
                <span>Add to Cart</span>
            </button>

            <div>
                <p className="text-rose500 text-sm -mt-2">{dessertCategory}</p>
                <p className="text-rose900 font-semibold">{dessertName}</p>
                <p className="text-redGiven font-semibold">${dessertPrice.toFixed(2)}</p>
            </div>
        </div>
    );
};
