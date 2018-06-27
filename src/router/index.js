import Vue from 'vue'
import Router from 'vue-router'

import Introduction from '@/components/Introduction/Index.vue'
import IntroductionText from '@/components/Introduction/IntroductionText'
import IntroductionForm from '@/components/Introduction/IntroductionForm'
import IntroductionAbout from '@/components/Introduction/IntroductionAbout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction,
      children: [
        {
          path: '/',
          component: IntroductionText
        },
        {
          path: 'form',
          component: IntroductionForm
        },
        {
          path: 'about',
          component: IntroductionAbout
        }
      ]
    }
  ]
})
