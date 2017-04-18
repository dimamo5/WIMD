<template>
    <div class="modal fade" id="create-modal" tabindex="-1" role="dialog" aria-labelledby="CreateModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Selecione os sintomas que tem neste momento: </h4>
                </div>
                <form v-on:submit.prevent="createSymptom">
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Pesquisa de sintomas: </label>
                            <select class="form-control selectpicker" data-live-search="true" v-model="selected" data-max-options="<10></10>" required>
                                <option v-for="symptom in symptoms.body"  data-tokens="symptom.name" value="symptom.name">
                                    {{ symptom.name }}
                                </option>
                            </select>
                            <div v-for="symptom in symptoms.body">
                                <option v-bind:value="symptom.name">
                                    {{ symptom.name }}
                                </option>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Confirmar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CreateModal',
        data() {
            return {
                symptoms: [], selected: ''
            }
        },
        mounted: function () {
            this.$http.get('http://localhost:3000/api/info/symptoms')
                .then((response) => {
                    this.symptoms = response;
                })

            this.$nextTick(() => {
                $('.selectpicker').selectpicker('refresh');
            })
        }
    }

</script>