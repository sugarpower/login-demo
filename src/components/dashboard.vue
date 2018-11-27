<template>
  <div class="dashboard">
    <h1>{{ msg }} {{firstname}} {{lastname}}</h1>
    <!--TODO: the logic of users-->
    <div>
      <router-link v-bind:to="'/settings'"><button>Settings</button></router-link>
    </div>
    <div>
      <router-link v-bind:to="'/'"><button>Logout</button></router-link>
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
    var vm = this
    var currentUser = firebase.auth().currentUser
    if (currentUser === null) {
      vm.$router.push({path: '/'})
      alert('You are not logged in!')
    } else {
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
  }
}
</script>

<style scoped>

</style>
