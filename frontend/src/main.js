import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ProductComponent from './view/Product/ProductComponent'
import HomeComponent from './view/Home/HomeComponent'
import OrdersComponent from './view/Orders/OrdersComponent'
import QuotationsComponent from './view/Quotations/QuotationsComponent'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import HomeOrdersComponent from './view/Orders/HomeOrdersComponent'
import HomeQuotationsComponent from './view/Quotations/HomeQuotationsComponent'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeComponent },
  { path: '/product', name: 'product', component: ProductComponent },
  { path: '/orders', name: 'orders', component: OrdersComponent },
  { path: '/quotations', name: 'quotations', component: QuotationsComponent },
  { path: '/orderslist', name: 'orderslist', component: HomeOrdersComponent },
  { path: '/quotationslist', name: 'quotationslist', component: HomeQuotationsComponent }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

/*eslint-disabled no-new*/
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
