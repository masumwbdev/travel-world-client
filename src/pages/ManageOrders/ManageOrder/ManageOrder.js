import React from 'react';

const ManageOrder = ({ order }) => {
    const { name, location } = order;
    console.log(order)
    return (
        <div>
            <h4>{name}</h4>
            <p>{location}</p>
        </div>
    );
};

export default ManageOrder;

