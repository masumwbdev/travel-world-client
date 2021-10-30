import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setOrders(data))
    })
    return (
        <div>
            <div>
                <h1 className="text-center mb-5 mt-5">Travel Packages</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto mb-5">
                {
                    orders.map(order => <ManageOrder
                        order={order}
                    ></ManageOrder>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;