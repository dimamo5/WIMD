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
              <label for='oraspberry' class='circle' v-on:click="alerta">
                <i class="fa fa-plus pull-right clicable change-color" data-toggle="modal" data-target="#create-modal"
						aria-hidden="true"></i>
                Sintomas</label>
            </li>
            <li class='unsel circle'><label for='unsel'></label></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import SymptumsModal from './modal/Symptoms.vue'
  export default {
    name: 'Register',
    data() {
      return { symptoms: [] }
    },
    components: { SymptumsModal },
    mounted: function () {
      this.$http.get('http://localhost:3000/api/info/refresh')
        .then(() => {
          this.$http.get('http://localhost:3000/api/info/symptoms')
            .then((response) => {
              this.symptoms = response;
              alert(response);
            })
        })
    },
    methods: {
      alerta: function () {
      }
    }
  }

</script>