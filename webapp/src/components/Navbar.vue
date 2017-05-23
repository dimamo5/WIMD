<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid" id="navHeader">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">WIMD</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
      <!-- <li><a href="#">Dashboard</a></li>
           <li><a href="#">Settings</a></li>
           <li><a href="#">Help</a></li> -->
          <li data-toggle="modal" data-target="#profile" class="clicable"><a>{{name}}</a></li>
          <li v-on:click="logout()" class="clicable"><a>Logout</a></li>
        </ul>
      </div>
    </div>
    </nav>
</template>

<script>

    import Profile from './modal/Profile.vue'

    export default {
        name: 'navbar',
        data() {
            return { name: this.$root.data.user.name }
        },
        methods: {
            logout: function () {
                this.$root.key = null;
                localStorage.removeItem('userToken');
                this.$router.push('/login');
            }
        }
    }

</script>

<style>
  .navbar-inverse .navbar-nav>li>a{
    color: #fff;
  }

  .navbar-inverse .navbar-nav>li>a:hover{
    color: white;
  }
</style>
