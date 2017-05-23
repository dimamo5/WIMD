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
                <div class="col-md-8">
                    <p>{{result.name}}</p>
                    <p>{{result.severity}}</p>
                </div>
                <div class="col-md-2 clicable"
                     v-on:click="getInfoDisease(result.name)"
                     data-target="#info-disease"
                     data-toggle="modal">
                    <i class="fa fa-info fa-3x"
                       aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div class="row col-md-12">
            <router-link tag="button"
                         to="/"
                         class="btn btn-default pull-right"
                         exact>Exit</router-link>
        </div>
        <InfoDisease :info="infoDisease" />
    </div>
</template>

<script>
import _ from 'lodash'
import InfoDisease from '../modal/InfoDisease.vue'

export default {
    name: 'DiagnoseReport',
    components: { InfoDisease },
    props: ['conditions'],
    data() {
        return { results: [], infoDisease: {} }
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
        },
        getInfoDisease: function (disease) {
            this.$http.get('http://localhost:3000/api/info/term?s=' + disease, { headers: { Authorization: this.$root.key } })
                .then((response) => {
                    console.log(response.body);
                    this.infoDisease = {};
                    
                    if(response.body.message){
                        this.infoDisease.term="No Information! Try Google :)";
                    }else{
                        this.infoDisease = response.body;
                    }
                })
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

.result-condition {
    padding: 12px 5px 10px 5px;
    border-top: 1px solid #EEEFEE;
}

.result-condition .probability {
    padding-top: 10px;
}
</style>