import React from 'react';
import './Service.css';

const Service = ({service}) => {
    console.log(service);
    return (
        <div>
            <div className='service-card py-2 px-2'>
                <img className='service-img w-100' src={service.imgUrl} alt="" />
                <div className='py-2'>
                    <h4>{service.name}</h4>
                    <p>{service.description}</p>
                    <button className='btn btn-primary'>Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;