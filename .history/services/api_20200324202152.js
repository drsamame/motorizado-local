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


export default function ({ api, store, redirect }) {
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
}
