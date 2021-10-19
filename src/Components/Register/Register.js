import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { Link } from 'react-router-dom';
import image from '../../image/registration-form-template.jpg'


const Register = () => {
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

    const auth = getAuth()
    const handleRegistration = e => {
        e.preventDefault()
        console.log(email, password)
        if (password.length < 6) {
            setError('Please Password at least 6 characters')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password,name)
            .then(result => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name
                   
                })
    
                setError('')
                console.log(user)
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
                <form className="me-3" onSubmit={handleRegistration}>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Name</label>
                        <input onBlur={handleName} type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Name" />
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

                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>

        </div>
    );
};

export default Register;