<template>
  <div class="login">
    <h1>{{ msg }}</h1>

    <form id="loginform" class="container" v-on:submit.prevent="verify">
      <div class="row">
        <div class="form-group col-6">
          <label for="email">user email</label>
          <input
            class="form-control"
            id="email"
            v-model="email"
            placeholder="Your email"
            type="email">
        </div>
        <div class="form-group col-6">
          <label for="password">password</label>
          <input
            class="form-control"
            id="password"
            v-model="password"
            placeholder="Your password"
            type="password">
        </div>
      </div>
      <input type="submit" value="Sign in">
    </form>

    <br />
    <div>
      Not a user? <router-link v-bind:to="'/signup'">Sign up</router-link> right now!
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to the login page!',
      email: null,
      password: null
    }
  },

  methods: {
    verify: function () {
      var vm = this
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(function (user) {
          // signin successfully
          vm.$router.push({path: '/dashboard'})
        }).catch(function (error) {
        // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
          alert(errorMessage)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
