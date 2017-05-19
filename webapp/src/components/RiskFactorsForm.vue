<template>
    <div class="form-content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <h3>Please check all the statements below that apply to you</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 question-item">
                <p>I'm overweight or obese</p>
                <div class="answers">
                    <input id="choice_45_74_present"
                           name="choice_45_74"
                           type="radio"
                           v-model="choice_45_74">
                    <label class="radio-label"
                           for="choice_45_74_present">Yes
                    </label>
                    <input id="choice_45_74_absent"
                           name="choice_45_74"
                           v-model="choice_45_74"
                           type="radio">
                    <label class="radio-label"
                           for="choice_45_74_absent">No
                    </label>
                </div>
            </div>
        </div>
    
        <div class="row">
            <div class="col-md-12 question-item">
                <p>I smoke cigarettes</p>
                <div class="answers">
                    <input id="choice_45_69_present"
                           name="choice_45_69"
                           type="radio"
                           v-model="choice_45_69">
                    <label class="radio-label"
                           for="choice_45_69_present">Yes
                    </label>
                    <input id="choice_45_69_absent"
                           name="choice_45_69"
                           v-model="choice_45_69"
                           type="radio">
                    <label class="radio-label"
                           for="choice_45_69_absent">No
                    </label>
                </div>
            </div>
        </div>
    
        <div class="row">
            <div class="col-md-12 question-item">
                <p>I have high cholesterol</p>
                <div class="answers">
                    <input id="choice_45_70_present"
                           name="choice_45_70"
                           type="radio"
                           v-model="choice_45_70">
                    <label class="radio-label"
                           for="choice_45_70_present">Yes
                    </label>
                    <input id="choice_45_70_absent"
                           name="choice_45_70"
                           v-model="choice_45_70"
                           type="radio">
                    <label class="radio-label"
                           for="choice_45_70_absent">No
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 question-item">
                <p>I have hypertension</p>
                <div class="answers">
                    <input id="choice_45_71_present"
                           name="choice_45_71"
                           type="radio"
                           v-model="choice_45_71">
                    <label class="radio-label"
                           for="choice_45_71_present">Yes
                    </label>
                    <input id="choice_45_71_absent"
                           name="choice_45_71"
                           v-model="choice_45_71"
                           type="radio">
                    <label class="radio-label"
                           for="choice_45_71_absent">No
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 question-item">
                <p>I have diabetes</p>
                <div class="answers">
                    <input id="choice_45_72_present"
                           name="choice_45_72"
                           type="radio"
                           v-model="choice_45_72">
                    <label class="radio-label"
                           for="choice_45_72_present">Yes
                    </label>
                    <input id="choice_45_72_absent"
                           name="choice_45_72"
                           v-model="choice_45_72"
                           type="radio">
                    <label class="radio-label"
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
    data() {
        return { choice_45_69: '', choice_45_70: '', choice_45_71: '', choice_45_72: '', choice_45_74: '' }
    },
    mounted: function () {

    },
    methods: {
    }
}
</script>

<style>
.question-item {
    border-bottom: 1px solid #E7EBEE;
}

.question-item p {
    max-width: 360px;
    display: inline-block;
}

.answers {
    float: right;
}
</style>