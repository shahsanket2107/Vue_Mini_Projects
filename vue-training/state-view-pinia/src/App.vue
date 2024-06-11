<template>
  <div>
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="" srcset="" />
      <h1>My Personal Task Manager for {{ taskStore.name }}</h1>
    </header>
    <div class="user-form">
      <UserForm></UserForm>
    </div>

    <nav class="filter">
      <button @click="filter = 'all'">Show All Tasks</button>
      <button @click="filter = 'favs'">Show Fav Tasks</button>
    </nav>

    <div v-if="taskStore.isLoading">
      <center> <h3> Loading Data!!! </h3> </center>
    </div>

    <div v-else>
      <div class="task-list" v-if="filter === 'all'">
        <p>My Pending Tasks: {{ taskStore.totalTaskCount }}</p>
        <div v-for="task in taskStore.mytasks" v-bind:key="task.title">
          <TaskDetails :task="task" />
        </div>
      </div>

      <div class="task-list" v-if="filter === 'favs'">
        <p>My favorite Tasks: {{ taskStore.favCount }}</p>
        <div v-for="task in taskStore.favs" v-bind:key="task.title">
          <TaskDetails :task="task" />
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { ref } from "vue";
import { usetaskStore } from "./stores/taskStore";
import TaskDetails from "./components/TaskDetails.vue";
import UserForm from "./components/UserForm.vue"

export default {
  components: {
    TaskDetails,
    UserForm
  },
  setup() {
    const taskStore = usetaskStore();
    taskStore.loadTasks()
    const filter = ref("all");
    return { taskStore, filter };
  },
};
</script>

<style scoped></style>
