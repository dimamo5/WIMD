<template>
  <div class="container" id="login-container">

    <form v-on:submit.prevent="login" class="form-login">
      <div class="container">
        <div id="header" class="row">
          <h1 class="col-md-1 col-md-offset-3">WIMD</h1>
          <div class="col-md-1 image"></div>​
          <h1 class="col-md-4">Your Health Advisor</h1>
        </div>
        <div id="inputLoginForm">
          <div class="row">
            <div class="col-md-3 col-md-offset-4">
              <input type="text" id="input_mail" class="form-control" placeholder="Mail" v-model="mail" required autofocus>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-md-offset-4">
                <input type="password" id="input_password" class="form-control" placeholder="Password" v-model="password" required>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-md-offset-4 text-right">
              <p>Not Registered yet? click
                <router-link tag="a" to="/register">here</router-link>.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-md-offset-4">
              <div class="col-md-8 col-md-offset-2"> 
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
      return { failed: false, mail: '', password: '' } // todo
    },
    mounted: function () {
            if (this.$root.key) {
                  this.$router.push('/');
            }
      },
    methods: {
      login: function () {
        this.$http.post('http://localhost:3000/auth/login', { mail: this.mail, password: this.password })
          .then((response) => {
            if (response.body.message === 'Success') {
              this.$root.key = response.body.token
              this.$router.push('/');
            } else {
              alert('Username/Password não estão correctas!')
            }
          })
      }
    }
  }

</script>