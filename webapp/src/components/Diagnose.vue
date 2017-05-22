<template>
    <div class="container">
        <div class="form">
            <div class="form-content container-fluid">
    
                <QuestionSingle v-show="question.type=='single'"
                                v-on:answer="submitAnswer"
                                :question="question" />
                <QuestionGroupSingle v-on:answer="submitAnswer"
                                     v-show="question.type=='group_single'"
                                     :question="question" />
                <QuestionGroupMultiple v-on:answer="submitAnswer"
                                       v-show="question.type=='group_multiple'"
                                       :question="question" />
            </div>
    
        </div>
    </div>
    </div>
    <!-- /container -->
</template>

<script>

import MapSelect from './MapSelect.vue'
import RiskFactorsForm from './RiskFactorsForm.vue'
import QuestionExample from '../assets/questions.json'
import QuestionSingle from './questions/Single.vue'
import QuestionGroupSingle from './questions/GroupSingle.vue'
import QuestionGroupMultiple from './questions/GroupMultiple.vue'


export default {
    name: 'Diagnose',
    components: { QuestionSingle, QuestionGroupSingle, QuestionGroupMultiple},
    data() {
        return { diagnoseId: null, question: {},step: 1  }
    },
    mounted: function () {
        /*this.$http.post('http://localhost:3000/api/diagnose', { headers: { Authorization: this.$root.key } })
            .then((res) => {

            })*/
        this.diagnoseId = QuestionExample.single.id;
        this.question = QuestionExample.single.question;
    },
    methods: {
        submitAnswer: function (answers) {
            console.log(answers);
            this.step++;
            if (this.step == 1) {
                this.diagnoseId = QuestionExample.single.id;
                this.question = QuestionExample.single.question;
            } else if (this.step == 2) {
                this.diagnoseId = QuestionExample.group_single.id;
                this.question = QuestionExample.group_single.question;
            } else if (this.step == 3) {
                this.diagnoseId = QuestionExample.group_multiple.id;
                this.question = QuestionExample.group_multiple.question;
            }
            console.log(this.question.type)
        }
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