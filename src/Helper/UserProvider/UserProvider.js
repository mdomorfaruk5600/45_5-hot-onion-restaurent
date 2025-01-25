import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeFirebaseApp } from './../../firebase/Auth';

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        isLoggedIn: false,
        name:'',
        email:'',
    });

    initializeFirebaseApp();

    const auth = getAuth();

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser({...user, isLoggedIn:true, name:user.displayName, email:user.email});
            }else{
                const signedOutUser = {
                    isLoggedIn:false,
                    name:'',
                    email:'',
                }
                setUser(signedOutUser);
            }
        })
    }, []);
    
    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;