import axios from "./axios";

// Make a request for a user with a given ID
export function getAllUsers() {
  return axios
    .get("/user")
    .then(function (response) {
      // handle success

      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

export async function registerUser(name, setName,  email, setEmail, password , setPassword, userType, setUserType, setErr) {
  const data = {
    name: name,
    email: email,
    password: password,
    userType: userType,

  };

  await axios
    .post("/register", data)
    .then(function (response) {
      if (response.status == 200) {
        setName("");
        setEmail("");
        setPassword("");
        setUserType("");

        return response.data;
      }
    })
    .catch(function (error) {
      console.log(error.response.data.message);
      setErr(
        error.response.data.error
          ? error.response.data.error
          : error.response.data.message
          ? error.response.data.message
          : ""
      );
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
