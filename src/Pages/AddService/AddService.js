import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }
    return (
        <div className='w-50 mx-auto' >
            <h2>Please Add Service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mt-3' placeholder='Name'  {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mt-3' placeholder=' Description '  {...register("description")} />
                <input className='mt-3' placeholder=' Price ' type="number" {...register("price")} />
                <input className='mt-3' placeholder=' Photo URL ' type="text" {...register("img")} />
                <input type="submit" value="add user" />
            </form>
        </div>
    );
};

export default AddService;