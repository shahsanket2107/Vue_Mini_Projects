<template>
  <div id="app">
      <!-- {{ msg }}
      <p> The Server Status is {{ status }} </p>
      <hr>
      <home-comp> </home-comp> -->
      <server-task></server-task>
  </div>
</template>

<script>

export default{
  name: 'app',
  data(){
      return{
          msg:'Welcome to Vue.js App',
          status:'Running'
      }
  }
}

</script>