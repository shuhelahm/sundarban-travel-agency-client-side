import React, { useEffect, useState } from 'react';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('https://guarded-mesa-03173.herokuapp.com/orders')
        .then(res => res.json())
        .then(data =>setServices(data))
    }, ([]))
    return (
        <div>
            <h2>this is my orders</h2>
            <div className=''>
                    {
                        services.map(service => <MyOrder key={service._id} service={service}></MyOrder>)
                    }
                </div>
        </div>
    );
};

export default MyOrders;