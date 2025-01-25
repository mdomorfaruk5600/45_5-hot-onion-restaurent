import React, { useContext, useEffect, useRef, useState } from 'react';
import './Auth.css';
import logo from '../../images/logo.png';
import { createNewUserWithEmailAndPassword, initializeFirebaseApp, signInUser } from '../../firebase/Auth';
import { UserContext } from '../../Helper/UserProvider/UserProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Auth = () => {
    initializeFirebaseApp();
    const [newUser, setNewUser] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [user, setUser] = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    
    useEffect(()=>{
        if(user.isLoggedIn && location.state){
            navigate(location.state?.state || '');
        }
    }, [user]);

    const handleSubmit = event => {
        const name = nameRef.current?.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current?.value;
        const isValid = handleError({name:name, email:email, password:password, confirmPassword:confirmPassword});
        setErrors(isValid);
        setIsSubmitted(true);

        if(Object.keys(errors).length === 0){
            if(newUser){
                createNewUserWithEmailAndPassword(name, email, password)
                .then(user => {
                    setUser({...user});
                    navigate(location.state?.state || '/');
                });
            }else{
                signInUser(email, password)
                .then(user => {
                    setUser({...user});
                    navigate(location.state?.state || '/');
                })
            }
        }
        event.preventDefault();
    }
    const handleError = data => {
        let errors = {};
        if(newUser){
            if(!data.name){
                errors.name = 'Please enter your name';
            }
            if(!data.email){
                errors.email = 'Please enter your email address';
            }

            if(data.email && !/\S+@\S+\.\S+/.test(data.email)){
                errors.email = 'Please enter a valid email';
            }

            if(!data.password){
                errors.password = 'Please enter a password';
            }
            if(data.password !== data.confirmPassword){
                errors.confirmPassword = 'Password not match';
            }
        }else{
            if(!data.email){
                errors.email = 'Please enter your email address';
            }

            if(data.email && !/\S+@\S+\.\S+/.test(data.email)){
                errors.email = 'Please enter a valid email';
            }

            if(!data.password){
                errors.password = 'Please enter a password';
            }
        }
        return errors;
    }
    return (
        <div className='container' >
            <div className='auth'>
                <div className='auth-logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='auth-form'>
                    <form onSubmit={handleSubmit}>
                        {newUser && <div>
                            <input type="text" placeholder='Name' ref={nameRef} />
                            {(errors.name && isSubmitted) && <span className='error-message'>{errors.name}</span>}
                            <br />
                            </div>}
                        <input type="text" placeholder='Email' ref={emailRef} /><br />
                        {(errors.email && isSubmitted) && <span className='error-message'>{errors.email}</span>}
                        <input type="text" placeholder='Password' ref={passwordRef} /><br />
                        {(errors.password && isSubmitted) && <span className='error-message'>{errors.password}</span>}
                        {newUser && <div>
                            <input type="text" placeholder='Confirm Password' ref={confirmPasswordRef} />
                        {(errors.confirmPassword && isSubmitted) && <span className='error-message'>{errors.confirmPassword}</span>}
                            
                            <br /></div>}

                        <input type="submit" value={!newUser ? 'Sign in':'Sign Up'} />
                        <span onClick={()=>setNewUser(!newUser)}>{newUser ? 'Already have an account':'Don\'t have an account'}</span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Auth;