import React, {useEffect, useRef, useState} from 'react';
import { useParams } from 'react-router';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const [service, setService] = useState({});
    const {id} = useParams();
    // useEffect( ()=>{
    //     const url = `https://guarded-mesa-03173.herokuapp.com/orders/${id}`;
    //     fetch(url)
    //     .then(res=> res.json())
    //     .then(data=>setService(data))
    // }, []);

    const handlePlaceOrder = e =>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newOrder = {name, email};
        fetch('https://guarded-mesa-03173.herokuapp.com/orders', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then()
    }
    return (
        <div className='text-center my-5'>
            <h4>Place Order</h4>
                <form onSubmit={handlePlaceOrder}>
                    <p>Service id: {id}</p>
                    <p>{service.name}</p>
                    <p>Service name: <input type="text"/></p>
                    <p>Name: <input type="text" ref={nameRef}/></p>
                    <p>Email: <input type="email" name="" id="" ref={emailRef}/></p>
                    <input className='btn btn-primary' type="submit" value='submit'/>
                </form>
        </div>
    );
};

export default PlaceOrder;