<template>
  <div class="dashboard">
    <h1>{{ msg }} {{firstname}} {{lastname}}</h1>
    <br />
    <div>
      <router-link v-bind:to="'/settings'"><button>Settings</button></router-link>
    </div>
    <br />
    <div>
      <button v-on:click="signout">Signout</button>
    </div>
  </div>

</template>

<script>
import firebase from 'firebase'
var usersRef = firebase.database().ref('users')

export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'Welcome,',
      firstname: 'Jane',
      lastname: 'Dow'
    }
  },
  created () {
    // change the content of the welcome message
    // to the name of the user
    var vm = this
    var currentUser = firebase.auth().currentUser
    // double check if the user is logged in
    // or errors may be there
    if (currentUser === null) {
      vm.$router.push({path: '/'})
      alert('You are not logged in!')
    } else {
      // take the email of the user as a reference
      // to retrieve the firstname and lastname of the user
      // in the database.
      // I've considered using the user.providerData but
      // it has limited fields so nope.
      var userEmail = currentUser.email
      usersRef.on('value', function (snapshot) {
        for (var userID in snapshot.val()) {
          let user = snapshot.val()[userID]
          if (user['email'] === userEmail) {
            vm.firstname = user['firstname']
            vm.lastname = user['lastname']
            break
          }
        }
      })
    }
  },

  methods: {
    signout: function () {
      var vm = this
      firebase.auth().signOut()
        .then(function () {
          // Sign-out successful.
          alert('You have successfully signed out!')
        })
        .catch(function (error) {
          // An error happened
          var errorCode = error.code
          var errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
          alert(errorMessage)
        })
      vm.$router.push({path: '/'})
    }
  }

}
</script>

<style scoped>

</style>
