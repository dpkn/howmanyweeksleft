<template>
  <div>
    <p>
      <b>Ever needed an easy way to stress you out and make you re-evaluate your life choices?</b>
    </p>
    <p>
      This website calculates your life expectancy based on your birthdate and demographic, showing you how much time of your life you’ve already wasted and, more importantly, how many weeks are left until you <em>(statistically)</em> die.
    </p>
    <p>
       Use with caution; feelings of self-loath, remorse, and anxiety may occur.
    </p>
    <router-link to="/form" class="button is-primary">I'm ready</router-link>
  </div>
</template>

<script>
export default {
  name: 'IntroductionText'
}
</script>

<style scoped>
p{
  margin-bottom: 1.2em;
}
</style>
