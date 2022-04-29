import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


const Protected = ({ user, children }) => {
   
  const navigate = useNavigate();

    if (!user) {
      return <Navigate to="/login" replace />;
    }
   
    return children;
  };


export default Protected