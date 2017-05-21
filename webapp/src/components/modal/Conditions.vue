<template>
    <div class="modal fade"
         id="create-condition"
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
                    <h4 class="modal-title">Insert Your Existing Conditions </h4>
                </div>
                <div class="modal-body">
                    <v-select multiple
                              :value.sync="selected"
                              label="name"
                              :options="options"
                              placeholder="Search Conditions"></v-select>

                </div>
                <div class="modal-footer">
                    <button type="submit"
                            v-on:click="submitConditions()"
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
            selected: [],
            options: this.$root.data.conditions
        }
    },
    components: { vSelect },
    mounted: function () {
    },
    methods: {
        submitConditions: function () {
            for (let condition of this.selected) {
                this.$http.post('http://localhost:3000/api/conditions', { conditionId: condition.id}, { headers: { Authorization: this.$root.key } })
            }
        }
    }
}

</script>