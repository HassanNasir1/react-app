import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
  axiosInstance.interceptors.response.use(function (response) {
    console.log('response',response)
    return response.data;

    
  }, function (error) {
    console.error(error)
    return Promise.reject(error);
  });
  export default axiosInstance;
