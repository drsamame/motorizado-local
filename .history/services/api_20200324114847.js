import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.dev.prestamype.com/v1',
  timeout: 5000,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json'
  } 
})

