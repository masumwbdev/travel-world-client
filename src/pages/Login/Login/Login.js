import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { handleGoogleSignIn, setError } = useFirebase();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'
    const signInUsingGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url)
                setError()
            })
    }
    return (
        <div>
            <button onClick={signInUsingGoogle}>Google Sign in</button>
        </div>
    );
};

export default Login;