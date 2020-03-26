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
  },
  SET_SEND_DATA(state, payload) {
    state.sendData = payload
  }, 
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

    const spaceObj = 
    payload.spaces.reduce((obj, item) => {
      obj[item.backName] = item.value
      return obj
    }, {})
     

    let sendData = {
      ownership_type: payload.property,
      spaces: spaceObj,
      condition_street: payload.inFrontHouseState,
      ownership_orden: payload.orderState,
      correct_reference: payload.reference,
      correct_reference_motive: payload.reference ? '': payload.otherReference,
      accesible: payload.accesible,
      accesible_motive: payload.accesible ? '' : payload.motiveUnaccesible, 
      photos: state.photos
    };
    

         
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

    /*
      const areaSchema = new Schema({
        land: {type: Number, min: 0},
        occupied: {type: Number, min: 0},
        roofing: {type: Number, min: 0},
      },{ _id : false });
    
    */
    switch(payload.property){
      case 1:
        sendData['floors']= payload.floors
        sendData['floor']= payload.floorNumber
        sendData['access']= payload.doors
        sendData['elevator']= payload.elevator
        sendData['build_type']= payload.buildType
        sendData['area'] = {
          occupied: payload.mtsOcuped,
          roofing: payload.ceilingSize,
        }

        break 
    };
    commit('SET_VISIT_DATA', payload)
    commit('SET_SEND_DATA', sendData) 
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
