// Import libraries
import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import LifeData from './modules/LifeData'
import UserData from './modules/UserData'

import Moment from 'moment'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  modules: {
    LifeData,
    UserData
  },
  getters: {
    // Calculate how many weeks are left before dead
    weeksLeft: (state, getters) => {
      return getters.weekLifeExpectancy - getters.weeksLived
    },
    // Calculate which percentage of weeks the user has already used
    weeksLivedPercentage: (state, getters) => {
      return Math.round((getters.weeksLived / getters.weekLifeExpectancy) * 100)
    },
    // Calculate the exact date the user will die
    deathDate: (state, getters) => {
      // TODO:Make this
      if (state.UserData.birth.day && state.UserData.birth.month && state.UserData.birth.year) {
        var birthDate = Moment(state.UserData.birth.day + '-' + state.UserData.birth.month + '-' + state.UserData.birth.year, 'DD-MM-YYYY')
        var deathDate = birthDate.add(getters.weekLifeExpectancy, 'weeks')
        return deathDate.format('Do [of] MMMM YYYY')
      } else {
        return Moment().format('Do [of] MMMM YYYY')
      }
    },
    // Look up what the life expectancy at birth is given the users gender, dem. and birthyear.
    weekLifeExpectancy: state => {
      var year = state.UserData.birth.year
      var gender = state.UserData.gender
      var demographic = state.UserData.demographic
      var expectancy

      if (gender && year && demographic) {
        // Select the data file corresponding to the gendr
        var lifedata = state.LifeData[gender]

        // Loop through all demographics, if the correct one is found, get the expectancy at users year
        lifedata.forEach(function (item) {
          if (item['c_code'] === demographic) {
            expectancy = item[year]
          }
        })
      }

      if (!expectancy) {
        expectancy = '78,5' // Use average when there is no specific expectancy
      }

      // Multiply years by 52 to get result in weeks and round value
      return Math.round(expectancy.toString().replace(',', '.') * 52)
    }
  },
  strict: debug
})
