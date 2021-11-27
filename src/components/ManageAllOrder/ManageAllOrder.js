import React from 'react';

const ManageAllOrder = ({service}) => {
    return (
        <div>
            <h2>All ordered services: {service.service}</h2>
        </div>
    );
};

export default ManageAllOrder;