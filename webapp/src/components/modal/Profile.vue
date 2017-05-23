<template>
    <div class="modal fade"
         id="profile"
         tabindex="-1"
         role="dialog"
         aria-labelledby="CreateModal">
      <div class="modal-dialog"
           role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Profile </h4>
          </div>
          <div class="modal-body container-fluid">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="profile-name"
                       class="col-sm-2 control-label">Name</label>
                <div class="col-sm-10">
                  <input type="email"
                         class="form-control"
                         id="profile-name"
                         placeholder="Email"
                         v-model="name" disabled>
                </div>
              </div>
              <div class="form-group">
                <label for="profile-age"
                       class="col-sm-2 control-label">Age</label>
                <div class="col-sm-10">
                  <input type="email"
                         class="form-control"
                         id="profile-age"
                         placeholder="Email"
                         v-model="age" disabled>
                </div>
              </div>
              <div class="form-group">
                <label for="profile-gender"
                       class="col-sm-2 control-label">Gender</label>
                <div class="col-sm-10">
                  <input type="email"
                         class="form-control"
                         id="profile-gender"
                         placeholder="Email"
                         v-model="gender" disabled>
                </div>
              </div>
              <div class="form-group">
                <label for="profile-mail"
                       class="col-sm-2 control-label">E-Mail</label>
                <div class="col-sm-10">
                  <input type="email"
                         class="form-control"
                         id="profile-mail"
                         placeholder="Email"
                         v-model="mail" disabled>
                </div>
              </div>
            </form>
  
          </div>
        </div>
      </div>
    </div>
  </template>

<script>

export default {
  name: 'Profile',
  data() {
    return {
      name: this.$root.data.user.name,
      age: this.$root.data.user.age,
      gender: this.$root.data.user.gender,
      mail: this.$root.data.mail
    }
  }
}

</script>


