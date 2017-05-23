// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Register from './components/Register.vue'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import InfoRegister from './components/InfoRegister.vue'
import Diagnose from './components/Diagnose.vue'
import NotFound from './components/NotFound.vue'


Vue.use(VueRouter);
Vue.use(VueResource);

let data = {};

console.log('Key in Main: ' + localStorage.getItem('userToken'));
let key = localStorage.getItem('userToken')

const routes = [
    { path: '/', component: Dashboard },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/info', component: InfoRegister },
    { path:'/diagnose',component: Diagnose},
        {path : '*', component: NotFound }
]

//Add history mode in future
const router = new VueRouter({
    linkActiveClass: 'active',
    routes
})


new Vue({
    router,
    el: '#app',
    data:{data,key},
    render: h => h(App),
})
