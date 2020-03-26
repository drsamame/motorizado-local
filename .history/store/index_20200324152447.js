import * as Cookie from 'js-cookie'
import * as cookieparser from 'cookieparser'
import $backend from '@/services/backend'

export const state = () => ({
  token: undefined,
  user: {
    profile: '',
    name: '',
    last_name: '',
    email: ''
  }
})

export const getters = {}

export const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload
  },
  SET_AUTH(state, payload) {
    if (payload === null) {
      for (const item in state.user) {
        state[item] = null
      }
    } else {
      for (const item in state.user) {
        state[item] = payload[item]
      }
    }
  }
}

export const actions = {
  setAuth({ commit }, payload) {
    commit('SET_TOKEN', payload.token)
    commit('SET_AUTH', payload)
  },
  logOut({ commit }, { req }) {
    Cookie.remove('auth')
    commit('SET_TOKEN', null)
    commit('SET_AUTH', null)
    this.app.router.push({ path: '/login' })
  },
  nuxtServerInit({ commit }, { req }) {
    if (req.headers.cookie) {
      console.log('dsadas')
      const authCookie = cookieparser.parse(req.headers.cookie)
      if ('auth' in authCookie) {
        const user = JSON.parse(authCookie.auth) 
        $backend.setHeader(user.token);
        commit('SET_TOKEN', user.token)
        commit('SET_AUTH', user)
      }
    }
  }
}
