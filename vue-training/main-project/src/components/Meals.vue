<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
        <MealItems v-for="meal of meals" :key="meal.idMeal" :meal="meal" class="bg-blue shadow rounded">
        </MealItems>
    </div>
    
    <div v-if="!meals || meals.length === 0" class="flex justify-center text-gray-600 p-8">
        No Meals Found
    </div>
</template>

<script setup>

import MealItems from './MealItems.vue'
const { meals } = defineProps({
    meals: {
        required: true,
        type: Array,
    },
});

</script>

<style scoped></style>