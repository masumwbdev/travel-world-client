import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import useAuth from '../hooks/useAuth';
import './MyOrder.css'

const MyOrders = () => {
    const { user } = useAuth();
    const { email } = user;
    console.log(email)
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/users/${email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [email])
    return (
        <div>
            <h1 className="my-order">My order</h1>
            {
                myOrders.map(myservice => <div

                    key={myservice._id}>
                    <div className="shadow my-5 text-center rounded">
                        <div>
                            {/* <img src={myservice.img} alt="" />
                            <h4>{myservice.title}</h4> */}
                            {/* <h5>Name: {myservice.name}</h5>
                            <p>Email: {myservice.email}</p>
                            <p>{myservice.location}</p> */}
                        </div>
                        {/* <div>
                            <button className="btn btn-danger mt-2 mb-5" onClick={() => handleDelete(order._id)}>Delete Service</button>
                        </div> */}
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyOrders;