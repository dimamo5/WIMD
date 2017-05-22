<template>
    <div style="margin-top: 80px;">
        <p class="question-text">{{question.text}}</p>
        <div class="answers-group row">
            <div class="row col-md-6 col-md-offset-3"
                 v-for="question in question.items">
                <input :id="question.id"
                       type="radio"
                       name="answer"
                       class="radio-input"
                       v-on:click="submitAnswer(question.id)">
                <label class="radio-label"
                       :for="question.id">{{question.name}}</label>
            </div>
    
        </div>
    </div>
</template>


<script>
export default {
    name: 'QuestionGroupSingle',
    props: ['question'],
    data() {
        return {}
    },
    mounted: function () {
    },
    methods: {
        submitAnswer: function (id) {
            let otherId = this.question.items.find(function (idArray) {
                return idArray != id;
            })

            this.$emit('answer', [{ id: id, value: "present" }, { id: otherId, value: "absent" }]);
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
</style>