<template>
  <div>
    <div class="field">
      <p>
        <b>About your birth</b>
      </p>
      <p>
        Birthdate, gender and country of residence are the most important factors when it comes to your life expectancy.
      </p>
    </div>
    <GenderSelector></GenderSelector>
    <CountrySelector></CountrySelector>
    <DateSelector></DateSelector>
    <div class="field is-grouped">
      <div class="control">
        <router-link to="/form" class="button is-primary" disabled>Calculate my death</router-link>
      </div>
      <div class="control">
        <router-link to="/" class="button is-text">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import DateSelector from '../DateSelector'
import CountrySelector from '../CountrySelector'
import GenderSelector from '../GenderSelector'

import { mapActions } from 'vuex'

export default {
  name: 'IntroductionForm',
  components: {
    DateSelector,
    CountrySelector,
    GenderSelector
  },
  methods: {
    ...mapActions(['loadLifeData'])
  },
  mounted: function () {
    var a = this.loadLifeData('other')
    var b = this.loadLifeData('men')
    var c = this.loadLifeData('women')
    console.log(a, b, c)
    if (a === b & a === c) {
      console.log('e')
    }
  }
}
</script>
