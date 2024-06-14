<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Random Meals
    </h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import Meals from "../components/Meals.vue";
import { onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const keyword = ref("");
const route = useRoute();

const meals = computed(() => store.state.dispMeal);

function displayMeal() {

    store.dispatch("displayMeals", keyword.value);

}
onMounted(() => {
  displayMeal();
});
</script>

<style scoped></style>