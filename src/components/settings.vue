<template>
  <div class="settings">
    <h1>{{ msg }}</h1>
    <form id="resetpasswordform" class="container" v-on:submit.prevent="tryReset">
      <div class="row">
        <div class="form-group col-6">
          <label for="password">password</label>
          <input
            class="form-control"
            id="password"
            v-model="password"
            placeholder="Your password"
            :class="{'is-invalid': validPassword === false}"
            @change="validatePassword"
            type="password">
          <div class="invalid-feedback">Please input the correct password</div>
        </div>
        <div class="form-group col-6">
          <label for="confirmed_password">password confirmation</label>
          <input
            class="form-control"
            id="confirmed_password"
            v-model="confirmed_password"
            placeholder="Your password"
            :class="{'is-invalid': password_match === false}"
            @change="confirmPassword"
            type="password">
          <div class="invalid-feedback">Please input the correct password</div>
        </div>
      </div>
      <input type="submit" value="Reset">
    </form>
    <br />
    <router-link v-bind:to="'/dashboard'"><button>Dashboard</button></router-link>
  </div>
</template>

<script>
import firebase from 'firebase'
import validator from 'validator'

export default {
  name: 'settings',
  data () {
    return {
      msg: 'Welcome to the settings page!',
      password: null,
      confirmed_password: null,
      validPassword: null,
      password_match: null
    }
  },
  methods: {
    tryReset: function () {
      if (this.validPassword && this.password_match) {
        this.resetPassword()
      } else {
        alert('Your information is invalid!')
      }
    },
    resetPassword: function () {
      var vm = this
      var currentUser = firebase.auth().currentUser
      currentUser.updatePassword(vm.password).then(function () {
        alert('Your password is successfully updated!')
      }).catch(function (error) {
        // An error happened.
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        alert(errorMessage)
      })
      vm.$router.push({path: '/dashboard'})
    },
    validatePassword: function () {
      this.validPassword = validator.matches(this.password, /^(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    },
    confirmPassword: function () {
      if (this.validPassword && this.password === this.confirmed_password) {
        this.password_match = true
      } else {
        this.password_match = false
      }
    }
  }
}
</script>

<style scoped>

</style>
