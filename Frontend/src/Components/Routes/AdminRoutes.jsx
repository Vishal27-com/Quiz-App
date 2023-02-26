import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const AdminRoutes = ({children}) => {
    const {isAuth}=useContext(AuthContext);
    if(!isAuth?.isAuth){
        return <Navigate to='/' />
    }
    if(!isAuth?.user.isAdmin){
        return <Navigate to='/dashboard' />
    }
   return children 
}

export default AdminRoutes