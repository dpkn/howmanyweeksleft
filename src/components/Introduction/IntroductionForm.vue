<template>
  <div id="form">
    <div class="field">
      <p>
        <b>About your birth</b>
      </p>
      <p>
        Birthdate, gender and country of residence are among the most important factors when it comes to your life expectancy.
      </p>
    </div>
    <GenderSelector></GenderSelector>
    <DemographicSelector></DemographicSelector>
    <DateSelector></DateSelector>
    <div class="field is-grouped">
      <div class="control">
        <router-link to="/weeks" class="button is-primary"  :disabled="!userDataIsComplete">Calculate my death</router-link>
      </div>
      <div class="control">
        <router-link to="/" class="button is-text">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import DateSelector from '../DateSelector'
import DemographicSelector from '../DemographicSelector'
import GenderSelector from '../GenderSelector'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'IntroductionForm',
  components: {
    DateSelector,
    DemographicSelector,
    GenderSelector
  },
  methods: {
    ...mapActions(['loadLifeData'])
  },
  computed: {
    ...mapGetters(['userDataIsComplete'])
  },
  mounted: function () {
    this.loadLifeData('other')
    this.loadLifeData('male')
    this.loadLifeData('female')
  }
}
</script>
<style>
.button[disabled]{
  pointer-events: none;
}
</style>
