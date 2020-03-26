import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.dev.prestamype.com/v1/',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  } 
})

export default ({store}) => {
  const token = store.state.token;
  if(token !== undefined){
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}


export {api}