import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false,
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Layout/index.vue'),
      meta: {
        title: '首页',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue'),
      meta: {
        title: '登录页',
      },
    },
  ],
})

router.beforeEach(() => {
  // 进度条开始
  NProgress.start()
})

router.afterEach((to) => {
  // 进度条结束
  NProgress.done()
  // 动态设置标题
  document.title = `${to.meta.title || import.meta.env.VITE_APP_TITLE}`
})

export default router
