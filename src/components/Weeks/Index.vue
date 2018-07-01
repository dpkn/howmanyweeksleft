<template>
    <div id="weekView">
      <h1 class="has-text-weight-bold"><em>{{Math.abs(weeksLeft)}}</em> weeks
        <span v-if="weeksLeft <= 0">
          dead
        </span>
        <span v-else>
          left
        </span>
      </h1>
      <section id="weekGrid">
        <div class="dot" :class="{passed: weekNo < weeksLived, active: weekNo == weeksLived}" v-for="weekNo in weekLifeExpectancy" :key="weekNo"></div>
      </section>
      <h2 class="has-text-weight-bold">
        <span v-if="weeksLeft <= 0">
          Statistically, you should have died on the {{deathDate}}<br>
          You're still alive. Congratulations!
        </span>
        <span v-else>
          You've used up {{weeksLived}} weeks of your life. That's {{weeksLivedPercentage}}%.<br>
          You're gonna die on the {{deathDate}}.<!-- <a href="#">Add to calendar</a>-->
        </span>
      </h2>

    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import router from '../../router'

export default {
  name: 'Weeks',
  mounted: function () {
    if (!this.birth.day) {
      router.push('/')
    }
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
  max-width: 1000px;
  margin: 0 auto;
  color:$dot-color;
}
h1{
  line-height: 1em;
  font-size:2.7rem;
  color:$dot-passed-color;
}
h1 em{
  color:$dot-color;
  font-style: normal;
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
  -webkit-border-radius: 3.5px;
  -moz-border-radius: 3.5px;
  border-radius: 3.5px;
  display: inline-block;
  float: left;
  margin: 2.1px;
  background:$dot-color;
}
@media only screen and (max-width: 1023px){
  #weekView {
      width: auto;
      padding: 0 2em;
  }
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
    -webkit-border-radius: 2.5px;
    -moz-border-radius: 2.5px;
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
