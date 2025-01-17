import React, { useContext } from 'react';
import { UserContext } from '../UserProvider/UserProvider';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const [user] = useContext(UserContext);
    const location = useLocation();
    return (
        <>
        {
            user.isLoggedIn ? children:<Navigate to={'/login'} state={{ state:location.pathname }} replace />
        }
        </>
    );
}

export default RequireAuth;