import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Cars from './views/cars.vue'
import Product from './views/product.vue'
import Login from './views/login.vue'
import Reg from './views/reg.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/cars',component:Cars},
    {path:'/product',component:Product},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
  ]
})
