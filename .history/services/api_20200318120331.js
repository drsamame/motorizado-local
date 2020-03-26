import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.test.cambioseguro.com/api/v1/admin/',
  timeout: 5000,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json'
  }
})


function tokenHandler(config, store) {
  console.log(store);
  if (store.state.token !== undefined) {
        config.headers.common['Authorization'] =  `Bearer ${store.state.token}`;
 }
  return config 
}

export default (context) => {
  //store is the current store, both server and client side. and unique for nuxtServerInit
  let {store, app} = context;
  axios.interceptors.request.use(config => tokenHandler(config, store),
      function (error) {
          return Promise.reject(error);
      });
}