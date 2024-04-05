import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/About.vue'
import Home from './components/Home.vue'
import Navbar from './components/Navbar'

Vue.use(VueRouter);
Vue.component('app-nav', Navbar);

const routes = [
  { path: '/',component:Home},
  { path: '/about',component:About}
];

const router = new VueRouter ({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
