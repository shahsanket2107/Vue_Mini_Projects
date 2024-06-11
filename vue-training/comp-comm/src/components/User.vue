<template>
    <div>
      <h1>The User App</h1>
      <div class="row">
        <div class="col-xs-12 col-sm-6">
            <p> Username: {{ username }}</p>
            <button @click="changeName">Change Name</button>
          <userdetails :name="username"></userdetails>
        </div>
  
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <p> Age: {{ age }}</p>
            <button @click="changeAge">Change Age</button>
            <useredit :age="age"></useredit>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import UserDetails from "./UserDetails.vue";
  import UserEdit from "./UserEdit.vue";
  export default {
    data(){
        return{
            username:'admin',
            age:'25'
        }
    },
    methods:{
        changeName(){
            this.username='manager'
        },
        changeAge(){
            this.age=30
        }
    },
    components: {
      userdetails: UserDetails,
      useredit: UserEdit,
    },
  };
  </script>
  
  <style scoped>
  div {
    background-color: lightblue;
  }
  </style>