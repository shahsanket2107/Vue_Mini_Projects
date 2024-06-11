<template>
    <div>
        <form @submit.prevent="addTask">
            <input type="text" placeholder="Enter the task" v-model="myNewTask">
            <button>Add Task</button>
        </form>
    </div>
</template>

<script>
import { usetaskStore } from '../stores/taskStore'
import { ref } from "vue";

export default {
    setup() {
        const taskStore = usetaskStore();
        const myNewTask = ref('')

        const addTask = () => {
            if (myNewTask.value.length > 0) {
                taskStore.addUserTasks({
                    title: myNewTask.value,
                    isFav: false,
                    id: Math.floor(Math.random() * 1000)
                });
                myNewTask.value = ''
            }
        };
        return { addTask, myNewTask }
    },
};
</script>

<style scoped></style>