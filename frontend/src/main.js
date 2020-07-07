import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ProductComponent from './view/Product/ProductComponent'
import HomeComponent from './view/Home/HomeComponent'
import OrdersComponent from './view/Orders/OrdersComponent'
import QuotationsComponent from './view/Quotations/QuotationsComponent'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'product', component: ProductComponent },
  { path: '/home', name: 'home', component: HomeComponent },
  { path: '/orders', name: 'orders', component: OrdersComponent },
  { path: '/quotations', name: 'quotations', component: QuotationsComponent }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
