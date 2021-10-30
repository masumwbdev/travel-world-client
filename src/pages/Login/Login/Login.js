import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { handleGoogleSignIn,error, setError } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'
    const signInUsingGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url)
                setError(error.message)
            })
    }
    return (
        <div className="google-button">
            <h1 className="mb-4 fs-3">Login Using <span className="text-primary">Google</span></h1>
            <button className="google-sign-in btn btn-outline-danger" onClick={signInUsingGoogle}><i class="fab fa-google fs-3 me-2 google-sign"></i> Google Login</button>
        </div>
    );
};

export default Login;