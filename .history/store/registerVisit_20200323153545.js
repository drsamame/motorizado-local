export const state = () => ({
  photos: [],
  visitData: {},
  userId: undefined,
  visitId: undefined,
})

export const mutations = {
  SET_VISIT_DATA(state, payload) {
    state.visitData = payload; 
  },
  SET_USER_ID(state, payload) {
    state.userId = payload; 
  },
  SET_PHOTO(state, payload) {
    state.photos.push(payload)
  },
  SET_VISIT_ID(state, payload) {
    state.visitId = payload;
  },
  DELETE_PHOTO(state, payload) {
    state.photos.splice(payload)
  }
}

export const actions = {
  setUserId({commit},payload){
    commit('SET_VISIT_DATA', payload)
  },
  setVisitData({commit}, payload){
    commit('SET_VISIT_DATA', payload)
  },
  setVisitId({commit},payload){
    commit('SET_VISIT_ID', payload)
  },
  savePhoto({ commit }, payload) {
    commit('SET_PHOTO', payload)
  },
  removePhoto({ commit }, index) {
    commit('DELETE_PHOTO', index)
  }
}
