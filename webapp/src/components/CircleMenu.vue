<template>
    <div>
        <!-- content to be placed inside <body>…</body> -->
        <input type='radio' name='opt' id='oraspberry' class='menuopt oraspberry' data-toggle="modal" v-show="true" data-target="#create-modal">
        <input type='radio' name='opt' id='unsel' class='menuopt' checked>
        <nav class="menuCircle">
            <ul class='circle'>
                <li class='raspberry light slice'>
                    <label for='oraspberry' class='circle'>
                        <i class="fa fa-plus pull-right clicable change-color"
                           aria-hidden="true"></i> Sintomas
                    </label>
                </li>
                <li class='unsel circle'>
                    <label for='unsel'></label>
                </li>
            </ul>
        </nav>
        <create-modal></create-modal>
    </div>
</template>

<script>
    import CreateModal from './modal/Symptoms.vue'
    export default {
        name: 'CircleMenu',
        data() {
            return {}
        },
        components: { CreateModal }
    }

</script>