import React, { useState } from 'react';
import { Link, useLocation ,useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



import './Login.css'

const Login = () => {

  
  const {handleGoogle} = useAuth();
  const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home' ;

  const googleLogIn=()=>{
       handleGoogle()
       .then(result => {

        setUser(result.user)
        history.push(redirect_uri);

    })
    .catch(error => setError(error.message))
  }

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
                  <button onClick={googleLogIn}   className="btn btn-google btn-login text-uppercase fw-bold">Sign in with google</button><br />
                  
                  
               </div>
               </div>
               
             </div>
    
        
    );
};

export default Login;