<template>
    <div style="margin-top: 50px;">
        <p class="question-text">Results</p>
        <div class="answers-group row">
            <div class="row col-md-6 col-md-offset-3 result-condition"
                 v-for="result in results">
                <div class="col-md-2 probability">
                    <div class="progress">
                        <div class="progress-bar"
                             v-bind:style="result.style"
                             role="progressbar"
                             :aria-valuenow="result.probability"
                             aria-valuemin="0"
                             aria-valuemax="1">
                        </div>
                    </div>
                </div>
                <div>
                    <p>{{result.name}}</p>
                    <p>{{result.severity}}</p>
                </div>
            </div>
        </div>
    <div class="row col-md-12">
        <router-link tag="button" to="/" class="btn btn-default pull-right">Exit</router-link>
    </div>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    name: 'DiagnoseReport',
    props: ['conditions'],
    data() {
        return { results: [] }
    },
    mounted: function () {
        this.results = _.map(this.conditions, (condition) => {
            let conditionProbability = _.find(this.$root.data.conditions, ['id', condition.id]);
            conditionProbability.probability = condition.probability;

            conditionProbability.style = { width: condition.probability * 100 + '%', backgroundColor: this.getColor(condition.probability) }

            return conditionProbability;
        });
    },
    methods: {
        submitAnswer: function (id) {
        },
        getColor: function (probability) {
            if (probability < 0.33) {
                return 'green';
            }
            else if (probability > 0.33 && probability < 0.66) {
                return 'yellow';
            }
            else if (probability > 0.66) {
                return 'red';
            }
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
button {
      height: 40px;
      color: white;
      background-color: #BF0000;
}
.result-condition{
    padding: 12px 5px 10px 5px;
    border-top: 1px solid #EEEFEE;
}
.result-condition .probability{
    padding-top: 10px;
}

</style>