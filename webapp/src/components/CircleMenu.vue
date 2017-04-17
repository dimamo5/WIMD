<template>
    <div>
        <!-- content to be placed inside <body>…</body> -->
        <input type='radio'
               name='opt'
               id='oraspberry'
               class='menuopt oraspberry'>
        <input type='radio'
               name='opt'
               id='unsel'
               class='menuopt'
               checked>
        <nav class="menuCircle">
            <ul class='circle'>
                <li class='raspberry light slice'>
                    <label for='oraspberry'
                           class='circle'>
                        <i class="fa fa-plus pull-right clicable change-color"
                           data-toggle="modal"
                           data-target="#create-modal"
                           aria-hidden="true"></i> Sintomas
                    </label>
                </li>
                <li class='unsel circle'>
                    <label for='unsel'></label>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'CircleMenu',
    data() {
        return {}
    }
}
</script>