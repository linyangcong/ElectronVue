import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
const Login =()=>import('../components/Login')
const Main =()=>import('../components/MainContain')

const Template1=()=>import('../components/ResumeTemplate/Template1')
const TagTittle=()=>import('../components/ResumeTemplate/Tag/TagTittle')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Login',
      // component: Login,
      redirect: '/Login'
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    { 
      path:'/Main',
      name:'Main',
      component:Main
    },
    {
      path:'/Template1',
      name:'Template1',
      component:Template1
    },
    {
      path:'/TagTittle',
      name:'TagTittle',
      components:TagTittle
    }

  ]
})
