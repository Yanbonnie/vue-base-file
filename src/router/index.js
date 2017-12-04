import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Hello = resolve => require(['@/components/Hello'], resolve)                              //demo
const Noallow = resolve => require(['@/components/noallow'], resolve)                          //404页面

//const sign_state = r => require.ensure([], () => r(require('@/components/sign_state')), 'sign_state')

export default new Router({  
  // mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/',
      redirect:'/hello'
    },
    {
      path:'/404',
      component:Noallow
    },
    {
      path:'*',
      redirect:'/404'
    }
  ]
})
