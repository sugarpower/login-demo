<template>
  <div class="signup">
    <h1>{{ msg }}</h1>
    <form id="signupform" class="container" v-on:submit.prevent="submit">

      <div class="row">
        <div class="form-group col-6">
          <label for="firstname">first name</label>
          <input
            class="form-control"
            id="firstname"
            :class="{'is-invalid': validFirstName === false}"
            v-model="newUser.firstname"
            placeholder="Your first name"
            @change="validateFirstName"
            type="text">
          <div class="invalid-feedback">Your first name is invalid</div>
        </div>
        <div class="form-group col-6">
          <label for="lastname">last name</label>
          <input
            class="form-control"
            id="lastname"
            :class="{'is-invalid': validLastName === false}"
            v-model="newUser.lastname"
            placeholder="Your last name"
            @change="validateLastName"
            type="text">
          <div class="invalid-feedback">Your last name is invalid</div>
        </div>
      </div>

      <div class="row">
        <div class="form-group col-6">
          <label for="email">email</label>
          <input
            class="form-control"
            id="email"
            :class="{'is-invalid': validEmail === false}"
            v-model="newUser.email"
            placeholder="Your email"
            @change="validateEmail"
            type="email">
          <div class="invalid-feedback">Your email is invalid</div>
        </div>
        <div class="form-group col-6">
          <label for="phone">phone</label>
          <input
            class="form-control"
            id="phone"
            :class="{'is-invalid': validPhone === false}"
            v-model="newUser.phone"
            placeholder="Your phone number"
            @change="validatePhone"
            type="text">
          <div class="invalid-feedback">Your mobile phone number is invalid</div>
        </div>
      </div>

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
      <input type="submit" value="Signup">
    </form>

    <div>
      <br />
      Already have an account? Try
      <router-link v-bind:to="'/'">Sign in</router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import validator from 'validator'

var usersRef = firebase.database().ref('users')

export default {
  name: 'signup',
  data () {
    return {
      msg: 'Welcome to the Signup page!',
      newUser: {
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
      },
      password: '',
      confirmed_password: '',
      validFirstName: null,
      validLastName: null,
      validEmail: null,
      validPhone: null,
      validPassword: null,
      password_match: null
    }
  },
  firebase: {
    users: usersRef
  },
  methods: {
    submit: function () {
      if (this.validFirstName &&
          this.validLastName &&
          this.validEmail &&
          this.validPhone &&
          this.validPassword &&
          this.password_match) {
        this.addUser()
      } else {
        alert('Your information is invalid, please try again!')
      }
    },
    addUser: function () {
      var vm = this
      firebase.auth().createUserWithEmailAndPassword(this.newUser.email, this.password).then(function (user) {
        usersRef.push(vm.newUser)
        vm.newUser.firstname = ''
        vm.newUser.lastname = ''
        vm.newUser.email = ''
        vm.newUser.phone = ''
        vm.password = ''
        vm.confirmed_password = ''
        alert('You have successfully signed up!')
        vm.$router.push({ path: '/dashboard' })
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        alert(errorMessage)
      })
    },
    validateFirstName: function () {
      this.validFirstName = validator.isAlpha(this.newUser.firstname)
    },
    validateLastName: function () {
      this.validLastName = validator.isAlpha(this.newUser.lastname)
    },
    validateEmail: function () {
      this.validEmail = validator.isEmail(this.newUser.email)
    },
    validatePhone: function () {
      // this one only checks for mobile number so no
      // this.validPhone = validator.isMobilePhone(this.newUser.phone, 'en-AU')
      this.validPhone = validator.matches(this.newUser.phone, /^0[1-8][\d]{8}$/)
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
  .row{  text-align:center;}

</style>
