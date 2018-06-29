<template>
<div class="field has-addons">
  <div class="control">
      <div class="select">
        <select v-model="birthday">
          <option value="0" selected disabled>Day</option>
          <option v-for="day in days" v-bind:key="day" v-bind:value="day">
            {{ day }}
          </option>
        </select>
      </div>
  </div>
  <div class="control">
      <div class="select">
        <select v-model="birthmonth">
          <option value="0" selected disabled>Month</option>
          <option v-for="(month,index) in months" v-bind:key="index" v-bind:value="index+1">
            {{ month }}
          </option>
        </select>
      </div>
  </div>
  <div class="control">
      <div class="select">
        <select v-model="birthyear">
          <option value="0" selected disabled>Year</option>
          <option v-for="year in years" v-bind:key="year" v-bind:value="year">
            {{ year }}
          </option>
        </select>
      </div>
  </div>
</div>
</template>

<script>
import Moment from 'moment'

export default {
  name: 'DateSelector',
  data () {
    return {
      months: []
    }
  },
  created: function () {
    // Create an array with all days in a month [1..31]
    this.days = Array.from(new Array(31), (val, index) => index + 1)

    // Create an array with all month names
    this.months = Moment.months()

    // Create an array with the last 130 years from this year
    var currentYear = Moment().format('YYYY')
    this.years = Array.from(new Array(130), (val, index) => currentYear - (index + 1))
  },
  computed: {
    birthday: {
      get () {
        return this.$store.state.UserData.birth.day
      },
      set (birthday) {
        this.$store.commit('setBirthday', birthday)
      }
    },
    birthmonth: {
      get () {
        return this.$store.state.UserData.birth.month
      },
      set (birthmonth) {
        this.$store.commit('setBirthmonth', birthmonth)
      }
    },
    birthyear: {
      get () {
        return this.$store.state.UserData.birth.year
      },
      set (birthyear) {
        this.$store.commit('setBirthyear', birthyear)
      }
    }
  }
}
</script>

<style scoped>
p{
  margin-bottom: 1.2em;
}
</style>
