import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {handleGoogleSignIn} = useFirebase();
    const signInUsingGoogle = () => {
        handleGoogleSignIn()
        .then(result => {

        })
    }
    return (
        <div>
            <button onClick={signInUsingGoogle}>Google Sign in</button>
        </div>
    );
};

export default Login;