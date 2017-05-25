<template>
  <div class="row">
    <div class="col-md-4">
      <PanelDiagnosis />
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
import PanelLabTest from './Panel/PanelLabTest.vue'
import PanelCondition from './Panel/PanelCondition.vue'
import PanelSymptom from './Panel/PanelSymptom.vue'
import PanelDiagnosis from './Panel/PanelDiagnosis.vue'

  export default {
    name: 'PanelMenu',
    components:{PanelLabTest,PanelCondition,PanelSymptom,PanelDiagnosis},
    data() {
      return {}
    }
  }

</script>

