import axios from "./axios";
import { useState } from "react";
// import Userfront from "@userfront/core";
// Userfront.init("demo1234");

// Make a request for a user with a given ID

export function signInUser(email, password) {
  const data = {
  
    email: email,
    password: password,
  
  };
  return axios.post("/login", data)
    .then(response => {
      const jwt = response.token;
      axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      return response;
    })
    .then((response) => {
        console.log(response);
        
     return response;
    })
    .catch((error) => {
    
        return Promise.reject(error.response.data.error || error.response.data.message);
    });
}

export function getAllUsers() {

  const token =  localStorage.getItem("token")
  return axios
    .get("/user", { headers: {"authorization" : `Bearer ${token}`} })
    .then(function (response) {
      // handle success

      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

export function registerUser(name, email, password, userType) {
  const data = {
    name: name,
    email: email,
    password: password,
    userType: userType,
  };
  return axios.post("/register", data)
    .then((response) => {
        console.log(response);
     return response;
    })
    .catch((error) => {
    
        return Promise.reject(error.response.data.error);
    });
}



export function deleteUser(id) {
  return axios
    .delete(`/user/${id}`)
    .then(function (response) {
      // handle success
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

export function updateUser(id, userName, email, userType) {
  const data = {
    name: userName,
    email: email,
    userType: userType,
  };
  console.log(data)
  return axios
    .put(`/user/${id}`, data)
    .then(function (response) {
      console.log('res', response);
      return Promise.resolve(response); 
      // handle success
    })
    .catch(function (error) {
      // handle error
      return Promise.reject(error.response.data.error);
    })
    .finally(function () {
      // always executed
    });
}
