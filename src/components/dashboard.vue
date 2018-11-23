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
export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'Welcome,',
      // TODO: change them to the first&last name of the user
      firstname: 'Jane',
      lastname: 'Dow'
    }
  }
}
</script>

<style scoped>

</style>
