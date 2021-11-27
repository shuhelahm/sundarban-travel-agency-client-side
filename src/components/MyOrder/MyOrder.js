import React from 'react';

const MyOrder = ({service}) => {
    return (
        <div>
            <h2>My orders: {service.name}</h2>
        </div>
    );
};

export default MyOrder;