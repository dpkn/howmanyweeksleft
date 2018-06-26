// Import libraries
import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import LifeData from './modules/LifeData'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  modules: {
    LifeData
  },
  strict: debug
})
