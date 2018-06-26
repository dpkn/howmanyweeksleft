<template>
<div class="field has-addons">
  <div class="control">
      <div class="select">
        <select>
          <option  selected disabled hidden>Day</option>
          <option v-for="day in days" v-bind:key="day">
            {{ day }}
          </option>
        </select>
      </div>
  </div>
  <div class="control">
      <div class="select">
        <select>
          <option value="" selected disabled hidden>Month</option>
          <option v-for="month in months" v-bind:key="month">
            {{ month }}
          </option>
        </select>
      </div>
  </div>
  <div class="control">
      <div class="select">
        <select>
          <option value="" selected disabled hidden>Year</option>
          <option v-for="year in years" v-bind:key="year">
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
  }
}
</script>

<style scoped>
p{
  margin-bottom: 1.2em;
}
</style>
