import api from '@/services/api'

//FOR TEST
import axios from 'axios'

export default {
  login(email, password) {
    return api.post('auth/login', { email, password })
  },
  getVisits() {  
    return axios.get('https://private-6ef058-motorizado.apiary-mock.com/visits')
  },
  getPostBackgroundsynExample(){
    return axios.post('https://private-6ef058-motorizado.apiary-mock.com/background',{syncBackground: 'background-sync'})
  }
}
