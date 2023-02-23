import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const UserRoutes = ({children}) => {
    const {isAuth}=useContext(AuthContext);
    if(!isAuth?.isAuth){
        return <Navigate to='/' />
    }
   return children;
}

export default UserRoutes