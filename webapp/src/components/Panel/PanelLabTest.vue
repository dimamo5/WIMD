<template>
  <div class="panel panel-red">
    <div class="panel-heading dark-overlay">Lab Tests <i class="pull-right fa fa-plus options-header clicable"
         aria-hidden="true"
         data-toggle="modal"
         data-target="#create-lab-test"></i></div>
    <div class="panel-body">
      <ul class="todo-list">
        <li class="todo-list-item"
            v-for="labTest in labTests">
          <div class="date pull-left">
            {{formatDate(labTest.date)}}
          </div>
          <div class="lab-test-info">
            <span id="lab-test-name">{{labTest.name}}</span>
            <span for="lab-test-value">{{labTest.result}}</span>
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
  name: 'PanelLabTest',
  data() {
    return { labTests: [] }
  },
  mounted: function () {
    this.parseInfo();
  },
  methods: {
    parseInfo: function () {
      for (let labTest of this.$root.data.user.labtests) {
        this.$root.data.labtests.find((element) => {
          if (labTest.id == element.id) {
            labTest.result = _.find(element.results, ['id', labTest.value]).type;
            labTest.name = element.name;
            this.labTests.push(labTest);
          }
        })
      }
    },
    formatDate: function (date) {
      return new Date(date).toLocaleDateString('en-US');
    }
  }
}

</script>

