<template>
  <div class="component">
    <h3>User Edit :{{ userAge }}</h3>
    <h4> User City: {{ userCity }} </h4>
    <button @click="editAge"> Edit Age </button>
  </div>
</template>

<script>

import {eventBus} from '../main.js'
export default {
  props:['userAge','userCity'],
  methods:{
    editAge(){
      this.userAge = 30,
      // this.$emit('ageWasChanged',this.userAge)
      eventBus.$emit('ageWasUpdated',this.userAge)
    }
  },
  created(){
      eventBus.$on('changeCity',(userCity)=>{
        this.userCity=userCity
      })
    }
}

</script>
<style scoped>
div {
  background-color: lightgreen;
}
</style>
