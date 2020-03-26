import axios from 'axios'


const api  = axios.create({
  baseURL: 'https://api.dev.prestamype.com/v1/',
  timeout: 5000,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json'
  } 
})


export default function ({ api, store, redirect }) {
  console.log(api, store, redirect)

}

