import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const [service, setService] = useState({});
    const {id} = useParams();
    useEffect( ()=>{
        const url = `https://guarded-mesa-03173.herokuapp.com/services/${id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=>setService(data))
    }, []);
    return (
        <div className='text-center my-5'>
            <h4>Place Order</h4>
                <form>
                    <p>Service id: {id}</p>
                    <p>Service: {service.name}</p>
                    <p>Description: {service.description}</p>
                    <p>Your name: <input type="text" /></p>
                    <p>Your address: <input type="text" /></p>
                    <input className='btn btn-primary' type="submit" value='submit'/>
                </form>
        </div>
    );
};

export default PlaceOrder;