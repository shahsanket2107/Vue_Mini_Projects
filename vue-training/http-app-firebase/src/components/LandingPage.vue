<template>
  <section>
      <base-card>
  <h2> User Shopping Feedback </h2>
  <div>
      <base-button> Load all the feedbacks </base-button>
  </div>
  <p v-if="isLoading">Loading...</p>
  <p v-else-if="!isLoading && (!results||results.length===0)">
      No user feedback found
  </p>

  <ul v-else>
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
import ResultsApp from "./ResultsApp.vue";
export default {
data() {
  return {
    results: [],
    isLoading:false,
    //error:null
  };
},
methods: {
  loadFeedbacks() {
      this.loading=true;
      this.error=null;
    fetch('https://capone-vue-training-default-rtdb.firebaseio.com/survey.json')
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        this.loading=false
        for(const id in data){
          this.results.push({
            id:id,
            name:data[id].userName,
            rating:data[id].rating
          })
        }
      });
  },
},
mounted() {
  this.loadFeedbacks();
},
components: {
  surveyResults: ResultsApp,
},
};
</script>

<style scoped>

</style>