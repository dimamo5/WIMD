<template>
  <div class="form-content container-fluid parent">
    <div class="row">
      <div class="text-center">
        <h3>Please check all the statements below that apply to you</h3>
      </div>
    </div>
    <div class="row menu">
      <div class="col-md-8 col-md-offset-2 question-item">
        <p>I'm overweight or obese</p>
        <div class="answers text-right col-md-6">
            <input id="choice_45_74_present"
                   name="choice_45_74"
                   type="radio"
                   value="present"
                   v-model="other.choice_45_74">
            <label class="radio-label answers-yes"
                   for="choice_45_74_present">Yes
            </label>
            <input id="choice_45_74_absent"
                   name="choice_45_74"
                   v-model="other.choice_45_74"
                   type="radio"
                   value="absent">
            <label class="radio-label answers-no"
                   for="choice_45_74_absent">No
            </label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8 col-md-offset-2 question-item">
        <p>I smoke cigarettes</p>
        <div class="answers text-right col-md-4">
          <input id="choice_45_69_present"
                 name="choice_45_69"
                 type="radio"
                 v-model="other.choice_45_69"
                 value="present">
          <label class="radio-label answers-yes"
                 for="choice_45_69_present">Yes
          </label>
          <input id="choice_45_69_absent"
                 name="choice_45_69"
                 v-model="other.choice_45_69"
                 value="absent"
                 type="radio">
          <label class="radio-label answers-no"
                 for="choice_45_69_absent">No
          </label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8 col-md-offset-2 question-item">
        <p>I have high cholesterol</p>
        <div class="answers  text-right col-md-4">
          <input id="choice_45_70_present"
                 name="choice_45_70"
                 type="radio"
                 v-model="other.choice_45_70"
                 value="present">
          <label class="radio-label answers-yes"
                 for="choice_45_70_present">Yes
          </label>
          <input id="choice_45_70_absent"
                 name="choice_45_70"
                 v-model="other.choice_45_70"
                 value="absent"
                 type="radio">
          <label class="radio-label answers-no"
                 for="choice_45_70_absent">No
          </label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-md-offset-2 question-item">
        <p>I have hypertension</p>
        <div class="answers  text-right col-md-4">
          <input id="choice_45_71_present"
                 name="choice_45_71"
                 type="radio"
                 v-model="other.choice_45_71"
                 value="present">
          <label class="radio-label answers-yes"
                 for="choice_45_71_present">Yes
          </label>
          <input id="choice_45_71_absent"
                 name="choice_45_71"
                 v-model="other.choice_45_71"
                 value="absent"
                 type="radio">
          <label class="radio-label answers-no"
                 for="choice_45_71_absent">No
          </label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-md-offset-2 question-item">
        <p>I have diabetes</p>
        <div class="answers  text-right col-md-4">
          <input id="choice_45_72_present"
                 name="choice_45_72"
                 type="radio"
                 v-model="other.choice_45_72"
                 value="present">
          <label class="radio-label answers-yes"
                 for="choice_45_72_present">Yes
          </label>
          <input id="choice_45_72_absent"
                 name="choice_45_72"
                 v-model="other.choice_45_72"
                 value="absent"
                 type="radio">
          <label class="radio-label answers-no"
                 for="choice_45_72_absent">No
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RiskFactorsForm',
    props: ['other'],
    data() {
      return {}
    },
    mounted: function () {
    },
    methods: {}
  }
</script>

<style>
  .question-item {
    border-bottom: 1px solid #BF0000;
    padding: 5px;
  }

  .question-item p {
    max-width: 360px;
    display: inline-block;
  }

  .answers {
    float: right;
  }

  .parent {
    position: relative;
  }

  .menu {
    margin-top: 35px;
  }

  .answers-yes, .answers-no{
    padding-right: 15px;
  }

</style>
