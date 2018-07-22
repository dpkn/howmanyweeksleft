<template>
    <div id="introduction" class="columns is-centered is-horizontally-centered">
      <div class="column">
        <img class="logo logoer" src="../../assets/logo.png"/>
      </div>
      <div class="column">
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" :duration="300">
          <router-view/>
        </transition>
      </div>

    </div>
</template>

<script>
export default {
  name: 'Introduction',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.is-vertical-center {
  display: flex;
  align-items: center;
}
.columns,.column,img{
  /*  border: 1px solid red;*/
}
#introduction .column{
  max-width: 450px;
  padding: 40px;
}
@media only screen and (max-width: 769px) {
.column{
      margin: 0 auto;
}
.logo{
  padding:0;
  margin: 0;
  margin-bottom: -60px;
}
}
@media only screen and (min-width: 769px) {
  .logo{
    padding-top: 10px;
    margin-right: -20px;
  }
  #introduction .column{
    height: 390px;
  }
  #introduction .column:first-child{
    text-align:right;
      border-right: 4px solid #fff;

  }
  #introduction .column:nth-child(2){
    text-align:left;
  }
}
p{
  margin-bottom: 10px;
  font-size: 1.1em;
}

.logoe{
    animation-name: logoe;
   animation-iteration-count: infinite;
   animation-duration: 6s;
  animation-direction: alternate;
   backface-visibility: visible;
   -webkit-backface-visibility:visible;
   z-index: 1;
}

/*Animate logo*/
@keyframes logoe {
   from {
      transform: rotateY(-10deg) rotateZ(10deg) rotateX(-20deg);
   }
  to{
      transform: rotateY(10deg) rotateZ(-10deg) rotateX(20deg);
   }
 }
</style>
