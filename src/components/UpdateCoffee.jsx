// import React from 'react';

import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        <div>
            <h1>Available coffees : </h1>
        </div>
    );
};

export default UpdateCoffee;