import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.use(Router)
fastClick.attach(document.body)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }]
})
