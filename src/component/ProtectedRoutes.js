import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { User } from "../context/";
const ProtectedRoute = ({ redirectPath = "/", children }) => {
  const { user } = useContext(User);
  console.log("user by waqas", user);
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
