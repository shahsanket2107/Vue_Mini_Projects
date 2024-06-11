<template>
  <div>
    <!-- <login></login>
    <register></register>
    <user_details></user_details> -->
    <button @click="selectedComponent='login'"> Login </button>
    <button @click="selectedComponent='register'"> Register </button>
    <button @click="selectedComponent='user_details'"> User Details </button>
    <button @click="selectedComponent='user_form'"> User Form </button>
    <div>
      <!-- <h1> Hello {{ selectedComponent }}</h1> -->
      <component :is="selectedComponent"> </component>
    </div>


  </div>
</template>

<script>

import Login from './components/Login.vue'
import Register from './components/Register.vue'
import UserDetails from './components/UserDetails.vue'
import UserForm from './components/UserForm.vue'

  export default {
    components:{
      login: Login,
      register: Register,
      user_details: UserDetails,
      user_form: UserForm
    },
    data(){
      return{
        selectedComponent: 'login'
      }
    }
  }
</script>

<style scoped>

</style>