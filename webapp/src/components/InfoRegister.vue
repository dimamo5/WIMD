<template>
      <div class="container">
            <div class="form">
                  <div class="form-content container">
                        <div class="row">
                              <div class="col-md-12">Insert Name</div>
                        </div>
                         <div class="row">
                              <div class="col-md-12">Input box</div>
                        </div>
                         <div class="row">
                              <div class="col-md-12">Gender</div>
                        </div>
                         <div class="row">
                              <div class="col-md-12">Insert Images</div>
                        </div>
                         <div class="row">
                              <div class="col-md-12">Age</div>
                        </div>
                         <div class="row">
                              <div class="col-md-12">Insert rule</div>
                        </div>
                  </div>
                  <div class="form-footer">
      
                        <button class="btn btn-default">Next</button>
                  </div>
            </div>
      </div>
      <!-- /container -->
</template>

<script>
export default {
      name: 'InfoRegister',
      data() {
            return {}
      },
      mounted: function () {

      },
      methods: {

      }
}

</script>

<style scoped>
.form-footer {
      background-color: #fff;
      z-index: 100;
      padding: 0;
      border-top: 1px solid #dedede;
      min-height: 80px;
      padding: 20px 30px;
}

.form-content {
      min-height: 500px;
      padding: 35px;
}

.form {
      background-color: white;
}

button {
      float: right;
      height: 40px;
      color: white;
      background-color: #BF0000;
}
</style>