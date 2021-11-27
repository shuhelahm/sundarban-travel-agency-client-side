import React, { useEffect, useState } from 'react';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('https://guarded-mesa-03173.herokuapp.com/orders')
        .then(res => res.json())
        .then(data =>setServices(data))
    }, ([]))
    return (
        <div>
            <h1>this is manage all orders</h1>
            {
                        services.map(service => <ManageAllOrder key={service._id} service={service}></ManageAllOrder>)
                    }
        </div>
    );
};

export default ManageAllOrders;