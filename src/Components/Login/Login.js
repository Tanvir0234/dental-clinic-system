import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



import './Login.css'

const Login = () => {
  
  const {handleGoogle} = useAuth();

    return (
        
             <div className="d-flex justify-content-center align-items-center bg-primary mt-5 ">
               <div className="bg-light m-5 ">
               <h1 className="text-center">Log In</h1>
               <div className="p-3">
                  <form onSubmit="">
                    <input type="email" placeholder="Email" /><br /><br />
                    <input type="password" placeholder="Password" /><br /><br />
                    <input className="btn btn-primary" type="submit" value="submit" />
                  </form>
                  <br />
                  <p>New to Our Website <Link to="/register">Create Acount</Link> </p>
                  <button onClick={handleGoogle}   className="btn btn-google btn-login text-uppercase fw-bold">Sign in with google</button><br />
                  
                  
               </div>
               </div>
               
             </div>
    
        
    );
};

export default Login;