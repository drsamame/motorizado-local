export const state = () => ({
  photos: []
})

export const mutations = {
  SET_PHOTO(state, payload) {
    state.photos.push(payload)
  },
  DELETE_PHOTO(state, payload) {
    state.photos.splice(payload)
  }
}

export const actions = {
  savePhoto({ commit }, payload) {
    commit('SET_PHOTO', payload)
  },
  removePhoto({ commit }, index) {
    commit('DELETE_PHOTO', index)
  }
}
