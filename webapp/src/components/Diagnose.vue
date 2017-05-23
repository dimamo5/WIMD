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
                <DiagnoseReport v-on:answer="submitAnswer"
                                v-if="question.question=='report'"
                                :conditions="question.conditions" />
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
import DiagnoseReport from './questions/DiagnoseReport.vue'


export default {
    name: 'Diagnose',
    components: { QuestionSingle, QuestionGroupSingle, QuestionGroupMultiple, DiagnoseReport },
    data() {
        return { diagnoseId: null, question: {}, step: 1 }
    },
    mounted: function () {
        this.$http.post('http://localhost:3000/api/diagnose', {}, { headers: { Authorization: this.$root.key } })
            .then((res) => {
                this.diagnoseId = res.body.id;
                this.question = res.body.question;
            })
    },
    methods: {
        submitAnswer: function (answers) {
            this.step++;
            this.$http.post('http://localhost:3000/api/diagnose/' + this.diagnoseId, { answers }, { headers: { Authorization: this.$root.key } })
                .then((res) => {
                    if (typeof res.body.question == 'null' || this.step > 12) {
                        this.question = {};
                        this.question.conditions = res.body.conditions;
                        this.question.question = "report";
                        console.log('should render Report', this.question)
                    } else {
                        this.question = res.body.question;
                    }

                })
            /*this.step++;
            if (this.step == 1) {
                this.diagnoseId = QuestionExample.single.id;
                this.question = QuestionExample.single.question;
            } else if (this.step == 2) {
                this.diagnoseId = QuestionExample.group_single.id;
                this.question = QuestionExample.group_single.question;
            } else if (this.step == 3) {
                this.diagnoseId = QuestionExample.group_multiple.id;
                this.question = QuestionExample.group_multiple.question;
            }*/
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