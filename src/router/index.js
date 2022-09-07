import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../components/LogIn.vue'
import SignUpForm from '../components/SignUpForm.vue' 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
{
    path: '/user-profile',
    name: 'user-profile',
    component: SignUpForm
  } 

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
