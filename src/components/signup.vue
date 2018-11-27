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
      alert('You have successfully signed up!')
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>

</style>
