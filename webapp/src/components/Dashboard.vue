<template>
  <div>
    <div class="loader" v-if="loading"></div>
    <Navbar v-if="!loading" />
    <div class="container-fluid"
         v-if="!loading">
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
    return { loading: true }
  },
  components: { PanelMenu, Navbar },
  mounted: function () {
    if (!this.$root.key) {
      this.$router.push('/login');
    }

    let symptomsPromise = this.$http.get('http://localhost:3000/api/info/symptoms', { headers: { Authorization: this.$root.key } })
      .then((response) => {
        this.$root.data.symptoms = response;
      })

    let conditionsPromise = this.$http.get('http://localhost:3000/api/info/conditions', { headers: { Authorization: this.$root.key } })
      .then((response) => {
        this.$root.data.conditions = response;
      })

    let riskfactorsPromise = this.$http.get('http://localhost:3000/api/info/riskfactors', { headers: { Authorization: this.$root.key } })
      .then((response) => {
        this.$root.data.riskfactors = response;
      })

    let labtestsPromise = this.$http.get('http://localhost:3000/api/info/labtests', { headers: { Authorization: this.$root.key } })
      .then((response) => {
        this.$root.data.labtests = response;
      })

    let userPromise = this.$http.get('http://localhost:3000/api/', { headers: { Authorization: this.$root.key } })
      .then((response) => {
        this.$root.data.user = response;
        if(!this.$root.data.user.hasRegister){
          this.$router.push('/info');
        }
      })

    Promise.all([symptomsPromise, conditionsPromise, riskfactorsPromise, labtestsPromise, userPromise])
      .then(() => {
        this.loading = false;
      });

  }
}

</script>

