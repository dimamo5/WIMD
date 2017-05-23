<template>
  <div class="panel panel-red">
    <div class="panel-heading dark-overlay">Diagnotics
      <router-link tag="i"
                   to="/diagnose"
                   class="pull-right fa fa-plus options-header clicable"
                   aria-hidden="true"></router-link>
    </div>
    <div class="panel-body" style="max-height:700px;">
      <ul class="todo-list">
        <li class="todo-list-item"
            v-for="diagnose in diagnosis">
          <div class="date pull-left">
            {{formatDate(diagnose.date)}}
          </div>
          <div class="symptom-info">
            <span id="symptom-name">{{diagnose.name}}</span>
            <span for="conditions-value">{{diagnose.severity}}</span>
            <span for="conditions-value">{{diagnose.probability}}</span>
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
    this.parseInfo();
    
  },
  methods: {
    parseInfo: function () {
      for (let diagnose of this.$root.data.user.diagnosis) {
        let diag = _.find(this.$root.data.conditions, ['id', diagnose.conditions[0].id]);
        diag.date = diagnose.date;
        diag.probability = Math.round(diagnose.conditions[0].probability*100)+ '%';
        this.diagnosis.push(diag);
      }
    },
    formatDate: function (date) {
      return new Date(date).toLocaleDateString('en-US');
    }
  }
}

</script>

