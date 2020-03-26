export const state = () => ({
  photos: [],
  visitData: {},
  visitId: undefined,
})

export const mutations = {
  SET_VISIT_DATA(state, payload) {
    state.visitData = payload; 
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
