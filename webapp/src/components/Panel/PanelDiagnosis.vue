<template>
  <div class="panel panel-red">
    <div class="panel-heading dark-overlay">Diagnotics <router-link tag="i" to="/diagnose" class="pull-right fa fa-plus options-header clicable"
         aria-hidden="true"></router-link></div>
    <div class="panel-body">
      <ul class="todo-list">
        <li class="todo-list-item"
            v-for="diagnose in diagnosis">
          <div class="date pull-left">
            {{formatDate(diagnose.date)}}
          </div>
          <div class="symptom-info">
            <span id="symptom-name">{{diagnose.result}}</span>
          </div>
          <div class="options pull-right clicable">
            <i class="fa fa-trash-o"
               aria-hidden="true"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'PanelSymptom',
  data() {
    return { diagnosis: [] }
  },
  mounted: function () {
    //this.parseInfo();
  },
  methods: {
    parseInfo: function () {
      for (let symptom of this.$root.data.user.symptoms) {
        let sympt = _.find(this.$root.data.symptoms, ['id', symptom.id]);
        sympt.date = symptom.date;
        this.symptoms.push(sympt);
      }
    },
    formatDate: function (date) {
      return new Date(date).toLocaleDateString('en-US');
    }
  }
}

</script>

