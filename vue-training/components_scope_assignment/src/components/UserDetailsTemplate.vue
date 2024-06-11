<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <slot name="name"></slot>
        </div>

        <div class="card-body">
          <slot name="age"></slot> 
          <slot name="city"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped></style>