<template>
  <div class="container">

    <form v-on:submit.prevent="login" class="form-login">
      <div class="container">
        <div id="header" class="row">
          <h1 class="col-md-1 col-md-offset-3">WIMD</h1>
          <div class="col-md-1 image"></div>​
          <h1 class="col-md-4">- Your Health Advisor</h1>
        </div>
        <div id="inputLoginForm">
          <div class="row">
            <div class="col-md-3 col-md-offset-4">
              <input type="text" id="inputUsername" class="form-control" placeholder="Username" v-model="Username" required autofocus>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-md-offset-4">
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="Password" required>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-md-offset-4 text-right">
              <p>Not Registered yet? click
                <router-link v-on:click="register" tag="a" to="/register">here</router-link>.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-md-offset-4">
              <button id="btn-login" class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return { failed: false, Username: '', Password: '' } // todo
    },
    methods: {
      login: function () {
        this.$http.post('http://localhost:3000/auth/login', { username: this.Username, password: this.Password })
          .then((response) => {
            if (response.body.message === 'Success') {
              this.$root.auth = response.body.token
              this.$emit('loggedIn');
            } else {
              alert('Username/Password não estão correctas!')
            }
          })
      },
      register: function () {
        this.$root.register = true;
      }
    }
  }

</script>