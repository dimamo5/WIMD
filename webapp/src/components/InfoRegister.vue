<template>
  <div class="container">
    <div class="form">
      <div class="form-content container-fluid parent"
           v-if="step==1">
        <div class="menu row">
          <div class="row menu-element">
            <div class="col-md-6">
              <h3>Insert Name</h3></div>
            <div class="col-md-6">
              <input type="text"
                     id="name-input"
                     class="form-control"
                     placeholder="Name"
                     v-model="name"/>
            </div>
          </div>
          <div class="row menu-element">
            <div class="col-md-6">
              <h3>Gender</h3>
            </div>
            <div class="col-md-6">
              <div v-on:click="sex='M'" :class="[sex=='M' ? 'selected-answer':'', 'answer']">
                <i class="fa fa-male fa-3x"
                   aria-hidden="true"></i>
                <span>Male</span>
              </div>
              <div v-on:click="sex='F'" :class="[sex=='F' ? 'selected-answer':'', 'answer']">
                <i class="fa fa-female fa-3x"
                   aria-hidden="true"></i>
                <span>Female</span>
              </div>
            </div>
          </div>
          <div class="row menu-element">
            <div class="col-md-6">
              <h3>Age</h3>
            </div>
            <div class="col-md-6">
              <input type="number"
                     id="age-input"
                     class="form-control"
                     min="18"
                     max="80"
                     v-model="age"/>
            </div>
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
            <MapSelect :riskfactors.sync="riskfactors"/>
          </div>
        </div>
      </div>

      <RiskFactorsForm v-if="step==3" :other.sync="other"/>

    </div>

    <div class="form-footer">

      <button v-on:click="nextStep()"
              class="btn btn-default">Next
      </button>
    </div>
  </div>
  <!-- /container -->
</template>

<script>

  import * as MapSelect from './MapSelect.vue'
  import * as RiskFactorsForm from './RiskFactorsForm.vue'

  export default {
    name: 'InfoRegister',
    components: {MapSelect, RiskFactorsForm},
    data() {
      return {
        step: 1,
        name: '',
        sex: '',
        age: 18,
        riskfactors: [],
        other: {choice_45_69: '', choice_45_70: '', choice_45_71: '', choice_45_72: '', choice_45_74: ''}
      }
    },
    mounted: function () {

    },
    methods: {
      nextStep: function () {
        if (this.step < 3) {
          this.step++;
          return;
        }
        this.calcRiskFactors();

        this.formatRiskFactors();

        let user = {name: this.name, sex: this.sex, age: this.age, riskFactors: this.riskfactors};

        this.$http.post('http://localhost:3000/api/', user, {headers: {Authorization: this.$root.key}})
          .then((response) => {
            this.$root.data.user = user;
            this.$router.push('/');
          })

      },
      calcRiskFactors: function () {
        if (this.age < 18) {
          this.riskfactors.push("p_65");
        } else if (this.age > 40 && this.age < 55) {
          this.riskfactors.push("p_4");
        } else if (this.age > 60) {
          this.riskfactors.push("p_5");
        }

      },
      formatRiskFactors: function () {
        if (this.other.choice_45_74 == "present") {
          this.riskfactors.push("p_7");
        }
        if (this.other.choice_45_69 == "present") {
          this.riskfactors.push("p_28");
        }
        if (this.other.choice_45_70 == "present") {
          this.riskfactors.push("p_10");
        }
        if (this.other.choice_45_71 == "present") {
          this.riskfactors.push("p_9");
        }
        if (this.other.choice_45_72 == "present") {
          this.riskfactors.push("p_8");
        }

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

  .menu {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .parent {
    position: relative;
  }

  .menu-element {
    margin: 10px;
  }

  .answer:hover, div.selected-answer {
    border: 2px solid #BF0000;
  }

  .answer {
    position: relative;
    display: inline-block;
    width: 68px;
    height: 80px;
    margin: 5px 5px 8px;
    background-color: #fff;
    border: 2px solid #dedede;
    border-radius: 4px;
    text-align: center;
    vertical-align: middle;
    outline: none;
    cursor: pointer;
    padding: 4px;
  }

  .answer i {
    width: 100%;
    margin-bottom: 10px;
  }


</style>
