/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Config/firebaseconfig";

// import auth from "../firebase/firebaseconfig.js";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }

   

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth , googleProvider);
    }

    const signInUser = (email , password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }

    const logOut = () =>{
       return signOut(auth);  
    }

 //observe auth state change
 useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }
 });



    const authInfo = {user , createUser , signInUser , logOut , loading , setLoading , signInWithGoogle , auth , setUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;