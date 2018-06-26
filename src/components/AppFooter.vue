<template>
  <footer>
    <p><a target="_blank" href="https://daankorssen.nl">Made by Daniël</a> | <router-link to="about">About this project</router-link></p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
footer{
  bottom: 5px;
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: .7em;
  padding: 1em;
}
a,a:hover,a:visited{
  color:inherit;
  text-decoration: underline;
}
</style>
