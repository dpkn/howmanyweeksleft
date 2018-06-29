<template>
  <div class="field">
    <div class="control">
      <div class="select">
        <select v-model="gender">
          <option value="" selected disabled>Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenderSelector',
  computed: {
    gender: {
      get () {
        return this.$store.state.UserData.gender
      },
      set (gender) {
        this.$store.commit('setGender', gender)
      }
    }
  }
}
</script>
