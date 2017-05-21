<template>
    <div class="modal fade"
         id="create-lab-test"
         tabindex="-1"
         role="dialog"
         aria-labelledby="CreateModal">
        <div class="modal-dialog"
             role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Insert Lab Tests </h4>
                </div>
                <div class="modal-body">
                    <p>Select the type of test and their result</p>
                    <v-select :value.sync="selected"
                              label="name"
                              :options="options"
                              :on-change="updateResults"
                              placeholder="Search Lab Tests"></v-select>
                    <button v-for="answer in answers"
                            v-on:click="addLabTest(answer.id)"
                            class="btn btn-primary">{{answer.type}}</button>
    
                    <div v-for="answer in answersSubmmited">{{answer.name}}{{answer.value}}<i class="fa fa-trash-o clicable"
                           v-on:click="removeLabTest(answer.id)"
                           aria-hidden="true"></i></div>
    
                </div>
                <div class="modal-footer">
                    <button type="submit"
                            v-on:click="submitLabTests()"
                            class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vSelect from "vue-select"
import _ from 'lodash'
export default {
    name: 'CreateLabTests',
    data() {
        return {
            selected: null,
            options: this.$root.data.labtests,
            answers: [],
            answersSubmmited: []
        }
    },
    components: { vSelect },
    mounted: function () {
        console.log(this.$root.data.labtests)
    },
    methods: {
        submitLabTests: function () {
            for(let answer of this.answersSubmmited){
               this.$http.post('http://localhost:3000/api/labtests',{medicalId:answer.id,value:answer.value}, { headers: { Authorization: this.$root.key } })
            }
        },
        updateResults: function (val) {
            this.selected = val;
            if (!val) {
                this.answers=null;
            }else{
                this.answers = val.results;
            }

            
        },
        addLabTest: function (answerid) {
            for (let answer of this.answersSubmmited) {
                if (answer.id == this.selected.id) {
                    return;
                }
            }

            this.answersSubmmited.push({ id: this.selected.id, name: this.selected.name, value: answerid })
        },
        removeLabTest: function (id) {
            for (var i = 0; i < this.answersSubmmited.length; i++) {
                if (this.answersSubmmited[i].id == id) {
                    this.answersSubmmited.splice(i, 1);
                }
            }
        }
    }
}

</script>