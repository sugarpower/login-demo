<template>
  <div class="signup">
    <h1>{{ msg }}</h1>
    <!--noted that validation is not added on this page-->
    <!--TODO: validation-->
    <div>
      first name
      <input v-model="firstname" placeholder="Your first name">
      <br />
      last name
      <input v-model="lastname" placeholder="Your last name">
      <br />
      email
      <input v-model="email" placeholder="Your email">
      <br />
      phone number
      <input v-model="phone" placeholder="Your phone number">
      <br />
      password
      <input v-model="password" placeholder="Your password" type="password">
      <br />
      password confirmation
      <input v-model="confirmed_password" placeholder="Your password" type="password">
      <br />

      <!--just a demo button-->
      <!--TODO: logic will be set up later-->
      <router-link v-bind:to="'/'"><button>Signup</button></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'signup'
  }
</script>

<style scoped>

</style>
