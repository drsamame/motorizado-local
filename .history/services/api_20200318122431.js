import axios from 'axios'

/*

const api = axios.create({
  baseURL: 'https://api.test.cambioseguro.com/api/v1/admin/',
  timeout: 5000,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json'
  }
})
/*

export default function ({ $axios, app, store }) {
  $axios.onRequest(config => {
    if (store.state.authToken) {
      config.headers.common['Authorization'] = store.state.authToken
    }
  })
}