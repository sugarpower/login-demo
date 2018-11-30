<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
// configeration and initialzation of firebase
var config = {
  apiKey: 'AIzaSyDJK9PrpiGlE4Q4FD75_hQOJmBPhrVaKE8',
  authDomain: 'login-demo-5fc1e.firebaseapp.com',
  databaseURL: 'https://login-demo-5fc1e.firebaseio.com',
  projectId: 'login-demo-5fc1e',
  storageBucket: 'login-demo-5fc1e.appspot.com',
  messagingSenderId: '800753801457'
}
firebase.initializeApp(config)
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
