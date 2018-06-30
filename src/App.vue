<template>
  <div id="app">

    <div class="horizontalCenter">
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <router-view/>
      </transition>
    </div>

    <AppFooter></AppFooter>

    <canvas id="background-canvas"></canvas>
  </div>
</template>

<script>
import './assets/styles/theme.scss'
import 'animate.css'
import Granim from 'granim'

import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    AppFooter
  },
  watch: {
    '$route' (to, from) {
      console.log('wakawake time for africa??')
      console.log(to.meta.gradientState)
      if (to.meta.gradientState) { window.backgroundCanvas.changeState(to.meta.gradientState) }
    }
  },
  mounted: function () {
    window.backgroundCanvas = new Granim({
      element: '#background-canvas',
      name: 'background-canvas',
      direction: 'radial',
      opacity: [1, 1],
      isPausedWhenNotInView: true,
      stateTransitionSpeed: 500,
      states: {
        'default-state': {
          gradients: [
            ['#000000', '#313131']
          ]
        },
        'step-2': {
          gradients: [
            ['#000000', '#191919']
          ],
          loop: false
        },
        'weekview-state': {
          gradients: [ ['#FFFFFF', '#F2F2F2'], ['#F2F2F2', '#FFFFFF'] ]
        }
      }
    })
  }
}
</script>

<style>
html,body,#app,#background-canvas{
  width:100%;
  height: 100%;
  margin: 0;
  padding: 0;
  top:0;
  left:0;
}
@media only screen and (min-width: 1022px){
  .horizontalCenter{
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
        width: 100%;
  }
}
#background-canvas{
  position: fixed;
  z-index:-100;
}
</style>
