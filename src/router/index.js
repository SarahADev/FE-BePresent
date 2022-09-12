import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../components/LogIn.vue'
import SignUpForm from '../components/SignUpForm.vue' 

import Calendar from '../components/Calendar.vue'
import Profiles from '../views/Profiles'


import UserProfile from '../components/UserProfile.vue'
import AddProfile from '../components/AddProfile.vue'

import AddFriend from '../components/AddFriend.vue'
import FriendProfile from '../components/FriendProfile'


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
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpForm
  },
  {
    path:'/:userId/calendar',
    name:'calendar',
    component: Calendar
  },
  {
    path: '/profiles',
    name: 'profiles',
    component: Profiles
  },

{
    path: '/signup',
    name: 'signup',
    component: SignUpForm
  },
   {
    path: '/user-profile',
    name: 'user-profile',
    component: UserProfile
  },  
  {
    path: '/add-profile',
    name: 'add-profile',
    component: AddProfile
  },
  {
    path:'/add-friend',
    name:'add-friend',
    component: AddFriend
  },

  {
    path:'/friend-profile/:userId',
    name:'friend-profile',
    component: FriendProfile
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
