<template>
  <div class="signup">
    <h1>{{ msg }}</h1>
    <!--noted that validation is not added on this page-->
    <!--TODO: validation-->
    <form id="signupform">
      first name
      <input v-model="firstname" placeholder="Your first name" type="text">
      <br />
      last name
      <input v-model="lastname" placeholder="Your last name" type="text">
      <br />
      email
      <input v-model="email" placeholder="Your email" type="email">
      <br />
      phone number
      <input v-model="phone" placeholder="Your phone number" type="text">
      <br />
      password
      <input v-model="password" placeholder="Your password" type="password">
      <br />
      password confirmation
      <input v-model="confirmed_password" placeholder="Your password" type="password">
      <br />
      <input type="submit" value="Signup">
    </form>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      msg: 'Welcome to the Signup page!',
      firstname: null,
      lastname: null,
      email: null,
      phone: null,
      password: null,
      confirmed_password: null
    }
  }
}
</script>

<style scoped>

</style>
