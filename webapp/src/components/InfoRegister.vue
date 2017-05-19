<template>
      <div class="container">
            <div class="form">
                  <div class="form-content container-fluid"
                       v-if="step==1">
                        <div class="row">
                              <div class="col-md-12">
                                    <h3>Insert Name</h3></div>
                        </div>
                        <div class="row">
                              <div class="col-md-12">
                                    <input type="text"
                                           id="name-input"
                                           class="form-control"
                                           placeholder="Name"
                                           v-model="name" />
                              </div>
                        </div>
                        <div class="row">
                              <div class="col-md-12">
                                    <h3>Gender</h3></div>
                        </div>
                        <div class="row">
                              <div class="col-md-12">
                                    <i v-on:click="sex='M'"
                                       class="fa fa-male fa-5x"
                                       aria-hidden="true"></i>
                                    <i v-on:click="sex='F'"
                                       class="fa fa-female fa-5x"
                                       aria-hidden="true"></i>
                              </div>
                        </div>
                        <div class="row">
                              <div class="col-md-12">
                                    <h3>Age</h3></div>
                        </div>
                        <div class="row">
                              <div class="col-md-12">
                                    <input type="number"
                                           id="age-input"
                                           class="form-control"
                                           min="18"
                                           max="80"
                                           v-model="age" />
                              </div>
                        </div>
                  </div>
                  <div class="form-content container-fluid"
                       v-if="step==2">
                        <div class="row">
                              <div class="col-md-12">
                                    <h3>Please select the region you live in and places you've traveled to in the last 12 months.</h3>
                              </div>
                              <div class="col-md-12">
                                    <MapSelect />
                              </div>
                        </div>
                  </div>

                  <RiskFactorsForm v-if="step==3" />

            </div>
      
            <div class="form-footer">
      
                  <button v-on:click="nextStep()"
                          class="btn btn-default">Next</button>
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
      components: { MapSelect,RiskFactorsForm },
      data() {
            return { step: 1, name: '', sex: '', age: 18, riskfactors: [] }
      },
      mounted: function () {

      },
      methods: {
            nextStep: function () {
                  if (this.step <= 3) {
                        this.step++;
                        return;
                  }

                  let labtestsPromise = this.$http.post('http://localhost:3000/api/', { name, sex, age }, { headers: { Authorization: this.$root.key } })
                        .then((response) => {
                              this.$root.data.user = response;
                              this.$router.push('/');
                        })

            }
      }
}

</script>

<style scoped>
.form-footer {
      background-color: #fff;
      z-index: 100;
      padding: 0;
      border-top: 1px solid #dedede;
      min-height: 80px;
      padding: 20px 30px;
}

.form-content {
      min-height: 500px;
      padding: 35px;
}

.form {
      background-color: white;
}

button {
      float: right;
      height: 40px;
      color: white;
      background-color: #BF0000;
}
</style>