<template>
  <div class="container">
    <Navbar />
    <div class="row">
      <div class="col-md-6">
        <CircleMenu/>
      </div>
    </div>
  </div>
</template>

<script>
  import SymptumsModal from './modal/Symptoms.vue'
  import CircleMenu from './CircleMenu.vue'
  import Navbar from './Navbar.vue'

  export default {
    name: 'Dashboard',
    data() {
      return {}
    },
    components: { CircleMenu, Navbar },
    mounted: function () {
      if (!this.$root.key) {
        this.$router.push('/login');
      }

      this.$http.get('http://localhost:3000/api/info/symptoms')
        .then((response) => {
          this.symptoms = response;
        })
    }
  }

</script>