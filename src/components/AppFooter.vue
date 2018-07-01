<template>
  <footer class="is-size-7">
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
  width: 100%;
  text-align: center;
  padding: 1em;
  position: absolute;
  bottom: 5px;
  display: block;
  color:#fff;
}
a,a:hover,a:visited{
  color:inherit;
  text-decoration: underline;
}
@media only screen and (max-width: 769px){
  footer {
    position: relative;
    padding: 2em;
  }
}
</style>
