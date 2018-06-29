/*
  This Vuex store module manages time
*/
import Moment from 'moment'

// Module state
const state = {
  gender: '',
  birth: {
    day: 0,
    month: 0,
    year: 0
  },
  demographic: ''
}

// Mutations
const mutations = {
  // Set gender
  setGender: (state, gender) => {
    state.gender = gender
  },
  setBirthday: (state, birthday) => {
    state.birth.day = parseInt(birthday)
  },
  setBirthmonth: (state, birthmonth) => {
    state.birth.month = parseInt(birthmonth)
  },
  setBirthyear: (state, birthyear) => {
    state.birth.year = parseInt(birthyear)
  },
  setDemographic: (state, demographic) => {
    state.demographic = demographic
  }
}

// Actions
const getters = {
  userDataIsComplete: (state) => {
    if (state.gender && state.demographic && state.birth.day && state.birth.month && state.birth.year) {
      return true
    } else {
      return false
    }
  },
  weeksLived: (state) => {
    if (state.birth.day && state.birth.month && state.birth.year) {
      var today = Moment()
      var birthdate = Moment(state.birth.day + '-' + state.birth.month + '-' + state.birth.year, 'DD-MM-YYYY')
      var weeksLived = today.diff(birthdate, 'week')
      return weeksLived
    } else {
      return 0
    }
  }
}

// Export store module
export default {
  state,
  mutations,
  getters
}
