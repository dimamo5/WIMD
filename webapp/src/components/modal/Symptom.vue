<template>

    <div class="modal fade" id="create-modal" tabindex="-1" role="dialog" aria-labelledby="CreateSymptomModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Nova Oportunidade</h4>
                </div>
                <form v-on:submit.prevent="createSymptom">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="descricao">Descrição do sintoma</label>
                            <input type="text" class="form-control" id="descricao" v-model="" placeholder="Descrição">
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Confirmar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'CreateSymptomModal',
    data () {
      return {oportunidade:{descricao:''}
    },
    mounted: function(){
    },
    methods:{
      createSymptom: function(e){

        }
      }
    }
  }
</script>
