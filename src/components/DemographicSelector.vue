<template>
  <div class="field">
    <div class="control">
      <div class="select">
        <select v-model="userDemographic">
          <option value="" selected disabled>Select your demographic</option>
          <option v-for="(dem,index) in demographics" v-bind:key="dem" v-bind:value="index">{{dem}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CountrySelector',
  computed: {
    ...mapState({
      demographics: state => state.LifeData.demographics
    }),
    userDemographic: {
      get () {
        return this.$store.state.UserData.demographic
      },
      set (demographic) {
        this.$store.commit('setDemographic', demographic)
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
