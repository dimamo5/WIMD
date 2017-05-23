<template>
    <div class="modal fade"
         id="info-disease"
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
                    <h4 class="modal-title">{{upperTerm}}</h4>
                </div>
                <div class="modal-body">
                    {{upperDefinition}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'InfoDisease',
    props: ['info'],
    data() {
        return {
        }
    },
    computed: {
        upperTerm: function () {
            return _.upperFirst(this.info.term);
        },
        upperDefinition: function () {
            return _.upperFirst(this.info.definition);
        },
    }

}

</script>