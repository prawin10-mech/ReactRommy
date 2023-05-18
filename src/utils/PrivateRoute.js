import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ Component, ...rest }) => {
  // Add your authentication logic here
  const token = localStorage.getItem("token");

  return token ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
