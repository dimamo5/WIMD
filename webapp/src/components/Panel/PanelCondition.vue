<template>
  <div class="panel panel-red">
    <div class="panel-heading dark-overlay">Conditions <i class="pull-right fa fa-plus options-header clicable"
         aria-hidden="true"
         data-toggle="modal"
         data-target="#create-condition"></i></div>
    <div class="panel-body">
      <ul class="todo-list">
        <li class="todo-list-item"
            v-for="condition in conditions">
          <div class="date pull-left">
            {{formatDate(condition.date)}}
          </div>
          <div class="conditions-info">
            <span id="conditions-name">{{condition.name}}</span>
            <span for="conditions-value">{{condition.severity}}</span>
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
  name: 'PanelCondition',
  data() {
    return { conditions: [] }
  },
  mounted: function () {
    this.parseInfo();

    EventBus.$on('addCondition', (cond) => {
      cond.date = Date.now();
      this.conditions.push(cond);
    })

  },
  methods: {
    parseInfo: function () {
      for (let condition of this.$root.data.user.conditions) {
        let cond = _.find(this.$root.data.conditions, ['id', condition.id]);
        cond.date = condition.date;
        this.conditions.push(cond);
      }
    },
    formatDate: function (date) {
      return new Date(date).toLocaleDateString('en-US');
    }
  }
}

</script>

