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
    <CreateLabTests v-if="!loading" />
    <CreateConditions v-if="!loading" />
    <CreateSymptoms v-if="!loading" />
  </div>
</template>

<script>
import PanelMenu from './PanelMenu.vue'
import Navbar from './Navbar.vue'
import CreateLabTests from './modal/LabTests.vue'
import CreateConditions from './modal/Conditions.vue'
import CreateSymptoms from './modal/Symptoms.vue'


export default {
  name: 'Dashboard',
  data() {
    return { loading: true }
  },
  components: { PanelMenu, Navbar,CreateLabTests,CreateConditions,CreateSymptoms},
  mounted: function () {
    if (!this.$root.key) {
      this.$router.push('/login');
    }

    let symptomsPromise = this.$http.get('http://localhost:3000/api/info/symptoms', { headers: { Authorization: this.$root.key } })
      .then((response) => {
        this.$root.data.symptoms = response.body;
      })

    let conditionsPromise = this.$http.get('http://localhost:3000/api/info/conditions', { headers: { Authorization: this.$root.key } })
      .then((response) => {
        this.$root.data.conditions = response.body;
      })

    let riskfactorsPromise = this.$http.get('http://localhost:3000/api/info/riskfactors', { headers: { Authorization: this.$root.key } })
      .then((response) => {
        this.$root.data.riskfactors = response.body;
      })

    let labtestsPromise = this.$http.get('http://localhost:3000/api/info/labtests', { headers: { Authorization: this.$root.key } })
      .then((response) => {
        this.$root.data.labtests = response.body;
      })

    let userPromise = this.$http.get('http://localhost:3000/api/', { headers: { Authorization: this.$root.key } })
      .then((response) => {
        this.$root.data.user = response.body;
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

