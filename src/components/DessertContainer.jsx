import React, { useEffect, useState } from 'react';
import { useDessertContext } from '../context/DessertDataContext.jsx';
import DessertCard from './DessertCard.jsx';
import Error from './Error.jsx';
import Loader from './Loader.jsx';

export default function DessertContainer() {

    // Getting dessertData and its setter function from DessertContext.
    const { dessertData, setDessertData } = useDessertContext();

    // States for loading (fetching data) and error.
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Fetching dessertData from data.json file and updating the data in the dessertData state.
    useEffect(() => {

        fetch('/Product-listing-with-cart/data.json')
        .then(response => response.json())
        .then(data => {
            setDessertData(data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setError(true);
            setLoading(false);
        })

    }, []);

    return (
        <div className="max-w-[750px]">
            <h1 className="ml-14 mr-14 mb-3 text-rose900 text-3xl font-bold">Desserts</h1>
            <div className="flex flex-wrap relative justify-center min-w-10">
                {
                    loading ? (
                        <Loader height={'100vh'} />
                    ) : error ? (
                        <Error />
                    ) : (
                        dessertData.map(dessert => <DessertCard key={dessert['name']} dessertItem={dessert} />)
                    )
                }
            </div>
        </div>
    );
};
