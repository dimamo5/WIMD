<template>
  <div class="panel panel-red">
    <div class="panel-heading dark-overlay">Symptoms <i class="pull-right fa fa-plus options-header clicable"
         aria-hidden="true"
         data-toggle="modal"
         data-target="#create-symptom"></i></div>
    <div class="panel-body" style="max-height:700px;">
      <ul class="todo-list">
        <li class="todo-list-item"
            v-for="symptom in symptoms">
          <div class="date pull-left">
            {{formatDate(symptom.date)}}
          </div>
          <div class="symptom-info">
            <span id="symptom-name">{{symptom.name}}</span>
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
import { EventBus } from '../../BusEvent.js';


export default {
  name: 'PanelSymptom',
  data() {
    return { symptoms: [] }
  },
  mounted: function () {
    this.parseInfo();

    EventBus.$on('addSymptom', (symptom) => {
      symptom.date = Date.now();
      this.symptoms.push(symptom);
    })
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

