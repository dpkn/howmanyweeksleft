<template>
  <div>
    <p>
      <b>About</b>
    </p>
  <p>
    This website shows your life expectancy at birth based on data by
    <a target="_blank" href="https://data.worldbank.org/indicator/SP.DYN.LE00.IN">The World Bank Group</a>.
  </p>
    <p>Like this project? Check out <a target="_blank" href="https://bloclock.com">bloclock.com</a></p>

    <router-link to="/">Back</router-link>
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
