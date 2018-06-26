/*
  This Vuex store module manages time
*/
import Papa from 'papaparse'

// Module state
const state = {
  men: {},
  women: {},
  other: {}
}

// Mutations
const mutations = {
  // Add timeline to store
  addLifeData: (state, payload) => {
    var gender = payload.gender
    var data = payload.data
    state[gender] = data
  }
}

// Actions
const actions = {
  loadLifeData: function ({commit, state}, gender) {
    Papa.parse('static/lifedata/' + gender + '.csv', {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: function (result) {
        var data = result['data']
        commit('addLifeData', {
          gender,
          data
        })
      }
    })
  }
}

// Export store module
export default {
  state,
  mutations,
  actions
}
