import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
  axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response)
    return response.data;

    
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.error(error)
    return Promise.reject(error);
  });
  export default axiosInstance;
