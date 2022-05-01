import React from 'react';
import useService from '../../hooks/useService';

const Mange = () => {
    const [services, setServices] = useService();
    const deleteService = (id) => {
        const deletItem = window.confirm('delete this service ?')
        if (deletItem) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const reaming = services.filter(service => service._id !== id);
                    setServices(reaming);
                })
            console.log(id);

        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>this is manage section</h1>
            {
                services.map(service => <ul key={service._id}>
                    <p className='text-primary'>service name: {service.name} <button onClick={() => deleteService(service._id)}>X</button></p>
                </ul>)
            }
        </div>
    );
};

export default Mange;