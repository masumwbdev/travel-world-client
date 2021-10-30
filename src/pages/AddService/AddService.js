import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                // console.log(res)
                if(res.data.insertedId){
                    alert('User added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="form-container">
            <h2 className="text-center">Add a packages</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("location", { required: true, maxLength: 20 })} placeholder="Travel Location" />
                <input {...register("working", { required: true, maxLength: 20 })} placeholder="Day" />
                <input type="price" {...register("price")} placeholder="Total Cost" />
                <input {...register("imgURL")} placeholder="Image url" />
                <textarea {...register("description")} placeholder="Description" />
                <input className="submit" type="submit" />
            </form>
        </div>
    );
};

export default AddService;


