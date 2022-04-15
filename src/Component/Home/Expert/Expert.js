import React from 'react';

const Expert = (props) => {
    const { name, pic, about } = props.expert;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={pic} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{about}</p>
                    <a href="#" className="btn btn-primary">about details</a>
                </div>
            </div>
        </div>



    );
};

export default Expert;