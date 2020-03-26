export const state = () => ({
  photos: [],
  lastPhotoPosition: -1,
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
  SET_LAST_PHOTO_POSITION(state, payload) {
    state.lastPhotoPosition = payload
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
  setLastPosition({commit}, payload){
    commit('SET_LAST_PHOTO_POSITION', payload)
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
