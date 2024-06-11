<template>
  <div class="component">
    <h3>User Details : {{ switchName() }}</h3>
    <h4> User Age: {{ userAge }} </h4>
    <h5> User City: {{ userCity }} </h5>
    <button @click="resetName"> Reset name </button>
    <button @click="changeCity"> Change City </button>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default{
    props:{
      myName: String,
      userAge: Number,
      userCity: String
    },
    methods:{
        switchName(){
            return this.myName.split('').reverse().join('')
        },
        resetName(){
          this.myName = 'Charles',
          this.$emit('nameWasReset',this.myName)
        },
        changeCity(){
          this.userCity = 'NYC',
          eventBus.$emit('changeCity',this.userCity)
        }
    },
    created(){
      eventBus.$on('ageWasUpdated',(userAge)=>{
        this.userAge=userAge
      })
    }
}
</script>
<style scoped>
div {
  background-color: lightcoral;
}
</style>
