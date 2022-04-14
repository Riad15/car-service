import React, { useEffect, useState } from 'react';
import Work from '../Work/Work';
import './Service.css'

const Service = () => {
    const [dataSet, setData] = useState([]);
    useEffect(() => {
        fetch('carService.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div id='services'>
            <h3 className='title'>Car Service Center</h3>
            <div className='container mt-3' >
                <div className='row'>
                    {
                        dataSet.map(data => <Work
                            key={data.id}
                            data={data}
                        ></Work>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Service;