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
                        <Link className="m-2" to="/home">Home</Link>
                        <Link className="m-2" to="/services">Services</Link>
                        <Link className="m-2" to="/doctors">Doctors</Link>
                        <Link className="m-2" to="/aboutUs">About Us</Link>
                        <Link className="m-2" to="/contactUs">Contact Us</Link>
                    </div>
                </div>


                <div className="mt-3">



                    <button className="btn btn-primary m-2 ">Sign Out</button>



                    <button className="btn btn-dark m-2 ">Sign In</button>



                    <button className="btn btn-primary m-2 ">Sign up</button>

                </div>
            </div>
        </div>
    );
};

export default Header;