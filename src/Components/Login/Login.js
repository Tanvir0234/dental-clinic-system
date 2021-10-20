import React, { useState } from 'react';
import { FaGofore } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {

  const { handleGoogle, error, setError, user, setUser } = useAuth();

  const [email, setEmail] = useState({});
  const [password, setPassWord] = useState({});

  const location = useLocation()
  const history = useHistory()
  const redirect_uri = location.state?.from || '/home';

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassWord(e.target.value)
  }
  const auth = getAuth();
  const logInWithEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        history.push(redirect_uri);
      
      }).catch(error => {
        setError(error.message)
      })

  }

  const googleLogIn = () => {
    handleGoogle()
      .then(result => {

        setUser(result.user)
        history.push(redirect_uri);

      })
      .catch(error => setError(error.message))
  }

  return (



    <div className="d-flex justify-content-center align-items-center bg-primary   ">
      
      <div className="w-50 mt-5 mb-5 bg-white p-4 border rounded shadow">
      <h1 className="text-center">Log In</h1>
        <form  onSubmit={logInWithEmail}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <p className="text-danger">{error}</p><br />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <br />
        <p>New to Our Website ? <Link to="/register">Create Acount</Link> </p>
        <button onClick={googleLogIn} className="btn btn-google btn-login text-uppercase fw-bold"><FaGofore /> &nbsp;
          Sign in with google</button><br />
      </div>
    </div>


  );
};

export default Login;