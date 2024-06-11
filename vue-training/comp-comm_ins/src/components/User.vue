<template>
  <div>
    <h1>The User App</h1>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <p>UserName: {{ username }}</p>
        <button @click="changeName">Change Name</button>
        <userdetails :userCity="city" :userAge="age" @ageWasChanged="userAge=$event" :myName="username" @nameWasReset="username=$event"></userdetails>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-6">
            <p>User Age : {{ age }}</p>
            <!-- <button @click="changeAge">Change Age</button> -->
          <useredit :userCity="city" :userAge="age" @ageWasChanged="age=$event"></useredit>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetails from "./UserDetails.vue";
import UserEdit from "./UserEdit.vue";
export default {
    data() {
        return {
            username:'admin',
            age:25,
            city: 'Boston'
        }
    },
    methods: {
        changeName(){
            this.username='manager'
        },
        // changeAge(){
        //     this.age=30
        // }
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
