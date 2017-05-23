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
import * as PanelLabTest from './Panel/PanelLabTest.vue'
import * as PanelCondition from './Panel/PanelCondition.vue'
import * as PanelSymptom from './Panel/PanelSymptom.vue'
import PanelDiagnosis from './Panel/PanelDiagnosis.vue'

  export default {
    name: 'PanelMenu',
    components:{PanelLabTest,PanelCondition,PanelSymptom,PanelDiagnosis},
    data() {
      return {symptoms:[] }
    },
    mounted: function () {
    },
    methods:{
    }
  }

</script>

