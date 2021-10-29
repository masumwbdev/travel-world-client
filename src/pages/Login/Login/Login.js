import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { handleGoogleSignIn, setError } = useFirebase();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'
    const signInUsingGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url)
                // setError()
            })
    }
    return (
        <div className="google-button">
            <h1 className="mb-4 fs-3">Sign in Using <span className="text-primary">Google</span></h1>
            <button className="google-sign-in" onClick={signInUsingGoogle}><i class="fab fa-google fs-1 me-2 google-sign"></i> Google Sign in</button>
        </div>
    );
};

export default Login;