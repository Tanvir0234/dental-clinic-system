import React from 'react';

const Service = (props) => {
const {image,name,price,description}=props.service;
    return (
        
            <div className="col-lg-4 col-sm-12 mb-3 ">

            <div className="card h-100 ">

                <img src={image} className="align-img img-fluid rounded-start w-75" alt="..." />


                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="text-center">{description}</p>
                    <h6 className="card-text text-center"> Treatment Fee : {price}</h6>
                </div>
                
                    <button className="btn btn-primary mb-3">Booking{name}</button>
            

                </div>

        </div>
        
    );
};

export default Service;