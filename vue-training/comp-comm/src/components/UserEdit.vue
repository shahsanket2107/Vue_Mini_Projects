UserEdit
<template>
    <div class="component">
      <h3>User Edit Age is : {{ age }}</h3>
    </div>
  </template>

  <script>
  export default{
      props: ['age']
  }
</script>

  <style scoped>
  div {
    background-color: lightgreen;
  }
  </style>