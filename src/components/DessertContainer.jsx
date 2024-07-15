import React, { useEffect } from 'react';
import { useDessertContext } from '../context/DessertDataContext.jsx';
import DessertCard from './DessertCard.jsx';

export default function DessertContainer() {

    // Getting dessertData and its setter function from DessertContext.
    const { dessertData, setDessertData } = useDessertContext();

    // Fetching dessertData from data.json file and updating the data in the dessertData state.
    useEffect(() => {

        fetch('/data.json')
        .then(response => response.json())
        .then(data => setDessertData(data))
        .catch(err => console.log(err))

    }, []);

    return (
        <div className=" max-w-[800px]">
            <h1 className="ml-14 mb-3 text-rose900 text-3xl font-bold">Desserts</h1>
            <div className="flex flex-wrap justify-center">
            {
                dessertData === null ? <p>Loading</p> : dessertData.map(dessert => <DessertCard key={dessert['name']} dessertItem={dessert} />)
            }
            </div>
        </div>
    );
};
