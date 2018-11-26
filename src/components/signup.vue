<template>
  <div class="signup">
    <h1>{{ msg }}</h1>
    <!--noted that validation is not added on this page-->
    <!--TODO: validation-->
    <form id="signupform" v-on:submit.prevent="addUser">
      first name
      <input v-model="newUser.firstname" placeholder="Your first name" type="text">
      <br />
      last name
      <input v-model="newUser.lastname" placeholder="Your last name" type="text">
      <br />
      email
      <input v-model="newUser.email" placeholder="Your email" type="email">
      <br />
      phone number
      <input v-model="newUser.phone" placeholder="Your phone number" type="text">
      <br />
      password
      <input v-model="newUser.password" placeholder="Your password" type="password">
      <br />
      password confirmation
      <input v-model="newUser.confirmed_password" placeholder="Your password" type="password">
      <br />
      <input type="submit" value="Signup">
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyDJK9PrpiGlE4Q4FD75_hQOJmBPhrVaKE8',
  authDomain: 'login-demo-5fc1e.firebaseapp.com',
  databaseURL: 'https://login-demo-5fc1e.firebaseio.com',
  projectId: 'login-demo-5fc1e',
  storageBucket: 'login-demo-5fc1e.appspot.com',
  messagingSenderId: '800753801457'
}
firebase.initializeApp(config)

var usersRef = firebase.database().ref('users')

export default {
  name: 'signup',
  data () {
    return {
      newUser: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        confirmed_password: ''
      }
    }
  },
  firebase: {
    users: usersRef
  },
  methods: {
    addUser: function () {
      usersRef.push(this.newUser)
      this.newUser.firstname = ''
      this.newUser.lastname = ''
      this.newUser.email = ''
      this.newUser.phone = ''
      this.newUser.password = ''
      this.newUser.confirmed_password = ''
    }
  }
}
</script>

<style scoped>

</style>
