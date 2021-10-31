import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import useAuth from '../hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';

const MyOrders = () => {
    const {user} = useAuth();
    const {email} = user;
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/users/${email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [email])
    return (
        <div>
            {
                myOrders.map(myService => <MyOrder
                myService={myService}
                ></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;