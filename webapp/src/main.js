// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Register from './components/Register.vue'
import Dashboard from './components/Dashboard.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    { path: '/', component: Dashboard },
    { path: '/register', component: Register }
]

//Add history mode in future
const router = new VueRouter({
    linkActiveClass: 'active',
    routes
})


new Vue({
    router,
    el: '#app',
    render: h => h(App)
})