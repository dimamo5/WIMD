<template>
  <div class="row">
    <div class="col-md-4">
      <div class="panel panel-red">
        <div class="panel-heading dark-overlay">Diagnosis</div>
        <div class="panel-body">
          <ul class="todo-list">
            <li class="todo-list-item">
              <div class="checkbox">
                <label for="checkbox">diagnostico</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <PanelSymptom />
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
import * as PanelSymptom from './Panel/PanelSymptom.vue'


  export default {
    name: 'PanelMenu',
    components:{PanelLabTest,PanelCondition,PanelSymptom},
    data() {
      return {}
    },
    mounted: function () {
    }
  }

</script>

