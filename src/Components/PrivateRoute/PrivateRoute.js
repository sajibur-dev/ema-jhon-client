
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const PrivateRoute = ()  =>  {
    const location = useLocation();
    const [user] =  useAuthState(auth);
    return user ? <Outlet/> : <Navigate to='/login' state={{from:location}} replace/>
};

export default PrivateRoute;