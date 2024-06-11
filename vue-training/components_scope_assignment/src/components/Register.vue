<template>
    <div>
        <p> Register </p> 
        <hr>
        <formHelper>
        <template #header>
            <p>User Registration Form</p>
        </template>
        <template #title>
            <p>Register the New User</p>
        </template>
        <template #body>
        <form>
            UserName:<input type="text" placeholder="Enter Name"/>
            Password:<input type="password" placeholder="Enter password"/>
            Email:<input type="text" placeholder="Enter Email"/>
            <button class="btn btn-primary">Register</button>
        </form>
        </template>
        </formHelper>
    </div>
</template>

<script>

import FormHelper from './FormHelper.vue'

export default {
    components:{
        formHelper: FormHelper
    }
}
</script>

<style scoped>

</style>