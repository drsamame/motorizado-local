import api from '@/services/api'

//FOR TEST
import axios from 'axios'

export default { 
  setHeader(token){
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },
  login(email, password) {
    const loginInfo = api.post('auth/employee/login', { email, password });
    loginInfo.then((data)=>{
      this.setHeader(data.data.token)
    })
    return loginInfo ;
  },
  getVisits(type) {
    return api.get(`/admin/biker/visit?status=${type}`)
  },
  getVisitById(id) {
    return axios.get(`https://private-6ef058-motorizado.apiary-mock.com/visit/${id}`)
  },
  getPostBackgroundsynExample(){
    return axios.post('https://private-6ef058-motorizado.apiary-mock.com/background',{syncBackground: 'background-sync'})
  }
}
