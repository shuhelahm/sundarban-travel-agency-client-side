import React from 'react';
import { useParams } from 'react-router';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const {id} = useParams();
    return (
        <div className='text-center my-5'>
            <h2>Place Order</h2>
                <form>
                    <p>Service id: {id}</p>
                    <p>Your name: <input type="text" /></p>
                    <p>Your address: <input type="text" /></p>
                    <input className='btn btn-primary' type="submit" value='submit'/>
                </form>
        </div>
    );
};

export default PlaceOrder;