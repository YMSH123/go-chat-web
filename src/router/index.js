import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Forget from '@/views/Login/components/ForgetPassword.vue'
import Layout from '@/views/Layout/index.vue'
import LayoutMessage from '@/views/Layout/components/LayoutMessage.vue'
import LayoutLinkman from '@/views/Layout/components/LayoutLinkman.vue'
import Content from '@/views/Layout/components/Content.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: LayoutMessage,
          children: [
            {
              path: 'content',
              component: Content
            },
          ]
        },
        {
          path: 'link',
          component: LayoutLinkman
        },
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/forget',
      component: Forget
    }
  ]
})

export default router
