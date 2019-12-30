<template>
  <header id="header">
      <router-link to="/form">new calculation</router-link> /
      <a id="share-button" @click="toggleShareMenu" v-bind:class="{ hidden: shareMenuOpened }">share</a>
      <div id="share-links" v-bind:class="{ hidden: !shareMenuOpened }">
        <a href="whatsapp://send?text=Find%20out%20how%20many%20weeks%20are%20left%20before%20you%20die%3A%20howmanyweeksleft.com" data-action="share/whatsapp/share">WhatsApp</a> / <a href="https://www.facebook.com/sharer/sharer.php?u=howmanyweeksleft.com" target="_blank">Facebook</a> / <a href="https://twitter.com/home?status=Find%20out%20how%20many%20weeks%20you%20have%20left%20before%20you%20die%3A%20howmanyweeksleft.com" target="_blank">Twitter</a> / <a href="mailto:?subject=How%20many%20weeks%20do%20you%20have%20left%3F&amp;body=Find%20out%20how%20many%20weeks%20you%20have%20left%20before%20you%20die%3A%20howmanyweeksleft.com" target="_blank">Mail</a> / <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A//howmanyweeksleft.com&amp;title=How%20many%20weeks%20do%20you%20have%20left%3F&amp;summary=Find%20out%20how%20many%20weeks%20you%20have%20left%20before%20you%20die%3A%20howmanyweeksleft.com&amp;source=" target="_blank">LinkedIn</a>
      </div>
  </header>
</template>

<script>
export default {
  name: 'WeeksHeader',
  data () {
    return {
      shareMenuOpened: false
    }
  },
  methods: {
    toggleShareMenu () {
      this.shareMenuOpened = !this.shareMenuOpened
    }
  }
}
</script>

<style scoped lang="scss">
#share-links{
  display:inline-block;
}
.hidden{
  display: none!important;
}
header{
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  text-align: left;
}
a {
  text-decoration: underline;
}
@media only screen and (max-width: 1023px){
  header {
    background: #f2f2f2;
    position: relative;
    text-align: center;
  }
}
</style>
