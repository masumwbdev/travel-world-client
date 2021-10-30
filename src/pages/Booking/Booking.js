import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const [services, setServices] = useState({});
    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert('User added successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <div>
                <div className="text-center mt-5">
                    <div>
                        <img src={services.imgURL} alt="" />
                    </div>
                    <div>
                        <h4>{services.name}</h4>
                        <p className="px-5">{services.description}</p>
                    </div>
                </div>
                <div className="booking-container">
                    <h2 className="text-center">Add a packages</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                        <input {...register("location", { required: true, maxLength: 20 })} placeholder="Travel Location" />
                        <input {...register("working", { required: true, maxLength: 20 })} placeholder="Day" />
                        <input type="price" {...register("price")} placeholder="Total Cost" />
                        <input {...register("imgURL")} placeholder="Image url" />
                        <textarea {...register("description")} placeholder="Description" />
                        <input className="submit" type="submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Booking;