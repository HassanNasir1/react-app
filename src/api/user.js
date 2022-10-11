import axios from "./axios";

// Make a request for a user with a given ID
export function getAllUsers() {
  return axios
    .get("/user")
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

export function signInUser(email, password) {
  const data = {
  
    email: email,
    password: password,
  
  };
  return axios.post("/login", data)
    .then((response) => {
        console.log(response);
        
     return response;
    })
    .catch((error) => {
    
        return Promise.reject(error.response.data.error || error.response.data.message);
    });
}

export function deleteUser(id) {
  return axios
    .delete(`/user/${id}`)
    .then(function (response) {
      // handle success
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
