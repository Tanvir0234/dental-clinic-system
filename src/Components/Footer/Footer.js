import React from 'react';
import './Footer.css';
import { FaFacebookF ,FaGoogle,FaTwitterSquare } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const mapIcon = <FontAwesomeIcon icon={faMapMarkedAlt} />
  return (

    <div>
      <footer className="text-center text-dark background">

        <div className="container pt-4">

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center">
              <div className="me-3">
                <FaFacebookF></FaFacebookF>
                </div>
                <div>
                  <FaGoogle></FaGoogle>
                  </div>
              <div className="ms-3">
                <FaTwitterSquare></FaTwitterSquare>
                </div>
              </div>
             
              
              
             
            </div>

            
            <div className="col-md-6 col-sm-12">
            <div className="d-flex justify-content-center align-items-center">
            <div className="foter-phone-icon m-2 ">
                {mapIcon}
              </div>
              <div>
                <p>
                  107,Beside Central Plaza
                  <br /> GEC Avenue, Chittagong, Bangladesh
                </p>
              </div>
            </div>
            </div>
          </div>

        </div>



        <div className="text-center text-white bg-dark p-3 footer-bottom">
          <p className="fw-semibold">&copy; 2021 Copyright.</p>
        </div>

      </footer>
    </div>
  );
};

export default Footer;