<template>
  <div class="row">
    <div class="col-md-4">
      <div class="panel panel-red">
        <div class="panel-heading dark-overlay">Diagnosis</div>
        <div class="panel-body">
          <ul class="todo-list">
            <li class="todo-list-item">
              <div class="checkbox" v-for="diagnostico in diagnosticos">
                <label for="checkbox">diagnostico</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="panel panel-red">
        <div class="panel-heading dark-overlay">Symptoms</div>
        <div class="panel-body">
          <ul class="todo-list">
            <li class="todo-list-item">
                <div class="checkbox" v-for="sintoma in sintomas">
                  <label for="checkbox">sintoma</label>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="row">
        <PanelCondition />
      </div>
      <div class="row">
        <PanelLabTest />
      </div>
    </div>
  </div>
</template>

<script>
import * as PanelLabTest from './Panel/PanelLabTest.vue'
import * as PanelCondition from './Panel/PanelCondition.vue'

  export default {
    name: 'PanelMenu',
    components:{PanelLabTest,PanelCondition},
    data() {
      return { sintomas : [], diagnosticos: []}
    },
    mounted: function () {
      this.$http.get('http://localhost:3000/api/symptoms', {headers: { 'Authorization': this.$root.key }})
        .then((response) => {
          this.sintomas = response.body;
        })
    }
  }

</script>

