<template>
      <div class="container">
            <div class="form">
                  <div class="form-content container-fluid">
                        <div class="row">
                              
                  </div>
      
            </div>
      </div>
      </div>
      <!-- /container -->
</template>

<script>

import * as MapSelect from './MapSelect.vue'
import * as RiskFactorsForm from './RiskFactorsForm.vue'

export default {
      name: 'InfoRegister',
      components: {  },
      data() {
            return { diagnoseId:null }
      },
      mounted: function () {

      },
      methods: {
            
      }
}

</script>

<style scoped>

.form-content {
      min-height: 500px;
      padding: 35px;
}

.form {
      background-color: white;
}
</style>