<template>
    <div id="weekView">
      <h1 class="has-text-weight-bold"><span>{{weeksLeft}}</span> weeks left.</h1>
      <section id="weekGrid">
        <div class="dot" :class="{passed: weekNo < weeksLived, active: weekNo == weeksLived}" v-for="weekNo in weekLifeExpectancy" :key="weekNo"></div>
      </section>
      <h2 class="has-text-weight-bold">You've used up {{weeksLived}} weeks of your life. That's {{weeksLivedPercentage}}%.<br>
      You're gonna die on the {{deathDate}}.<!-- <a href="#">Add to calendar</a></h2>-->

    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'Weeks',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      birth: state => state.UserData.birth,
      LifeData: state => state.LifeData
    }),
    ...mapGetters(['weekLifeExpectancy', 'weeksLived', 'weeksLivedPercentage', 'weeksLeft', 'deathDate'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$dot-color: #30343F;
$dot-passed-color:#d4d4d4;
a{
  text-decoration: underline;
}
#weekView{
  max-width: 1100px;
  margin: 0 auto;
  color:$dot-color;
}
h1{
  line-height: 1em;
  font-size:2.7rem;
  color:$dot-passed-color;
}
h1 span{
  color:$dot-color;
}
h2{
  clear: left;
  line-height: 1.1em;
  font-size: 1rem;
}
#weekGrid{
  position: relative;
}

.dot{
  width: 7px;
  height: 7px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  display: inline-block;
  float: left;
  margin: 2.3px;
  background:$dot-color;
}
@media only screen and (max-width: 700px){
  h1,h2{
    text-align: center;
  }
  h1{
    font-size: 2.3em;
    line-height:2.3rem;
    padding:30px 0;
  }
  h2{
    padding-top: 20px;
  }
  .dot{
    margin: 1px;
    width: 5px;
    height: 5px;
    border-radius: 2.5px;
  }
  #weekGrid{
    padding: 2em;
    padding-top: 0;
  }
}
.passed{
  animation: fadePassed 2.6s linear 0.3s 1 forwards;
}
.active{
  -webkit-animation: pulsate 2.5s ease-in-out infinite;
  -moz-animation: pulsate 2.5s ease-in-out infinite;
  -ms-animation: pulsate 2.5s ease-in-out infinite;
  -o-animation: pulsate 2.5s ease-in-out infinite;
  animation: pulsate 2.5s ease-in-out infinite;
}
@keyframes fadePassed {
  to {background: $dot-passed-color;}
}
@-webkit-keyframes fadePassed {
  to {background: $dot-passed-color;}
}
@keyframes pulsate{
  0% {background: $dot-color;}
  50% {background: $dot-passed-color;}
  100% {background: $dot-color;}
}
@-webkit-keyframes pulsate {
  0% {background: $dot-color;}
  50% {background: $dot-passed-color;}
  100% {background: $dot-color;}
}
</style>
