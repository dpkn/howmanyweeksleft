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
      component: Introduction,
      children: [
        {
          path: '/',
          component: IntroductionText,
          name: 'Introduction',
          meta: {
            gradientState: 'default-state'
          }
        },
        {
          path: 'form',
          component: IntroductionForm,
          meta: {
            gradientState: 'step-2'
          }
        },
        {
          path: 'about',
          component: IntroductionAbout,
          meta: {
            gradientState: 'default-state'
          }
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
