<template>
  <div>
    <div class="loader" v-if="loading"></div>
    <Navbar v-if="!loading"/>
    <div class="container-fluid"
         v-if="!loading">
      <div class="row">
        <div class="col-sm-12 col-md-12 main">
          <div class="row placeholders">
            <panel-menu></panel-menu>
            <ul><li>{{this.name}}</li>
              <li><label>Age:</label>{{this.age}}</li>
              <li><label>Gender:</label>{{this.gender}}</li>
              <li><label>E-mail address:</label>{{this.mail}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Navbar from './Navbar.vue'

  export default {
    name: 'Profile',
    data() {
      return {
        name: this.$root.data.user.name,
        age: this.$root.data.user.age,
        gender: this.$root.data.user.gender,
        mail: this.$root.data.mail
      }
    },
    mounted: function () {
    }
  }

</script>


