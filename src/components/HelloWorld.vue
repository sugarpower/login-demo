<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form id="loginform" v-on:submit.prevent="verify">
      user email
      <input v-model="email" placeholder="Your email here" type="email">
      <br />
      password
      <input v-model="password" placeholder="Your password" type="password">
      <br />
      <input type="submit" value="Login">
    </form>
    <br />
    <div>
      Not a user? Signup right now!
      <br />
      <router-link v-bind:to="'/signup'"><button>Signup</button></router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

var usersRef = firebase.database().ref('users')

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to the login page!',
      email: null,
      password: null
    }
  },
  methods: {
    verify: function () {
      // 'this' would be changed by firebase functions
      // for some reasons I don't know
      var vm = this
      var ifVerified = false
      usersRef.on('value', function (snapshot) {
        for (var userID in snapshot.val()) {
          let user = snapshot.val()[userID]
          if (user['email'] === vm.email &&
            user['password'] === vm.password) {
            ifVerified = true
            console.log('YESSSSSSSS')
            vm.$router.push({path: '/dashboard'})
          }
        }
        if (!ifVerified) {
          alert('Wrong email/password')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
