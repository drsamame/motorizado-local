import api from '@/services/api'

//FOR TEST
import axios from 'axios'

console.log($axios)

export default {
  login(email, password) {
    const loginInfo = api.post('auth/employee/login', { email, password });
    loginInfo.then((data)=>{
      api.defaults.headers.common['Authorization'] = `Bearer ${data.data.token}`
    })
    return loginInfo ;
  }, 
  getVisits(type) {
    return api().get(`/admin/biker/visit?status=${type}`)
  },
  getVisitById(id) {
    return api.get(`/admin/biker/visit/${id}`)
  },
  declineVisit(id, body){
    return api.delete(`/admin/biker/visit/${id}`, { data: body })
  },
  getPostBackgroundsynExample(){
    return axios.post('https://private-6ef058-motorizado.apiary-mock.com/background',{syncBackground: 'background-sync'})
  }
}
