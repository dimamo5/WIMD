<template>
  <div>
    <Navbar />
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-12 main">
          <div class="row placeholders">
            <panel-menu></panel-menu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SymptumsModal from './modal/Symptoms.vue'
  import PanelMenu from './PanelMenu.vue'
  import Navbar from './Navbar.vue'

  export default {
    name: 'Dashboard',
    data() {
      return {}
    },
    components: { PanelMenu, Navbar },
    mounted: function () {
      if (!this.$root.key) {
        this.$router.push('/login');
      }
    }
  }

</script>

