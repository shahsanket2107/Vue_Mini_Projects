<template>
  <div class="task">
    <h3> {{ task.title }}</h3>
    <div class="icons">
      <i @click="taskStore.deleteTask(task.id)" class="material-icons">delete</i>
      <i @click="taskStore.favTask(task.id)" class="material-icons" :class="{active:task.isFav}">favorite</i>
    </div>
  </div>
</template>

<script>
import { usetaskStore } from '../stores/taskStore'

export default {
  props: ["task"],
  setup() {
    const taskStore = usetaskStore();
    return { taskStore };
  },
};
</script>