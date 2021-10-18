import React from 'react';
import useService from '../../Hooks/useService';


const Services = () => {
   const {services} =useService([]) ;
    return (
        <div className="container">
            <h1 className="text-center mb-4">Dental Services</h1>
<div className="row g-4">
                {services.map((service) => (
                    
                    <div  key={service.id} className="col-md-6 col-lg-4 col-sm-12">
                        
                        <div  className="card h-100">

                            <img src={service.image} className="align-img img-fluid rounded-start w-75" alt="..." />


                            <div className="card-body">
                                <h5 className="card-title text-center">{service.name}</h5>
                                <p className="text-center">{service.description}</p>
                                <h6 className="card-text text-center"> Treatment Fee : {service.price}</h6>
                            </div>

                            
                            <button className="btn btn-primary align mx-4 mb-3">Booking {service.name}</button>
                            
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
        
    );
};

export default Services;