import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../components/LogIn.vue'
import SignUpForm from '../components/SignUpForm.vue' 
import Calendar from '../components/Calendar.vue'
import Profiles from '../views/Profiles'


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
  },
  {
    path:'/calendar',
    name:'calendar',
    component: Calendar
  },
  {
    path: '/profiles',
    name: 'profiles',
    component: Profiles
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
