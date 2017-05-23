<template>
    <div style="margin-top: 80px;">
        <p class="question-text">{{question.text}}</p>
        <div class="answers-group row">
            <div class="row col-md-6 col-md-offset-3 question-item"
                 v-for="question in question.items">
                <p>{{question.name}}</p>
                <div class="answers">
                    <input :id="'choice_present_'+question.id"
                           :name="'choice_'+question.id"
                           type="radio"
                           value="present"
                           v-model="question.value"
                           v-on:click="submitAnswer(question.id)">
                    <label class="radio-label"
                           :for="'choice_present_'+question.id">Yes
                    </label>
                    <input :id="'choice_absent_'+question.id"
                           :name="'choice_'+question.id"
                           type="radio"
                           value="absent"
                           v-model="question.value"
                           v-on:click="submitAnswer(question.id)">
                    <label class="radio-label"
                           :for="'choice_absent_'+question.id">No
                    </label>
                    <input :id="'choice_unknown_'+question.id"
                           :name="'choice_'+question.id"
                           type="radio"
                           value="unknown"
                           v-model="question.value"
                           v-on:click="submitAnswer(question.id)"> 
                    <label class="radio-label"
                           :for="'choice_unknown_'+question.id">Don't know
                    </label>
                </div>
            </div>
    
        </div>
    </div>
</template>


<script>
export default {
    name: 'QuestionGroupMultiple',
    props: ['question'],
    data() {
        return {}
    },
    mounted: function () {
    },
    methods: {
        submitAnswer: function (id) {
            let answers = [];
            for(let quest of this.question.items){
                if(!quest.value){
                    return;
                }
                answers.push({id:quest.id,choice_id:quest.value})
            }
            this.$emit('answer', answers);
        }
    }
}

</script>

<style scoped>
.question-text {
    margin: 0 auto 32px auto;
    opacity: 1;
    font-size: 22px;
    line-height: 32px;
    font-weight: 500;
    max-width: 550px;
    text-align: center;
}

.answers {
    float: right;
}

.question-item {
    border-bottom: 1px solid #E7EBEE;
}
</style>