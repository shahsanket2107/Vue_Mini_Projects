<template>
    <div>
      <p>Please select a User</p>
      <input type="text" v-model="searchQuery" placeholder="Search">
      <hr>
      <ul class="list-group">
        <router-link
          v-for="(user, index) in filteredUsers"
          :key="index"
          :to="`/user/${user.id}`"
          class="list-group-item"
          style="cursor: pointer"
        >
          {{ user.name }}
        </router-link>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        users: [
          { id: 1, name: 'Admin' },
          { id: 2, name: 'Employee' },
          { id: 3, name: 'Manager' },
          { id: 4, name: 'CEO' }
        ]
      };
    },
    computed: {
      filteredUsers() {
        return this.users.filter(user =>
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    }
  };
  </script>
  