// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useParams } from 'react-router';
// import useAuth from '../hooks/useAuth';
// import './Booking.css'

// const Booking = () => {
//     const {user} = useAuth();
//     const [services, setServices] = useState({});
//     const { serviceId } = useParams();
//     console.log(services.name)

//     useEffect(() => {
//         fetch(`http://localhost:5000/booking/${serviceId}`)
//             .then(res => res.json())
//             .then(data => setServices(data))
//     }, [])

//     const { register, handleSubmit, reset } = useForm();
//     const onSubmit = data => {
//         axios.post('http://localhost:5000/users', data)
//             .then(res => {
//                 // console.log(res)
//                 if (res.data.insertedId) {
//                     alert('Congrats! Booking successfully completed.');
//                     reset();
//                 }
//             })
//     };
//     return (
//         <div>
//             <div>
//                 <div className="text-center mt-5">
//                     <div>
//                         <img src={services.imgURL} alt="" />
//                     </div>
//                     <div>
//                         <h4>{services.name}</h4>
//                         <p className="px-5">{services.description}</p>
//                     </div>
//                 </div>
//                 <div className="booking-container">
//                     <h2 className="text-center">Book Now</h2>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <input {...register("name", { required: true, maxLength: 20 })} value={user.displayName} />
//                         <input {...register("email", { required: true, maxLength: 20 })} value={user.email} />
//                         <input {...register("location", { required: true, maxLength: 20 })} placeholder="Your location" />
//                         <input {...register("working", { required: true, maxLength: 20 })} placeholder="Day" />
//                         <input type="price" {...register("price")} placeholder="Total Cost" />
//                         <input className="submit" type="submit" value="Confirm" />
//                     </form>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Booking;



import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Booking.css'

const Booking = () => {
    const {user} = useAuth();
    const [services, setServices] = useState({});
    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/users', data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert('Congrats!! booking successfully confirmed');
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
                    <h2 className="text-center">Book Now</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} value={user.displayName} />
                        <input {...register("email", { required: true, maxLength: 20 })} value={user.email} />
                        <input {...register("location", { required: true, maxLength: 20 })} placeholder="Your location" />
                        <input {...register("text", { required: true, maxLength: 20 })} placeholder="Your job" />
                        <input {...register("date")} placeholder="Date" />
                        <input className="submit" type="submit" value="Confirm" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Booking;