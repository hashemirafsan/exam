import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/login'
import profile from '@/components/profile'
import address from '@/components/address'
import showProfile from '@/components/showprofile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/login',
    	name: 'login',
    	component: Login
    },
    {
    	path: '/profile/:id',
    	name: 'profile',
    	component: showProfile,
    	props: true
    },
    {

		path: '/profile/:id/edit',
		name: 'profile_edit',
		component: profile,
		props: true
    },
    {
    	path: '/profile/:id/address',
    	name: 'profile_address',
    	component: address,
    	props: true
    }
  ]
})
