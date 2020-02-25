import api from '@/services/api'

export default {
  login(email, password) {
    return api.post('auth/login', { email, password })
  },
  getVisits() {
    return api.get('config_web')
  }
}
