
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";



initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    const handleGoogle = () => {
       return signInWithPopup(auth, googleProvider)
           
    }

    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError("");
        });
    }

   
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            } else {
                setError("")
            }
        });

    }, [auth])

    return {
        handleGoogle,
        user,
        handleLogOut,
        setUser
    }
}

export default useFirebase;