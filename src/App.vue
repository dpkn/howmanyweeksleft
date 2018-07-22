<template>
  <div id="app">

    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
      <router-view/>
    </transition>

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
    '$route' (to, from) { // When route changes, apply the corresponding gradient to the background canvas
      if (to.meta.gradientState) { window.backgroundCanvas.changeState(to.meta.gradientState) }
    }
  },
  mounted: function () {
    // Setup Granim, the library that handles the gradient background canvas
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
          gradients: [ ['#FFFFFF', '#FFFFFF'] ]
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
@media only screen and (min-width: 769px){
  .is-horizontally-centered{
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
