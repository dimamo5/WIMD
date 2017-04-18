<template>
    <div class="modal fade" id="create-modal" tabindex="-1" role="dialog" aria-labelledby="CreateModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">What are you feeling ? </h4>
                </div>
                <form v-on:submit.prevent="submitSymptoms">
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Select a group of symptoms from the list of symptoms: </label>
                            <multi-select :options="options" :selected-options="items" placeholder="select item" @select="onSelect">
                            </multi-select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    import { MultiSelect } from 'vue-search-select'
    export default {
        name: 'CreateModal',
        data() {
            return {
                symptoms: [], selected: '', options: [], selected: false,
                searchText: '', // If value is falsy, reset searchText & searchItem
                items: [],
                lastSelectItem: {}
            }
        },
        mounted: function () {
            this.$http.get('http://localhost:3000/api/info/symptoms')
                .then((response) => {
                    this.symptoms = response;
                    for (var symptom of response.body) {
                        this.options.push({ value: symptom.id, text: symptom.name });
                    }
                    this.$nextTick(() => {
                        $('.selectpicker').selectpicker('refresh');
                    })
                })


        },
        methods: {
            onSelect(items, lastSelectItem) {
                this.items = items
                this.lastSelectItem = lastSelectItem
            },
            // deselect option
            reset() {
                this.items = [] // reset
            },
            // select option from parent component
            selectOption() {
                this.items = _.unionWith(this.items, [this.options[0]], _.isEqual)
            },
            submitSymptoms: function () {
                console.log(this.$root.key);
                for (var symptom of this.items) {
                    this.$http.post('http://localhost:3000/api/symptoms', {body:{symptomId: symptom.value}}, {header: { Authorization: this.$root.key}})
                    .then((response) => {
                        alert('submited with success')
                    })
                }

            }
        },
        components: {
            MultiSelect
        }
    }

</script>