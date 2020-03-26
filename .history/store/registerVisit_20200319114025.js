export const state = () => ({
  photos: [],
  visitId: undefined,
})

export const mutations = {
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
