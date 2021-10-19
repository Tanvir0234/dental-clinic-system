import React from 'react';
import img from '../../image/404-error-page-not-found.jpg'

const NotFound = () => {
    return (
        <div className="container h-75">
            <img className="img-fluid" src={img} alt="" />
        </div>
    );
};

export default NotFound;