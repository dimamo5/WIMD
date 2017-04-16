<template>
  <div id="app">
    <navbar v-if="auth !== undefined" v-on:loggedOut="loggedOut"></navbar>
    <router-view v-if="auth !== undefined"></router-view>
    <login v-on:loggedIn="loggedIn" v-if="!register && auth === undefined"></login>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Dashboard from './components/Dashboard'
  import Login from './components/Login'
  import Register from './components/Register'

  export default {
    name: 'app',
    data: function () {
      return { auth: this.$root.auth, register: false }
    },
    components: {
      Navbar,
      Dashboard,
      Login,
      Register,
    },
    methods: {
      loggedIn: function () {
        this.auth = this.$root.auth;
      },
      loggedOut: function () {
        this.auth = undefined;
      }
    }
  }

</script>