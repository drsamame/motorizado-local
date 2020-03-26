import axios from 'axios'


const api = axios.create({
  baseURL: 'https://api.test.cambioseguro.com/api/v1/admin/',
  timeout: 5000,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json'
  }
})
 

export default function ({ api, store }) {
  api.onRequest(config => { 
    if (store.state.token) {  
      config.headers.common['Authorization'] = store.state.token
    }
  })
} 