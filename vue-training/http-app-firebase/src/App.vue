<template>
  <user-survey @survey-submit="storeSurvey"></user-survey>
  <landing-page :results="savedSurveyResults"> </landing-page>
</template>

<script>
import UserSurvey from "./components/UserSurvey.vue";
import LandingPage from "./components/LandingPage.vue"
export default {
  components: {
    UserSurvey,
    LandingPage
  },
  // data() {
  //   return {
  //     savedSurveyResults: [],
  //   };
  // },
  // methods: {
  //   storeSurvey(surveyData) {
  //     const surveyResult = {
  //       name: surveyData.userName,
  //       rating: surveyData.rating,
  //       id: new Date().toISOString(),
  //     };
  //     this.savedSurveyResults.push(surveyResult);
  //     console.log(surveyResult);
  //   },
  // },
};
</script>
