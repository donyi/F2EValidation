import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Create from '@/components/Create'
import Method from '@/components/Method'
import Picture from '@/components/Picture'
import Congratulations from '@/components/Congratulations'
import General from '@/components/General'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    },
    {
      path:'/General',
      name: 'General',
      component: General
    },
    {
      path:"/Method",
      name:"Method",
      component:Method
    },
    {
      path:"/Picture",
      name:"Picture",
      component:Picture
    },
    {
      path:"/Congratulations",
      name:"Congratulations",
      component:Congratulations
    }
  ]
})
