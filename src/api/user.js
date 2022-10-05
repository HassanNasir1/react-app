import axios from './axios'

// Make a request for a user with a given ID
export function getAllUsers() {
    
return axios.get('/user')
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

export function deleteUser(id){
  return  axios.delete(`/user/${id}`)
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
