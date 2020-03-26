import axios from 'axios'



export default function ({ api, store, redirect }) {

  const api = axios.create({
    baseURL: 'https://api.test.cambioseguro.com/api/v1/admin/',
    timeout: 5000,
    withCredentials: true, 
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  console.log(store);
  api.onRequest(config => {
    const token = store.state.token
    if (token) config.headers.common['Authorization'] = `Bearer ${token}`

    console.log('Request:')
    console.log(config)
  })

  api.onResponse(response => {
    console.log('Response:')
    console.log(response)
  })

  api.onError(error => {
    const code = parseInt(error.response && error.response.status)

    if (code === 400) {
      redirect('/400')
    }
  })
}