import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState({});

    const auth = getAuth();
    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
        .catch ( (error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    return{
        handleGoogleSignIn,
        error,
        logOut,
        setError,
        user
    }
}
export default useFirebase;