import * as firebase from 'firebase/app';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import config from './config.';

export const initializeFirebaseApp = () => {
    firebase.initializeApp(config);
}

export const createNewUserWithEmailAndPassword = (name, email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
    .then(data => {
        updateDisplayName(name)
        const newUser = {
            name:name,
            email:data.user.email,
            isLoggedIn:true,
        };
        return newUser;
    })
}

export const signInUser = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
    .then(res => {
        const newUser = {
            name:res.user.displayName,
            email:res.user.email,
            isLoggedIn:true,
        }
        return newUser;
    })
}

export const signOutUser = () => {
    return signOut(getAuth())
    .then(res => {
        console.log(res);
    })
}

const updateDisplayName = name => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
        displayName:name,
    }).then(res => console.log(res))
}