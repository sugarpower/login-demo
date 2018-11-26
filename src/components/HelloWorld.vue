<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      user email
      <input v-model="email" placeholder="Your email here">
      <br />
      password
      <input v-model="password" placeholder="Your password" type="password">
      <br />
      <!--just a demo button-->
      <!--TODO: router will be set up later-->
      <router-link v-bind:to="'/dashboard'"><button>Login</button></router-link>
    </div>
    <br />
    <div>
      Not a user? Signup right now!
      <br />
      <router-link v-bind:to="'/signup'"><button>Signup</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to the login page!',
      email: null,
      password: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
