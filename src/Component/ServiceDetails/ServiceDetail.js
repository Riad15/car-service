import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { id } = useParams()
    return (
        <div>
            <h5>wellcome to details: {id}</h5>

        </div>
    );
};

export default ServiceDetail;