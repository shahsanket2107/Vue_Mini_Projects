<template>
    <section>
        <base-card>
    <h2> User Shopping Feedback </h2>
    <div>
        <base-button> Load all the feedbacks </base-button>
    </div>

    <ul>
        <survey-results v-for="result in results"
        :key="result.id"
        :name="result.name"
        :rating="result.rating">
    </survey-results>

    </ul>

    </base-card>
    </section>
</template>

<script>

import ResultsApp from './ResultsApp.vue';

    export default {
        props:['results'],
        components:{
            surveyResults: ResultsApp,
        }
    }
</script>

<style scoped>

</style>