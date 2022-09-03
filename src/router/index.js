import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue';
import LoadingScreen from '../components/LoadingScreen.vue';

const routes = [
  {
    path: '/',
    component: LoadingScreen,
  },
  {
    path: '/start',
    component: () => import('@/views/StartPage.vue'),
  },
  {
    path: '/auth',
    component: () => import('@/views/AuthPage.vue'),
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'explore',
        component: () => import('@/views/ExplorePage.vue')
      },
      {
        path: 'download',
        component: () => import('@/views/DownloadPage.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/ProfilePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
