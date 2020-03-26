import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.dev.prestamype.com/v1/',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  } 
})

export default (context, inject) => {

  if (process.server) {
    console.log(context.store)
  }

  if (process.client) {
    console.log(context.app.$axios)
  }

  //return context.app.$axios
}
/*
export default (store, redirect, {app: { $axios }}) => {




  /*
  $axios.onRequest(config => {
    const token = store.state.token 
    if (token) config.headers.common['Authorization'] = `Bearer ${token}`

    console.log('Request:')
    console.log(config)
  })

  $axios.onResponse(response => {
    console.log('Response:')
    console.log(response)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)

    if (code === 400) {
      redirect('/400')
    }
  })
  
 return $axios
}

*/