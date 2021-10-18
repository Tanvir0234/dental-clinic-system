import React from 'react';
import './Header.css'
import logo from '../../image/images.png'
import { Link } from 'react-router-dom';




const Header = () => {
    
    return (
        <div>
            <div className="d-flex justify-content-between bg-light">
                <div>
                    <img className="w-50 ps-4 " src={logo} alt="" />
                </div>

                <div>
                    <div className="text-center mt-4">
                        <Link className="m-2 btn btn-outline-primary" to="/home">Home</Link>
                        <Link className="m-2 btn btn-outline-primary" to="/services">Services</Link>
                        <Link className="m-2 btn btn-outline-primary" to="/doctors">Doctors</Link>
                        <Link className="m-2 btn btn-outline-primary" to="/aboutUs">About Us</Link>
                        <Link className="m-2 btn btn-outline-primary" to="/contactUs">Contact Us</Link>
                    </div>
                </div>


                <div className="mt-3">


                    <Link to="/login">
                        <button   className="btn btn-danger m-2 ">Sign Out</button>
                    </Link>

                    <Link to="/login">
                        <button className="btn btn-outline-primary m-2 ">Sign In</button>
                    </Link>


                    <button className="btn btn-primary m-2 ">Sign up</button>

                </div>
            </div>
        </div>
    );
};

export default Header;