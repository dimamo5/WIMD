<template>
    <div class="modal fade"
         id="create-symptom"
         tabindex="-1"
         role="dialog"
         aria-labelledby="CreateModal">
        <div class="modal-dialog modal-lg"
             role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Insert Your Existing Symptoms </h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="row col-md-12">
                                <v-select multiple
                                          :value.sync="selected"
                                          label="name"
                                          :options="options"
                                          placeholder="Search Symptoms"></v-select>
                            </div>
                            <div class="row col-md-12">
                                <Datepicker v-model="date" />
                            </div>
                            <div class="row col-md-12"
                                 v-show="bodyPartSelected">
                                <h3>Symptoms related to: {{bodyPartSelected}}</h3>
                                <ul class="list-symptoms">
                                    <li class="list-symptoms-item clicable"
                                        v-for="symptom in symptomsBodyPartSelected"
                                        v-on:click="pickSymptom(symptom)">
                                        {{symptom.name}}
                                    </li>
                                </ul>
                            </div>
                        </div>
    
                        <div class="col-md-4">
                            <SymptomPicker v-on:selectBodyPart="updateSymptoms" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit"
                            v-on:click="submitSymptoms()"
                            class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vSelect from "vue-select"
import SymptomPicker from '../SymptomPicker.vue'
import SymptomsList from '../../assets/symptoms_bodypart.json'
import Datepicker from 'vuejs-datepicker';
import _ from 'lodash'
import { EventBus } from '../../BusEvent.js';

export default {
    name: 'CreateSymptoms',
    data() {
        return {
            selected: [],
            options: this.$root.data.symptoms,
            symptomsBodyPartSelected: [],
            bodyPartSelected: '',
            date: null
        }
    },
    components: { vSelect, SymptomPicker, Datepicker },
    mounted: function () {
    },
    methods: {
        submitSymptoms: function () {
            for (let symptom of this.selected) {
                this.$http.post('http://localhost:3000/api/symptoms', { symptomId: symptom.id, date: this.date }, { headers: { Authorization: this.$root.key } })
                
                EventBus.$emit('addSymptom', symptom);
            }
            $('#create-symptom').modal('hide');

        },
        updateSymptoms: function (bodyPart) {
            this.bodyPartSelected = bodyPart;
            this.symptomsBodyPartSelected = [];
            SymptomsList[bodyPart].map((element) => {
                this.symptomsBodyPartSelected.push(_.find(this.$root.data.symptoms, ['id', element]));
            })
        },
        pickSymptom: function (symptom) {
            if (_.findIndex(this.selected, symptom) == -1)
                this.selected.push(symptom);
        }
    }
}

</script>


<style>
.list-symptoms {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 184px;
    overflow-x: auto;
}

.list-symptoms-item:hover {
    background-color: #F3F5F7;
}
</style>