
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const PrivateRoute = () => {
    const location = useLocation()
    return auth.currentUser ? <Outlet/> : <Navigate to='/login' state={{from:location}} replace/>
};

export default PrivateRoute;