import Vue from 'vue'
import Router from 'vue-router'

import Introduction from '@/components/Introduction/Index.vue'
import IntroductionText from '@/components/Introduction/IntroductionText'
import IntroductionForm from '@/components/Introduction/IntroductionForm'
import IntroductionAbout from '@/components/Introduction/IntroductionAbout'
import Weeks from '@/components/Weeks/Index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction,
      children: [
        {
          path: '/',
          component: IntroductionText,
          meta: {
            title: 'Home',
            gradientState: 'default-state'
          }
        },
        {
          path: 'form',
          component: IntroductionForm,
          meta: {
            title: 'How many.??',
            gradientState: 'step-2'
          }
        },
        {
          path: 'about',
          component: IntroductionAbout
        }
      ]
    },
    {
      path: '/weeks',
      name: 'Weeks',
      component: Weeks,
      meta: {
        title: 'Weeks eft.',
        gradientState: 'weekview-state'
      }
    }
  ]
})

export default router
