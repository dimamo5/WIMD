<template>
  <div id="app">
    <!--<navbar v-if="auth !== undefined" v-on:loggedOut="loggedOut"></navbar>-->

    <router-view></router-view>

    <!--<Login v-on:loggedIn="loggedIn" v-if="!register && auth === undefined"></Login>-->

  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Dashboard from './components/Dashboard'
  import router from 'vue-router'

  export default {
    name: 'app',
    data: function () {
      return {}
    },
    components: {
      Navbar,
      Dashboard,
    },
    mounted: function(){
      if(!this.$root.key){
        this.$router.push('login');
      }
    }
  }

</script>