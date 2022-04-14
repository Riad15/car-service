import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Work.css'

const Work = (props) => {
    const { id, name, pic, price, description } = props.data;
    const navigate = useNavigate();
    const handleServiceDetail = (id) => {
        navigate(`/home/service/${id}`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={pic} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p> price: {price}</p>
                    <a href=" " onClick={() => handleServiceDetail(id)} className="btn btn-primary">About Service</a>
                </div>
            </div>

        </div>


    );
};

export default Work;