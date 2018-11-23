<template>
  <div class="settings">
    <h1>{{ msg }}</h1>
    new password
    <input v-model="new_password" placeholder="Your new password" type="password">
    <br />
    new password confirmation
    <input v-model="confirmed_new_password" placeholder="Confirm your new password" type="password">
    <br /><br />
    <router-link v-bind:to="'/dashboard'"><button>Change</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'settings',
  data () {
    return {
      msg: 'Welcome to the settings page!',
      new_password: null,
      confirmed_new_password: null
    }
  }
}
</script>

<style scoped>

</style>
