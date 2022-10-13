import { useState, useContext, useEffect } from "react";
import { signInUser } from "../api/user";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../component/Navbar";
import jwtDecode from "jwt-decode";
import { User } from "../context/";
import { removeToken } from "../Cache/User";
export default function Logout() {
  const { setUser } = useContext(User);

  useEffect(() => {
    console.log('user','hello')
    removeToken();
    setUser(null);
  }, []);
  //console.log(jwt);

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}

      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <p>You have been logged out!</p>
      </div>
    </>
  );
}
