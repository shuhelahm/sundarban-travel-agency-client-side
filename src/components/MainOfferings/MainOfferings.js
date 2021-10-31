import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './MainOfferings.css';

const MainOfferings = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('https://guarded-mesa-03173.herokuapp.com/services')
        .then(res => res.json())
        .then(data =>setServices(data))
    }, ([]))
    return (
        <div>
            <h2 className='text-center my-5'>Main Offerings</h2>
            { services.length === 0 ?
                <div className='spinner-section'>
                    <Spinner className='spinner' animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                 :
                <div className='service-sec d-grid mx-auto my-5'>
                    {
                        services.map(service => <Service service={service}></Service>)
                    }
                </div>
            } 
        </div> 
    );
};

export default MainOfferings;



{/*   */}