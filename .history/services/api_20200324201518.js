import axios from 'axios'

function tokenHandler(config, store) {
  if (store.state.account.user && store.state.account.user.jwt) {
        config.headers.common['Authorization'] =  `Bearer ${store.state.account.user.jwt}`;
 }
  return config
}



const api  = axios.create({
  baseURL: 'https://api.dev.prestamype.com/v1/',
  timeout: 5000,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json'
  } 
})


export default function ({ api, app, store }) {
  console.log(api, app, store); 
  api.onRequest(config => {
    if (store.state.authToken) {
      config.headers.common['Authorization'] = 'jijijiji'
    }
  })
}

