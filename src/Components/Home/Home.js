import React from 'react';
import useService from '../../Hooks/useService';
import Service from '../Service/Service';

const Home = () => {
    const {services}=useService([])

    return (
        <div>
            
            <div className="container mt-2">
           <h1 className="text-center m-4">Our <span className="text-Primary">Services</span> </h1>
           <div className="row">
                 {
                   services.map(service=><Service
                   key={service.id}
                   service={service}
                   ></Service>).slice(0,6)
                 }
           </div>
    </div>
        </div>
    );
};

export default Home;