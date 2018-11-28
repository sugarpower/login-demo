<template>
  <div class="settings">
    <h1>{{ msg }}</h1>
    <form id="resetpasswordform" v-on:submit.prevent="resetPassword">
      new password
      <input v-model="new_password" placeholder="Your new password" type="password">
      <br />
      new password confirmation
      <input v-model="confirmed_new_password" placeholder="Confirm your new password" type="password">
      <br /><br />
      <input type="submit" value="Reset">
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'settings',
  data () {
    return {
      msg: 'Welcome to the settings page!',
      new_password: null,
      confirmed_new_password: null
    }
  },
  methods: {
    resetPassword: function () {
      var vm = this
      var currentUser = firebase.auth().currentUser
      currentUser.updatePassword(vm.new_password).then(function () {
        alert('Your password is successfully updated!')
        vm.$router.push({path: '/dashboard'})
      }).catch(function (error) {
        // An error happened.
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        alert(errorMessage)
        vm.$router.push({path: '/'})
      })
    }
  }
}
</script>

<style scoped>

</style>
