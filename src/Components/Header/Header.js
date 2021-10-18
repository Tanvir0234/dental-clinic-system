import React from 'react';
import './Header.css'
import logo from '../../image/b1fe43b1d5c1305009c9d8c8b7cd517a.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
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



                    <button className="btn btn-primary m-2 ">Sign Out</button>


                <Link to="/login">
                    <button className="btn btn-dark m-2 ">Sign In</button>
                </Link>


                    <button className="btn btn-primary m-2 ">Sign up</button>

                </div>
            </div>
        </div>
    );
};

export default Header;