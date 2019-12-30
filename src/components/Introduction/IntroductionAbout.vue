<template>
  <div>
    <p>
      <b>About</b>
    </p>
  <p>
    This website shows your life expectancy at birth based on data by
    <a target="_blank" href="https://data.worldbank.org/indicator/SP.DYN.LE00.IN">The World Bank Group</a>. Make sure to take the result with a grain of salt, since in most cases, your current life expectancy is higher than it was at your birth.
  </p>
  <p>
    Your personal details are processed locally and not stored on anywhere.
  </p>
    <p>Like this project? Check out <a target="_blank" href="https://danielkorssen.com">some of my other work.</a></p>

    <router-link to="/" class="button is-primary">Back</router-link>
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
a{
  color:inherit;
  text-decoration: underline;
}
.button{
  text-decoration: none;
}
</style>
