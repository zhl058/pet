import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login'
import Main from '../components/Main'


Vue.use(Router)

export default new Router({
  mode:'history', //解决地址栏自动添加#号
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/main',
      name:'main',
      component:Main
    }
  ]
})
