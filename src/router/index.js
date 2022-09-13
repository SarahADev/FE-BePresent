import { createRouter, createWebHashHistory } from 'vue-router'
import LogIn from '../components/LogIn.vue'
import SignUpForm from '../components/SignUpForm.vue' 

import CalendarView from '../views/CalendarView'
import Profiles from '../views/Profiles'


import UserProfile from '../components/UserProfile.vue'
import AddProfile from '../components/AddProfile.vue'

import AddFriend from '../components/AddFriend.vue'
import FriendProfile from '../components/FriendProfile'
import Presents from '../components/Presents.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: LogIn
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpForm
  },
  {
    path:'/calendar/:userId',
    name:'calendar',
    component: CalendarView
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
    path: '/user-profile/:userId',
    name: 'user-profile',
    component: UserProfile
  },  
  {
    path: '/add-profile',
    name: 'add-profile',
    component: AddProfile
  },
  {
    path:'/:userId/add-friend',
    name:'add-friend',
    component: AddFriend
  },

  {
    path:'/friend-profile/:userId/:friendId',
    name:'friend-profile',
    component: FriendProfile
  },
  {
    path:'/presents/:userId',
    name:'presents',
    component: Presents
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
