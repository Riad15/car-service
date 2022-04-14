import React from 'react';
import Exparts from './Exparts/Exparts';
import Service from './Service/Service';
import Baner from './Baner/Baner'

const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <Service></Service>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;