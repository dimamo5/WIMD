<template>
    <div style="margin-top: 80px;">
        <p class="question-text">{{question.text}}</p>
        <div class="answers-group row">
            <div class="col-sm-2 col-md-offset-3">
                <div class="answer" v-on:click="submitAnswer('present')">
                    <i class="fa fa-check fa-3x"
                       aria-hidden="true"
                       style="color:green;"></i> Yes
                </div>
            </div>
            <div class="col-sm-2">
                <div class="answer" v-on:click="submitAnswer('absent')">
                    <i class="fa fa-times fa-3x"
                       aria-hidden="true"
                       style="color:red;"></i>
                    <span>No</span>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="answer" v-on:click="submitAnswer('unknown')">
                    <i class="fa fa-arrow-right fa-3x"
                       aria-hidden="true"
                       style="color:grey;"></i>
                    <span>Don't know</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'QuestionSingle',
    props:['question'],
    data() {
        return {}
    },
    mounted: function () {
    },
    methods: {
        submitAnswer:function(value){
            this.$emit('answer',[{id:'question.id',value:value}])
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

.answer:hover {
    background-color: #F9FAFB;
}

.answer {
    position: relative;
    display: inline-block;
    width: 110px;
    height: 110px;
    margin: 5px;
    background-color: #fff;
    border: 1px solid #dedede;
    border-radius: 4px;
    text-align: center;
    vertical-align: middle;
    outline: none;
    cursor: pointer;
    padding: 15px;
}

.answer i {
    width: 100%;
    margin-bottom: 10px;
}
</style>