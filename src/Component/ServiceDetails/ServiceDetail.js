import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { id } = useParams()
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const navigate = useNavigate();
    const handleCheckOut = () => {
        navigate('/checkout')
    }
    return (
        <div>
            <h5 style={{ textAlign: 'center' }}>checkOut Service : {service.name}</h5>
            <div style={{ textAlign: 'center' }}>
                <button onClick={handleCheckOut} className='btn btn-primary'>check out</button>
            </div>

        </div>
    );
};

export default ServiceDetail;