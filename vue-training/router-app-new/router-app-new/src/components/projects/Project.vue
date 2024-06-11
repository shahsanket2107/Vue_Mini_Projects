<template>
    <div>
        <h3> Projects Page </h3>
        <hr>
        <button @click="nagivateHome" class="btn btn-primary">
            Go to Home
        </button>
        <router-view></router-view>

    </div>
</template>
 
<script>
    export default {
        methods:{
            nagivateHome(){
                this.$router.push({name:'home'})
            }
        }
    }
</script>

<style scoped>

</style>