import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const handleCheckOut = () => {
        navigate('/checkout')
    }
    return (
        <div>
            <h5>wellcome to details: {id}</h5>
            <div style={{ textAlign: 'center' }}>
                <button onClick={handleCheckOut} className='btn btn-primary'>check out</button>
            </div>

        </div>
    );
};

export default ServiceDetail;