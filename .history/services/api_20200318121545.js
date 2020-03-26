import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.test.cambioseguro.com/api/v1/admin/',
  timeout: 5000,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json'
  }
})


export default (context, inject) => {
  api.interceptors.request.use(function (config, store) {
    console.log(store);
    config.headers = {
        'Authorization': 'Bearer' + 'dsa'
    }
    return config;
  }, function (error) {
       return Promise.reject(error);
  });

  return api;
}