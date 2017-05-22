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

import * as MapSelect from './MapSelect.vue'
import * as RiskFactorsForm from './RiskFactorsForm.vue'
import QuestionExample from '../assets/questions.json'
import QuestionSingle from './questions/Single.vue'
import QuestionGroupSingle from './questions/GroupSingle.vue'
import QuestionGroupMultiple from './questions/GroupMultiple.vue'


export default {
    name: 'Diagnose',
    components: { QuestionSingle, QuestionGroupSingle, QuestionGroupMultiple },
    data() {
        return { diagnoseId: null, question: {} }
    },
    mounted: function () {
        /*this.$http.post('http://localhost:3000/api/diagnose', { headers: { Authorization: this.$root.key } })
            .then((res) => {

            })*/
        this.diagnoseId = QuestionExample.group_multiple.id;
        this.question = QuestionExample.group_multiple.question;
    },
    methods: {
        submitAnswer: function (answers) {
            console.log(answers);
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