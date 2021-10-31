import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://creepy-broomstick-99717.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setOrders(data))
    })

    const handleDelete = id => {
        window.confirm('Do you want to delete?')
        const url = `https://creepy-broomstick-99717.herokuapp.com/users/${id}/`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                    const remaining = orders.filter(service => service._id !== id);
                    setOrders(remaining)
                }
            })
    }
    return (
        <div>
            <div>
                <h1 className="text-center mb-5 mt-5">Manage all orders</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto mb-5">
                {
                    orders.map(order => <div
                        
                        key={order._id}>
                        <div className="shadow my-5 text-center rounded">
                            <div>
                                <img className="img-fluid" src={order.img} alt="" />
                                <h4>{order.title}</h4>
                                <h5>Name: {order.name}</h5>
                                <p>Email: {order.email}</p>
                                <p>{order.location}</p>
                                <p>{order.date}</p>
                            </div>
                            <div>
                                <button className="btn btn-danger mt-2 mb-5" onClick={() => handleDelete(order._id)}>Delete Service</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};
export default ManageOrders;