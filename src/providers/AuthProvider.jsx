/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app)

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribes = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unsubscribes();
        }
    }, [])

    const authInfo = {
        user,
        registerUser,
        loginUser,
        logOutUser,
        loading,
        googleLogin
    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;