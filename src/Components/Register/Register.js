import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { Link } from 'react-router-dom';
import image from '../../image/registration-form-template.jpg'
import useAuth from '../../Hooks/useAuth';
import {useLocation} from 'react-router-dom';

const Register = () => {
    const Location = useLocation();
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleName = e => {
        setName(e.target.value)
        
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const auth = getAuth();
    const{user,setUser}=useAuth();
    const handleReg = () => {
       
          
        if (password.length < 6) {
            setError('Please Password at least 6 characters')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                
        updateProfile(auth.currentUser, {
            displayName: name,
            
          });
          setUser(user)
          Location.reload();
                setError('')
               
                
            }).catch(error => {
                setError(error.message)
            })

    }

        ;


    return (
        <div className="row">
            <div className="col-lg-6 col-sm-12">
              <img src={image} alt="" />
            </div>
            <div className="col-lg-6 col-sm-12">
                <div className="me-3" >
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                        <input onBlur={handleName} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3 text-danger">{error}</div>
                    <div className="mb-3">Already Registered? <Link to="/login">Log in</Link></div>
                    <Link to="/home">
                    <button type="submit" onClick={handleReg} className="btn btn-primary">Register</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Register;