<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <!-- content to be placed inside <body>…</body> -->
        <input type='radio' name='opt' id='oraspberry' class='menuopt oraspberry'>
        <input type='radio' name='opt' id='unsel' class='menuopt' checked>
        <nav class="menuCircle">
          <ul class='circle'>
            <li class='raspberry light slice'>
              <label for='oraspberry' class='circle' v-on:click="alerta">Sintomas</label>
            </li>
            <li class='unsel circle'><label for='unsel'></label></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data() {
      return { failed: false, Name: '', Username: '', Password: '', Email: '' }
    },
    methods: {
      alerta: function () {
              alert(this.$root.auth);
      }
    }
  }

</script>