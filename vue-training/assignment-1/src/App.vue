<template>
  <div>
    <header> <h1> User Details </h1> </header>
    <ul>
      <user-contacts></user-contacts>
      <user-contacts></user-contacts>
    </ul>
  </div>
</template>

<script>
  import UserContacts from './components/UserContacts.vue'

  export default {
    components:{
      'user-contacts': UserContacts
    }
  }
</script>

<style scoped>
body{
  margin:0;
}
header{
  box-shadow: 0 2px 8px blue;
}
#app ul{
  margin:0;
  padding:0;
  list-style: disc;
}
</style>