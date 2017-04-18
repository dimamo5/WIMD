<template>
      <div class="container" id="login-container">

            <form v-on:submit.prevent="requestRegister" class="form-signin">
                  <div class="container">
                        <div id="header" class="row">
                              <h1 class="col-md-1 col-md-offset-3">WIMD</h1>
                              <div class="col-md-1 image"></div>​
                              <h1 class="col-md-4">Your Health Advisor</h1>
                        </div>
                        <div id="inputLoginForm">
                              <div class="row">
                                    <div class="col-md-3 col-md-offset-4">
                                          <input type="text" id="inputName" class="form-control" placeholder="Name" v-model="Name" required autofocus>
                                    </div>
                              </div>
                              <div class="row">
                                    <div class="col-md-3 col-md-offset-4">
                                          <input type="text" id="inputUsername" class="form-control" placeholder="Username" v-model="Username" required autofocus>
                                    </div>
                              </div>
                              <div class="row">
                                    <div class="col-md-3 col-md-offset-4">
                                          <input type="email" id="inputEmail" class="form-control" placeholder="Email" v-model="Email" required autofocus>
                                    </div>
                              </div>
                              <div class="row">
                                    <div class="col-md-3 col-md-offset-4">
                                          <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="Password" required>
                                    </div>
                              </div>
                              <div class="row">
                                    <div class="col-md-3 col-md-offset-4">
                                          <div class="col-md-8 col-md-offset-2">
                                                <button id="btn-Register" class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </form>

      </div>
      <!-- /container -->
</template>

<script>
      export default {
            name: 'Register',
            data() {
                  return { failed: false, Name: '', Username: '', Password: '', Email: '' }
            },
            methods: {
                  requestRegister: function () {
                        this.$http.post('http://localhost:3000/auth/register', { username: this.Username, password: this.Password, mail: this.Email })
                              .then((response) => {
                                    if (response.body.message === 'Success') {
                                          this.$root.key = response.body.token;
                                          this.$router.push('/');
                                    } else {
                                          alert('Username/Password não estão correctas!');
                                    }
                              })
                  }
            }
      }

</script>