<template>
  <div class="container">
    <app-header> </app-header>
    <hr>
    <router-view> </router-view>
    </div>
  </template>
  
  <script>
  import Header from './components/Header.vue';
  export default{
    components:{
      appHeader:Header
    }
  }
  </script>