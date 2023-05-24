import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ Component, ...rest }) => {
  // Add your authentication logic here
  const token = localStorage.getItem("token");
  const tokenExpiration = localStorage.getItem("tokenExpiration");

  return token && tokenExpiration && Date.now() < parseInt(tokenExpiration) ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
