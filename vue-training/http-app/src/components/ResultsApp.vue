<template>
    <li>
      <p>
        <span class="highlight">{{ name }}</span>: rated the shopping experience as - 
        <span :class="ratingClass">{{ rating }}</span>
      </p>
    </li>
  </template>
  
  <script>
  export default {
      props:['name','rating'],
      computed:{
          ratingClass(){
              return 'highlight rating--'+this.rating
          }
      }
  }
  </script>
  
  <style scoped>
  li{
      margin: 1em 0;
      border: 1px solid salmon;
      padding: 1rem;
  }
  .highlight{
      font-weight: bold;
  }
  .rating--poor{
      color: red;
  }
  .rating--average{
      color: darkblue;
  }
  .rating--great{
      color:green;
  }
  </style>
  