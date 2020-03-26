import axios from 'axios'
import store from 'store'


const api = axios.create({
  baseURL: 'https://api.test.cambioseguro.com/api/v1/admin/',
  timeout: 5000,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json'
  }
})

console.log(store);

export default (context, inject) => {
  api.interceptors.request.use(function (config, store) {
    config.headers = {
        'Authorization': 'Bearer' + context.app.$store.state.token 
    }
    return config;
  }, function (error) {
       return Promise.reject(error);
  });

  return api;
}