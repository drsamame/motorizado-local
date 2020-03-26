export const state = () => ({
  photos: [],
  lastPhotoPosition: 0,
  visitData: {},
  sendData: {},
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
  ADD_PHOTO_POSITION(state) {
    state.lastPhotoPosition += 1
  },
  SET_VISIT_ID(state, payload) {
    state.visitId = payload;
  },
  DELETE_PHOTO(state, payload) {
    state.photos.splice(payload)
  }
}

export const actions = {
  setVisitData({commit, state}, payload){
    console.log(payload);
    const spaces = {
      kitchen: 0,
      rooms: 0,
      living_room: 0,
      garden: 0,
      laundry: 0,
      patio: 0,
      pool: 0,
    }

    const arrayToObject = (payload.spaces) =>{
    array.reduce((obj, item) => {
      obj[item.id] = item
      return obj
    }, {})
     }

    console.log(peopleObject)

    let sendData = {
     
      /*
      fenced: {type: boolean},
      water_service: {type: boolean},
      electricity_service: {type: boolean},
      access: {type: string, enum: ['una puerta', 'varias puertas' ]},
      floors: {type: number, min: 0},
      floor: {type: number, min: 0},
      gallery_number: {type: number},
      area: {type: areaschema},
      inside_fifth: {type: boolean},
      roof: {type: boolean},
      */
      ownership_type: payload.property,
      spaces,
      condition_street: payload.inFrontHouseState,
      ownership_orden: payload.orderState,
      correct_reference: payload.reference,
      correct_reference_motive: payload.reference ? '': payload.otherReference,
      accesible: payload.accesible,
      accesible_motive: payload.accesible ? '' : payload.motiveUnaccesible, 
      photos: state.photos
    };
    console.log(sendData);
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
    commit('ADD_PHOTO_POSITION')
  },
  removePhoto({ commit }, index) {
    commit('DELETE_PHOTO', index)
  }
}
