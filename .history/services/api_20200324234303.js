import $axios from 'axios'

const api = $axios.create({
  baseURL: 'https://api.dev.prestamype.com/v1/',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  } 
}) 

export default ({ $axios, store, redirect }) => {
  console.log(store.state.token)
  
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

export {
  api
}


