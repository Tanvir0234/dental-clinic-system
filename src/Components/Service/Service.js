import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


const Service = (props) => {
    const {id, image, name, price, description } = props.service;
    const arrowIcon = <FontAwesomeIcon icon={faAngleDoubleRight} />
    return (

        <div className="col-lg-4 col-sm-12 mb-5">

            <div className="card h-100 shadow  border rounded-3">

                <img src={image} className=" img-fluid rounded-start w-100" alt="..." />


                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="text-center">{description}</p>
                    <h6 className="card-text text-center"> Treatment Fee : {price}</h6>
                </div>
            <Link to={`/details/${id}`}>
                <button className="btn btn-primary align px-3 mb-4">See Detail {arrowIcon}</button>
             </Link>

            </div>

        </div>

    );
};

export default Service;